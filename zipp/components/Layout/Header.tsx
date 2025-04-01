import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b-2">
      <div className="max-w-7xl mx-auto px-2 py-4 sm:px-6 lg:px-2 flex justify-between items-center">
        <h1 className="text-3xl font-medium text-textPrimary">WhatBytes</h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <span className="sr-only">Notifications</span>
            {/* Icon would go here */}
          </button>
          <div className="flex gap-2 items-center border-2 p-2 rounded-lg">
            <span className="text-sm">JS</span>
            <span className="text-textPrimary font-bold">Rahil Siddique</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;