import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CATEGORIES } from '../data/mockData';
import { Search, MapPin, ShoppingCart, ChevronDown, X, Package } from 'lucide-react';

export default function Header() {
  const {
    cartCount,
    orders,
    setIsCartOpen,
    setIsOrdersOpen,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    deliveryLocation,
    setDeliveryLocation,
    showToast
  } = useCart();

  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [zipInput, setZipInput] = useState(deliveryLocation.zip);
  const [cityInput, setCityInput] = useState(deliveryLocation.city);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const handleSaveLocation = (e) => {
    e.preventDefault();
    if (cityInput.trim() && zipInput.trim()) {
      setDeliveryLocation({ city: cityInput.trim(), zip: zipInput.trim() });
      setIsLocationModalOpen(false);
      showToast(`Delivery location updated to ${cityInput.trim()}`);
    }
  };

  return (
    <>
      <header className="bg-amazon-dark text-white sticky top-0 z-40 select-none">
        <div className="max-w-[1580px] mx-auto px-4 py-2 flex items-center gap-3 md:gap-5">
          
          {/* Amazon Brand Logo */}
          <div 
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
            className="flex items-center gap-1 cursor-pointer p-1.5 border border-transparent hover:border-white rounded"
          >
            <div className="flex items-baseline font-black tracking-tight text-2xl">
              <span>amazon</span>
              <span className="text-amazon-orange text-sm font-semibold">.com</span>
            </div>
          </div>

          {/* Deliver To Pin */}
          <div 
            onClick={() => setIsLocationModalOpen(true)}
            className="hidden lg:flex items-center gap-1 cursor-pointer p-1.5 border border-transparent hover:border-white rounded text-left transition"
            title="Change Delivery Location"
          >
            <MapPin className="w-5 h-5 text-gray-300 mt-1 shrink-0" />
            <div className="text-xs leading-tight">
              <span className="text-gray-400 block font-normal">Deliver to</span>
              <span className="font-bold text-sm text-gray-100 flex items-center gap-0.5">
                {deliveryLocation.city} {deliveryLocation.zip}
              </span>
            </div>
          </div>

          {/* Search Box */}
          <form 
            onSubmit={handleSearchSubmit} 
            className="flex-1 flex items-center h-10 rounded-md overflow-hidden focus-within:ring-3 focus-within:ring-amazon-orange transition"
          >
            {/* Category Dropdown */}
            <div className="relative hidden sm:flex items-center bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-medium h-full px-3 border-r border-gray-300 cursor-pointer">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-transparent appearance-none cursor-pointer pr-4 focus:outline-none"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat} className="text-gray-900 bg-white">
                    {cat}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-1 pointer-events-none text-gray-600" />
            </div>

            {/* Input */}
            <div className="relative flex-1 h-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Amazon (e.g. headphones, watch, mouse, coffee)"
                className="w-full h-full px-3 text-sm text-gray-900 bg-white placeholder-gray-500 focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="bg-amazon-yellow hover:bg-amazon-orange text-amazon-dark h-full px-4 flex items-center justify-center transition cursor-pointer"
            >
              <Search className="w-5 h-5 text-gray-900" />
            </button>
          </form>

          {/* Right Navigation Items */}
          <div className="flex items-center gap-1 sm:gap-3">
            
            {/* Language / Region */}
            <div className="hidden xl:flex items-center gap-1 cursor-pointer p-1.5 border border-transparent hover:border-white rounded text-xs font-bold">
              <span className="text-sm">🇺🇸</span>
              <span>EN</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </div>

            {/* Sign In / Account Dropdown */}
            <div 
              className="relative cursor-pointer p-1.5 border border-transparent hover:border-white rounded text-left"
              onMouseEnter={() => setIsAccountDropdownOpen(true)}
              onMouseLeave={() => setIsAccountDropdownOpen(false)}
            >
              <div className="text-xs leading-tight">
                <span className="text-gray-300 block font-normal">Hello, Guest</span>
                <span className="font-bold text-sm text-gray-100 flex items-center gap-0.5">
                  Account & Lists <ChevronDown className="w-3 h-3 text-gray-400" />
                </span>
              </div>

              {/* Account Flyout */}
              {isAccountDropdownOpen && (
                <div className="absolute right-0 top-full mt-1 w-64 bg-white text-gray-800 rounded-md shadow-2xl p-4 border border-gray-200 z-50 text-xs">
                  <div className="pb-3 border-b border-gray-200 text-center">
                    <button 
                      onClick={() => showToast("Signed in as Demo User!")}
                      className="w-full bg-amazon-orange_button hover:bg-amazon-orange_hover py-1.5 px-4 rounded text-xs font-medium text-gray-900 shadow-sm"
                    >
                      Sign In
                    </button>
                    <p className="text-[11px] text-gray-500 mt-1.5">
                      New customer? <span className="text-amazon-blue_link hover:underline">Start here.</span>
                    </p>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Your Lists</h4>
                      <p className="text-gray-600 hover:text-amazon-orange cursor-pointer py-0.5">Create a List</p>
                      <p className="text-gray-600 hover:text-amazon-orange cursor-pointer py-0.5">Wish List</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Your Account</h4>
                      <p 
                        onClick={() => { setIsAccountDropdownOpen(false); setIsOrdersOpen(true); }}
                        className="text-gray-600 hover:text-amazon-orange cursor-pointer py-0.5"
                      >
                        Orders ({orders.length})
                      </p>
                      <p className="text-gray-600 hover:text-amazon-orange cursor-pointer py-0.5">Recommendations</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Returns & Orders Button */}
            <div 
              onClick={() => setIsOrdersOpen(true)}
              className="cursor-pointer p-1.5 border border-transparent hover:border-white rounded text-left relative"
            >
              <div className="text-xs leading-tight">
                <span className="text-gray-300 block font-normal">Returns</span>
                <span className="font-bold text-sm text-gray-100 flex items-center gap-1">
                  & Orders
                  {orders.length > 0 && (
                    <span className="bg-amazon-orange text-amazon-dark text-[10px] font-extrabold px-1.5 py-0.2 rounded-full">
                      {orders.length}
                    </span>
                  )}
                </span>
              </div>
            </div>

            {/* Cart Icon & Counter */}
            <div 
              onClick={() => setIsCartOpen(true)}
              className="flex items-center cursor-pointer p-1.5 border border-transparent hover:border-white rounded relative group"
            >
              <div className="relative">
                <ShoppingCart className="w-8 h-8 text-white group-hover:text-amazon-yellow transition" />
                <span className="absolute -top-1 left-4 bg-amazon-orange text-amazon-dark font-extrabold text-xs px-1.5 py-0.2 rounded-full min-w-[20px] text-center">
                  {cartCount}
                </span>
              </div>
              <span className="font-bold text-sm hidden sm:inline ml-1 text-gray-100 self-end mb-0.5">
                Cart
              </span>
            </div>

          </div>
        </div>
      </header>

      {/* Delivery Location Change Modal */}
      {isLocationModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-sm w-full p-6 text-gray-900 shadow-2xl relative animate-scale-in">
            <button 
              onClick={() => setIsLocationModalOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-amazon-orange" />
              <h3 className="text-lg font-bold">Choose your location</h3>
            </div>
            <p className="text-xs text-gray-600 mb-4">
              Delivery options and speeds may vary based on your selected address.
            </p>
            <form onSubmit={handleSaveLocation} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  value={cityInput}
                  onChange={(e) => setCityInput(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:ring-2 focus:ring-amazon-yellow focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">ZIP Code</label>
                <input
                  type="text"
                  value={zipInput}
                  onChange={(e) => setZipInput(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:ring-2 focus:ring-amazon-yellow focus:outline-none"
                  required
                />
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsLocationModalOpen(false)}
                  className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-amazon-orange_button hover:bg-amazon-orange_hover font-medium px-4 py-1.5 text-sm rounded shadow-sm"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
