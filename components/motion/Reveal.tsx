"use client";

import * as React from "react";
import { MotionProps, motion, useReducedMotion } from "framer-motion";

type RevealProps<T extends React.ElementType = "div"> = {
  as?: T;
  delay?: number;
  transition?: MotionProps["transition"];
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children">;

// Mirrors tokens: var(--dur-long) = 0.4s and var(--ease-soft) = cubic-bezier(0.22, 1, 0.36, 1)
const DEFAULT_EASE: MotionProps["transition"] = {
  duration: 0.4,
  ease: [0.22, 1, 0.36, 1],
};

export default function Reveal<T extends React.ElementType = "div">({
  as,
  delay = 0,
  transition,
  className,
  children,
  ...rest
}: RevealProps<T>) {
  const shouldReduceMotion = useReducedMotion();
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
      className={className}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={transition ?? { ...DEFAULT_EASE, delay }}
      {...componentProps}
    >
      {children}
    </MotionComponent>
  );
}
