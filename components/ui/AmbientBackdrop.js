import { motion, useReducedMotion } from "framer-motion";

function layerAnimation({
  shouldReduceMotion,
  opacity = 1,
  x = [0, 20, -16, 0],
  y = [0, -18, 16, 0],
  scale = [0.9, 1.02, 0.98, 1],
  rotate = [0, 2, -2, 0],
  duration = 18,
}) {
  if (shouldReduceMotion) {
    return {
      initial: { opacity: 0, scale: 0.98 },
      animate: { opacity, scale: 1, x: 0, y: 0, rotate: 0 },
      transition: { duration: 0.4 },
    };
  }

  return {
    initial: {
      opacity: 0,
      scale: scale[0],
      x: x[0],
      y: y[0],
      rotate: rotate[0],
    },
    animate: {
      opacity: [0, opacity, opacity, opacity],
      x,
      y,
      scale,
      rotate,
    },
    transition: {
      duration,
      ease: "easeInOut",
      times: [0, 0.18, 0.62, 1],
      repeat: Infinity,
      repeatType: "mirror",
    },
  };
}

export function AmbientBackdrop() {
  const shouldReduceMotion = useReducedMotion();

  const coralGlow = layerAnimation({
    shouldReduceMotion,
    opacity: 0.72,
    x: [-80, 0, 26, -12],
    y: [-30, 0, 18, -8],
    scale: [0.82, 1, 1.06, 1],
    rotate: [-6, 0, 3, -2],
    duration: 20,
  });

  const amberGlow = layerAnimation({
    shouldReduceMotion,
    opacity: 0.48,
    x: [54, 0, -22, 14],
    y: [-48, 0, 16, -12],
    scale: [0.88, 1, 1.03, 0.98],
    rotate: [6, 0, -2, 2],
    duration: 24,
  });

  const mintPlane = layerAnimation({
    shouldReduceMotion,
    opacity: 0.72,
    x: [84, 0, -20, 12],
    y: [44, 0, -18, 10],
    scale: [0.9, 1, 1.04, 0.99],
    rotate: [8, 0, -3, 2],
    duration: 22,
  });

  const limePlane = layerAnimation({
    shouldReduceMotion,
    opacity: 0.6,
    x: [-54, 0, 14, -10],
    y: [64, 0, -14, 12],
    scale: [0.92, 1, 1.05, 0.97],
    rotate: [-7, 0, 3, -2],
    duration: 19,
  });

  const aquaPlane = layerAnimation({
    shouldReduceMotion,
    opacity: 0.66,
    x: [74, 0, -18, 12],
    y: [90, 0, -18, 12],
    scale: [0.86, 1, 1.03, 0.99],
    rotate: [4, 0, -2, 1],
    duration: 25,
  });

  return (
    <div className="ambient-backdrop" aria-hidden="true">
      <div className="ambient-backdrop-base" />

      <motion.div className="ambient-layer ambient-glow ambient-glow-coral" {...coralGlow} />
      <motion.div className="ambient-layer ambient-glow ambient-glow-amber" {...amberGlow} />
      <motion.div className="ambient-layer ambient-plane ambient-plane-mint" {...mintPlane} />
      <motion.div className="ambient-layer ambient-plane ambient-plane-lime" {...limePlane} />
      <motion.div className="ambient-layer ambient-plane ambient-plane-aqua" {...aquaPlane} />

      <motion.div
        className="ambient-diagonal"
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scaleY: 0.6, x: -40, y: -30 }}
        animate={
          shouldReduceMotion
            ? { opacity: 0.32 }
            : {
                opacity: [0, 0.32, 0.38, 0.32],
                scaleY: [0.6, 1, 1.02, 1],
                x: [-40, 0, 8, 0],
                y: [-30, 0, -10, 0],
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0.4 }
            : {
                duration: 16,
                ease: "easeInOut",
                times: [0, 0.2, 0.72, 1],
                repeat: Infinity,
                repeatType: "mirror",
              }
        }
      />

      <div className="ambient-grid" />
      <div className="ambient-noise" />
    </div>
  );
}
