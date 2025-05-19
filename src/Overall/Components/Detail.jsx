import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../../Asset/Dasbord.png';
import img2 from '../../Asset/Pixel-b.png';
import img3 from '../../Asset/Plb.png';
import img4 from '../../Asset/Plm.png';
import img5 from '../../Asset/Pixel.png';

const slides = [
  { image: img1, title: 'GEXUS', desc: 'LM' },
  { image: img2, title: 'GEXUS', desc: 'VIP' },
  { image: img3, title: 'GEXUS', desc: 'VIP' },
  { image: img4, title: 'GEXUS', desc: 'VIP' },
  { image: img5, title: 'GEXUS', desc: 'VIP' },
];

export default function Header() {
  const [current, setCurrent] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const carouselRef = useRef(null);

  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [current, autoSlide]);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 mt-12 mx-4 md:mx-12">
      <div className="relative md:w-1/4 overflow-hidden">
        <ul 
          ref={carouselRef}
          className="flex md:flex-col md:space-y-3 overflow-x-auto scrollbar-hidden md:overflow-y-auto w-full md:h-[400px]">
          {['Women\'s Fashion', "Men's Fashion", 'Electronics', 'Home & Lifestyle', 'Machinery', 'Sports & Outdoors', 'Baby & Toys', 'Groceries & Pet Supplies', 'Health & Beauty'].map((item, index) => (
            <li key={index} className="flex-shrink-0 md:flex-shrink text-sm md:text-base p-2 hover:text-blue-600 transition-colors">
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative w-full md:w-3/4 h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-lg" onMouseEnter={() => setAutoSlide(false)} onMouseLeave={() => setAutoSlide(true)}>
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)`, width: `${slides.length * 100}%` }}>
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 bg-center bg-cover" style={{ backgroundImage: `url(${slide.image})` }} />
          ))}
        </div>

        <button className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow" onClick={prevSlide}><ChevronLeft className="w-6 h-6" /></button>

        <button className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow" onClick={nextSlide}><ChevronRight className="w-6 h-6" /></button>
      </div>
    </div>
  );
}
