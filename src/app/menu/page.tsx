import React from "react";
import { MotionWrapper } from "../../components/ui/motion-wrapper";
import { PageTransition } from "../../components/ui/page-transition";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function MenuPage() {
  return (
    <PageTransition>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto px-4 py-12 md:py-24">
            <MotionWrapper>
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
                Our Menu
              </h1>
              <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
                Experience the authentic flavors of South India with our
                carefully crafted dishes, made with traditional recipes and
                fresh ingredients.
              </p>
            </MotionWrapper>

            {/* Menu Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {categories.map((category) => (
                <MotionWrapper
                  key={category.id}
                  delay={parseFloat(category.id) * 0.1}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {category.description}
                      </p>
                      <Link
                        href={`#${category.id}`}
                        className="inline-block bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors"
                      >
                        View Dishes
                      </Link>
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </div>

            {/* Menu Items by Category */}
            {categories.map((category) => (
              <section key={category.id} id={category.id} className="mb-16">
                <MotionWrapper>
                  <h2 className="text-3xl font-bold mb-8 text-center">
                    {category.name}
                  </h2>
                </MotionWrapper>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {menuItems
                    .filter((item) => item.category === category.id)
                    .map((item, index) => (
                      <MotionWrapper key={item.id} delay={index * 0.1}>
                        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
                          <div className="relative w-full md:w-32 h-32 flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover rounded-md"
                            />
                          </div>
                          <div className="flex-grow">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-xl font-medium">
                                {item.name}
                              </h3>
                              <span className="font-bold text-amber-600">
                                ₹{item.price}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-3">
                              {item.description}
                            </p>
                            <div className="flex items-center space-x-2">
                              {item.isVeg ? (
                                <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                                  Vegetarian
                                </span>
                              ) : (
                                <span className="inline-flex items-center px-2 py-1 bg-red-100 text-red-800 text-xs rounded">
                                  Non-Vegetarian
                                </span>
                              )}
                              {item.isSpicy && (
                                <span className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                                  Spicy
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </MotionWrapper>
                    ))}
                </div>
              </section>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}

// Menu Data
const categories = [
  {
    id: "breakfast",
    name: "Breakfast Specialties",
    description:
      "Start your day with our authentic South Indian breakfast dishes",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "main-course",
    name: "Main Course",
    description:
      "Hearty and flavorful main dishes from the heart of South India",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "appam-stew",
    name: "Appam & Stew",
    description: "Our signature appams with various stew combinations",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "beverages",
    name: "Beverages",
    description: "Traditional South Indian drinks to complement your meal",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "Sweet treats to complete your South Indian culinary journey",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "thalis",
    name: "Thali Specials",
    description: "Complete meals served on traditional banana leaves",
    image: "/placeholder.svg?height=400&width=600",
  },
];

const menuItems = [
  // Breakfast
  {
    id: "idli",
    name: "Idli Sambar",
    description: "Steamed rice cakes served with sambar and coconut chutney",
    price: 120,
    category: "breakfast",
    isVeg: true,
    isSpicy: false,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "dosa",
    name: "Masala Dosa",
    description:
      "Crispy rice crepe filled with spiced potato filling, served with sambar and chutney",
    price: 150,
    category: "breakfast",
    isVeg: true,
    isSpicy: false,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "vada",
    name: "Medu Vada",
    description: "Crispy lentil donuts served with sambar and coconut chutney",
    price: 130,
    category: "breakfast",
    isVeg: true,
    isSpicy: false,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "pongal",
    name: "Ven Pongal",
    description:
      "Savory rice and lentil porridge tempered with cumin, pepper, and ghee",
    price: 140,
    category: "breakfast",
    isVeg: true,
    isSpicy: false,
    image: "/placeholder.svg?height=200&width=200",
  },

  // Main Course
  {
    id: "biryani",
    name: "Chettinad Chicken Biryani",
    description:
      "Fragrant rice cooked with chicken and aromatic Chettinad spices",
    price: 280,
    category: "main-course",
    isVeg: false,
    isSpicy: true,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "fish-curry",
    name: "Kerala Fish Curry",
    description:
      "Fish cooked in a tangy tamarind and coconut gravy with curry leaves",
    price: 320,
    category: "main-course",
    isVeg: false,
    isSpicy: true,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "sambar-rice",
    name: "Sambar Rice",
    description:
      "Rice mixed with lentil-based vegetable stew, tempered with spices",
    price: 180,
    category: "main-course",
    isVeg: true,
    isSpicy: true,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "veg-kurma",
    name: "Vegetable Kurma",
    description: "Mixed vegetables cooked in a creamy coconut and cashew gravy",
    price: 220,
    category: "main-course",
    isVeg: true,
    isSpicy: false,
    image: "/placeholder.svg?height=200&width=200",
  },

  // Appam & Stew
  {
    id: "plain-appam",
    name: "Plain Appam (2 pieces)",
    description: "Soft, lacy rice pancakes with a fluffy center",
    price: 100,
    category: "appam-stew",
    isVeg: true,
    isSpicy: false,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "egg-appam",
    name: "Egg Appam (2 pieces)",
    description: "Appam topped with a perfectly cooked egg",
    price: 140,
    category: "appam-stew",
    isVeg: false,
    isSpicy: false,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "veg-stew",
    name: "Vegetable Stew",
    description:
      "Mixed vegetables in a delicate coconut milk gravy flavored with whole spices",
    price: 180,
    category: "appam-stew",
    isVeg: true,
    isSpicy: false,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "chicken-stew",
    name: "Kerala Chicken Stew",
    description:
      "Tender chicken pieces in a mild coconut milk gravy with potatoes and carrots",
    price: 220,
    category: "appam-stew",
    isVeg: false,
    isSpicy: false,
    image: "/placeholder.svg?height=200&width=200",
  },

  // Beverages
  {
    id: "filter-coffee",
    name: "Filter Kaapi",
    description:
      "Traditional South Indian coffee brewed with chicory and served with frothy milk",
    price: 80,
    category: "beverages",
    isVeg: true,
    isSpicy: false,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "buttermilk",
    name: "Spiced Buttermilk",
    description: "Churned yogurt with ginger, curry leaves, and green chilies",
    price: 70,
    category: "beverages",
    isVeg: true,
    isSpicy: false,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "rasam",
    name: "Rasam",
    description: "Tangy and spicy tamarind broth with pepper and cumin",
    price: 90,
    category: "beverages",
    isVeg: true,
    isSpicy: true,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "tender-coconut",
    name: "Tender Coconut Water",
    description: "Fresh coconut water served in the shell",
    price: 100,
    category: "beverages",
    isVeg: true,
    isSpicy: false,
    image: "/placeholder.svg?height=200&width=200",
  },

  // Desserts
  {
    id: "payasam",
    name: "Ada Pradhaman",
    description:
      "Rice flakes cooked in jaggery and coconut milk with cashews and raisins",
    price: 150,
    category: "desserts",
    isVeg: true,
    isSpicy: false,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "kesari",
    name: "Rava Kesari",
    description: "Sweet semolina pudding with saffron, cashews, and raisins",
    price: 130,
    category: "desserts",
    isVeg: true,
    isSpicy: false,
    image: "/placeholder.svg?height=200&width=200",
  },

  // Thalis
  {
    id: "veg-thali",
    name: "South Indian Vegetarian Thali",
    description:
      "Complete meal with rice, sambar, rasam, kootu, poriyal, appalam, pickle, and payasam served on banana leaf",
    price: 350,
    category: "thalis",
    isVeg: true,
    isSpicy: true,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "non-veg-thali",
    name: "South Indian Non-Vegetarian Thali",
    description:
      "Complete meal with rice, chicken curry, fish fry, sambar, rasam, poriyal, appalam, pickle, and payasam served on banana leaf",
    price: 450,
    category: "thalis",
    isVeg: false,
    isSpicy: true,
    image: "/placeholder.svg?height=200&width=200",
  },
];
