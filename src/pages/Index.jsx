import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen font-mono relative overflow-hidden">
      <div className="relative z-10 p-8">
        <div className="max-w-3xl mx-auto bg-white/60 border border-gray-200 rounded-lg shadow-md p-8 backdrop-blur-md">
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4 tracking-tight text-gray-800">Jonatan Luther-Bergquist</h1>
            <p className="text-base tracking-wide text-gray-700">investing at <a href="https://inflection.xyz" className="text-blue-600 hover:text-blue-800 transition-colors" target="_blank" rel="noopener noreferrer">inflection</a> | engineering physics | <a href="https://eurodefense.tech" className="text-blue-600 hover:text-blue-800 transition-colors" target="_blank" rel="noopener noreferrer">European Defense Tech Hub</a> | husband</p>
          </header>
          
          <nav className="mb-12">
            <ul className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
              <li><a href="#about" className="hover:text-blue-600 transition-colors text-gray-700">About</a></li>
              <li><a href="#writing" className="hover:text-blue-600 transition-colors text-gray-700">Writing</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors text-gray-700">Contact</a></li>
            </ul>
          </nav>
          
          <main className="space-y-12">
            <section id="about">
              <h2 className="text-2xl font-bold mb-4 tracking-tight text-gray-800">About Me</h2>
              <p className="text-base leading-relaxed tracking-wide text-gray-700">Hello, I'm John Doe. I love creating retro-style websites and applications.</p>
            </section>
            
            <section id="writing">
              <h2 className="text-2xl font-bold mb-4 tracking-tight text-gray-800">Writing</h2>
              <ul className="text-base space-y-2 tracking-wide text-gray-700">
                <li>
                  <Link to="/essays/one" className="hover:text-blue-600 transition-colors">► Essay One</Link>
                </li>
                <li>
                  <Link to="/essays/two" className="hover:text-blue-600 transition-colors">► Essay Two</Link>
                </li>
                <li>
                  <Link to="/essays/three" className="hover:text-blue-600 transition-colors">► Essay Three</Link>
                </li>
              </ul>
            </section>
            
            <section id="contact">
              <h2 className="text-2xl font-bold mb-4 tracking-tight text-gray-800">Contact</h2>
              <p className="text-base tracking-wide text-gray-700">Email: john@retrodev.com</p>
              <p className="text-base tracking-wide text-gray-700">GitHub: @johndoe-retro</p>
            </section>
          </main>
          
          <footer className="mt-12 text-center">
            <p className="text-sm tracking-wide text-gray-700">&copy; 2023 John Doe. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;