import React from 'react';
import { Link } from 'react-router-dom';

const EssayTwo = () => {
  return (
    <div className="min-h-screen font-mono relative p-8">
      <div className="max-w-3xl mx-auto bg-white/60 border border-gray-200 rounded-lg shadow-md p-8 backdrop-blur-md">
        <Link to="/" className="text-blue-600 hover:text-blue-800 mb-8 block">← Back to Home</Link>
        <article className="prose prose-slate">
          <h1 className="text-3xl font-bold mb-6">Essay Two</h1>
          <p className="text-gray-700 leading-relaxed">
            This is the content of essay two. Replace this with your actual essay content.
          </p>
        </article>
      </div>
    </div>
  );
};

export default EssayTwo;