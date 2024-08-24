import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUserPlus, FaInfoCircle, FaEnvelope } from "react-icons/fa";

const Navbar = ({ onSearch, isDarkMode, toggleDarkMode }) => {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <nav
      className={`p-4 shadow-md ${
        isDarkMode
          ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-r from-teal-500 to-blue-600 text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="flex items-center space-x-2 text-lg font-semibold hover:text-teal-300 transition-colors duration-300"
          >
            <FaHome className="text-xl" />
            <span>Home</span>
          </Link>
          <Link
            to="/register"
            className="flex items-center space-x-2 text-lg font-semibold hover:text-teal-300 transition-colors duration-300"
          >
            <FaUserPlus className="text-xl" />
            <span>Register</span>
          </Link>
          <Link
            to="/about"
            className="flex items-center space-x-2 text-lg font-semibold hover:text-teal-300 transition-colors duration-300"
          >
            <FaInfoCircle className="text-xl" />
            <span>About</span>
          </Link>
          <Link
            to="/contact"
            className="flex items-center space-x-2 text-lg font-semibold hover:text-teal-300 transition-colors duration-300"
          >
            <FaEnvelope className="text-xl" />
            <span>Contact</span>
          </Link>
        </div>
        <div className="relative flex-grow max-w-xs">
          <input
            type="text"
            onChange={handleSearchChange}
            placeholder="Search users..."
            className="w-full py-2 px-4 pl-12 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 dark:focus:ring-teal-500 transition-colors duration-300"
          />
          <svg
            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10 2a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8zm0 14a6 6 0 1 1 6-6 6.007 6.007 0 0 1-6 6zm9.707-1.293a1 1 0 0 0-1.414 0l-3.293 3.293a1 1 0 1 0 1.414 1.414l3.293-3.293a1 1 0 0 0 0-1.414z" />
          </svg>
        </div>
        <button
          onClick={toggleDarkMode}
          className="ml-4 p-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
        >
          {isDarkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
