import React from 'react';
import { Link } from 'react-router-dom';
import { GooeyNav } from './gooey-nav';

const GooeyNavbar = () => {
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Features', to: '/features' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <div className="flex items-center gap-4">
      <GooeyNav 
        items={navItems}
        animationTime={600}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        timeVariance={300}
      />
      
      <div className="flex items-center gap-2">
        <Link 
          to="/login" 
          className="px-4 py-2 text-sm border border-gray-300 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-colors duration-200"
        >
          Login
        </Link>
        <Link 
          to="/signup" 
          className="px-4 py-2 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
        >
          Signup
        </Link>
      </div>
    </div>
  );
};

export default GooeyNavbar;
