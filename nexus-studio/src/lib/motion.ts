import type { Transition, Variants } from 'framer-motion';

export const MOTION_DISTANCE = 24;

export const MOTION_EASE: Transition['ease'] = [0.22, 1, 0.36, 1];

export const MOTION_TRANSITION: Transition = {
  duration: 0.6,
  ease: MOTION_EASE,
};

export const fadeUp = (distance = MOTION_DISTANCE): Variants => ({
  hidden: { opacity: 0, y: distance },
  show: { opacity: 1, y: 0 },
});
