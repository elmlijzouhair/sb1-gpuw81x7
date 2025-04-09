import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&q=80"
          alt="Luxury leather jacket"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-6xl font-serif font-bold mb-6">The Art of Leather Craftsmanship</h1>
          <p className="text-xl mb-10 leading-relaxed">Discover the finest Moroccan leather artistry, where tradition meets contemporary design. Each piece tells a story of heritage and excellence.</p>
          <button className="bg-transparent border-2 border-white text-white px-10 py-4 text-lg font-medium hover:bg-white hover:text-black transition-all duration-300">
            Explore Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;