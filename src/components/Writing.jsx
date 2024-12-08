import React from 'react';
import { Link } from 'react-router-dom';

const Writing = () => {
  return (
    <section id="writing">
      <h2 className="text-2xl font-bold mb-4 tracking-tight text-gray-800">Writing</h2>
      <ul className="text-base space-y-2 tracking-wide text-gray-700">
        <li>
          <Link to="/essays/one" className="hover:text-blue-600 transition-colors">► Address to Machine Offensive 2.0</Link>
        </li>
        {/* <li>
          <Link to="/essays/two" className="hover:text-blue-600 transition-colors">► Essay Two</Link>
        </li>
        <li>
          <Link to="/essays/three" className="hover:text-blue-600 transition-colors">► Essay Three</Link>
        </li> */}
      </ul>
    </section>
  );
};

export default Writing;