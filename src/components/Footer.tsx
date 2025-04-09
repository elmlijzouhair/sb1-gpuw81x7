import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Royal Fassi</h3>
            <p className="text-gray-400">Luxury leather craftsmanship from the heart of Fez, Morocco.</p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Men</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Women</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Accessories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">New Arrivals</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Shipping</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Sizing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contact@royalfassi.ma</li>
              <li>Phone: +212 500-000-000</li>
              <li>Address: Fez Medina, Morocco</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Royal Fassi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;