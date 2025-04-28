"use client";
import React from "react";
import { motion } from "framer-motion";

export function CurryPot() {
  return (
    <motion.svg
      width="150"
      height="150"
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Pot */}
      <motion.path
        d="M30 70C30 70 30 120 75 120C120 120 120 70 120 70"
        fill="#5C3C28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      <motion.path
        d="M30 70C30 60 50 50 75 50C100 50 120 60 120 70"
        fill="#8B3A2F"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />

      {/* Pot handles */}
      <motion.path
        d="M30 70C20 70 15 60 20 50C25 40 35 40 40 50"
        stroke="#5C3C28"
        strokeWidth="5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />

      <motion.path
        d="M120 70C130 70 135 60 130 50C125 40 115 40 110 50"
        stroke="#5C3C28"
        strokeWidth="5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />

      {/* Curry */}
      <motion.ellipse
        cx="75"
        cy="70"
        rx="45"
        ry="15"
        fill="#D9A45B"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      />

      {/* Steam */}
      {[...Array(5)].map((_, i) => (
        <motion.path
          key={i}
          d={`M${60 + i * 10} 70C${55 + i * 10} 60 ${65 + i * 10} 50 ${
            60 + i * 10
          } 40`}
          stroke="#FFF9EB"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            y: [0, -20],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Spices floating in curry */}
      {[...Array(8)].map((_, i) => (
        <motion.circle
          key={i}
          cx={55 + i * 5}
          cy={70}
          r="2"
          fill={i % 2 === 0 ? "#8B3A2F" : "#5C3C28"}
          initial={{ y: 0 }}
          animate={{ y: [-2, 2, -2] }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.2,
          }}
        />
      ))}
    </motion.svg>
  );
}
