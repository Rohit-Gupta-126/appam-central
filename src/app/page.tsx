"use client";
import React from "react";
import Image from "next/image";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturedMenu } from "@/components/featured-menu";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { CoconutTree } from "@/components/animations/coconut-tree";
import { BananaLeaf } from "@/components/animations/banana-leaf";
import { AnimatedPageWrapper } from "@/components/animated-page-wrapper";

export default function Home() {
  return (
    <AnimatedPageWrapper>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />

          {/* About Section */}
          <section className="py-12 md:py-16 bg-appam-background">
            <div className="container">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <MotionWrapper className="order-2 md:order-1" delay={0.2}>
                  <h2 className="text-3xl md:text-4xl font-display text-appam-primary mb-4">
                    Our Story
                  </h2>
                  <p className="text-appam-text/80 mb-4">
                    Appam Central was born from a passion for authentic South
                    Indian cuisine. Located in the historic Old Town of
                    Bhubaneswar, we bring the flavors of Kerala and Tamil Nadu
                    to Odisha.
                  </p>
                  <p className="text-appam-text/80 mb-6">
                    Our specialty is the traditional appam - a soft, fluffy
                    pancake with crispy edges, paired with flavorful stews and
                    accompaniments. Each dish is prepared with love, using
                    traditional recipes and the freshest ingredients.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-white/80 w-full sm:w-1/4"
                  >
                    <Button className="bg-appam-primary hover:bg-appam-primary/90">
                      Learn More
                    </Button>
                  </motion.div>
                </MotionWrapper>
                <MotionWrapper
                  className="order-1 md:order-2 flex justify-center"
                  delay={0.4}
                >
                  <div className="relative aspect-square md:aspect-auto md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Appam Central Restaurant Interior"
                      fill
                      className="object-cover"
                    />
                  </div>
                </MotionWrapper>
              </div>
            </div>
          </section>

          <FeaturedMenu />

          {/* App Features Section */}
          <section className="py-12 md:py-16 bg-appam-primary text-appam-light relative overflow-hidden">
            <motion.div
              className="absolute top-10 left-10 opacity-20 hidden lg:block"
              animate={{
                y: [0, 10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            >
              <CoconutTree />
            </motion.div>
            <motion.div
              className="absolute bottom-10 right-10 opacity-20 hidden lg:block"
              animate={{
                y: [0, -10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                delay: 1,
              }}
            >
              <BananaLeaf />
            </motion.div>

            <div className="container relative z-10">
              <MotionWrapper className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-display mb-4">
                  Download Our App
                </h2>
                <p className="opacity-80 max-w-2xl mx-auto">
                  Enjoy a seamless dining experience with our mobile app. Order
                  ahead, earn rewards, and stay updated with exclusive offers.
                </p>
              </MotionWrapper>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <MotionWrapper delay={0.2}>
                  <motion.div
                    className="bg-appam-primary/40 p-6 rounded-xl text-center"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                    }}
                  >
                    <motion.div
                      className="bg-appam-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 10 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-appam-accent"
                      >
                        <path d="M12 19c0-4.2-2.8-7-7-7m14 0c-4.2 0-7 2.8-7 7m0-14a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    </motion.div>
                    <h3 className="text-xl font-display mb-2">Easy Ordering</h3>
                    <p className="text-sm opacity-80">
                      Browse our menu and place orders with just a few taps
                    </p>
                  </motion.div>
                </MotionWrapper>

                <MotionWrapper delay={0.4}>
                  <motion.div
                    className="bg-appam-primary/40 p-6 rounded-xl text-center"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                    }}
                  >
                    <motion.div
                      className="bg-appam-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 10 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-appam-accent"
                      >
                        <path d="M6 19v-3" />
                        <path d="M10 19v-3" />
                        <path d="M14 19v-3" />
                        <path d="M18 19v-3" />
                        <path d="M8 11V9" />
                        <path d="M16 11V9" />
                        <path d="M12 11V9" />
                        <path d="M2 15h20" />
                        <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.8V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.8V7z" />
                      </svg>
                    </motion.div>
                    <h3 className="text-xl font-display mb-2">
                      Loyalty Rewards
                    </h3>
                    <p className="text-sm opacity-80">
                      Earn points with every order and redeem for exclusive
                      rewards
                    </p>
                  </motion.div>
                </MotionWrapper>

                <MotionWrapper delay={0.6}>
                  <motion.div
                    className="bg-appam-primary/40 p-6 rounded-xl text-center"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                    }}
                  >
                    <motion.div
                      className="bg-appam-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 10 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-appam-accent"
                      >
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                      </svg>
                    </motion.div>
                    <h3 className="text-xl font-display mb-2">
                      Special Offers
                    </h3>
                    <p className="text-sm opacity-80">
                      Get notified about exclusive deals and seasonal specials
                    </p>
                  </motion.div>
                </MotionWrapper>
              </div>

              <MotionWrapper
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
                delay={0.8}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="border-appam-light text-appam-light hover:bg-appam-light/10"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 mr-2"
                      fill="currentColor"
                    >
                      <path d="M17.9 5c.1 0 .2.1.3.1l.2.1c.5.4.9.8 1.2 1.3.4.7.4 1.7 0 2.5-.1.3-.3.5-.4.8-.2.3-.3.6-.6.9l-.8.8c-.2.2-.5.3-.8.3-.3 0-.5-.1-.8-.3-.2-.2-.3-.5-.3-.8 0-.3.1-.5.3-.8l.9-.9c.1-.1.2-.3.3-.5.1-.2.1-.4 0-.6-.1-.2-.2-.4-.5-.5-.2-.1-.4-.1-.6 0-.2.1-.4.2-.5.3l-.9.9c-.2.2-.5.3-.8.3-.3 0-.5-.1-.8-.3-.2-.2-.3-.5-.3-.8 0-.3.1-.5.3-.8l.8-.8c.3-.3.6-.5.9-.6.2-.1.5-.3.8-.4.2-.1.5-.1.7-.1zm-11.9 12c-.3 0-.5-.1-.8-.3l-.8-.8c-.3-.3-.5-.6-.6-.9-.1-.2-.3-.5-.4-.8-.1-.2-.1-.5-.1-.7s0-.5.1-.7c.1-.3.2-.5.4-.8.1-.3.3-.6.6-.9l.8-.8c.2-.2.5-.3.8-.3.3 0 .5.1.8.3.2.2.3.5.3.8 0 .3-.1.5-.3.8l-.9.9c-.1.1-.2.3-.3.5-.1.2-.1.4 0 .6.1.2.2.4.5.5.2.1.4.1.6 0 .2-.1.4-.2.5-.3l.9-.9c.2-.2.5-.3.8-.3.3 0 .5.1.8.3.2.2.3.5.3.8 0 .3-.1.5-.3.8l-.8.8c-.3.3-.6.5-.9.6-.3.1-.5.3-.8.4-.2.1-.5.1-.7.1-.3 0-.5 0-.7-.1z" />
                      <path d="M15 9l-6 6" />
                    </svg>
                    App Store
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="border-appam-light text-appam-light hover:bg-appam-light/10"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 mr-2"
                      fill="currentColor"
                    >
                      <path d="M17.523 7.89c-.8-.81-1.9-1.28-3.35-1.28-1.24 0-2.13.37-2.8.77l.52.52c.51-.31 1.15-.5 1.87-.5 1.1 0 2.05.37 2.72 1.05.67.67 1.04 1.63 1.04 2.72 0 .72-.19 1.36-.5 1.87l.52.52c.4-.67.77-1.56.77-2.8 0-1.45-.47-2.55-1.28-3.35zM6.77 7.53c.51.31 1.15.5 1.87.5 1.1 0 2.05-.37 2.72-1.05.67-.67 1.04-1.63 1.04-2.72 0-.72-.19-1.36-.5-1.87l.52-.52c.4.67.77 1.56.77 2.8 0 1.45-.47 2.55-1.28 3.35-.8.81-1.9 1.28-3.35 1.28-1.24 0-2.13-.37-2.8-.77l.52-.52z" />
                      <path d="M15.04 10.45l-3.5 3.5c-.2.2-.51.2-.71 0l-3.5-3.5c-.2-.2-.2-.51 0-.71l3.5-3.5c.2-.2.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71z" />
                    </svg>
                    Google Play
                  </Button>
                </motion.div>
              </MotionWrapper>
            </div>
          </section>

          <Testimonials />
        </main>
        <Footer />
      </div>
    </AnimatedPageWrapper>
  );
}
