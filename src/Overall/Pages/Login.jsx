import React from 'react';
import ShoppingCart from '../../Asset/online-shop.png';

export default function Login() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between md:px-12 py-12">
      <div className="md:flex w-1/2 justify-center">
        <img className="max-w-full h-auto" src={ShoppingCart} alt="Shopping Cart" />
      </div>

      <form className="mt-8 md:mt-0 w-full md:w-1/3 max-w-sm p-6 bg-white rounded-xl shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Log in to PixelPix</h1>
        <p className="text-gray-600 mb-6">Enter your details below</p>

        <input
          className="w-full mb-4 p-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Email or Phone Number"
          pattern="^(\+?\d{1,4}[\s-]?)?(\(?\d{3}\)?[\s-]?)?\d{3}[\s-]?\d{4}$|^[^\s@]+@[^\s@]+\.[^\s@]+$"
          title="Enter a valid email or phone number"
          required
        />

        <input
          className="w-full mb-4 p-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          type="password"
          placeholder="Password"
          required
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-black text-white py-2 rounded-md hover:bg-opacity-90 transition"
        >
          Login
        </button>

        <button
          type="button"
          className="mt-4 text-blue-500 underline hover:text-blue-600"
        >
          Forgot Password?
        </button>
      </form>
    </div>
  );
}