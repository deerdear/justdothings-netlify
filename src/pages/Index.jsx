import React from 'react';

const Index = () => {
  React.useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random position
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      
      // Random size (smaller than before)
      const size = Math.random() * 3 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random opacity
      particle.style.opacity = Math.random() * 0.5 + 0.1;
      
      // Random animation duration and delay
      const duration = Math.random() * 15 + 10;
      const delay = Math.random() * -20;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;
      
      document.querySelector('.particle-bg').appendChild(particle);
    };

    // Create more particles
    for (let i = 0; i < 100; i++) {
      createParticle();
    }
  }, []);

  return (
    <div className="min-h-screen font-mono relative overflow-hidden">
      <div className="particle-bg"></div>
      <div className="relative z-10 p-8">
        <div className="max-w-3xl mx-auto bg-white/60 border border-gray-200 rounded-lg shadow-md p-8 backdrop-blur-md">
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4 tracking-tight text-gray-800">John Doe</h1>
            <p className="text-base tracking-wide text-gray-700">Software Developer | Retro Enthusiast</p>
          </header>
          
          <nav className="mb-12">
            <ul className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
              <li><a href="#about" className="hover:text-blue-600 transition-colors text-gray-700">About</a></li>
              <li><a href="#projects" className="hover:text-blue-600 transition-colors text-gray-700">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors text-gray-700">Contact</a></li>
            </ul>
          </nav>
          
          <main className="space-y-12">
            <section id="about">
              <h2 className="text-2xl font-bold mb-4 tracking-tight text-gray-800">About Me</h2>
              <p className="text-base leading-relaxed tracking-wide text-gray-700">Hello, I'm John Doerr. I love creating retro-style websites and applications.</p>
            </section>
            
            <section id="projects">
              <h2 className="text-2xl font-bold mb-4 tracking-tight text-gray-800">Projects</h2>
              <ul className="text-base space-y-2 tracking-wide text-gray-700">
                <li>► Retro Game Engine</li>
                <li>► Vintage CSS Framework</li>
                <li>► Old School Blog Platform</li>
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
