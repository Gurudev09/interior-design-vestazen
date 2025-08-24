import React from "react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Projects", to: "/services" },
  { name: "Moodboard Gallery", to: "/gallery" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="bg-white shadow mb-8">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <span className="font-bold text-xl">Interior Design</span>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link to={item.to} className="text-gray-700 hover:text-blue-500 font-medium">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
