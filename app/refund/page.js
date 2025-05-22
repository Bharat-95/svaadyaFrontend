// app/cancellation-refund/page.tsx or pages/cancellation-refund.tsx

import React from 'react';

const CancellationAndRefundPage = () => {
  return (
    <div className="bg-[#F5EEDC] min-h-screen px-6 py-10 md:px-20">
      <h1 className="text-3xl font-bold text-center text-[#D62828] mb-8">
        Cancellation & Refund Policy
      </h1>

      <div className="bg-white rounded-lg shadow-md p-6 space-y-6 text-[#333]">
        <p>
          At <strong>Svaadya</strong>, we aim to provide a seamless and
          satisfying home-cooked food experience. However, due to the nature of
          our service, cancellations and refunds are subject to the following
          conditions:
        </p>

        <h2 className="text-xl font-semibold text-[#D62828]">1. Order Cancellation</h2>
        <p>
          ● Orders can be canceled only within 5 minutes of placing them.<br />
          ● Once the preparation has started, cancellation is not permitted.<br />
          ● To cancel, please contact our support team immediately at{' '}
          <a href="mailto:support@svaadya.com" className="text-blue-600 underline">
            Bharat@svaadya.com
          </a>.
        </p>

        <h2 className="text-xl font-semibold text-[#D62828]">2. Refunds</h2>
        <p>
          ● Refunds will be initiated only if the order was canceled within the
          allowed timeframe or if the food was not delivered.<br />
          ● Refunds for failed or duplicate transactions will be processed
          within 5–7 business days.<br />
          ● If you are eligible for a refund, it will be credited to your
          original payment method.
        </p>

        <h2 className="text-xl font-semibold text-[#D62828]">3. No Refund Cases</h2>
        <p>
          ● No refunds will be provided for complaints related to taste,
          quantity, or preferences once the food is delivered.<br />
          ● Orders canceled after the preparation has started are not eligible
          for refunds.
        </p>

        <h2 className="text-xl font-semibold text-[#D62828]">4. Contact</h2>
        <p>
          For any issues regarding your order, please email us at{' '}
          <a href="mailto:support@svaadya.com" className="text-blue-600 underline">
            Bharat@svaadya.com
          </a>{' '}
          or reach us via the help section in the app.
        </p>
      </div>
    </div>
  );
};

export default CancellationAndRefundPage;
