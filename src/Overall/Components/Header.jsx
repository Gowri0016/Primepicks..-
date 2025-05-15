import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch, faSignInAlt, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import logo from "../../Asset/Primepick.png";


export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Function to add a product to the cart
  const addToCart = () => setCartCount((prev) => prev + 1);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="transition-all duration-500 bg-white text-black">
      <nav className="bg-gradient-to-r from-orange-400 to-orange-600 w-full h-16 flex justify-between items-center px-4 shadow-lg rounded-3xl">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-32 cursor-pointer hover:scale-105 transition" onClick={() => navigate("/")} />

        {/* Search Bar */}
        <div className="flex items-center w-2/3 md:w-2/5 p-2 rounded-full bg-white shadow-inner">
          <FontAwesomeIcon icon={faSearch} className="mr-2 text-gray-500" />
          <input type="search" className="flex-grow focus:outline-none text-black" placeholder="Search..." />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => navigate("/Delivery")} className="p-2">Delivery</button>
          
          {/* Add to Cart Button */}
          <button 
            onClick={() => { 
              addToCart(); // Simply add to cart
              navigate("/Cart"); // Navigate to Cart page
            }} 
            className="relative p-2">
            Add to Cart
            <FontAwesomeIcon icon={faShoppingCart} size="lg" className="ml-2" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartCount}
              </span>
            )}
          </button>

          <button onClick={() => navigate("/orders")} className="p-2">Orders</button>
          <button onClick={() => navigate("/login")} className="p-2"><FontAwesomeIcon icon={faSignInAlt} size="lg" /> Login</button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button onClick={toggleMobileMenu} className="md:hidden p-2">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-orange-300 p-4 shadow-lg rounded-t-xl space-y-2">
          <button onClick={() => navigate("/")} className="block">Home</button>
          <button onClick={() => navigate("/about")} className="block">About</button>
          <button onClick={() => navigate("/services")} className="block">Services</button>
          <button onClick={() => navigate("/contact")} className="block">Contact</button>
        </div>
      )}
    </div>
  );
}
