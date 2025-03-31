import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">WhatBytes</h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <span className="sr-only">Notifications</span>
            {/* Icon would go here */}
          </button>
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
            <span className="text-sm font-medium">JS</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;