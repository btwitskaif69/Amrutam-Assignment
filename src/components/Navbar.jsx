import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsHandbag, BsCart3 } from 'react-icons/bs';
import { FiClock, FiUser, FiChevronDown } from 'react-icons/fi';
import logo from '@/assets/logo.svg'

const Navbar = () => {
  const navLinks = ["Home", "Find Doctors", "Lab Tests", "Shop", "Forum", "About Us"];

  return (
    <div className="pb-4">
      {/* ===== TOP ROW: CONTACT & LOGO ===== */}
      <div className="relative flex items-center justify-between px-12 py-4">
        
        {/* Left Side: Phone Number */}
        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-[#475D5B]" />
          <p className="whitespace-nowrap text-lg font-medium text-[#475D5B]">+91 9826352321</p>
        </div>

        {/* Center: Logo (Absolutely Positioned) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <img src={logo} alt="Amrutam Logo" />
        </div>

        {/* The right side of the top bar is now empty. */}
        <div></div>

      </div>

      {/* ===== BOTTOM ROW: NAVIGATION & ICONS ===== */}
      {/* This row is now a 3-column grid to position items correctly. */}
      <div className="mt-4 grid w-full grid-cols-3 items-center px-12">
        {/* Empty column for spacing */}
        <div></div>

        {/* Centered navigation links */}
        <nav className="flex items-center justify-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className={`whitespace-nowrap text-lg font-medium text-[#475D5B] transition-colors hover:text-green-700 ${
                link === 'Shop' ? 'border-b-2 border-[#3A643B] pb-1' : ''
              }`}
            >
              {link}
            </a>
          ))}
        </nav>
        
        {/* Right-aligned icons */}
        <div className="flex items-center justify-end gap-4">
          <div className="relative cursor-pointer">
            <div className="rounded-full bg-[#EAF2EA] p-3"><BsHandbag size={20} className="text-[#475D5B]" /></div>
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#475D5B] text-xs font-semibold text-white">22</span>
          </div>
          <div className="relative cursor-pointer">
            <div className="rounded-full bg-[#EAF2EA] p-3"><BsCart3 size={20} className="text-[#475D5B]" /></div>
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#475D5B] text-xs font-semibold text-white">1</span>
          </div>
          <div className="cursor-pointer rounded-full bg-[#EAF2EA] p-3"><FiClock size={20} className="text-[#475D5B]" /></div>
          <div className="cursor-pointer rounded-full bg-[#EAF2EA] p-3"><FiUser size={20} className="text-[#475D5B]" /></div>
          <FiChevronDown size={24} className="cursor-pointer text-[#475D5B]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;