// app/page.tsx or pages/index.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="bg-[#F5EEDC] text-[#333]">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#D62828] leading-snug mb-4">
            Svaadya – Where Hunger Meets Home
          </h1>
          <p className="text-lg mb-6">
            Enjoy freshly cooked, homestyle meals from local chefs near you. Order now and taste the love in every bite!
          </p>
          <Link href="/chefs">
            <button className="bg-[#218838] text-white px-6 py-3 rounded-lg hover:bg-[#1b6f2e] transition">
              Explore Chefs
            </button>
          </Link>
        </div>
        <div className="mt-10 md:mt-0">
          <Image
            src="/images/hero-meal.jpg" // Replace with your actual image
            alt="Delicious Food"
            width={500}
            height={400}
            className="rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-20 py-12 bg-white">
        <h2 className="text-3xl font-bold text-center text-[#D62828] mb-8">Why Choose Svaadya?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <Image src="/icons/home-chef.png" alt="Home Chef" width={80} height={80} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Authentic Home Food</h3>
            <p className="text-sm mt-2">Prepared by skilled home chefs using fresh and local ingredients.</p>
          </div>
          <div>
            <Image src="/icons/delivery.png" alt="Delivery" width={80} height={80} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Fast Delivery</h3>
            <p className="text-sm mt-2">Timely delivery that keeps your meal hot and fresh at your doorstep.</p>
          </div>
          <div>
            <Image src="/icons/secure-payment.png" alt="Secure Payment" width={80} height={80} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Secure Payments</h3>
            <p className="text-sm mt-2">Easy and safe transactions powered by Razorpay integration.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-20 py-12 text-center bg-[#FFD8B1]">
        <h2 className="text-3xl font-bold text-[#D62828] mb-4">Ready to Taste the Best Home Food?</h2>
        <p className="text-lg mb-6">Browse our chefs, select your favorite dishes, and order with ease.</p>
        <Link href="/chefs">
          <button className="bg-[#D62828] text-white px-6 py-3 rounded-lg hover:bg-[#a31f1f] transition">
            View Menus
          </button>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
