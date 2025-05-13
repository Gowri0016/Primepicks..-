import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv, faMobile, faLaptop, faTshirt, faHome, faGamepad, faBicycle, faTools, faHdd } from '@fortawesome/free-solid-svg-icons';

export default function Detail() {
  const [activeCategory, setActiveCategory] = useState('electronics');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const products = {
    electronics: [
      { id: 1, name: 'Smart TV', price: 1200, image: 'https://via.placeholder.com/100', icon: faTv },
      { id: 2, name: 'Bluetooth Speaker', price: 100, image: 'https://via.placeholder.com/100', icon: faTv }
    ],
    mobiles: [
      { id: 3, name: 'iPhone 13', price: 999, image: 'https://via.placeholder.com/100', icon: faMobile },
      { id: 4, name: 'Samsung Galaxy S21', price: 899, image: 'https://via.placeholder.com/100', icon: faMobile }
    ],
    laptops: [
      { id: 5, name: 'MacBook Pro', price: 1500, image: 'https://via.placeholder.com/100', icon: faLaptop },
      { id: 6, name: 'Dell Inspiron', price: 800, image: 'https://via.placeholder.com/100', icon: faLaptop }
    ],
    clothing: [
      { id: 7, name: 'T-Shirt', price: 20, image: 'https://via.placeholder.com/100', icon: faTshirt },
      { id: 8, name: 'Jeans', price: 40, image: 'https://via.placeholder.com/100', icon: faTshirt }
    ],
    home: [
      { id: 9, name: 'Washing Machine', price: 500, image: 'https://via.placeholder.com/100', icon: faHome },
      { id: 10, name: 'Refrigerator', price: 700, image: 'https://via.placeholder.com/100', icon: faHome }
    ],
    gaming: [
      { id: 11, name: 'Gaming Console', price: 300, image: 'https://via.placeholder.com/100', icon: faGamepad },
      { id: 12, name: 'VR Headset', price: 200, image: 'https://via.placeholder.com/100', icon: faGamepad }
    ],
    sports: [
      { id: 13, name: 'Bicycle', price: 150, image: 'https://via.placeholder.com/100', icon: faBicycle },
      { id: 14, name: 'Yoga Mat', price: 30, image: 'https://via.placeholder.com/100', icon: faBicycle }
    ],
    tools: [
      { id: 15, name: 'Drill Machine', price: 80, image: 'https://via.placeholder.com/100', icon: faTools },
      { id: 16, name: 'Screwdriver Set', price: 15, image: 'https://via.placeholder.com/100', icon: faTools }
    ],
    storage: [
      { id: 17, name: 'External Hard Drive', price: 100, image: 'https://via.placeholder.com/100', icon: faHdd },
      { id: 18, name: 'USB Drive', price: 10, image: 'https://via.placeholder.com/100', icon: faHdd }
    ]
  };

  return (
    <div className='detail-container flex flex-col md:flex-row'>
      <div className='relative md:w-1/4 p-4 border-b md:border-r border-gray-300'>
        <button onClick={() => setIsCategoryOpen(!isCategoryOpen)} className='md:hidden bg-blue-500 text-white px-4 py-2 rounded'>Categories</button>

        <div className={`${isCategoryOpen ? 'block' : 'hidden'} md:block`}>        
          <h2 className='text-xl font-bold mb-4'>Categories</h2>
          {Object.keys(products).map((category) => (
            <button key={category} onClick={() => { setActiveCategory(category); setIsCategoryOpen(false); }} className={`block w-full text-left p-2 ${activeCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              <FontAwesomeIcon icon={products[category][0]?.icon} className='mr-2' />
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className='cart-items w-full md:w-3/4 p-4'>
        <h3 className='text-center font-bold'>{activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Products</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
          {products[activeCategory]?.map((item) => (
            <div key={item.id} className='p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105'>
              <img src={item.image} alt={item.name} className='w-full h-40 object-cover rounded-md mb-2' />
              <h4 className='font-bold text-lg'>{item.name}</h4>
              <p className='text-gray-600'>${item.price}</p>
              <button className='mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition'>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
