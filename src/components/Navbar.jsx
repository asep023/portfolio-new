// src/components/Navbar.js
import React from 'react';
import { useTheme } from '../ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav 
      className={`fixed top-0 left-0 w-full px-8 md:px-16 lg:px-24 ${
        theme === 'dark' ? 'bg-black text-white' : theme === 'blue' ? 'bg-blue-500 text-white' : 'bg-white text-black'
      }`}
      style={{ zIndex: 1000 }} // Untuk memastikan navbar berada di atas konten lainnya
    >
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">As</div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <a href="#about" className="hover:text-gray-400">
            About Me
          </a>
          <a href="#service" className="hover:text-gray-400">
            Riwayat
          </a>
          <a href="#project" className="hover:text-gray-400">
            Hobby
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Theme Toggle Button */}
        <button
          className="ml-4 px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full"
          onClick={toggleTheme}
        >
          {theme === 'light' ? 'Dark Mode' : theme === 'dark' ? 'Blue Mode' : 'Light Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
