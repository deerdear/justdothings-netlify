import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-green-400 p-8 font-mono">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">John Doe</h1>
        <p className="text-xl">Software Developer | Retro Enthusiast</p>
      </header>
      
      <nav className="mb-8">
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
      
      <main>
        <section id="about" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p>Hello, I'm John Doe. I love creating retro-style websites and applications.</p>
        </section>
        
        <section id="projects" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <ul className="list-disc list-inside">
            <li>Retro Game Engine</li>
            <li>Vintage CSS Framework</li>
            <li>Old School Blog Platform</li>
          </ul>
        </section>
        
        <section id="contact" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p>Email: john@retrodev.com</p>
          <p>GitHub: @johndoe-retro</p>
        </section>
      </main>
      
      <footer className="mt-8 text-center">
        <p>&copy; 2023 John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
