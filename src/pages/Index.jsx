import React from 'react';

const Index = () => {
  React.useEffect(() => {
    const createHypnoCircle = () => {
      const circle = document.createElement('div');
      circle.classList.add('hypno-circle');
      const size = Math.random() * 200 + 100;
      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
      circle.style.left = `${Math.random() * 100}vw`;
      circle.style.top = `${Math.random() * 100}vh`;
      circle.style.animationDuration = `${Math.random() * 15 + 10}s, ${Math.random() * 20 + 15}s`;
      circle.style.opacity = '0.6';
      document.querySelector('.hypno-bg').appendChild(circle);
    };

    for (let i = 0; i < 15; i++) {
      createHypnoCircle();
    }

    // Add more circles over time for a dynamic effect
    const interval = setInterval(() => {
      if (document.querySelectorAll('.hypno-circle').length < 30) {
        createHypnoCircle();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen font-pixel relative overflow-hidden">
      <div className="hypno-bg"></div>
      <div className="relative z-10 p-8">
        <div className="max-w-3xl mx-auto bg-black/80 border border-cyan-500 rounded-lg shadow-lg p-8 backdrop-blur-md">
          <header className="mb-8">
            <h1 className="text-2xl font-bold mb-2 tracking-tight text-cyan-400">John Doe</h1>
            <p className="text-xs tracking-wide text-cyan-300">Software Developer | Retro Enthusiast</p>
          </header>
          
          <nav className="mb-8">
            <ul className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
              <li><a href="#about" className="text-xs hover:text-pink-400 transition-colors text-cyan-300">About</a></li>
              <li><a href="#projects" className="text-xs hover:text-pink-400 transition-colors text-cyan-300">Projects</a></li>
              <li><a href="#contact" className="text-xs hover:text-pink-400 transition-colors text-cyan-300">Contact</a></li>
            </ul>
          </nav>
          
          <main className="space-y-8">
            <section id="about">
              <h2 className="text-lg font-bold mb-2 tracking-tight text-pink-400">About Me</h2>
              <p className="text-xs leading-relaxed tracking-wide text-cyan-300">Hello, I'm John Doe. I love creating retro-style websites and applications.</p>
            </section>
            
            <section id="projects">
              <h2 className="text-lg font-bold mb-2 tracking-tight text-pink-400">Projects</h2>
              <ul className="text-xs space-y-1 tracking-wide text-cyan-300">
                <li>► Retro Game Engine</li>
                <li>► Vintage CSS Framework</li>
                <li>► Old School Blog Platform</li>
              </ul>
            </section>
            
            <section id="contact">
              <h2 className="text-lg font-bold mb-2 tracking-tight text-pink-400">Contact</h2>
              <p className="text-xs tracking-wide text-cyan-300">Email: john@retrodev.com</p>
              <p className="text-xs tracking-wide text-cyan-300">GitHub: @johndoe-retro</p>
            </section>
          </main>
          
          <footer className="mt-8 text-center">
            <p className="text-[10px] tracking-wide text-cyan-400">&copy; 2023 John Doe. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
