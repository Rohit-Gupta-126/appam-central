"use client";
import React from "react";
import { motion } from "framer-motion";

export function SpiceAnimation() {
  return (
    <motion.div
      className="relative w-32 h-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Spice bowl */}
      <motion.svg
        width="128"
        height="128"
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.ellipse
          cx="64"
          cy="80"
          rx="40"
          ry="20"
          fill="#A05A32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.path
          d="M24 80C24 69 40 60 64 60C88 60 104 69 104 80"
          stroke="#8B3A2F"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.path
          d="M104 80V90C104 101 88 110 64 110C40 110 24 101 24 90V80"
          fill="#8B3A2F"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />

        {/* Spice particles */}
        {[...Array(12)].map((_, i) => (
          <motion.circle
            key={i}
            cx={64 + Math.cos((i / 12) * Math.PI * 2) * 20}
            cy={70 + Math.sin((i / 12) * Math.PI * 2) * 10}
            r={2 + Math.random() * 2}
            fill={i % 3 === 0 ? "#D9A45B" : i % 3 === 1 ? "#E8D5B5" : "#5C3C28"}
            initial={{ y: 0, opacity: 0.2 }}
            animate={{
              y: [0, -5 - Math.random() * 10, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.svg>
    </motion.div>
  );
}
