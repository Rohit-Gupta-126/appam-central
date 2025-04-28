import React from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { MotionWrapper } from "../../components/ui/motion-wrapper";
import { PageTransition } from "../../components/ui/page-transition";
import Image from "next/image";

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto px-4 py-12 md:py-24">
            <MotionWrapper>
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
                Our Story
              </h1>
              <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
                Discover the rich heritage and traditions behind Appam Central
                and our passion for authentic South Indian cuisine.
              </p>
            </MotionWrapper>

            {/* Our Journey Section */}
            <section className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <MotionWrapper>
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/placeholder.svg?height=800&width=600"
                      alt="Appam Central Restaurant"
                      fill
                      className="object-cover"
                    />
                  </div>
                </MotionWrapper>
                <MotionWrapper delay={0.2}>
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
                    <p className="text-gray-700 mb-4">
                      Appam Central began as a small family kitchen in the heart
                      of Kerala, where our founder&apos;s grandmother would prepare
                      her famous appams and stew for Sunday gatherings. What
                      started as a cherished family tradition has now grown into
                      a culinary destination that celebrates the diverse flavors
                      of South India.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Our mission is to preserve the authentic recipes and
                      cooking techniques that have been passed down through
                      generations, while creating a warm and inviting space
                      where people can experience the joy of South Indian
                      hospitality.
                    </p>
                    <p className="text-gray-700">
                      Every dish at Appam Central tells a story of tradition,
                      culture, and the rich culinary heritage of South India. We
                      invite you to be a part of our journey and experience the
                      magic of our cuisine.
                    </p>
                  </div>
                </MotionWrapper>
              </div>
            </section>

            {/* Culinary Stories Section */}
            <section className="mb-20">
              <MotionWrapper>
                <h2 className="text-3xl font-bold text-center mb-12">
                  Culinary Stories
                </h2>
              </MotionWrapper>

              {/* Appam Story */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <MotionWrapper className="order-2 lg:order-1">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      The Art of Appam
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Appam, the signature dish of Kerala cuisine, is a delicate
                      rice pancake with a soft, spongy center and crispy edges.
                      The batter, made from fermented rice and coconut milk,
                      requires patience and precision to achieve the perfect
                      texture and flavor.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Traditionally cooked in a special curved pan called an
                      &quot;appachatti,&quot; these lacy pancakes are a testament to the
                      culinary ingenuity of South Indian cooks who have
                      perfected this art over centuries.
                    </p>
                    <p className="text-gray-700">
                      At Appam Central, we honor this tradition by preparing our
                      appams using the same time-honored techniques, ensuring
                      each one is as authentic as those made in the homes of
                      Kerala.
                    </p>
                  </div>
                </MotionWrapper>
                <MotionWrapper className="order-1 lg:order-2" delay={0.2}>
                  <div className="relative h-[350px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/placeholder.svg?height=700&width=700"
                      alt="Traditional Appam"
                      fill
                      className="object-cover"
                    />
                  </div>
                </MotionWrapper>
              </div>

              {/* Stew Story */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <MotionWrapper>
                  <div className="relative h-[350px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/placeholder.svg?height=700&width=700"
                      alt="Kerala Stew"
                      fill
                      className="object-cover"
                    />
                  </div>
                </MotionWrapper>
                <MotionWrapper delay={0.2}>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      The Comfort of Kerala Stew
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Kerala stew, or &quot;Ishtu&quot; as it&apos;s locally known, is a
                      gentle, aromatic dish that perfectly complements the
                      delicate flavor of appam. This coconut milk-based stew,
                      infused with whole spices like cardamom, cinnamon, and
                      cloves, creates a symphony of flavors that is both
                      comforting and sophisticated.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Whether prepared with vegetables or tender pieces of
                      chicken, the stew represents the subtle complexity of
                      Kerala cuisine, where spices are used to enhance rather
                      than overpower the natural flavors of the ingredients.
                    </p>
                    <p className="text-gray-700">
                      Our chefs at Appam Central prepare each batch of stew with
                      care, allowing the flavors to develop slowly, resulting in
                      a dish that warms both body and soul.
                    </p>
                  </div>
                </MotionWrapper>
              </div>

              {/* Filter Kaapi Story */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <MotionWrapper className="order-2 lg:order-1">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      The Ritual of Filter Kaapi
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Filter Kaapi is more than just a beverage; it&apos;s a cultural
                      institution in South India. This strong, aromatic coffee
                      is brewed using a traditional metal filter, creating a
                      decoction that is then mixed with boiled milk and sugar.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The true art of Filter Kaapi lies in the &quot;pulling&quot;
                      technique, where the coffee is poured back and forth
                      between a tumbler and davara (bowl) from a height,
                      creating a frothy, perfectly mixed drink and cooling it to
                      the ideal temperature.
                    </p>
                    <p className="text-gray-700">
                      At Appam Central, we celebrate this ritual, serving our
                      Filter Kaapi in traditional brass tumblers, inviting our
                      guests to experience the authentic taste and tradition of
                      South Indian coffee culture.
                    </p>
                  </div>
                </MotionWrapper>
                <MotionWrapper className="order-1 lg:order-2" delay={0.2}>
                  <div className="relative h-[350px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/placeholder.svg?height=700&width=700"
                      alt="Filter Kaapi"
                      fill
                      className="object-cover"
                    />
                  </div>
                </MotionWrapper>
              </div>
            </section>

            {/* Banana Leaf Dining Section */}
            <section className="mb-20">
              <div className="bg-amber-50 rounded-xl p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <MotionWrapper>
                    <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                      <Image
                        src="/placeholder.svg?height=800&width=600"
                        alt="Banana Leaf Dining"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </MotionWrapper>
                  <MotionWrapper delay={0.2}>
                    <div>
                      <h2 className="text-3xl font-bold mb-6">
                        The Tradition of Banana Leaf Dining
                      </h2>
                      <p className="text-gray-700 mb-4">
                        In South India, serving meals on banana leaves is an
                        age-old tradition that goes beyond mere presentation.
                        The banana leaf is not just a natural, biodegradable
                        plate; it&apos;s believed to impart subtle flavors to the
                        food and has antimicrobial properties that make it an
                        ideal dining surface.
                      </p>
                      <p className="text-gray-700 mb-4">
                        The arrangement of food on the banana leaf follows a
                        specific order, with each item placed in a particular
                        position according to tradition. This thoughtful
                        arrangement ensures a balanced progression of flavors
                        throughout the meal.
                      </p>
                      <p className="text-gray-700 mb-4">
                        At Appam Central, we honor this tradition by serving our
                        special thalis on fresh banana leaves, allowing our
                        guests to experience the authentic South Indian dining
                        custom that connects them to centuries of culinary
                        heritage.
                      </p>
                      <p className="text-gray-700">
                        Folding the banana leaf towards you at the end of the
                        meal is a gesture of appreciation for the food—a
                        beautiful custom that we encourage our guests to
                        participate in.
                      </p>
                    </div>
                  </MotionWrapper>
                </div>
              </div>
            </section>

            {/* Our Team Section */}
            <section>
              <MotionWrapper>
                <h2 className="text-3xl font-bold text-center mb-12">
                  Meet Our Team
                </h2>
              </MotionWrapper>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <MotionWrapper key={member.name} delay={index * 0.1}>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="relative h-80">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-1">
                          {member.name}
                        </h3>
                        <p className="text-amber-600 mb-3">{member.role}</p>
                        <p className="text-gray-600">{member.bio}</p>
                      </div>
                    </div>
                  </MotionWrapper>
                ))}
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}

const teamMembers = [
  {
    name: "Anita Menon",
    role: "Founder & Head Chef",
    bio: "With over 25 years of culinary experience, Anita brings the authentic flavors of her grandmother's kitchen to Appam Central.",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Rajesh Kumar",
    role: "Executive Chef",
    bio: "Trained in traditional South Indian cooking techniques, Rajesh specializes in creating the perfect balance of spices in every dish.",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Priya Nair",
    role: "Pastry Chef",
    bio: "Priya combines traditional South Indian sweets with modern techniques to create unique dessert experiences.",
    image: "/placeholder.svg?height=400&width=300",
  },
];
