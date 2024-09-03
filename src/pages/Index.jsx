import React, { useEffect, useRef } from 'react';

const JellyfishShape = ({ color }) => {
  const style = {
    position: 'absolute',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    background: color,
    filter: 'blur(50px)',
    opacity: 0.5,
    animation: `float ${Math.random() * 10 + 20}s infinite ease-in-out`,
    left: `${Math.random() * 100}vw`,
    top: `${Math.random() * 100}vh`,
  };

  return <div style={style} />;
};

const Index = () => {
  const particleContainerRef = useRef(null);
  const cursorTrailRef = useRef(null);

  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;
      
      const endX = (Math.random() - 0.5) * 100;
      const endY = (Math.random() - 0.5) * 100;
      particle.style.setProperty('--end-x', `${endX}px`);
      particle.style.setProperty('--end-y', `${endY}px`);
      
      particle.style.opacity = Math.random() * 0.5 + 0.3;
      
      const duration = Math.random() * 10 + 5;
      particle.style.setProperty('--duration', `${duration}s`);
      
      return particle;
    };

    const animateParticles = () => {
      if (particleContainerRef.current) {
        particleContainerRef.current.innerHTML = '';
        for (let i = 0; i < 150; i++) {
          particleContainerRef.current.appendChild(createParticle());
        }
      }
    };

    const createCursorTrail = (e) => {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
      cursorTrailRef.current.appendChild(trail);

      setTimeout(() => {
        trail.remove();
      }, 500);
    };

    animateParticles();
    window.addEventListener('resize', animateParticles);
    document.addEventListener('mousemove', createCursorTrail);

    return () => {
      window.removeEventListener('resize', animateParticles);
      document.removeEventListener('mousemove', createCursorTrail);
    };
  }, []);

  const jellyfishColors = [
    'rgba(255, 0, 0, 0.3)',
    'rgba(0, 255, 0, 0.3)',
    'rgba(0, 0, 255, 0.3)',
    'rgba(255, 255, 0, 0.3)',
    'rgba(255, 0, 255, 0.3)',
    'rgba(0, 255, 255, 0.3)',
  ];

  return (
    <div className="min-h-screen font-mono relative overflow-hidden">
      <div ref={particleContainerRef} className="particle-bg"></div>
      <div ref={cursorTrailRef} className="cursor-trail-container"></div>
      <div className="jellyfish-container">
        {jellyfishColors.map((color, index) => (
          <JellyfishShape key={index} color={color} />
        ))}
      </div>
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