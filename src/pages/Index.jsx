import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-green-400 p-8 font-mono relative">
      <div className="hypnotic-bg"></div>
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">John Doe</h1>
        <p className="text-base tracking-wide">Software Developer | Retro Enthusiast</p>
      </header>
      
      <nav className="mb-12">
        <ul className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
          <li><a href="#about" className="hover:text-yellow-400 transition-colors">About</a></li>
          <li><a href="#projects" className="hover:text-yellow-400 transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
        </ul>
      </nav>
      
      <main className="space-y-12">
        <section id="about">
          <h2 className="text-2xl font-bold mb-4 tracking-tight">About Me</h2>
          <p className="text-base leading-relaxed tracking-wide">Hello, I'm John Doe. I love creating retro-style websites and applications.</p>
        </section>
        
        <section id="projects">
          <h2 className="text-2xl font-bold mb-4 tracking-tight">Projects</h2>
          <ul className="text-base space-y-2 tracking-wide">
            <li>► Retro Game Engine</li>
            <li>► Vintage CSS Framework</li>
            <li>► Old School Blog Platform</li>
          </ul>
        </section>
        
        <section id="contact">
          <h2 className="text-2xl font-bold mb-4 tracking-tight">Contact</h2>
          <p className="text-base tracking-wide">Email: john@retrodev.com</p>
          <p className="text-base tracking-wide">GitHub: @johndoe-retro</p>
        </section>
      </main>
      
      <footer className="mt-12 text-center">
        <p className="text-sm tracking-wide">&copy; 2023 John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
