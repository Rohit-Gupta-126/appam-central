"use client";
import React from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { MotionWrapper } from "../../components/ui/motion-wrapper";
import { PageTransition } from "../../components/ui/page-transition";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <section className="py-12 md:py-16 lg:py-20 bg-appam-light">
            <div className="container">
              <MotionWrapper className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-display text-appam-primary mb-4">
                  Contact Us
                </h1>
                <p className="text-appam-text/80 max-w-2xl mx-auto">
                  We&apos;d love to hear from you! Whether you have a question,
                  feedback, or want to make a reservation, our team is here to
                  help.
                </p>
              </MotionWrapper>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <MotionWrapper delay={0.2}>
                  <Card className="bg-appam-background border-appam-accent/20 h-full">
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-display text-appam-primary mb-6">
                        Get in Touch
                      </h2>
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <label
                              htmlFor="name"
                              className="text-sm font-medium text-appam-text"
                            >
                              Name
                            </label>
                            <Input
                              id="name"
                              placeholder="Your name"
                              className="bg-appam-light border-appam-accent/20 focus:border-appam-primary"
                            />
                          </div>
                          <div className="space-y-2">
                            <label
                              htmlFor="email"
                              className="text-sm font-medium text-appam-text"
                            >
                              Email
                            </label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="Your email"
                              className="bg-appam-light border-appam-accent/20 focus:border-appam-primary"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="subject"
                            className="text-sm font-medium text-appam-text"
                          >
                            Subject
                          </label>
                          <Input
                            id="subject"
                            placeholder="Subject"
                            className="bg-appam-light border-appam-accent/20 focus:border-appam-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="message"
                            className="text-sm font-medium text-appam-text"
                          >
                            Message
                          </label>
                          <Textarea
                            id="message"
                            placeholder="Your message"
                            rows={5}
                            className="bg-appam-light border-appam-accent/20 focus:border-appam-primary"
                          />
                        </div>
                        <Button className="w-full bg-appam-primary hover:bg-appam-primary/90">
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </MotionWrapper>

                <MotionWrapper delay={0.4}>
                  <Card className="bg-appam-background border-appam-accent/20 h-full">
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-display text-appam-primary mb-6">
                        Contact Information
                      </h2>

                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-appam-accent/20 p-3 rounded-full">
                            <MapPin className="h-6 w-6 text-appam-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium text-appam-secondary mb-1">
                              Our Location
                            </h3>
                            <p className="text-appam-text/80">
                              Appam Central, Old Town,
                              <br />
                              Bhubaneswar, Odisha 751002
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="bg-appam-accent/20 p-3 rounded-full">
                            <Phone className="h-6 w-6 text-appam-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium text-appam-secondary mb-1">
                              Phone Number
                            </h3>
                            <p className="text-appam-text/80">
                              +91 98765 43210
                            </p>
                            <p className="text-appam-text/80">
                              +91 76543 21098
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="bg-appam-accent/20 p-3 rounded-full">
                            <Mail className="h-6 w-6 text-appam-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium text-appam-secondary mb-1">
                              Email Address
                            </h3>
                            <p className="text-appam-text/80">
                              info@appamcentral.com
                            </p>
                            <p className="text-appam-text/80">
                              reservations@appamcentral.com
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8">
                        <h3 className="font-medium text-appam-secondary mb-3">
                          Opening Hours
                        </h3>
                        <ul className="space-y-2 text-appam-text/80">
                          <li className="flex justify-between">
                            <span>Monday - Friday</span>
                            <span>11:00 AM - 10:00 PM</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Saturday - Sunday</span>
                            <span>10:00 AM - 11:00 PM</span>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-8">
                        <h3 className="font-medium text-appam-secondary mb-3">
                          Reservations
                        </h3>
                        <p className="text-appam-text/80 mb-4">
                          For table reservations, please call us or use the form
                          to send a request.
                        </p>
                        <Button className="w-full bg-appam-primary hover:bg-appam-primary/90">
                          Book a Table
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </MotionWrapper>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16">
            <div className="container">
              <MotionWrapper>
                <h2 className="text-3xl font-display text-appam-primary text-center mb-8">
                  Find Us
                </h2>
                <div className="rounded-xl overflow-hidden h-[400px] shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.2875212064716!2d85.83!3d20.23!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDEzJzQ4LjAiTiA4NcKwNDknNDguMCJF!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </MotionWrapper>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
