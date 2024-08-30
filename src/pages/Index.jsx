import React from 'react';

const Index = () => {
  React.useEffect(() => {
    const createRandomShape = () => {
      const shape = document.createElement('div');
      shape.classList.add('random-shape');
      
      // Random size
      const size = Math.random() * 100 + 50;
      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;
      
      // Random position
      shape.style.left = `${Math.random() * 100}vw`;
      shape.style.top = `${Math.random() * 100}vh`;
      
      // Create irregular shape using SVG
      const svgNS = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNS, "svg");
      svg.setAttribute("width", "100%");
      svg.setAttribute("height", "100%");
      svg.setAttribute("viewBox", "0 0 100 100");
      
      const path = document.createElementNS(svgNS, "path");
      
      // Generate random path for cloud-like or swirl-like shape
      let d = "M50,50 ";
      const points = 8 + Math.floor(Math.random() * 5); // 8 to 12 points
      for (let i = 0; i < points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const radius = 30 + Math.random() * 20;
        const x = 50 + Math.cos(angle) * radius;
        const y = 50 + Math.sin(angle) * radius;
        const controlX = 50 + Math.cos(angle + 0.5) * (radius * 1.2);
        const controlY = 50 + Math.sin(angle + 0.5) * (radius * 1.2);
        d += `Q${controlX},${controlY} ${x},${y} `;
      }
      d += "Z";
      
      path.setAttribute("d", d);
      path.setAttribute("fill", "currentColor");
      svg.appendChild(path);
      
      shape.appendChild(svg);
      
      // Random animation duration
      shape.style.animationDuration = `${Math.random() * 5 + 5}s, ${Math.random() * 10 + 10}s, ${Math.random() * 15 + 15}s`;
      
      document.querySelector('.random-bg').appendChild(shape);
    };

    for (let i = 0; i < 20; i++) {
      createRandomShape();
    }
  }, []);

  return (
    <div className="min-h-screen font-mono relative overflow-hidden">
      <div className="random-bg"></div>
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
