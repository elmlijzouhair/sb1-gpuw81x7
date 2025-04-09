import React from 'react';

const categories = [
  {
    id: 1,
    name: 'Jackets',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1473188588951-666fce8e7c68?auto=format&fit=crop&q=80'
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="relative group cursor-pointer">
              <div className="relative h-96 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-serif font-bold text-white">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;