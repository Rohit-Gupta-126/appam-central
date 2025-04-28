"use client";
import React from "react";
import { motion } from "framer-motion";

export function BananaLeaf() {
  return (
    <motion.svg
      width="200"
      height="120"
      viewBox="0 0 200 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Banana leaf plate */}
      <motion.path
        d="M20 60C20 40 60 10 100 10C140 10 180 40 180 60C180 80 140 110 100 110C60 110 20 80 20 60Z"
        fill="#5C8C4D"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.9 }}
        transition={{ duration: 0.8 }}
      />

      {/* Leaf veins */}
      <motion.path
        d="M100 10C100 10 100 110 100 110"
        stroke="#3A5A30"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {[...Array(8)].map((_, i) => (
        <motion.path
          key={i}
          d={`M100 ${20 + i * 10}C${60 + i * 5} ${20 + i * 10} ${40 + i * 10} ${
            20 + i * 10
          } ${20} ${60}`}
          stroke="#3A5A30"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
        />
      ))}

      {[...Array(8)].map((_, i) => (
        <motion.path
          key={i + 8}
          d={`M100 ${20 + i * 10}C${140 - i * 5} ${20 + i * 10} ${
            160 - i * 10
          } ${20 + i * 10} ${180} ${60}`}
          stroke="#3A5A30"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
        />
      ))}

      {/* Food items on leaf */}
      <motion.circle
        cx="70"
        cy="50"
        r="15"
        fill="#F8F3E6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
      />

      <motion.circle
        cx="110"
        cy="50"
        r="15"
        fill="#F8F3E6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.4, type: "spring" }}
      />

      <motion.circle
        cx="90"
        cy="80"
        r="20"
        fill="#D9A45B"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.6, type: "spring" }}
      />
    </motion.svg>
  );
}
