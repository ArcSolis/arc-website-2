import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const DEFAULT_EASE = [0.16, 1, 0.3, 1];

function getDistanceScale(width) {
  if (width <= 768) {
    return 0.5;
  }

  if (width <= 1024) {
    return 0.72;
  }

  return 1;
}

function useResponsiveDistance(distance) {
  const [distanceScale, setDistanceScale] = useState(1);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const updateDistanceScale = () => {
      setDistanceScale(getDistanceScale(window.innerWidth));
    };

    updateDistanceScale();
    window.addEventListener("resize", updateDistanceScale);

    return () => {
      window.removeEventListener("resize", updateDistanceScale);
    };
  }, []);

  return Math.round(distance * distanceScale);
}

function resolveOffset(direction, distance, shouldReduceMotion) {
  if (shouldReduceMotion) {
    return {};
  }

  switch (direction) {
    case "left":
      return { x: -distance };
    case "right":
      return { x: distance };
    case "down":
      return { y: -distance };
    case "up":
    default:
      return { y: distance };
  }
}

export function createRevealVariants({
  direction = "up",
  distance = 56,
  delay = 0,
  duration = 0.8,
  shouldReduceMotion = false,
} = {}) {
  return {
    hidden: {
      opacity: 0,
      ...resolveOffset(direction, distance, shouldReduceMotion),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.35 : duration,
        delay,
        ease: DEFAULT_EASE,
      },
    },
  };
}

export function createStaggerVariants({
  staggerChildren = 0.12,
  delayChildren = 0,
  shouldReduceMotion = false,
} = {}) {
  return {
    hidden: {},
    visible: {
      transition: shouldReduceMotion
        ? { delayChildren: 0 }
        : { staggerChildren, delayChildren },
    },
  };
}

function resolveMotionProps(mode, viewport) {
  if (mode === "mount") {
    return {
      initial: "hidden",
      animate: "visible",
    };
  }

  return {
    initial: "hidden",
    whileInView: "visible",
    viewport,
  };
}

function resolveMotionTag(as) {
  return motion[as] || motion.div;
}

export function MotionSection({
  as = "section",
  children,
  className,
  direction = "up",
  distance = 56,
  delay = 0,
  duration = 0.8,
  mode = "inView",
  viewport = { once: true, amount: 0.2 },
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = resolveMotionTag(as);
  const resolvedDistance = useResponsiveDistance(distance);

  return (
    <MotionTag
      className={className}
      variants={createRevealVariants({
        direction,
        distance: resolvedDistance,
        delay,
        duration,
        shouldReduceMotion,
      })}
      {...resolveMotionProps(mode, viewport)}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

export function MotionGroup({
  as = "div",
  children,
  className,
  mode = "inView",
  staggerChildren = 0.12,
  delayChildren = 0,
  viewport = { once: true, amount: 0.2 },
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = resolveMotionTag(as);

  return (
    <MotionTag
      className={className}
      variants={createStaggerVariants({
        staggerChildren,
        delayChildren,
        shouldReduceMotion,
      })}
      {...resolveMotionProps(mode, viewport)}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

export function MotionItem({
  as = "div",
  children,
  className,
  direction = "up",
  distance = 40,
  delay = 0,
  duration = 0.7,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = resolveMotionTag(as);
  const resolvedDistance = useResponsiveDistance(distance);

  return (
    <MotionTag
      className={className}
      variants={createRevealVariants({
        direction,
        distance: resolvedDistance,
        delay,
        duration,
        shouldReduceMotion,
      })}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
