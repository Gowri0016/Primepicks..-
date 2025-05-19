import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHeart, faCartShopping, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="bg-black w-full h-10 text-white">
        <h1 className="p-2 font-extralight text-center text-xs md:text-sm">Summer Sales For All Swim Suits And Free Express Delivery - OFF 50%! <span className="underline">ShopNow</span> </h1>
      </div>

      <nav className="bg-white w-full h-20 shadow-xl p-3 flex justify-between items-center md:px-8 relative">

         <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-xl" />
        </button>

        <h1 className="text-blue-500 font-extrabold text-3xl md:text-4xl">PIXEL<span className="text-black">PIX</span></h1>

       

        <div className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:flex md:gap-5 transition-all duration-300 ${menuOpen ? 'block' : 'hidden md:block'}`}>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-5 p-4 md:p-0">
            <li><a className="no-underline hover:underline" href="/">Home</a></li>
            <li><a className="no-underline hover:underline" href="#">Contact</a></li>
            <li><a className="no-underline hover:underline" href="#">About</a></li>
            <li><a className="no-underline hover:underline" href="/Login">Sign Up</a></li>
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <input className="w-full md:w-48 h-8 p-2 outline-none bg-slate-100" type="search" placeholder="What are you looking?" />
          <div className="flex space-x-4">
            <FontAwesomeIcon icon={faSearch} className="text-gray-600 cursor-pointer" />
            <FontAwesomeIcon icon={faHeart} className="text-red-500 cursor-pointer" />
            <FontAwesomeIcon icon={faCartShopping} className="text-blue-500 cursor-pointer" />
          </div>
        </div>
      </nav>
    </div>
  );
}
