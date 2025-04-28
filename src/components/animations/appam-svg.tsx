"use client";
import React from "react";
import { motion } from "framer-motion";

export function AppamSvg() {
  return (
    <motion.svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Appam base (circular pancake) */}
      <motion.ellipse
        cx="60"
        cy="60"
        rx="50"
        ry="50"
        fill="#F8F3E6"
        stroke="#D9A45B"
        strokeWidth="2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
      />

      {/* Crispy edges */}
      <motion.path
        d="M60 10C32.4 10 10 32.4 10 60C10 87.6 32.4 110 60 110C87.6 110 110 87.6 110 60C110 32.4 87.6 10 60 10ZM60 100C37.9 100 20 82.1 20 60C20 37.9 37.9 20 60 20C82.1 20 100 37.9 100 60C100 82.1 82.1 100 60 100Z"
        fill="#E8D5B5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      {/* Center soft part */}
      <motion.circle
        cx="60"
        cy="60"
        r="30"
        fill="#FFF9EB"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />

      {/* Steam effect */}
      <motion.path
        d="M50 25C52 20 58 22 60 18C62 22 68 20 70 25"
        stroke="#D9A45B"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ opacity: 0, y: 5 }}
        animate={{
          opacity: [0, 1, 0],
          y: [5, -5, -15],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      />
      <motion.path
        d="M40 30C42 25 48 27 50 23"
        stroke="#D9A45B"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ opacity: 0, y: 5 }}
        animate={{
          opacity: [0, 1, 0],
          y: [5, -5, -15],
        }}
        transition={{
          duration: 2,
          delay: 0.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      />
      <motion.path
        d="M70 23C72 27 78 25 80 30"
        stroke="#D9A45B"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ opacity: 0, y: 5 }}
        animate={{
          opacity: [0, 1, 0],
          y: [5, -5, -15],
        }}
        transition={{
          duration: 2,
          delay: 0.7,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      />
    </motion.svg>
  );
}
