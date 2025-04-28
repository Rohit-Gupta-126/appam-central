"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { MotionWrapper } from "./ui/motion-wrapper";
import { BananaLeaf } from "./animations/banana-leaf";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    comment:
      "The appams here are the best I've had outside of Kerala. Light, fluffy and the stew is absolutely delicious!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Patel",
    comment:
      "Authentic South Indian flavors in the heart of Bhubaneswar. The ghee appam with milagai podi is a must-try!",
    rating: 5,
  },
  {
    id: 3,
    name: "Ananya Das",
    comment:
      "Cozy ambiance and exceptional food. The chicken stew has the perfect balance of spices.",
    rating: 4,
  },
];

export function Testimonials() {
  return (
    <section className="py-12 md:py-16 bg-appam-light relative overflow-hidden">
      <motion.div
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <BananaLeaf />
      </motion.div>

      <div className="container relative">
        <MotionWrapper className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display text-appam-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-appam-text/80 max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied
            customers
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <MotionWrapper key={testimonial.id} delay={index * 0.2}>
              <Card className="bg-appam-background border-appam-accent/20 h-full">
                <CardContent className="p-6">
                  <motion.div
                    className="flex mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.7 + index * 0.1 + i * 0.1,
                        }}
                      >
                        <Star
                          className={`h-5 w-5 ${
                            i < testimonial.rating
                              ? "text-appam-accent fill-appam-accent"
                              : "text-gray-300"
                          }`}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                  <p className="text-appam-text mb-4">
                    &quot;{testimonial.comment}&quot;
                  </p>
                  <p className="font-semibold text-appam-primary">
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
