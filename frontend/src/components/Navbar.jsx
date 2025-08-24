import React from "react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", to: "/" },
  { name: "Projects", to: "/services" },
  { name: "About Us", to: "/about" },
  { name: "Moodboards", to: "/gallery" },
  { name: "Testimonials", to: "/testimonials" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="bg-[#f8f6f2] border-b border-gray-200 w-full">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <span className="text-2xl font-semibold text-[#6d2c23] tracking-wide mb-2 md:mb-0" style={{fontFamily: 'serif'}}>Vestazen</span>
        {/* Navigation */}
        <ul className="flex-1 flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                className="text-[#6d2c23] text-base md:text-lg font-normal transition-all duration-200 ease-in-out hover:scale-110 hover:text-[#a34c3a] hover:text-[110%] px-2"
                style={{fontFamily: 'serif'}}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Social Icons */}
        <div className="flex items-center gap-4 md:gap-6 mt-2 md:mt-0">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="24" height="24" fill="none" stroke="#6d2c23" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17" cy="7" r="1.5"/></svg>
          </a>
          <a href="mailto:info@vestazen.com" aria-label="Email">
            <svg width="24" height="24" fill="none" stroke="#6d2c23" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
