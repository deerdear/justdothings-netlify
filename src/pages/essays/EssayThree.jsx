import React from 'react';
import { Link } from 'react-router-dom';

const EssayThree = () => {
  return (
    <div className="min-h-screen px-6 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-[40rem]">
        <Link to="/" className="label mb-12 inline-block transition-colors hover:text-oxblood">← Back to Home</Link>
        <article className="prose prose-slate">
          <h1 className="text-3xl font-bold mb-6">Essay Three</h1>
          <p className="text-gray-700 leading-relaxed">
            This is the content of essay three. Replace this with your actual essay content.
          </p>
        </article>
      </div>
    </div>
  );
};

export default EssayThree;