import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CATEGORIES } from '../data/mockData';
import { Star, Check, RotateCcw } from 'lucide-react';

export default function FilterSidebar({ totalCount }) {
  const {
    selectedCategory,
    setSelectedCategory,
    filterPrimeOnly,
    setFilterPrimeOnly,
    filterMinRating,
    setFilterMinRating,
    priceRange,
    setPriceRange,
    resetFilters
  } = useCart();

  const [minInput, setMinInput] = useState(priceRange.min);
  const [maxInput, setMaxInput] = useState(priceRange.max);

  const handlePriceApply = (e) => {
    e.preventDefault();
    setPriceRange({
      min: Number(minInput) || 0,
      max: Number(maxInput) || 1000
    });
  };

  const handlePresetPrice = (min, max) => {
    setMinInput(min);
    setMaxInput(max);
    setPriceRange({ min, max });
  };

  return (
    <aside className="w-full lg:w-60 shrink-0 text-gray-900 pr-2 select-none">
      
      {/* Reset Filter Header */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-300 mb-4">
        <span className="font-bold text-sm text-gray-900">Filters</span>
        <button
          onClick={resetFilters}
          className="text-xs text-amazon-blue_link hover:text-amazon-orange flex items-center gap-1 font-medium"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Clear all</span>
        </button>
      </div>

      {/* Prime Filter */}
      <div className="mb-5 pb-4 border-b border-gray-200">
        <h4 className="font-bold text-xs uppercase tracking-wider text-gray-700 mb-2">
          Amazon Prime
        </h4>
        <label className="flex items-center gap-2 cursor-pointer group">
          <input
            type="checkbox"
            checked={filterPrimeOnly}
            onChange={(e) => setFilterPrimeOnly(e.target.checked)}
            className="w-4 h-4 rounded text-amazon-orange focus:ring-amazon-yellow accent-[#e67a00]"
          />
          <span className="text-[#00a8e1] font-black text-sm tracking-tight italic">
            prime
          </span>
          <span className="text-xs text-gray-600 group-hover:text-gray-900">
            Eligible for Free Delivery
          </span>
        </label>
      </div>

      {/* Category / Department */}
      <div className="mb-5 pb-4 border-b border-gray-200">
        <h4 className="font-bold text-xs uppercase tracking-wider text-gray-700 mb-2">
          Department
        </h4>
        <ul className="space-y-1.5 text-xs">
          {CATEGORIES.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setSelectedCategory(cat)}
                className={`w-full text-left py-0.5 px-1 rounded transition flex items-center justify-between ${
                  selectedCategory === cat
                    ? 'font-bold text-amazon-orange'
                    : 'text-gray-700 hover:text-amazon-orange'
                }`}
              >
                <span>{cat}</span>
                {selectedCategory === cat && <Check className="w-3.5 h-3.5" />}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Customer Reviews */}
      <div className="mb-5 pb-4 border-b border-gray-200">
        <h4 className="font-bold text-xs uppercase tracking-wider text-gray-700 mb-2">
          Customer Reviews
        </h4>
        <div className="space-y-1 text-xs">
          {[4, 3, 2].map((rating) => (
            <button
              key={rating}
              onClick={() => setFilterMinRating(filterMinRating === rating ? 0 : rating)}
              className={`w-full flex items-center gap-1.5 py-1 px-1 rounded hover:bg-gray-100 transition ${
                filterMinRating === rating ? 'bg-amber-50 font-bold' : ''
              }`}
            >
              <div className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-3.5 h-3.5 ${
                      star <= rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-700 text-xs">& Up</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price Ranges */}
      <div className="mb-5 pb-4 border-b border-gray-200">
        <h4 className="font-bold text-xs uppercase tracking-wider text-gray-700 mb-2">
          Price
        </h4>
        <div className="space-y-1 text-xs text-gray-700 mb-3">
          <button
            onClick={() => handlePresetPrice(0, 50)}
            className="block hover:text-amazon-orange w-full text-left py-0.5"
          >
            Under $50
          </button>
          <button
            onClick={() => handlePresetPrice(50, 150)}
            className="block hover:text-amazon-orange w-full text-left py-0.5"
          >
            $50 to $150
          </button>
          <button
            onClick={() => handlePresetPrice(150, 400)}
            className="block hover:text-amazon-orange w-full text-left py-0.5"
          >
            $150 to $400
          </button>
          <button
            onClick={() => handlePresetPrice(400, 1000)}
            className="block hover:text-amazon-orange w-full text-left py-0.5"
          >
            $400 & Above
          </button>
        </div>

        {/* Custom Price Form */}
        <form onSubmit={handlePriceApply} className="flex items-center gap-1.5">
          <div className="relative flex-1">
            <span className="absolute left-2 top-1.5 text-xs text-gray-400">$</span>
            <input
              type="number"
              placeholder="Min"
              value={minInput}
              onChange={(e) => setMinInput(e.target.value)}
              className="w-full pl-5 pr-1 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-amazon-yellow"
            />
          </div>
          <span className="text-gray-400">-</span>
          <div className="relative flex-1">
            <span className="absolute left-2 top-1.5 text-xs text-gray-400">$</span>
            <input
              type="number"
              placeholder="Max"
              value={maxInput}
              onChange={(e) => setMaxInput(e.target.value)}
              className="w-full pl-5 pr-1 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-amazon-yellow"
            />
          </div>
          <button
            type="submit"
            className="bg-white border border-gray-400 hover:bg-gray-100 text-xs px-2.5 py-1 rounded shadow-sm font-medium"
          >
            Go
          </button>
        </form>
      </div>

    </aside>
  );
}
