"use client";
import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingBag, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

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
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-appam-accent/20 bg-appam-background/95 backdrop-blur"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-appam-light">
              <div className="flex flex-col gap-6 py-6">
                <Logo variant="small" />
                <motion.nav
                  className="flex flex-col gap-4"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {navItems.map((navItem) => (
                    <motion.div key={navItem.href} variants={item}>
                      <Link
                        href={navItem.href}
                        className={`text-lg font-medium hover:text-appam-primary ${
                          pathname === navItem.href ? "text-appam-primary" : ""
                        }`}
                      >
                        {navItem.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>
              </div>
            </SheetContent>
          </Sheet>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Logo variant="small" className="ml-4 md:ml-0" />
          </motion.div>
        </div>
        <motion.nav
          className="hidden md:flex items-center gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {navItems.map((navItem) => (
            <motion.div key={navItem.href} variants={item}>
              <Link
                href={navItem.href}
                className={`text-sm font-medium hover:text-appam-primary relative ${
                  pathname === navItem.href ? "text-appam-primary" : ""
                }`}
              >
                {navItem.label}
                {pathname === navItem.href && (
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-appam-primary"
                    layoutId="underline"
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
        <motion.div
          className="flex items-center gap-2"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </motion.div>
          <motion.div variants={item}>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </motion.div>
          <motion.div variants={item}>
            <Button
              className="hidden md:flex bg-appam-primary hover:bg-appam-primary/90 text-white/80"
              asChild
            >
              <Link href="/order">Order Now</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
}
