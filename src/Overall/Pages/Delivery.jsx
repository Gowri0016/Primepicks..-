import React from "react";

export default function Delivery() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="max-w-3xl w-full text-center p-6 bg-white bg-opacity-80 rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Payment Methods</h1>
        <p className="text-lg text-gray-600 mb-6">
          We offer a wide range of secure and flexible payment methods, ensuring that your shopping experience is as seamless and convenient as possible.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-xl hover:bg-blue-50 transition">
            <h2 className="text-2xl font-semibold text-gray-800">Credit/Debit Card</h2>
            <p className="text-gray-600">Pay securely using your credit or debit card through our trusted payment gateways.</p>
            <button className="mt-4 w-full py-2 px-4 text-white font-semibold rounded-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition">
              Buy Now
            </button>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-xl hover:bg-blue-50 transition">
            <h2 className="text-2xl font-semibold text-gray-800">PayPal</h2>
            <p className="text-gray-600">Enjoy a fast and secure checkout using PayPal, a globally recognized payment platform.</p>
            <button className="mt-4 w-full py-2 px-4 text-white font-semibold rounded-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition">
              Buy Now
            </button>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-xl hover:bg-blue-50 transition">
            <h2 className="text-2xl font-semibold text-gray-800">Cash on Delivery</h2>
            <p className="text-gray-600">We also offer the option of cash on delivery (COD) for select regions, providing greater flexibility for our customers.</p>
            <button className="mt-4 w-full py-2 px-4 text-white font-semibold rounded-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition">
              Buy Now
            </button>
          </div>
        </div>

        <a
          href="/"
          className="inline-block mt-8 bg-purple-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-purple-700 transition"
        >
          Explore Payment Options
        </a>
      </div>
    </div>
  );
}
