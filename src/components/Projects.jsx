import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="text-2xl font-bold mb-4 tracking-tight text-gray-800">Projects</h2>
      <ul className="text-base space-y-2 tracking-wide text-gray-700">
        <li>
          <a href="https://jlb-2048.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">► 2048 Game</a>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
