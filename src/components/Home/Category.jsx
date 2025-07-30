import React from 'react';
import { TfiLayoutGrid4Alt } from 'react-icons/tfi';
import { FiShield, FiChevronRight } from 'react-icons/fi';

// --- Custom SVG Icon Components ---
// These are created to closely match the icons in your image.

const HairIcon = () => (
  <svg width="30" height="30" viewBox="0 0 64 64" fill="none" stroke="#3A643B" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 12C20 12 12 22 12 32C12 42 20 60 32 60C44 60 52 42 52 32C52 22 44 12 32 12Z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 12C36 8 44 4 50 4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 32C24 26 28 22 32 22" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M48 44L44 40" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SkinIcon = () => (
  <svg width="30" height="30" viewBox="0 0 64 64" fill="none" stroke="#3A643B" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 54C20 44 28 32 44 32" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M48 12C40 16 32 24 32 34" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 24C20 20 28 18 34 20" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="32" cy="32" r="24" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DigestionIcon = () => (
  <svg width="30" height="30" viewBox="0 0 64 64" fill="none" stroke="#3A643B" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 16C24 8 32 4 40 8C48 12 48 24 40 28C32 32 24 40 24 48C24 56 32 60 40 56" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 28C18 20 24 16 30 18" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BonesIcon = () => (
  <svg width="30" height="30" viewBox="0 0 64 64" fill="none" stroke="#3A643B" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 20L44 44" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 28C12 24 12 16 16 12C20 8 28 8 32 12L20 24" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 44L44 32C48 28 56 28 60 32C64 36 64 44 60 48C56 52 48 52 44 48" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


// --- Main Category Component ---

const Category = () => {
  const categories = [
    { name: 'All', icon: <TfiLayoutGrid4Alt /> },
    { name: 'Hair', icon: <HairIcon /> },
    { name: 'Skin', icon: <SkinIcon /> },
    { name: 'Digestion', icon: <DigestionIcon /> },
    { name: 'Bones', icon: <BonesIcon /> },
    { name: 'Immunity', icon: <FiShield /> },
    { name: 'More', icon: <FiChevronRight /> },
  ];

  return (
    <div className="flex w-full items-center justify-center py-8">
      <div className="flex items-start justify-center gap-5">
        {categories.map((category) => (
          <div key={category.name} className="flex w-24 cursor-pointer flex-col items-center gap-3 text-center">
            {/* Circular Icon Background */}
            <div className="flex h-15 w-15 items-center justify-center rounded-full bg-[#EAF2EA] text-5xl text-[#3A643B] transition-transform hover:scale-105">
              {category.icon}
            </div>
            {/* Category Name */}
            <p className="text-lg font-medium text-[#475D5B]">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
