// app/shipping-delivery/page.tsx or pages/shipping-delivery.tsx

import React from 'react';

const ShippingAndDeliveryPage = () => {
  return (
    <div className="bg-[#F5EEDC] min-h-screen px-6 py-10 md:px-20">
      <h1 className="text-3xl font-bold text-center text-[#D62828] mb-8">
        Shipping & Delivery Policy
      </h1>

      <div className="bg-white rounded-lg shadow-md p-6 space-y-6 text-[#333]">
        <p>
          At <strong>Svaadya</strong>, we are committed to delivering your home-cooked meals in a timely and safe manner.
        </p>

        <h2 className="text-xl font-semibold text-[#D62828]">1. Service Availability</h2>
        <p>
          ● Our services are currently available in select locations within your city.<br />
          ● Delivery areas are determined based on the chef’s service radius and availability.
        </p>

        <h2 className="text-xl font-semibold text-[#D62828]">2. Delivery Time</h2>
        <p>
          ● The estimated delivery time is usually between <strong>45 to 90 minutes</strong> depending on location and dish preparation time.<br />
          ● Delays may occur due to weather, traffic, or high order volume, and we appreciate your patience.
        </p>

        <h2 className="text-xl font-semibold text-[#D62828]">3. Delivery Charges</h2>
        <p>
          ● A delivery fee may apply based on distance and order value.<br />
          ● You will see the applicable delivery fee during checkout before confirming your order.
        </p>

        <h2 className="text-xl font-semibold text-[#D62828]">4. Order Tracking</h2>
        <p>
          ● You can track the status of your order in the Svaadya app under “My Orders.”<br />
          ● Real-time updates will be provided once your order is accepted and out for delivery.
        </p>

        <h2 className="text-xl font-semibold text-[#D62828]">5. Delivery Issues</h2>
        <p>
          ● If you face any issues like delay, wrong item, or undelivered food, please contact us immediately at{' '}
          <a href="mailto:support@svaadya.com" className="text-blue-600 underline">
            Bharat@svaadya.com
          </a>.
        </p>

        <p>
          We strive to provide the best experience and ensure your meals reach you warm, fresh, and on time.
        </p>
      </div>
    </div>
  );
};

export default ShippingAndDeliveryPage;
