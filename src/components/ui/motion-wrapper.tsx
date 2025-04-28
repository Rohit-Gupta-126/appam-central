"use client";
import React from "react";
import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

interface MotionWrapperProps extends MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function MotionWrapper({
  children,
  className = "",
  delay = 0,
  ...motionProps
}: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
