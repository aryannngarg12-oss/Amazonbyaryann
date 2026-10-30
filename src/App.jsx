import React, { useState, useMemo } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { PRODUCTS } from './data/mockData';
import Header from './components/Header';
import SubNavbar from './components/SubNavbar';
import HeroCarousel from './components/HeroCarousel';
import CategoryCardsGrid from './components/CategoryCardsGrid';
import FilterSidebar from './components/FilterSidebar';
import ProductCard from './components/ProductCard';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import OrdersModal from './components/OrdersModal';
import Toast from './components/Toast';
import Footer from './components/Footer';
import { SlidersHorizontal, ChevronDown, Sparkles, AlertCircle } from 'lucide-react';

function AmazonStore() {
  const {
    searchQuery,
    selectedCategory,
    sortBy,
    setSortBy,
    filterPrimeOnly,
    filterMinRating,
    priceRange,
    resetFilters
  } = useCart();

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesBrand = item.brand.toLowerCase().includes(q);
        const matchesCategory = item.category.toLowerCase().includes(q);
        const matchesDesc = item.description?.toLowerCase().includes(q);
        if (!matchesTitle && !matchesBrand && !matchesCategory && !matchesDesc) {
          return false;
        }
      }

      // Prime filter
      if (filterPrimeOnly && !item.prime) {
        return false;
      }

      // Rating filter
      if (filterMinRating > 0 && item.rating < filterMinRating) {
        return false;
      }

      // Price filter
      if (item.price < priceRange.min || item.price > priceRange.max) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'discount') return (b.discount || 0) - (a.discount || 0);
      // 'featured' default sort
      if (a.bestSeller && !b.bestSeller) return -1;
      if (!a.bestSeller && b.bestSeller) return 1;
      return 0;
    });
  }, [searchQuery, selectedCategory, sortBy, filterPrimeOnly, filterMinRating, priceRange]);

  const isBrowsingAll = !searchQuery.trim() && selectedCategory === 'All';

  return (
    <div className="min-h-screen flex flex-col bg-[#eaeded]">
      {/* Sticky Header & SubNav */}
      <Header />
      <SubNavbar />

      <main className="flex-1">
        {/* Hero Carousel & Featured Cards only when browsing home */}
        {isBrowsingAll && (
          <>
            <HeroCarousel />
            <CategoryCardsGrid />
          </>
        )}

        {/* Main Content Area: Filter Sidebar + Products Grid */}
        <div id="products-section" className="max-w-[1580px] mx-auto px-4 py-6">
          
          {/* Results Bar / Sort Header */}
          <div className="bg-white border border-gray-200 rounded-sm p-3.5 mb-5 flex flex-wrap items-center justify-between gap-4 shadow-2xs">
            <div>
              <span className="text-sm font-semibold text-gray-900">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'}
              </span>
              {searchQuery && (
                <span className="text-sm text-gray-600 ml-1">
                  for <span className="text-amazon-orange font-bold">"{searchQuery}"</span>
                </span>
              )}
              {selectedCategory !== 'All' && (
                <span className="text-sm text-gray-600 ml-1">
                  in <span className="font-semibold text-gray-800">"{selectedCategory}"</span>
                </span>
              )}
            </div>

            <div className="flex items-center gap-3">
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                className="lg:hidden flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-xs font-semibold py-1.5 px-3 rounded border border-gray-300"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Filters</span>
              </button>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-gray-500 hidden sm:inline">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded py-1.5 pl-3 pr-7 text-xs font-semibold text-gray-800 appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-amazon-yellow"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Avg. Customer Review</option>
                    <option value="discount">Highest Discount</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-600 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Desktop Filters Sidebar */}
            <div className="hidden lg:block">
              <FilterSidebar totalCount={filteredProducts.length} />
            </div>

            {/* Mobile Filters Dropdown panel */}
            {isMobileFilterOpen && (
              <div className="lg:hidden bg-white p-4 rounded-lg border border-gray-200 mb-4 shadow-sm animate-fade-in">
                <FilterSidebar totalCount={filteredProducts.length} />
              </div>
            )}

            {/* Product Grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                  <AlertCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <h3 className="text-base font-bold text-gray-800 mb-1">
                    No results match your selected criteria
                  </h3>
                  <p className="text-xs text-gray-500 max-w-sm mx-auto mb-4">
                    Try checking your spelling, removing search filters, or selecting a different department.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="bg-amazon-orange_button hover:bg-amazon-orange_hover text-amazon-dark font-medium text-xs py-2 px-5 rounded-full shadow-sm"
                  >
                    Reset all filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>
      </main>

      {/* Global Modals & Drawers */}
      <ProductDetailModal />
      <CartDrawer />
      <CheckoutModal />
      <OrdersModal />
      <Toast />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AmazonStore />
    </CartProvider>
  );
}
