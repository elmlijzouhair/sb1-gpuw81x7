import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <button className="lg:hidden p-2">
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            </button>
            <div className="hidden lg:flex items-center space-x-8 ml-8">
              <a href="/collections/all" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:opacity-80 transition-opacity`}>Collections</a>
              <a href="/collections/men" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:opacity-80 transition-opacity`}>Men</a>
              <a href="/collections/women" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:opacity-80 transition-opacity`}>Women</a>
              <a href="/collections/accessories" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:opacity-80 transition-opacity`}>Accessories</a>
            </div>
          </div>

          <div className="flex-shrink-0 flex items-center">
            <h1 className={`text-3xl font-serif font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              <a href="/" className="hover:opacity-80 transition-opacity">Royal Fassi</a>
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2">
              <Search className={`h-5 w-5 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            </button>
            <a href="/account" className="p-2">
              <User className={`h-5 w-5 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            </a>
            <a href="/cart" className="p-2 relative">
              <ShoppingBag className={`h-5 w-5 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
              <span className="absolute top-0 right-0 h-4 w-4 bg-white text-black text-xs rounded-full flex items-center justify-center">0</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;