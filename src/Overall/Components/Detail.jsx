import React, { useState, useEffect } from 'react';
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

  // Go to previous slide
  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  // Go to next slide
  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  // Auto-slide effect using useEffect and setInterval
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Move to the next slide automatically every 3 seconds
    }, 3000); // Change slide every 3 seconds (3000 ms)

    return () => clearInterval(interval); // Clear interval when component unmounts
  }, [current]);

  return (
    <div>
      <div className="flex flex-cols-2 gap-12 mt-12 mx-60">
        <ul className="font-extralight grid grid-cols-1 gap-3">
          <li><a href="#">Women's Fashion</a></li>
          <li><a href="#">Men's Fashion</a></li>
          <li><a href="#">Electronics</a></li>
          <li><a href="#">Home & Lifestyle</a></li>
          <li><a href="#">Machinery</a></li>
          <li><a href="#">Sports & Outdoors</a></li>
          <li><a href="#">Baby & Toys</a></li>
          <li><a href="#">Groceries & Pet Supplies</a></li>
          <li><a href="#">Health & Beauty</a></li>
        </ul>

              <div className="w-[800px] h-[400px] relative s overflow-hidden rounded-xl shadow-lg mx-auto">
                  <div
                      className="flex transition-transform duration-1000 ease-in-out"
                      style={{
                          transform: `translateX(-${current * 800}px)`, // Move each image by 600px
                          width: `${slides.length * 800}px`, // Container width should be the total of all slides
                      }}
                  >
                      {slides.map((slide, index) => (
                          <div
                              key={index}
                              className="w-[800px] h-[400px] flex-shrink-0 bg-center bg-cover"
                              style={{ backgroundImage: `url(${slide.image})` }}
                          />
                      ))}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
                      <button
                          onClick={prevSlide}
                          className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
                      >
                          <i className="fa-solid fa-chevron-left text-xl" />
                      </button>
                  </div>

                  <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
                      <button
                          onClick={nextSlide}
                          className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
                      >
                          <i className="fa-solid fa-chevron-right text-xl" />
                      </button>
                  </div>
              </div>
      </div>
    </div>
  );
}
