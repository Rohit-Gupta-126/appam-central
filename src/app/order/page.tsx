import React from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import Image from "next/image";

const cartItems = [
  {
    id: 1,
    name: "Appam and Veg Stew",
    price: "₹49.00",
    quantity: 2,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Ghee Appam with Milagai Podi",
    price: "₹68.00",
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
];

export default function OrderPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-display text-appam-primary">
              Your Order
            </h1>
            <Button variant="ghost" className="gap-2">
              <ShoppingBag className="h-5 w-5" />
              <span className="font-medium">3 items</span>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card className="bg-appam-light border-appam-accent/20 mb-6">
                <CardContent className="p-6">
                  <h2 className="text-xl font-display text-appam-primary mb-4">
                    Cart Items
                  </h2>

                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 pb-4 border-b border-appam-accent/10"
                      >
                        <div className="relative h-20 w-20 rounded-md overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="font-medium text-appam-text">
                            {item.name}
                          </h3>
                          <p className="text-appam-secondary font-semibold">
                            {item.price}
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full border-appam-secondary text-appam-secondary"
                          >
                            <Minus className="h-4 w-4" />
                            <span className="sr-only">Decrease quantity</span>
                          </Button>

                          <span className="font-medium w-4 text-center">
                            {item.quantity}
                          </span>

                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full border-appam-secondary text-appam-secondary"
                          >
                            <Plus className="h-4 w-4" />
                            <span className="sr-only">Increase quantity</span>
                          </Button>

                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-appam-text/70 hover:text-appam-primary"
                          >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Remove item</span>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-appam-light border-appam-accent/20">
                <CardContent className="p-6">
                  <h2 className="text-xl font-display text-appam-primary mb-4">
                    Delivery Options
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        id="pickup"
                        name="delivery"
                        className="h-4 w-4 text-appam-primary focus:ring-appam-primary"
                        defaultChecked
                      />
                      <label
                        htmlFor="pickup"
                        className="font-medium text-appam-text"
                      >
                        Pickup (Ready in 20 mins)
                      </label>
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        id="delivery"
                        name="delivery"
                        className="h-4 w-4 text-appam-primary focus:ring-appam-primary"
                      />
                      <label
                        htmlFor="delivery"
                        className="font-medium text-appam-text"
                      >
                        Delivery (30-45 mins)
                      </label>
                    </div>

                    <div className="pt-4 border-t border-appam-accent/10">
                      <label
                        htmlFor="notes"
                        className="block font-medium text-appam-text mb-2"
                      >
                        Special Instructions
                      </label>
                      <textarea
                        id="notes"
                        rows={3}
                        className="w-full rounded-md border border-appam-accent/20 bg-appam-background p-3 text-appam-text focus:border-appam-primary focus:outline-none focus:ring-1 focus:ring-appam-primary"
                        placeholder="Any special requests or dietary requirements?"
                      ></textarea>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-appam-light border-appam-accent/20 sticky top-20">
                <CardContent className="p-6">
                  <h2 className="text-xl font-display text-appam-primary mb-4">
                    Order Summary
                  </h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-appam-text/70">Subtotal</span>
                      <span className="font-medium">₹166.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-appam-text/70">Delivery Fee</span>
                      <span className="font-medium">₹30.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-appam-text/70">Tax</span>
                      <span className="font-medium">₹19.80</span>
                    </div>
                    <div className="pt-3 border-t border-appam-accent/10 flex justify-between">
                      <span className="font-semibold">Total</span>
                      <span className="font-semibold text-appam-primary">
                        ₹215.80
                      </span>
                    </div>
                  </div>

                  <Button className="w-full bg-appam-primary hover:bg-appam-primary/90 text-white/90">
                    Proceed to Payment
                  </Button>

                  <p className="text-xs text-appam-text/60 text-center mt-4">
                    By placing your order, you agree to our Terms of Service and
                    Privacy Policy
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
