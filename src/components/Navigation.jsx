import React from 'react';

const Navigation = () => {
  return (
    <nav className="mb-12">
      <ul className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
        <li><a href="#about" className="hover:text-blue-600 transition-colors text-gray-700">About</a></li>
        <li><a href="#writing" className="hover:text-blue-600 transition-colors text-gray-700">Writing</a></li>
        <li><a href="#projects" className="hover:text-blue-600 transition-colors text-gray-700">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-600 transition-colors text-gray-700">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;