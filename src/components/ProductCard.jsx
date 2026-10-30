import React from 'react';
import { useCart } from '../context/CartContext';
import { Star, Check, Eye } from 'lucide-react';

export default function ProductCard({ product }) {
  const { addToCart, setActiveProductModal } = useCart();

  // Helper to render stars
  const renderStars = (rating) => {
    return (
      <div className="flex items-center text-amber-500">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-3.5 h-3.5 ${
              star <= Math.round(rating)
                ? 'fill-amber-400 text-amber-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white border border-gray-200 rounded-sm p-4 flex flex-col justify-between hover:shadow-lg transition duration-200 relative group">
      
      {/* Top Badges */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1 items-start">
        {product.bestSeller && (
          <span className="bg-[#e67a00] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm shadow-sm">
            #1 Best Seller
          </span>
        )}
        {product.amazonsChoice && !product.bestSeller && (
          <span className="bg-[#232f3e] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm flex items-center gap-1 shadow-sm">
            Amazon's <span className="text-amazon-orange">Choice</span>
          </span>
        )}
      </div>

      {/* Product Image + Quick Look Overlay */}
      <div className="relative pt-4 pb-3 flex items-center justify-center cursor-pointer overflow-hidden bg-white">
        <div 
          onClick={() => setActiveProductModal(product)}
          className="w-full h-48 flex items-center justify-center p-2"
        >
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-300"
            loading="lazy"
          />
        </div>

        {/* Quick View Button */}
        <button
          onClick={() => setActiveProductModal(product)}
          className="absolute bottom-2 bg-white/95 hover:bg-white text-gray-800 text-xs font-semibold py-1.5 px-3 rounded shadow-md border border-gray-300 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition duration-200"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Quick look</span>
        </button>
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col pt-2">
        <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
          {product.brand}
        </p>

        {/* Title */}
        <h4
          onClick={() => setActiveProductModal(product)}
          className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-amazon-orange cursor-pointer leading-snug mt-0.5 mb-1.5"
          title={product.title}
        >
          {product.title}
        </h4>

        {/* Ratings & Reviews */}
        <div 
          onClick={() => setActiveProductModal(product)}
          className="flex items-center gap-1.5 mb-2 cursor-pointer"
        >
          {renderStars(product.rating)}
          <span className="text-xs text-amazon-blue_link hover:text-amazon-orange font-medium">
            {product.rating.toFixed(1)}
          </span>
          <span className="text-xs text-gray-500">
            ({product.reviewsCount.toLocaleString()})
          </span>
        </div>

        {/* Bought Count Badge */}
        <div className="text-[11px] text-gray-600 mb-2">
          {product.reviewsCount > 10000 ? '2K+ bought in past month' : '500+ bought in past month'}
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-2 mb-1.5">
          {product.discount > 0 && (
            <span className="bg-red-700 text-white text-xs font-bold px-1.5 py-0.5 rounded">
              -{product.discount}%
            </span>
          )}
          <div className="flex items-start">
            <span className="text-xs font-bold leading-none">$</span>
            <span className="text-xl font-bold leading-none">
              {Math.floor(product.price)}
            </span>
            <span className="text-xs font-bold leading-none">
              {(product.price % 1).toFixed(2).substring(2)}
            </span>
          </div>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-xs text-gray-500 line-through">
              Typical: ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Prime & Delivery Info */}
        <div className="space-y-0.5 text-xs text-gray-700 mb-3">
          {product.prime && (
            <div className="flex items-center gap-1 text-[#00a8e1] font-black text-sm">
              <span>prime</span>
            </div>
          )}
          <p className="text-[12px] text-gray-600">
            FREE delivery <span className="font-bold text-gray-900">{product.deliveryDate}</span>
          </p>
          {product.stockCount && product.stockCount < 10 && (
            <p className="text-[11px] text-red-600 font-semibold">
              Only {product.stockCount} left in stock - order soon.
            </p>
          )}
        </div>
      </div>

      {/* Add To Cart CTA Button */}
      <div className="pt-2 border-t border-gray-100">
        <button
          onClick={() => addToCart(product, 1)}
          className="w-full bg-amazon-orange_button hover:bg-amazon-orange_hover active:bg-amazon-orange text-amazon-dark font-medium text-xs sm:text-sm py-2 px-3 rounded-full transition shadow-sm hover:shadow cursor-pointer flex items-center justify-center gap-1"
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
}
