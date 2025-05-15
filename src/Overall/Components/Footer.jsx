import React from "react";
import logo from "../../Asset/Primepick.png"; // Ensure the path is correct

const Prime = "Some Text"; // Define it properly


export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-400 to-orange-600 text-white py-8 px-4 shadow-lg">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
         <img src={Prime} alt="Logo" />

        <p className="text-sm">Your one-stop destination for quality products delivered at your doorstep.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/Aboutus" className="hover:underline">About Us</a></li>
            <li><a href="/Services" className="hover:underline">Services</a></li>
            <li><a href="/Contact" className="hover:underline">Contact</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:scale-110 transition">🌐</a>
            <a href="#" className="hover:scale-110 transition">📘</a>
            <a href="#" className="hover:scale-110 transition">🐦</a>
            <a href="#" className="hover:scale-110 transition">📸</a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-6">© 2025 PrimePick. All rights reserved.</div>
    </footer>
  );
}
