"use client";
import React, { ReactNode } from "react";
import { PageTransition } from "./ui/page-transition";

interface AnimatedPageWrapperProps {
  children: ReactNode;
}

export function AnimatedPageWrapper({ children }: AnimatedPageWrapperProps) {
  return <PageTransition>{children}</PageTransition>;
}
