import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white py-4 px-6 flex justify-between items-center">
      <div className="flex items-center gap-1">
        <Image 
          src="/whatbytes.png" 
          alt="WhatBytes Logo"
          width={40}
          height={40}
        />
        <div className="font-bold text-3xl">WhatBytes</div>
      </div>
      <div className="flex items-center gap-2 border-2 rounded p-2">
        <div className="rounded-full bg-gray-200 h-8 w-8 flex items-center justify-center">
        <Image 
          src="/userAvater.png" 
          alt="User"
          width={40}
          height={40}  
        />
        </div>
        <span className="hidden sm:block font-bold">Rahil Siddique</span>
      </div>
    </header>
  );
};

export default Header;