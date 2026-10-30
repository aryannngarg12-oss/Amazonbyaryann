import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    cartCount,
    clearCart,
    setIsCheckoutOpen,
    setActiveProductModal
  } = useCart();

  if (!isCartOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 35.00;
  const progress = Math.min((cartSubtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - cartSubtotal);

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-fade-in">
      <div 
        className="w-full max-w-md sm:max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between text-gray-900 border-l border-gray-200 animate-slide-left"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Drawer Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-amazon-light_dark text-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amazon-yellow" />
            <h3 className="font-bold text-base">Shopping Cart ({cartCount})</h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 text-gray-300 hover:text-white rounded-full hover:bg-white/10 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="bg-amber-50/70 p-3.5 border-b border-amber-200 text-xs">
          {remainingForFreeShipping > 0 ? (
            <div>
              <p className="text-gray-800">
                Add <span className="font-bold text-red-700">${remainingForFreeShipping.toFixed(2)}</span> of eligible items to get <span className="font-bold text-emerald-700">FREE Shipping</span>.
              </p>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mt-2">
                <div
                  className="bg-emerald-500 h-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-emerald-800 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Your order qualifies for <strong>FREE Shipping</strong>!</span>
            </div>
          )}
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 divide-y divide-gray-200">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-gray-500">
              <ShoppingBag className="w-16 h-16 text-gray-300 mb-3 stroke-1" />
              <h4 className="text-base font-bold text-gray-800 mb-1">Your Amazon Cart is empty</h4>
              <p className="text-xs text-gray-500 max-w-xs mb-4">
                Explore our best deals and fill it up with high quality electronics, fashion, and everyday essentials.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="bg-amazon-orange_button hover:bg-amazon-orange_hover text-amazon-dark font-medium text-xs py-2 px-6 rounded-full shadow-sm"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="py-4 flex gap-3 items-start">
                {/* Thumbnail */}
                <div 
                  onClick={() => { setIsCartOpen(false); setActiveProductModal(item); }}
                  className="w-20 h-20 bg-gray-50 border border-gray-100 rounded p-1 flex items-center justify-center shrink-0 cursor-pointer overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h4 
                    onClick={() => { setIsCartOpen(false); setActiveProductModal(item); }}
                    className="text-xs font-medium text-gray-900 line-clamp-2 hover:text-amazon-orange cursor-pointer leading-tight mb-1"
                  >
                    {item.title}
                  </h4>

                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-sm font-bold text-gray-900">
                      ${item.price.toFixed(2)}
                    </span>
                    {item.prime && (
                      <span className="text-[#00a8e1] font-black text-xs italic">
                        prime
                      </span>
                    )}
                  </div>

                  {/* Quantity Stepper & Delete */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-gray-300 rounded bg-gray-50 text-xs">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-200 transition text-gray-700"
                        title="Decrease"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2 font-bold text-gray-900 min-w-[24px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-200 transition text-gray-700"
                        title="Increase"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs text-red-600 hover:text-red-800 flex items-center gap-1 font-medium transition"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Subtotal & Checkout */}
        {cart.length > 0 && (
          <div className="p-4 border-t border-gray-200 bg-gray-50/90 space-y-3">
            <div className="flex justify-between items-baseline text-sm">
              <span className="text-gray-600">
                Subtotal ({cartCount} {cartCount === 1 ? 'item' : 'items'}):
              </span>
              <span className="text-xl font-bold text-gray-900">
                ${cartSubtotal.toFixed(2)}
              </span>
            </div>

            <button
              onClick={handleCheckoutClick}
              className="w-full bg-amazon-orange_button hover:bg-amazon-orange_hover active:bg-amazon-orange text-amazon-dark font-medium text-sm py-3 px-4 rounded-full shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Proceed to Checkout ({cartCount} items)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex justify-between text-[11px] text-gray-500 pt-1">
              <button 
                onClick={clearCart} 
                className="hover:text-red-700 underline cursor-pointer"
              >
                Clear cart
              </button>
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-gray-400" />
                <span>100% Secure Checkout</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
