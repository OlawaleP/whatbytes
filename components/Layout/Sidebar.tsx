import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar: React.FC = () => {
  const router = useRouter();

  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Skill Test", path: "/skill-test" },
    { name: "Internship", path: "/internship" },
  ];

  return (
    <aside className="w-64 bg-white shadow-sm hidden md:block">
      <div className="p-4">
        <nav className="mt-6">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`flex items-center px-4 py-2 rounded-lg ${
                    router.pathname === item.path
                      ? "bg-primary text-white"
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