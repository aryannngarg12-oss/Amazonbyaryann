import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { 
  X, 
  Star, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Lock, 
  CheckCircle2, 
  ShoppingCart,
  Zap
} from 'lucide-react';

export default function ProductDetailModal() {
  const { activeProductModal, setActiveProductModal, addToCart, setIsCheckoutOpen } = useCart();
  const [selectedQty, setSelectedQty] = useState(1);
  const [activeImage, setActiveImage] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  if (!activeProductModal) return null;

  const product = activeProductModal;
  const currentImg = activeImage || product.image;
  const gallery = [product.image, ...(product.additionalImages || [])];

  const handleBuyNow = () => {
    addToCart(product, selectedQty);
    setActiveProductModal(null);
    setIsCheckoutOpen(true);
  };

  const renderStars = (rating) => (
    <div className="flex items-center text-amber-400">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-4 h-4 ${
            s <= Math.round(rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-5xl w-full max-h-[92vh] overflow-y-auto relative text-gray-900 border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setActiveProductModal(null)}
          className="absolute right-4 top-4 p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition z-20 cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left: Gallery & Main Image (5 cols) */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="w-full aspect-square bg-white border border-gray-100 rounded-lg p-4 flex items-center justify-center overflow-hidden mb-4 shadow-inner">
                <img
                  src={currentImg}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain transition duration-300"
                />
              </div>

              {/* Thumbnails */}
              {gallery.length > 1 && (
                <div className="flex gap-2">
                  {gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`w-14 h-14 border-2 rounded p-1 transition overflow-hidden ${
                        currentImg === img ? 'border-amazon-orange' : 'border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}

              {/* Guarantee highlights */}
              <div className="w-full mt-6 grid grid-cols-3 gap-2 border-t border-b border-gray-200 py-3 text-center text-[11px] text-gray-600">
                <div className="flex flex-col items-center">
                  <Truck className="w-5 h-5 text-amazon-blue_link mb-1" />
                  <span>Free Prime Delivery</span>
                </div>
                <div className="flex flex-col items-center">
                  <RotateCcw className="w-5 h-5 text-amazon-blue_link mb-1" />
                  <span>30-Day Returns</span>
                </div>
                <div className="flex flex-col items-center">
                  <ShieldCheck className="w-5 h-5 text-amazon-blue_link mb-1" />
                  <span>2 Year Warranty</span>
                </div>
              </div>
            </div>

            {/* Middle: Details & Features (4 cols) */}
            <div className="md:col-span-4 flex flex-col">
              <span className="text-xs font-semibold text-amazon-blue_link uppercase tracking-wider mb-1">
                Brand: {product.brand}
              </span>

              <h2 className="text-lg sm:text-xl font-medium text-gray-900 leading-snug mb-2">
                {product.title}
              </h2>

              {/* Ratings */}
              <div className="flex items-center gap-2 pb-3 border-b border-gray-200 mb-3">
                {renderStars(product.rating)}
                <span className="text-sm font-semibold text-amazon-blue_link">
                  {product.rating}
                </span>
                <span className="text-xs text-gray-500">
                  ({product.reviewsCount.toLocaleString()} ratings)
                </span>
              </div>

              {/* Pricing section */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  {product.discount > 0 && (
                    <span className="text-red-700 text-2xl font-light">
                      -{product.discount}%
                    </span>
                  )}
                  <div className="flex items-start">
                    <span className="text-sm font-bold leading-none">$</span>
                    <span className="text-3xl font-bold leading-none">
                      {Math.floor(product.price)}
                    </span>
                    <span className="text-sm font-bold leading-none">
                      {(product.price % 1).toFixed(2).substring(2)}
                    </span>
                  </div>
                </div>

                {product.originalPrice && product.originalPrice > product.price && (
                  <p className="text-xs text-gray-500 mt-1">
                    Typical price: <span className="line-through">${product.originalPrice.toFixed(2)}</span>
                    <span className="text-emerald-700 font-semibold ml-2">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </span>
                  </p>
                )}
              </div>

              {/* Bullet Features */}
              <div className="space-y-2 mb-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800">
                  About this item
                </h4>
                <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs text-gray-700 leading-relaxed">
                  {product.features?.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              </div>

              <p className="text-xs text-gray-600 italic">
                {product.description}
              </p>
            </div>

            {/* Right: Buy Box / Action Sidebar (3 cols) */}
            <div className="md:col-span-3 bg-gray-50/80 border border-gray-200 rounded-lg p-5 flex flex-col justify-between shadow-xs">
              <div>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  ${product.price.toFixed(2)}
                </div>

                <div className="text-xs text-gray-700 space-y-1 mb-4">
                  <div className="text-[#00a8e1] font-black text-sm italic">prime</div>
                  <p>
                    FREE delivery <span className="font-bold">{product.deliveryDate}</span>
                  </p>
                  <p className="text-gray-500 text-[11px]">
                    Or fastest delivery <span className="font-semibold text-gray-700">Tomorrow by 8 AM</span>
                  </p>
                </div>

                <div className="mb-4">
                  <span className="inline-flex items-center gap-1 text-emerald-700 text-sm font-bold">
                    <CheckCircle2 className="w-4 h-4" /> In Stock
                  </span>
                  {product.stockCount && (
                    <p className="text-xs text-gray-500">Only {product.stockCount} left</p>
                  )}
                </div>

                {/* Qty Selector */}
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Quantity:
                  </label>
                  <select
                    value={selectedQty}
                    onChange={(e) => setSelectedQty(Number(e.target.value))}
                    className="w-full bg-white border border-gray-300 rounded-md py-1.5 px-3 text-xs focus:ring-2 focus:ring-amazon-yellow focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={() => addToCart(product, selectedQty)}
                    className="w-full bg-amazon-orange_button hover:bg-amazon-orange_hover text-amazon-dark font-medium text-xs sm:text-sm py-2.5 rounded-full transition shadow-sm cursor-pointer flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>

                  <button
                    onClick={handleBuyNow}
                    className="w-full bg-amazon-buy_now hover:bg-amazon-buy_now_hover text-amazon-dark font-medium text-xs sm:text-sm py-2.5 rounded-full transition shadow-sm cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Zap className="w-4 h-4" />
                    <span>Buy Now</span>
                  </button>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-200 text-[11px] text-gray-500 space-y-1">
                <div className="flex justify-between">
                  <span>Ships from</span>
                  <span className="font-medium text-gray-700">Amazon.com</span>
                </div>
                <div className="flex justify-between">
                  <span>Sold by</span>
                  <span className="font-medium text-gray-700">{product.brand} Official</span>
                </div>
                <div className="flex justify-between">
                  <span>Returns</span>
                  <span className="text-amazon-blue_link">30-day refund/replacement</span>
                </div>
                <div className="flex items-center gap-1 pt-1 text-gray-400">
                  <Lock className="w-3 h-3" />
                  <span>Secure transaction</span>
                </div>
              </div>
            </div>

          </div>

          {/* Customer Reviews Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-base font-bold text-gray-900 mb-3">
              Top Customer Reviews
            </h3>
            <div className="space-y-4">
              {product.reviews?.map((rev, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center font-bold text-xs text-gray-700">
                      {rev.author[0]}
                    </div>
                    <span className="text-xs font-semibold text-gray-800">{rev.author}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    {renderStars(rev.rating)}
                    <span className="text-xs font-bold text-gray-900">{rev.title}</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mb-1.5">
                    Reviewed on {rev.date} • <span className="text-amazon-orange font-semibold">Verified Purchase</span>
                  </p>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {rev.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
