"use client";
import React from "react";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { MotionWrapper } from "./ui/motion-wrapper";

export function Footer() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const socialIconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, rotate: 5 },
  };

  return (
    <footer className="bg-appam-primary text-appam-light">
      <div className="container py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="md:col-span-1" variants={item}>
            <Logo className="mb-4 invert" />
            <p className="text-sm opacity-80 mt-4">
              Authentic South Indian cuisine in the heart of Old Town,
              Bhubaneswar.
            </p>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="font-display text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/" className="text-sm opacity-80 hover:opacity-100">
                  Home
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/menu"
                  className="text-sm opacity-80 hover:opacity-100"
                >
                  Menu
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/about"
                  className="text-sm opacity-80 hover:opacity-100"
                >
                  About Us
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/contact"
                  className="text-sm opacity-80 hover:opacity-100"
                >
                  Contact
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="font-display text-xl mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="text-sm opacity-80 mb-2">
                Rafi Rd, Ravi Talkies, Old Town,
                <br />
                Bhubaneswar, Odisha 751002
              </p>
              <p className="text-sm opacity-80 mb-2">Phone: +91 98765 43210</p>
              <p className="text-sm opacity-80">Email: info@appamcentral.com</p>
            </address>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="font-display text-xl mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="text-sm opacity-80">
                Monday - Friday: 11:00 AM - 10:00 PM
              </li>
              <li className="text-sm opacity-80">
                Saturday - Sunday: 10:00 AM - 11:00 PM
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-medium mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <motion.div
                  variants={socialIconVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href="#"
                    className="text-appam-light hover:text-appam-accent"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                </motion.div>
                <motion.div
                  variants={socialIconVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href="#"
                    className="text-appam-light hover:text-appam-accent"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </motion.div>
                <motion.div
                  variants={socialIconVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href="#"
                    className="text-appam-light hover:text-appam-accent"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <MotionWrapper
          className="mt-12 pt-6 border-t border-appam-light/20 text-center"
          delay={0.5}
        >
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} Appam Central. All rights reserved.
          </p>
        </MotionWrapper>
      </div>
    </footer>
  );
}
