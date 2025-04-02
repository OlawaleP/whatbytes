import React from 'react';
import Image from 'next/image';
import { HamburgerToggle } from '..';

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <header className="border-b border-gray-200 bg-white py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-1">
        <Image 
          src="/whatbytes.png" 
          alt="WhatBytes Logo"
          width={40}
          height={40}
        />
        <div className="font-bold text-3xl hidden sm:block">WhatBytes</div>
      </div>
      
      <div className="flex items-center gap-4">
        <HamburgerToggle isOpen={isSidebarOpen} onClick={toggleSidebar} />
        
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
      </div>
    </header>
  );
};

export default Header;