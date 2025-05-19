import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Asset/Primepick.png";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-12 px-4 shadow-2xl overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        <div className="transform hover:scale-105 transition duration-300">
          <img src={logo} alt="Logo" className="w-24 h-24 object-contain drop-shadow-3xl" />
          <p className="text-sm mt-3 drop-shadow-lg">
            Your one-stop destination for quality products delivered at your doorstep.
          </p>
        </div>

        <div className="transform hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold mb-3 drop-shadow-lg">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/Aboutus" className="hover:underline">About Us</Link></li>
            <li><Link to="/Services" className="hover:underline">Services</Link></li>
            <li><Link to="/Contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-lime-400 opacity-20 blur-3xl"></div>
      <div className="text-center text-sm mt-6 relative z-10">© 2025 PrimePick. All rights reserved.</div>
    </footer>
  );
}
