import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { Button } from '../ui/button';

const NavCTA = () => {
  return (
    <div className='bg-[#373636] flex items-center p-4 relative'>
      {/* Text Container - Centered */}
      <div className='absolute left-1/2 -translate-x-1/2'>
        <h1 className='text-[#D9D9D9] whitespace-nowrap'>Your first 5 minutes instant call is free.</h1>
      </div>

      {/* Button Container - Aligned to the right */}
      <div className="ml-auto">
        {/* Increased px-8 for more horizontal padding, making the button longer */}
        <Button className="px-8 py-3">
          <FaPhoneAlt className="mr-2" />
          Try Instant Free call Now
        </Button>
      </div>
    </div>
  );
};

export default NavCTA;