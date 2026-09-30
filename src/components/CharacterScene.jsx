import React, {
  useState,
  useEffect,
  useRef,
  Suspense
} from 'react';

import { Canvas } from '@react-three/fiber';

import {
  ContactShadows,
  Environment,
  Html
} from '@react-three/drei';

import { CharacterModel } from './CharacterModel';
import WebGLFallback from './WebGLFallback';
import { portfolioData } from '../data/portfolio';

function CanvasLoader() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center space-y-3 pointer-events-none select-none">
        <div className="w-10 h-10 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
        <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">
          Loading 3D Model...
        </span>
      </div>
    </Html>
  );
}

export default function CharacterScene() {
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  const containerRef = useRef(null);

  // Mutable refs: no React render on every mouse movement or drag
  const mouseRef = useRef({ x: 0, y: 0 });
  const rotationDeltaRef = useRef(0);

  const dragRef = useRef({
    active: false,
    lastX: 0,
    pointerId: null
  });

  // Device and accessibility setup
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const motionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    setReducedMotion(motionQuery.matches);

    const handleMotionChange = (event) => {
      setReducedMotion(event.matches);
    };

    motionQuery.addEventListener(
      'change',
      handleMotionChange
    );

    return () => {
      window.removeEventListener('resize', checkMobile);

      motionQuery.removeEventListener(
        'change',
        handleMotionChange
      );
    };
  }, []);

  // Mouse tracking across the entire browser window
  useEffect(() => {
    const handlePointerMove = (event) => {
      if (event.pointerType === 'touch') return;

      mouseRef.current.x =
        (event.clientX / window.innerWidth) * 2 - 1;

      mouseRef.current.y =
        1 - (event.clientY / window.innerHeight) * 2;

      // Rotate only during dragging
      if (
        dragRef.current.active &&
        dragRef.current.pointerId === event.pointerId
      ) {
        const deltaX =
          event.clientX - dragRef.current.lastX;

        rotationDeltaRef.current += deltaX * 0.012;

        dragRef.current.lastX = event.clientX;
      }
    };

    const stopDragging = (event) => {
      if (
        dragRef.current.pointerId !== null &&
        event?.pointerId !== undefined &&
        dragRef.current.pointerId !== event.pointerId
      ) {
        return;
      }

      dragRef.current.active = false;
      dragRef.current.pointerId = null;
      if (containerRef.current) {
        containerRef.current.style.cursor = 'grab';
      }
    };

    window.addEventListener(
      'pointermove',
      handlePointerMove,
      { passive: true }
    );

    window.addEventListener(
      'pointerup',
      stopDragging
    );

    window.addEventListener(
      'pointercancel',
      stopDragging
    );

    window.addEventListener(
      'blur',
      stopDragging
    );

    return () => {
      window.removeEventListener(
        'pointermove',
        handlePointerMove
      );

      window.removeEventListener(
        'pointerup',
        stopDragging
      );

      window.removeEventListener(
        'pointercancel',
        stopDragging
      );

      window.removeEventListener(
        'blur',
        stopDragging
      );
    };
  }, []);

  const handlePointerDown = (event) => {
    if (reducedMotion) return;

    if (
      event.pointerType === 'mouse' &&
      event.button !== 0
    ) {
      return;
    }

    dragRef.current.active = true;
    dragRef.current.lastX = event.clientX;
    dragRef.current.pointerId = event.pointerId;

    if (containerRef.current) {
      containerRef.current.style.cursor = 'grabbing';
    }
  };

  if (!webglSupported) {
    return (
      <WebGLFallback
        message="WebGL is disabled or unsupported in your browser."
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative"
      onPointerDown={handlePointerDown}
      style={{
        touchAction: 'pan-y',
        cursor: 'grab'
      }}
    >
      <Canvas
        camera={{
          position: [0, 0.75, 5.2],
          fov: 35,
          near: 0.1,
          far: 100
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 1.5]}
        className="w-full h-full"
        onCreated={({ gl }) => {
          gl.domElement.addEventListener('webglcontextlost', (e) => {
            e.preventDefault();
            console.warn('WebGL context lost');
          });
        }}
      >
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[4, 7, 5]}
          intensity={2}
          color="#ffffff"
        />

        <directionalLight
          position={[-5, 3, 4]}
          intensity={0.8}
          color="#ffcf80"
        />

        <directionalLight
          position={[0, 4, -5]}
          intensity={1.2}
          color="#dceeff"
        />

        <Environment preset="city" />

        <ContactShadows
          position={[0, 0.015, 0]}
          opacity={0.35}
          scale={4}
          blur={2}
          far={3}
          resolution={256}
          color="#172033"
        />

        <Suspense fallback={<CanvasLoader />}>
          <CharacterModel
            modelPath={portfolioData.character3d.modelPath}
            mouse={mouseRef}
            rotationDelta={rotationDeltaRef}
            isMobile={isMobile}
            reducedMotion={reducedMotion}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}