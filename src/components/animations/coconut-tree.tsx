"use client";
import React from "react";
import { motion } from "framer-motion";

export function CoconutTree() {
  return (
    <motion.svg
      width="120"
      height="200"
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Tree trunk */}
      <motion.path
        d="M60 200C60 200 50 150 55 120C60 90 65 80 60 60C55 40 50 30 55 20"
        stroke="#A05A32"
        strokeWidth="10"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Leaves */}
      {[...Array(5)].map((_, i) => (
        <motion.path
          key={i}
          d={`M${55 + i * 2} 20C${40 + i * 10} ${10 - i * 5} ${20 + i * 15} ${
            30 - i * 2
          } ${55 + i * 2} 20`}
          stroke="#5C8C4D"
          strokeWidth="4"
          fill="#5C8C4D"
          initial={{ opacity: 0, rotate: -5 }}
          animate={{
            opacity: 1,
            rotate: [-5, 5, -5],
          }}
          transition={{
            opacity: { duration: 0.5, delay: 0.5 + i * 0.1 },
            rotate: {
              duration: 4 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: i * 0.2,
            },
          }}
        />
      ))}

      {[...Array(5)].map((_, i) => (
        <motion.path
          key={i + 5}
          d={`M${65 - i * 2} 20C${80 - i * 10} ${10 - i * 5} ${100 - i * 15} ${
            30 - i * 2
          } ${65 - i * 2} 20`}
          stroke="#5C8C4D"
          strokeWidth="4"
          fill="#5C8C4D"
          initial={{ opacity: 0, rotate: 5 }}
          animate={{
            opacity: 1,
            rotate: [5, -5, 5],
          }}
          transition={{
            opacity: { duration: 0.5, delay: 0.5 + i * 0.1 },
            rotate: {
              duration: 4 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: i * 0.2,
            },
          }}
        />
      ))}

      {/* Coconuts */}
      {[...Array(3)].map((_, i) => (
        <motion.circle
          key={i}
          cx={50 + i * 10}
          cy={30 + i * 5}
          r="5"
          fill="#8B3A2F"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 1.5 + i * 0.2,
            type: "spring",
          }}
        />
      ))}
    </motion.svg>
  );
}
