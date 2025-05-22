// app/privacy/page.tsx or pages/privacy.tsx

import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-[#F5EEDC] min-h-screen px-6 py-10 md:px-20">
      <h1 className="text-3xl font-bold text-center text-[#D62828] mb-8">
        Privacy Policy
      </h1>

      <div className="bg-white rounded-lg shadow-md p-6 space-y-6 text-[#333]">
        <p>
          At <strong>Svaadya</strong>, we are committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, disclose,
          and safeguard your information when you use our mobile application or
          website.
        </p>

        <h2 className="text-xl font-semibold text-[#D62828]">1. Information We Collect</h2>
        <p>We may collect the following information:</p>
        <ul className="list-disc list-inside pl-4">
          <li>Your name, phone number, email address</li>
          <li>Delivery address and location data (only when permission is granted)</li>
          <li>Order history and preferences</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#D62828]">2. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul className="list-disc list-inside pl-4">
          <li>Process and deliver your orders</li>
          <li>Improve our services and customer experience</li>
          <li>Send you updates, offers, and support messages</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#D62828]">3. Sharing Your Information</h2>
        <p>
          We do not sell or rent your personal data. We may share it with:
        </p>
        <ul className="list-disc list-inside pl-4">
          <li>Delivery partners to fulfill your orders</li>
          <li>Service providers for analytics and notifications</li>
          <li>Law enforcement if required by law</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#D62828]">4. Data Security</h2>
        <p>
          We use industry-standard encryption and secure servers to protect
          your data.
        </p>

        <h2 className="text-xl font-semibold text-[#D62828]">5. Your Choices</h2>
        <p>
          You can review and update your account information anytime. You may
          also contact us to delete your account or data.
        </p>

        <h2 className="text-xl font-semibold text-[#D62828]">6. Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page.
        </p>

        <h2 className="text-xl font-semibold text-[#D62828]">7. Contact Us</h2>
        <p>
          If you have questions about this policy, please email us at{' '}
          <a href="mailto:support@svaadya.com" className="text-blue-600 underline">
            Bharat@svaadya.com
          </a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
