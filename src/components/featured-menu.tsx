"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MotionWrapper } from "./ui/motion-wrapper";
import { SpiceAnimation } from "./animations/spice-animation";

const featuredItems = [
  {
    id: 1,
    name: "Appam and Veg Stew",
    description: "Soft, fluffy appam served with aromatic vegetable stew",
    price: "₹49.00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Appam and Chicken Stew",
    description: "Our signature appam paired with flavorful chicken stew",
    price: "₹59.00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Ghee Appam with Milagai Podi",
    description: "Appam drizzled with ghee and served with spicy podi",
    price: "₹68.00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Garlic Butter Appam",
    description:
      "Appam infused with garlic butter and served with milagai podi",
    price: "₹74.00",
    image: "/placeholder.svg?height=300&width=300",
  },
];

export function FeaturedMenu() {
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

  // const item = {
  //   hidden: { opacity: 0, y: 20 },
  //   show: { opacity: 1, y: 0 },
  // };

  return (
    <section className="py-12 md:py-16 bg-appam-background relative overflow-hidden">
      <motion.div
        className="absolute top-10 left-10 opacity-30 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3, rotate: [0, 5, 0] }}
        transition={{
          opacity: { duration: 1 },
          rotate: {
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          },
        }}
      >
        <SpiceAnimation />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10 opacity-30 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3, rotate: [0, -5, 0] }}
        transition={{
          opacity: { duration: 1 },
          rotate: {
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          },
        }}
      >
        <SpiceAnimation />
      </motion.div>

      <div className="container relative">
        <MotionWrapper className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display text-appam-primary mb-4">
            Our Specialties
          </h2>
          <p className="text-appam-text/80 max-w-2xl mx-auto">
            Discover our most popular dishes, crafted with authentic recipes and
            the freshest ingredients
          </p>
        </MotionWrapper>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredItems.map((item) => (
            <motion.div key={item.id}>
              <Card className="overflow-hidden bg-appam-light border-appam-accent/20 hover:shadow-md transition-shadow group">
                <div className="aspect-square relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-display text-xl text-appam-primary mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-appam-text/70 mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-appam-secondary">
                      {item.price}
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-appam-secondary text-appam-secondary hover:bg-appam-secondary/10"
                    >
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        Add to Cart
                      </motion.span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <MotionWrapper className="mt-10 text-center" delay={0.6}>
          <Button className="bg-appam-primary hover:bg-appam-primary/90">
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: -4 }}
              transition={{ duration: 0.2 }}
            >
              View Full Menu
            </motion.span>
          </Button>
        </MotionWrapper>
      </div>
    </section>
  );
}
