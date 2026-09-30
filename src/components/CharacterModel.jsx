import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { clone } from 'three/addons/utils/SkeletonUtils.js';
import * as THREE from 'three';
import { portfolioData } from '../data/portfolio';

export function ActualCharacterModel({
  modelPath,
  mouse,
  rotationDelta,
  isMobile,
  reducedMotion
}) {
  const groupRef = useRef(null);

  const config = portfolioData.character3d;
  const path = modelPath || config.modelPath;

  const gltf = useGLTF(path);

  // Independent skeleton cloned once per gltf instance
  const scene = useMemo(() => {
    return clone(gltf.scene);
  }, [gltf.scene]);

  // Normalize model bounds and capture pristine bone rest poses
  const modelData = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();

    box.getSize(size);
    box.getCenter(center);

    const targetHeight = 1.5;
    const normalizedScale =
      size.y > 0 ? targetHeight / size.y : 1;

    const centerOffset = [
      -center.x,
      -box.min.y,
      -center.z
    ];

    const bones = {
      head: null,
      neck: null,
      spine2: null
    };

    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = false;
        obj.receiveShadow = false;
      }

      if (!obj.isBone) return;

      const name = obj.name
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '');

      if (name.endsWith('head')) {
        bones.head = obj;
      } else if (name.endsWith('neck')) {
        bones.neck = obj;
      } else if (name.endsWith('spine2')) {
        bones.spine2 = obj;
      }
    });

    const rest = {};

    Object.keys(bones).forEach((key) => {
      rest[key] = bones[key]
        ? bones[key].rotation.clone()
        : new THREE.Euler();
    });

    return {
      normalizedScale,
      centerOffset,
      bones,
      rest
    };
  }, [scene]);

  const {
    normalizedScale,
    centerOffset,
    bones,
    rest
  } = modelData;

  // Frame-by-frame rotation tracking
  const currentRotation = useRef({
    x: 0,
    y: 0,
    z: 0
  });

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group) return;

    const baseRotation = config.rotation || [0, 0, 0];

    const basePosition = isMobile
      ? (config.mobilePosition || [0, 0, 0])
      : (config.position || [0, 0, 0]);

    // Frame-rate-independent smoothing
    const smooth = 1 - Math.exp(-10 * delta);
    const headSmooth = 1 - Math.exp(-13 * delta);

    const mx = THREE.MathUtils.clamp(
      mouse?.current?.x ?? 0,
      -1,
      1
    );

    const my = THREE.MathUtils.clamp(
      mouse?.current?.y ?? 0,
      -1,
      1
    );

    // Mouse-controlled head and upper body
    if (!reducedMotion) {
      const headTargetY = mx * 0.48;
      const headTargetX = -my * 0.23;

      const neckTargetY = mx * 0.16;
      const neckTargetX = -my * 0.09;

      const spineTargetY = mx * 0.055;

      if (bones.head) {
        bones.head.rotation.y = THREE.MathUtils.lerp(
          bones.head.rotation.y,
          rest.head.y + headTargetY,
          headSmooth
        );

        bones.head.rotation.x = THREE.MathUtils.lerp(
          bones.head.rotation.x,
          rest.head.x + headTargetX,
          headSmooth
        );
      }

      if (bones.neck) {
        bones.neck.rotation.y = THREE.MathUtils.lerp(
          bones.neck.rotation.y,
          rest.neck.y + neckTargetY,
          headSmooth
        );

        bones.neck.rotation.x = THREE.MathUtils.lerp(
          bones.neck.rotation.x,
          rest.neck.x + neckTargetX,
          headSmooth
        );
      }

      if (bones.spine2) {
        bones.spine2.rotation.y = THREE.MathUtils.lerp(
          bones.spine2.rotation.y,
          rest.spine2.y + spineTargetY,
          headSmooth
        );
      }
    } else {
      // Restore natural bone pose for reduced motion
      if (bones.head) {
        bones.head.rotation.copy(rest.head);
      }

      if (bones.neck) {
        bones.neck.rotation.copy(rest.neck);
      }

      if (bones.spine2) {
        bones.spine2.rotation.copy(rest.spine2);
      }
    }

    // Full drag rotation, with only a tiny mouse-follow response
    const dragY = rotationDelta?.current ?? 0;

    const mouseTurn = reducedMotion ? 0 : mx * 0.045;

    const targetX = baseRotation[0] || 0;
    const targetY =
      (baseRotation[1] || 0) + dragY + mouseTurn;
    const targetZ = baseRotation[2] || 0;

    currentRotation.current.x = THREE.MathUtils.lerp(
      currentRotation.current.x,
      targetX,
      smooth
    );

    currentRotation.current.y = THREE.MathUtils.lerp(
      currentRotation.current.y,
      targetY,
      smooth
    );

    currentRotation.current.z = THREE.MathUtils.lerp(
      currentRotation.current.z,
      targetZ,
      smooth
    );

    group.rotation.set(
      currentRotation.current.x,
      currentRotation.current.y,
      currentRotation.current.z
    );

    // Fixed position
    group.position.set(
      basePosition[0] || 0,
      basePosition[1] || 0,
      basePosition[2] || 0
    );
  });

  const visualScale = isMobile ? 0.98 : 1.05;
  const finalScale = normalizedScale * visualScale;

  const currentPos = isMobile
    ? (config.mobilePosition || [0, 0, 0])
    : (config.position || [0, 0, 0]);

  return (
    <group
      ref={groupRef}
      position={currentPos}
      scale={[finalScale, finalScale, finalScale]}
      rotation={config.rotation || [0, 0, 0]}
    >
      <primitive
        object={scene}
        position={centerOffset}
      />
    </group>
  );
}

class ModelErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error) {
    console.error('3D Character error:', error);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.modelPath !== this.props.modelPath && this.state.hasError) {
      this.setState({ hasError: false, error: null });
    }
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

export function CharacterModel(props) {
  return (
    <ModelErrorBoundary modelPath={props.modelPath}>
      <ActualCharacterModel {...props} />
    </ModelErrorBoundary>
  );
}