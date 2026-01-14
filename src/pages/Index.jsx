import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Writing from '../components/Writing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-mono relative overflow-hidden">
      <div className="relative z-10 p-8">
        <div className="max-w-5xl mx-auto bg-white/60 border border-gray-200 rounded-lg shadow-md p-8 backdrop-blur-md">
          <Header />
          <Navigation />
          <main className="space-y-12">
            <About />
            <Writing />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
