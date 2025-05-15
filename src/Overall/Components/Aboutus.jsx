import React from 'react';

export default function Aboutus() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Our Products</h1>
        <p className="text-lg text-gray-600 mb-6">
          At Poeage, we take pride in delivering premium-quality products designed with a focus on excellence, functionality, and aesthetics. Our offerings are crafted to cater to diverse needs, combining innovative technology with elegant designs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700">Product 1</h2>
            <p className="text-gray-600">Description of Product 1. Highlight features, benefits, and unique qualities.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700">Product 2</h2>
            <p className="text-gray-600">Description of Product 2. Highlight features, benefits, and unique qualities.</p>
          </div>
        </div>
        <a 
          href="/" 
          className="inline-block mt-6 bg-blue-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
        >
          Explore Our Products
        </a>
      </div>
    </div>
  );
}
