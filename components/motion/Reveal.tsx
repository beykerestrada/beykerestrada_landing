"use client";

import * as React from "react";
import { MotionProps, motion, useReducedMotion, useInView } from "framer-motion";

type RevealProps<T extends React.ElementType = "div"> = {
  as?: T;
  delay?: number;
  stagger?: number;
  transition?: MotionProps["transition"];
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children">;

// Awake Agency-inspired smooth easing
const AWAKE_EASE: MotionProps["transition"] = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1], // Custom bezier for smooth, natural motion
};

export default function Reveal<T extends React.ElementType = "div">({
  as,
  delay = 0,
  stagger = 0,
  transition,
  className,
  children,
  ...rest
}: RevealProps<T>) {
  const shouldReduceMotion = useReducedMotion();
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const ComponentTag = (as ?? "div") as React.ElementType;
  const MotionComponent = motion(ComponentTag) as React.ComponentType<
    React.ComponentPropsWithoutRef<T> & MotionProps
  >;
  const componentProps = rest as React.ComponentPropsWithoutRef<T>;

  if (shouldReduceMotion) {
    return (
      <ComponentTag className={className} {...componentProps}>
        {children}
      </ComponentTag>
    );
  }

  return (
    <MotionComponent
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={transition ?? { ...AWAKE_EASE, delay: delay + stagger }}
      {...componentProps}
    >
      {children}
    </MotionComponent>
  );
}
