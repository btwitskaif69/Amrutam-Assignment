import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';
import { FiChevronRight } from 'react-icons/fi';

// --- Placeholder Image Imports ---
// Replace these with the actual paths to your images in the /assets folder
import product1 from '@/assets/product-1.png';
import product2 from '@/assets/product-2.png';
import product3 from '@/assets/product-3.png';

// --- Star Rating Helper Component ---
const StarRating = ({ rating, count }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className="text-yellow-400" />
      ))}
      <span className="ml-1 text-sm text-gray-500">({count})</span>
    </div>
  );
};

// --- Product Card Component ---
const ProductCard = ({ imageSrc, title, price, volume, rating, ratingCount }) => {
  return (
    <div className="flex w-72 flex-shrink-0 flex-col gap-3 font-sans md:w-80">
      {/* Product Image */}
      <div className="overflow-hidden rounded-xl bg-gray-100">
        <img
          src={imageSrc}
          alt={title}
          className="h-72 w-full object-cover transition-transform duration-300 hover:scale-105 md:h-80"
        />
      </div>

      {/* Product Title */}
      <h3 className="text-base font-medium text-[#3A4F4D]">{title}</h3>

      {/* Price, Rating, and Add Button */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-[#475D5B]">
            ₹ {price.toFixed(2)}{' '}
            <span className="text-sm font-normal text-gray-500">- {volume}</span>
          </p>
          <StarRating rating={rating} count={ratingCount} />
        </div>
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-white shadow-md transition hover:bg-green-700 md:h-10 md:w-10"
          aria-label="Add to cart"
        >
          <FaPlus size={16} />
        </button>
      </div>
    </div>
  );
};

// --- Parent Component to Display the Collection ---
const SummerCollection = () => {
  const products = [
    {
      imageSrc: product1,
      title: 'Amrutam Kuntal care Hair Spa | Do-it yourself Hair Treatment',
      price: 649.00,
      volume: '200 ml',
      rating: 5,
      ratingCount: 52,
    },
    {
      imageSrc: product2,
      title: 'Amrutam Kuntal Care Herbal Shampoo | Healthy, Natural and Dynamic Hair',
      price: 649.00,
      volume: '200 ml',
      rating: 5,
      ratingCount: 52,
    },
    {
      imageSrc: product3,
      title: 'Amrutam Nari Sondarya Malt | Complete Care For Women’s Health And Beauty',
      price: 649.00,
      volume: '200 ml',
      rating: 5,
      ratingCount: 52,
    },
  ];

  return (
    <div className="bg-white p-8 lg:p-16">
      {/* This new outer container will center the content block within the page */}
      <div className="flex justify-center">
        {/* This inner container holds all the content and will be centered */}
        <div>
          <h2 className="mb-6 text-2xl font-bold text-gray-800">Summer Collection</h2>
          <div className="flex items-center gap-6">
            {/* Product Cards Container */}
            <div className="flex items-center gap-6 overflow-x-auto pb-4">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>

            {/* Next Button */}
            <button
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-500 shadow-sm transition hover:bg-gray-100"
              aria-label="Next collection"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummerCollection;