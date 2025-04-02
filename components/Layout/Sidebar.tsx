"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { 
      name: "Dashboard", 
      path: "/dashboard",
      iconSrc: "/dashboard-sidebar.svg"
    },
    { 
      name: "Skill Test", 
      path: "/",
      iconSrc: "/skill.svg"
    },
    { 
      name: "Internship", 
      path: "/internship",
      iconSrc: "/document.svg"
    },
  ];

  return (
    <aside className="w-64 bg-white border-r-2 hidden md:block">
      <div className="pr-4 py-4">
        <nav className="mt-6">
          <ul className="space-y-3">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.path} className="nav-item">
                  <Link
                    href={item.path}
                    className={`flex items-center p-4 font-bold rounded-r-full ${
                      isActive
                        ? "bg-gray-100 text-primary"
                        : "text-gray-600 hover:bg-gray-100 hover:text-primary"
                    }`}
                  >
                    <span className="mr-3">
                      <div className="relative w-6 h-6">
                        <Image 
                          src={item.iconSrc}
                          alt={`${item.name} icon`}
                          fill
                          className={isActive ? "icon-primary" : "icon-gray"}
                        />
                      </div>
                    </span>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;