// app/contact/page.tsx or pages/contact.tsx

import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-[#F5EEDC] min-h-screen py-10 px-6 md:px-20">
      <h1 className="text-3xl font-bold text-center text-[#D62828] mb-10">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form className="bg-white p-8 rounded-lg shadow-md space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-[#D62828]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-[#D62828]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              rows={5}
              placeholder="Your message..."
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-[#D62828]"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#D62828] text-white px-6 py-2 rounded-md hover:bg-[#b31f1f] transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-white p-8 rounded-lg shadow-md space-y-6 text-[#333]">
          <div>
            <h3 className="text-xl font-semibold mb-2">Our Address</h3>
            <p>
              Svaadya <br />
              4-6-32/74/1a, Baba Nagar, Nacharam<br />
              Hyderabad, Telangana – 500076
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p>Bharat@svaadya.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p>+91 7993291554</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Support Hours</h3>
            <p>Mon – Sat: 10:00 AM – 6:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
