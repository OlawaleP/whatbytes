import React from 'react';

interface HamburgerToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerToggle: React.FC<HamburgerToggleProps> = ({ isOpen, onClick }) => {
  return (
    <button 
      className="block sm:hidden relative w-6 h-6"
      onClick={onClick}
      aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
    >
      <div className={`absolute h-0.5 bg-gray-800 transition-all duration-300 w-6 ${
        isOpen ? 'top-3 rotate-45' : 'top-1 rotate-0'
      }`}></div>
      
      <div className={`absolute h-0.5 bg-gray-800 transition-opacity duration-300 w-6 top-3 ${
        isOpen ? 'opacity-0' : 'opacity-100'
      }`}></div>
      
      <div className={`absolute h-0.5 bg-gray-800 transition-all duration-300 w-6 ${
        isOpen ? 'top-3 -rotate-45' : 'top-5 rotate-0'
      }`}></div>
    </button>
  );
};

export default HamburgerToggle;