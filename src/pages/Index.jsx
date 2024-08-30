import React, { useEffect, useRef } from 'react';

const Index = () => {
  const particleContainerRef = useRef(null);

  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random start position
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;
      
      // Random end position (wind-like movement)
      const endX = startX + (Math.random() - 0.5) * 200;
      const endY = startY - Math.random() * 100;
      particle.style.setProperty('--end-x', `${endX - startX}px`);
      particle.style.setProperty('--end-y', `${endY - startY}px`);
      
      // Random size
      const size = Math.random() * 2 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random opacity
      particle.style.opacity = Math.random() * 0.5 + 0.3;
      
      // Random animation duration
      const duration = Math.random() * 3 + 2;
      particle.style.setProperty('--duration', `${duration}s`);
      
      return particle;
    };

    const animateParticles = () => {
      if (particleContainerRef.current) {
        particleContainerRef.current.innerHTML = '';
        for (let i = 0; i < 100; i++) {
          particleContainerRef.current.appendChild(createParticle());
        }
      }
    };

    animateParticles();
    const intervalId = setInterval(animateParticles, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen font-mono relative overflow-hidden">
      <div ref={particleContainerRef} className="particle-bg"></div>
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
