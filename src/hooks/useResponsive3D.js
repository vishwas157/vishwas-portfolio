import { useState, useEffect } from 'react';

/**
 * Hook to manage responsive 3D loading.
 * - Desktop (>= 1024px): 3D loaded by default (unless prefers-reduced-motion)
 * - Tablet (768px - 1023px): 3D loaded if device performance is sufficient
 * - Mobile (< 768px): 3D NOT initialized; uses static fallback image
 */
export function useResponsive3D() {
  const [shouldLoad3D, setShouldLoad3D] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const checkViewport = () => {
      const width = window.innerWidth;
      const mobile = width < 768;
      const tablet = width >= 768 && width < 1024;
      const desktop = width >= 1024;

      setIsMobile(mobile);
      setIsTablet(tablet);
      setIsDesktop(desktop);

      // Check prefers-reduced-motion
      const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const reducedMotion = motionQuery.matches;

      if (mobile || reducedMotion) {
        // Mobile (< 768px) and reduced-motion users never load 3D
        setShouldLoad3D(false);
      } else if (desktop) {
        // Desktop (>= 1024px) loads 3D
        setShouldLoad3D(true);
      } else if (tablet) {
        // Tablet (768px - 1023px): load 3D only if hardware concurrency is decent (> 2 threads)
        const isLowPerf = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
        setShouldLoad3D(!isLowPerf);
      }
    };

    checkViewport();

    // Debounced resize listener with proper cleanup
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkViewport, 150);
    };

    window.addEventListener('resize', handleResize);

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = () => checkViewport();
    motionQuery.addEventListener('change', handleMotionChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      motionQuery.removeEventListener('change', handleMotionChange);
      clearTimeout(timeoutId);
    };
  }, []);

  return { shouldLoad3D, isMobile, isTablet, isDesktop, isMounted };
}
