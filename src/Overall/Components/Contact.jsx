import React from 'react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 lg:px-24">
      <h2 className="text-5xl text-center text-blue-600 mb-12">Contact Us</h2>

      <div className="">
        {/* Left: Contact Info */}
        <div className="space-y-10 z-10">
          <div className="flex items-start gap-4">
            <PhoneIcon className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Call To Us</h3>
              <p className="text-sm text-gray-600">We are available 24/7, 7 days a week.</p>
              <p className="text-sm font-medium mt-1 text-blue-900">+91 73580 39616</p>
            </div>
          </div>
          <hr className="h-[1px] bg-gradient-to-r from-blue-400 to-black border-0" />

          <div className="flex items-start gap-4 -scroll-mb-2">
            <EnvelopeIcon className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Write To Us</h3>
              <p className="text-sm text-gray-600">We’ll respond within 24 hours.</p>
              <p className="text-sm font-medium mt-1 text-blue-900">customer@exclusive.com</p>
              <p className="text-sm font-medium text-blue-900">preloggowri@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Decorative Vertical Divider */}
        <div className="p-7"/>


        {/* Right: Contact Form */}
        <form className="md:col-span-1 md:ml-8 space-y-6 z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              required
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              required
            />
            <input
              type="tel"
              placeholder="Your Phone *"
              className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="w-full h-32 border border-gray-300 px-4 py-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <button
            type="submit"
            className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-black text-white px-6 py-3 rounded-md hover:from-blue-700 hover:to-gray-900 transition duration-300 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}