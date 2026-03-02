import { useReducedMotion } from 'framer-motion';
import { MOTION_TRANSITION, fadeUp } from '@/lib/motion';

/**
 * Helper hook that consolidates the reduced motion check and
 * provides helpers for our common animation patterns.
 */
export function useAnimate() {
  const shouldReduceMotion = useReducedMotion();

  const fade = (distance = 24) => {
    if (shouldReduceMotion) return {};
    return {
      variants: fadeUp(distance),
      transition: MOTION_TRANSITION,
    };
  };

  const listItem = (index: number) => {
    if (shouldReduceMotion) return {};
    return {
      initial: { opacity: 0, y: -8 },
      animate: { opacity: 1, y: 0 },
      transition: { ...MOTION_TRANSITION, delay: 0.08 + index * 0.05 },
    };
  };

  return {
    shouldReduceMotion,
    fade,
    listItem,
  };
}
