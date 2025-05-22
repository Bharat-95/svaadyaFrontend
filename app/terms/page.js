// app/terms/page.tsx or pages/terms.tsx

import React from 'react';

const TermsAndConditionsPage = () => {
  return (
    <div className="bg-[#F5EEDC] min-h-screen px-6 py-10 md:px-20">
      <h1 className="text-3xl font-bold text-center text-[#D62828] mb-8">
        Terms and Conditions
      </h1>

      <div className="bg-white rounded-lg shadow-md p-6 space-y-6 text-[#333]">
        <p>
          Welcome to <strong>Svaadya</strong>. By accessing or using our
          platform (website or app), you agree to comply with and be bound by
          the following Terms and Conditions.
        </p>

        <h2 className="text-xl font-semibold text-[#D62828]">1. Use of the Platform</h2>
        <p>
          You may use the Svaadya platform only for lawful purposes. You must
          not use it in any way that breaches local, national, or international
          law or regulations.
        </p>

        <h2 className="text-xl font-semibold text-[#D62828]">2. Account and Registration</h2>
        <p>
          You must provide accurate and complete information during
          registration. You are responsible for maintaining the confidentiality
          of your login details and all activities under your account.
        </p>

        <h2 className="text-xl font-semibold text-[#D62828]">3. Orders and Payments</h2>
        <p>
          All orders placed on Svaadya are subject to availability and
          acceptance. We reserve the right to cancel any order. Payments are
          securely processed via integrated payment gateways.
        </p>

        <h2 className="text-xl font-semibold text-[#D62828]">4. Delivery</h2>
        <p>
          We strive to deliver your food within the estimated time. However,
          delays may occur due to external factors such as weather or traffic.
        </p>

        <h2 className="text-xl font-semibold text-[#D62828]">5. Cancellation and Refunds</h2>
        <p>
          Orders once placed may not be canceled after preparation has started.
          Refunds will be processed only under eligible conditions. Please refer
          to our Refund Policy.
        </p>

        <h2 className="text-xl font-semibold text-[#D62828]">6. Intellectual Property</h2>
        <p>
          All content on Svaadya, including logos, images, and text, is our
          intellectual property. You may not copy, reproduce, or distribute it
          without permission.
        </p>

        <h2 className="text-xl font-semibold text-[#D62828]">7. Modifications</h2>
        <p>
          We may update these Terms from time to time. Continued use of the
          platform implies acceptance of the updated terms.
        </p>

        <h2 className="text-xl font-semibold text-[#D62828]">8. Contact</h2>
        <p>
          For any queries, please email us at{' '}
          <a href="mailto:support@svaadya.com" className="text-blue-600 underline">
            Bharat@svaadya.com
          </a>.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
