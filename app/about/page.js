// app/about/page.tsx or pages/about.tsx

import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="bg-[#F5EEDC] min-h-screen px-6 py-10 md:px-20">
      <h1 className="text-3xl font-bold text-center text-[#D62828] mb-8">
        About Svaadya
      </h1>

      <div className="bg-white rounded-lg shadow-md p-6 space-y-6 text-[#333]">
        <p>
          <strong>Svaadya</strong> is a home-cooked food delivery platform built on the passion for authentic, hygienic, and affordable meals made by talented home chefs — primarily homemakers and culinary artists.
        </p>

        <h2 className="text-xl font-semibold text-[#D62828]">Our Mission</h2>
        <p>
          We aim to bring the warmth and nutritional value of homemade food to every doorstep. By connecting customers with local chefs, we empower communities and promote healthy eating habits.
        </p>

        <h2 className="text-xl font-semibold text-[#D62828]">Why Svaadya?</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Delicious and wholesome meals prepared fresh at home</li>
          <li>Support for women and small-scale chefs to showcase their cooking talents</li>
          <li>Transparent pricing and timely delivery</li>
          <li>Options for customizations, dietary preferences, and local cuisines</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#D62828]">How It Works</h2>
        <p>
          Customers browse dishes available in their location, place orders through our user-friendly app, and get meals delivered quickly and safely from our trusted home chefs.
        </p>

        <h2 className="text-xl font-semibold text-[#D62828]">Join Us</h2>
        <p>
          Whether you're a food lover looking for soul-satisfying meals or a home chef ready to share your creations, <strong>Svaadya</strong> is here to serve and support you.
        </p>

        <p>
          For partnerships or inquiries, reach us at{' '}
          <a href="mailto:support@svaadya.com" className="text-blue-600 underline">
            Bharat@svaadya.com
          </a>.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
