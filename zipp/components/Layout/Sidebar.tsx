"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Skill Test", path: "/skill-test" },
    { name: "Internship", path: "/internship" },
  ];

  return (
    <aside className="w-64 bg-white border-r-2 hidden md:block">
      <div className="p-4">
        <nav className="mt-6">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`flex items-center p-4 font-bold rounded-full ${
                    pathname === item.path
                      ? "bg-gray-100 text-primary"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;