"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { AppamSvg } from "./animations/appam-svg";
import { CurryPot } from "./animations/curry-pot";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-appam-light py-12 md:py-16 lg:py-20">
      <motion.div
        className="absolute inset-0 appam-pattern opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      />

      <div className="container relative grid gap-8 md:grid-cols-2 md:items-center">
        <div className="flex flex-col gap-4">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-display text-appam-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Authentic South Indian Cuisine
          </motion.h1>

          <motion.p
            className="text-lg text-appam-text/80 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience the rich flavors of South India at Appam Central, located
            in the heart of Old Town, Bhubaneswar.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-appam-primary hover:bg-appam-primary/90 group"
              asChild
            >
              <Link href="/menu">
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: -4 }}
                  transition={{ duration: 0.2 }}
                  className="text-white/80"
                >
                  View Menu
                </motion.span>
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="absolute -bottom-10 -left-10 opacity-50 hidden md:block"
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 0.5, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <AppamSvg />
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            className="relative aspect-square md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4jECd70bBibksc58njcPY0K4xoj3iT.png"
              alt="Appam Central Restaurant"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </motion.div>

          <motion.div
            className="absolute -bottom-10 -right-10 opacity-70 hidden md:block"
            initial={{ opacity: 0, rotate: 10 }}
            animate={{ opacity: 0.7, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <CurryPot />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
