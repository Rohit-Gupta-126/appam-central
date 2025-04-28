import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "default" | "small";
  className?: string;
}

export function Logo({ variant = "default", className = "" }: LogoProps) {
  return (
    <Link href="/" className={`block ${className}`}>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WJXhvT5UbPLjAr8cWByRbMynFowXLI.png"
        alt="Appam Central Logo"
        width={variant === "small" ? 120 : 180}
        height={variant === "small" ? 60 : 90}
        className="object-contain"
        priority
      />
    </Link>
  );
}
