import React from 'react';

const Header = () => {
  return (
    <header className="mb-12">
      <h1 className="text-4xl font-bold mb-4 tracking-tight text-gray-800">Jonatan Luther-Bergquist - you can just do things</h1>
      <p className="text-base tracking-wide text-gray-700">
        investing at <a href="https://inflection.xyz" className="text-blue-600 hover:text-blue-800 transition-colors" target="_blank" rel="noopener noreferrer">inflection</a> | 
        engineering physics | <a href="https://eurodefense.tech" className="text-blue-600 hover:text-blue-800 transition-colors" target="_blank" rel="noopener noreferrer">European Defense Tech Hub</a>
      </p>
    </header>
  );
};

export default Header;
