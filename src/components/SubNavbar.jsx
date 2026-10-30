import React from 'react';
import { useCart } from '../context/CartContext';
import { CATEGORIES } from '../data/mockData';
import { Menu, Zap } from 'lucide-react';

export default function SubNavbar() {
  const { selectedCategory, setSelectedCategory, setSearchQuery } = useCart();

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    // Smooth scroll down to products section if clicked
    const element = document.getElementById('products-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-amazon-light_dark text-white text-xs sm:text-sm font-medium px-4 py-1.5 flex items-center justify-between overflow-x-auto no-scrollbar select-none shadow-sm">
      <div className="flex items-center gap-1 sm:gap-4 shrink-0">
        
        {/* All Hamburger Menu */}
        <button
          onClick={() => handleCategoryClick('All')}
          className="flex items-center gap-1 px-2 py-1 rounded border border-transparent hover:border-white transition cursor-pointer font-bold"
        >
          <Menu className="w-4 h-4" />
          <span>All</span>
        </button>

        {/* Quick Nav Categories */}
        {CATEGORIES.slice(1, 7).map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`px-2 py-1 rounded border transition cursor-pointer shrink-0 ${
              selectedCategory === cat 
                ? 'border-amazon-yellow text-amazon-yellow font-bold bg-white/5' 
                : 'border-transparent hover:border-white text-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}

        <div className="hidden xl:flex items-center gap-3 text-gray-300 text-xs pl-2 border-l border-gray-600">
          <span 
            onClick={() => { setSelectedCategory('All'); setSearchQuery('deal'); }}
            className="hover:text-white cursor-pointer"
          >
            Today's Deals
          </span>
          <span className="hover:text-white cursor-pointer">Customer Service</span>
          <span className="hover:text-white cursor-pointer">Registry</span>
          <span className="hover:text-white cursor-pointer">Gift Cards</span>
          <span className="hover:text-white cursor-pointer">Sell</span>
        </div>
      </div>

      {/* Right Prime Deals announcement */}
      <div 
        onClick={() => { setSelectedCategory('Electronics'); }}
        className="hidden md:flex items-center gap-1.5 text-xs text-amazon-yellow hover:text-white cursor-pointer shrink-0 pl-4 font-semibold"
      >
        <Zap className="w-3.5 h-3.5 fill-amazon-yellow text-amazon-yellow" />
        <span>Prime Big Deals Day • Save up to 50%</span>
      </div>
    </nav>
  );
}
