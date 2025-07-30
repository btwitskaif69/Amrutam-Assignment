import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsHandbag } from 'react-icons/bs';
import bg from '@/assets/search.png'; // Make sure this path is correct

const Search = () => {
  return (
    // Main container with relative positioning for the background image
    <div className="relative w-full overflow-hidden">
      {/* Background Image */}
      <img 
        src={bg} 
        alt="Leafy background" 
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      
      {/* Content container, centered with padding */}
      <div className="relative z-10 flex flex-col items-center justify-center py-10 text-center">
        
        {/* Title */}
        <h1 className="text-5xl font-bold text-[#3A4F4D] mb-10">
          Store
        </h1>
        
        {/* Search Bar and Button Container */}
        <div className="mt-8 flex items-center gap-4">
          
          {/* Search Input with Icon */}
          <div className="relative w-96">
            <FiSearch 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" 
              size={20} 
            />
            <input 
              type="text" 
              placeholder="Search for Kuntal Care" 
              className="w-full rounded-lg border-none bg-white py-3 pl-12 pr-4 text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          
          {/* Handbag/Briefcase Button */}
          <button 
            className="flex items-center justify-center rounded-lg bg-white p-3 shadow-md transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
            aria-label="View bag"
          >
            <BsHandbag size={24} className="text-[#3A4F4D]" />
          </button>

        </div>
      </div>
    </div>
  );
};

export default Search;
