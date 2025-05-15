import React from 'react';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center p-8 rounded-lg shadow-lg max-w-lg w-full border border-gray-200">
        <h1 className="text-6xl font-bold mb-4 text-gray-800">404</h1>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Oops! Page Not Found</h2>
        <p className="text-gray-600 mb-6">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <a 
          href="/" 
          className="inline-block bg-blue-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
}
