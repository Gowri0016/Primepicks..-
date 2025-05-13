import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faShoppingCart, faSearch, faSignInAlt, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import logo from "../Asset/Primepick.png";

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the mobile menu toggle
  const navigate = useNavigate();

  // Toggle dark mode
  const toggleTheme = () => setIsDark((prev) => !prev);

  // Add to cart function
  const addToCart = () => setCartCount((prev) => prev + 1);

  // Toggle mobile menu
  const toggleMobileMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className={`transition-all duration-500 ${isDark ? "bg-gray-900 text-white min-h-screen" : "bg-white text-black"}`}>
      <nav className="bg-orange-300 w-full h-16 flex justify-between items-center px-4 shadow-lg rounded-3xl">
        <img className="w-32 cursor-pointer transform hover:scale-105 transition" src={logo} alt="Logo" onClick={() => navigate("/")} />

        {/* Search Bar */}
        <div className="flex items-center w-2/3 md:w-2/5 p-2 rounded-full bg-white shadow-inner">
          <FontAwesomeIcon icon={faSearch} className="mr-2 text-gray-500" />
          <input className="flex-grow focus:outline-none text-black" type="search" placeholder="Search..." />
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="p-2 hover:text-blue-500 transition transform hover:scale-110">
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} size="lg" />
          </button>

          {/* Delivery Button */}
          <button onClick={() => navigate("/delivery")} className="p-2">Delivery</button>

          {/* Cart Button */}
          <button onClick={() => { addToCart(); navigate("/cart"); }} className="relative p-2">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartCount}
              </span>
            )}
          </button>

          {/* Orders Button */}
          <button onClick={() => navigate("/orders")} className="p-2">Orders</button>

          {/* Login Button */}
          <button onClick={() => navigate("/login")} className="p-2">
            <FontAwesomeIcon icon={faSignInAlt} size="lg" />
            <span>Login</span>
          </button>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <button onClick={toggleMobileMenu} className="md:hidden p-2">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-orange-300 p-4 shadow-lg rounded-t-xl">
          <button onClick={() => navigate("/")} className="block p-2">Home</button>
          <button onClick={() => navigate("/about")} className="block p-2">About</button>
          <button onClick={() => navigate("/services")} className="block p-2">Services</button>
          <button onClick={() => navigate("/contact")} className="block p-2">Contact</button>
        </div>
      )}
    </div>
  );
}
