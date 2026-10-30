import React from 'react';
import { FEATURED_COLLECTIONS, FALLBACK_IMAGE } from '../data/mockData';
import { useCart } from '../context/CartContext';

export default function CategoryCardsGrid() {
  const { setSelectedCategory, setSearchQuery } = useCart();

  const handleCardClick = (category, query = '') => {
    setSelectedCategory(category);
    if (query) setSearchQuery(query);
    const element = document.getElementById('products-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative max-w-[1580px] mx-auto px-4 -mt-10 sm:-mt-28 lg:-mt-40 z-20 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {FEATURED_COLLECTIONS.map((col) => (
          <div
            key={col.id}
            className="bg-white p-5 rounded-sm shadow-md flex flex-col justify-between border border-gray-200 transition hover:shadow-lg"
          >
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-3 leading-snug">
                {col.title}
              </h3>

              {/* 4 Quadrants Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {col.items.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleCardClick(col.category, item.name)}
                    className="group cursor-pointer flex flex-col"
                  >
                    <div className="aspect-square bg-gray-100 rounded overflow-hidden relative border border-gray-100 group-hover:opacity-90">
                      <img
                        src={item.image}
                        alt={item.name}
                        onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-[11px] text-gray-700 font-medium mt-1 truncate group-hover:text-amazon-orange">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom link */}
            <button
              onClick={() => handleCardClick(col.category)}
              className="text-xs font-semibold text-amazon-blue_link hover:text-amazon-orange hover:underline text-left cursor-pointer pt-2"
            >
              {col.linkText} &rarr;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
