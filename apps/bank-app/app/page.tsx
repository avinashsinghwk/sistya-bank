"use client";

import { Card } from "@/components/custom/Card";
import { InfoBox } from "@/components/custom/InfoBox";
import { MyCarousel } from "@/components/custom/MyCarousel";
import { Testimonial } from "@/components/custom/Testimonial";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default function RootPage() {
  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center py-10 px-6 bg-white">
        <h1 className="text-5xl font-extrabold text-red-600 drop-shadow md:text-6xl">
          Welcome to Sistya Bank
        </h1>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl leading-relaxed">
          Secure, fast, and innovative banking solutions tailored to your needs.
          Save, invest, and manage your transactions with ease.
        </p>
        <Button
          onClick={() => redirect("/register")}
          className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-red-700 transition"
        >
          Create an Account
        </Button>
      </section>

      {/* Carousel Section */}
      <section className="flex justify-center items-center w-full px-4">
        <div className="w-full max-w-4xl">
          <MyCarousel />
        </div>
      </section>

      {/* Bank Features */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Why Choose Sistya Bank?
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
          We offer a range of services designed to make banking secure, simple,
          and convenient.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <InfoBox
            title="🔒 Secure Banking"
            description="Advanced encryption and fraud protection ensure your money is safe with us."
          />
          <InfoBox
            title="💳 Smart Transactions"
            description="Instant transfers, automated bill payments, and seamless mobile banking."
          />
          <InfoBox
            title="📞 24/7 Customer Support"
            description="Our support team is always available to assist you with any issues."
          />
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          What Our Customers Say
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
          Trusted by thousands of users worldwide.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <Testimonial
            star="⭐️⭐️⭐️⭐️⭐️"
            about='"Sistya Bank has completely transformed the way I manage my finances. Highly recommended!"'
            name="- Mahesh Singh"
          />
          <Testimonial
            star="⭐️⭐️⭐️⭐️⭐️"
            about='"Excellent customer service and super secure banking experience."'
            name="- Madhu Verma"
          />
          <Testimonial
            star="⭐️⭐️⭐️⭐️⭐️"
            about='"It is the only bank that i trust the most."'
            name="- Abhay Poddar"
          />
          <Testimonial
            star="⭐️⭐️⭐️⭐️⭐️"
            about='"Transferering money to my friends has become very easy for me."'
            name="- Maria S."
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16">
        <h3 className="text-3xl font-semibold text-gray-800">
          Join Sistya Bank Today
        </h3>
        <p className="mt-2 text-gray-600 text-lg">
          Experience modern banking with security and convenience.
        </p>
        <Button
          onClick={() => redirect("/register")}
          className="mt-6 bg-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md hover:bg-red-700 transition"
        >
          Open an Account
        </Button>
      </section>
    </div>
  );
}
