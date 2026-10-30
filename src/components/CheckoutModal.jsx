import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { FALLBACK_IMAGE } from '../data/mockData';
import { X, ShieldCheck, CreditCard, Loader2 } from 'lucide-react';

export default function CheckoutModal() {
  const { isCheckoutOpen, setIsCheckoutOpen, cart, cartSubtotal, cartCount, placeOrder } = useCart();

  const [name, setName] = useState('Ramanand Garg');
  const [address, setAddress] = useState('742 Evergreen Terrace');
  const [city, setCity] = useState('San Francisco');
  const [state, setState] = useState('CA');
  const [zip, setZip] = useState('94107');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isPlacing, setIsPlacing] = useState(false);

  useEffect(() => {
    if (isCheckoutOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCheckoutOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isCheckoutOpen && !isPlacing) {
        setIsCheckoutOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCheckoutOpen, isPlacing, setIsCheckoutOpen]);

  if (!isCheckoutOpen) return null;

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setIsPlacing(true);

    setTimeout(() => {
      setIsPlacing(false);
      placeOrder({
        name,
        address,
        city,
        state,
        zip
      });
    }, 1200);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in"
      onClick={() => { if (!isPlacing) setIsCheckoutOpen(false); }}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto relative text-gray-900 border border-gray-200 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Checkout Header */}
        <div className="bg-amazon-dark text-white px-6 py-4 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="font-black text-xl tracking-tight">amazon</span>
            <span className="text-gray-400 text-sm">| Checkout</span>
          </div>
          <button
            onClick={() => { if (!isPlacing) setIsCheckoutOpen(false); }}
            className="text-gray-400 hover:text-white transition p-1 cursor-pointer"
            title="Cancel Checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Steps: 7 Cols */}
            <div className="md:col-span-7 space-y-6">
              
              {/* Step 1: Shipping Address */}
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-6 rounded-full bg-amazon-dark text-white text-xs font-bold flex items-center justify-center">
                    1
                  </span>
                  <h3 className="font-bold text-sm text-gray-900 uppercase tracking-wide">
                    Shipping Address
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="col-span-2">
                    <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full border border-gray-300 rounded px-3 py-1.5 focus:ring-2 focus:ring-amazon-yellow focus:outline-none"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-gray-700 font-semibold mb-1">Street Address</label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                      className="w-full border border-gray-300 rounded px-3 py-1.5 focus:ring-2 focus:ring-amazon-yellow focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">City</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                      className="w-full border border-gray-300 rounded px-3 py-1.5 focus:ring-2 focus:ring-amazon-yellow focus:outline-none"
                    />
                  </div>
                  <div className="flex gap-2">
                    <div className="w-1/2">
                      <label className="block text-gray-700 font-semibold mb-1">State</label>
                      <input
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded px-3 py-1.5 focus:ring-2 focus:ring-amazon-yellow focus:outline-none"
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="block text-gray-700 font-semibold mb-1">ZIP Code</label>
                      <input
                        type="text"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded px-3 py-1.5 focus:ring-2 focus:ring-amazon-yellow focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Payment Method */}
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-6 rounded-full bg-amazon-dark text-white text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                  <h3 className="font-bold text-sm text-gray-900 uppercase tracking-wide">
                    Payment Method
                  </h3>
                </div>

                <div className="space-y-3 text-xs">
                  <label className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition ${
                    paymentMethod === 'card' ? 'border-amazon-orange bg-amber-50/50' : 'border-gray-200 hover:bg-gray-50'
                  }`}>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                        className="w-4 h-4 text-amazon-orange accent-[#e67a00]"
                      />
                      <div>
                        <p className="font-bold text-gray-900">Amazon Prime Visa ending in 4242</p>
                        <p className="text-gray-500 text-[11px]">Earn 5% back on Amazon.com purchases</p>
                      </div>
                    </div>
                    <CreditCard className="w-5 h-5 text-gray-400" />
                  </label>

                  <label className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition ${
                    paymentMethod === 'amazon_pay' ? 'border-amazon-orange bg-amber-50/50' : 'border-gray-200 hover:bg-gray-50'
                  }`}>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'amazon_pay'}
                        onChange={() => setPaymentMethod('amazon_pay')}
                        className="w-4 h-4 text-amazon-orange accent-[#e67a00]"
                      />
                      <div>
                        <p className="font-bold text-gray-900">Amazon Pay Gift Card Balance</p>
                        <p className="text-emerald-700 font-semibold text-[11px]">Available: $500.00</p>
                      </div>
                    </div>
                    <span className="text-amazon-orange font-black text-xs">Amazon Pay</span>
                  </label>
                </div>
              </div>

              {/* Step 3: Review Items */}
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-amazon-dark text-white text-xs font-bold flex items-center justify-center">
                    3
                  </span>
                  <h3 className="font-bold text-sm text-gray-900 uppercase tracking-wide">
                    Review items ({cartCount})
                  </h3>
                </div>

                <div className="divide-y divide-gray-100 max-h-48 overflow-y-auto pr-2">
                  {cart.map((item) => (
                    <div key={item.id} className="py-2 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 max-w-xs truncate">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
                          className="w-10 h-10 object-contain shrink-0" 
                        />
                        <span className="truncate">{item.title}</span>
                      </div>
                      <div className="font-medium text-gray-900 shrink-0">
                        Qty {item.quantity} • ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Summary: 5 Cols */}
            <div className="md:col-span-5">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 sticky top-20 shadow-sm">
                
                <button
                  type="submit"
                  disabled={isPlacing || cart.length === 0}
                  className="w-full bg-amazon-orange_button hover:bg-amazon-orange_hover active:bg-amazon-orange text-amazon-dark font-bold text-sm py-3 px-4 rounded-full shadow-md transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mb-3"
                >
                  {isPlacing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Processing Order...</span>
                    </>
                  ) : (
                    <span>Place your order</span>
                  )}
                </button>

                <p className="text-[11px] text-gray-500 text-center leading-tight mb-4">
                  By placing your order, you agree to Amazon's mock clone privacy notice and conditions of use.
                </p>

                <div className="border-t border-gray-200 pt-3 space-y-2 text-xs text-gray-700">
                  <h4 className="font-bold text-gray-900 mb-2">Order Summary</h4>
                  <div className="flex justify-between">
                    <span>Items ({cartCount}):</span>
                    <span>${cartSubtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping & handling:</span>
                    <span className="text-emerald-700 font-medium">FREE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated tax to be collected:</span>
                    <span>$0.00</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 flex justify-between text-base font-bold text-red-700">
                    <span>Order total:</span>
                    <span>${cartSubtotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-200 flex items-center gap-2 text-xs text-gray-600">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Your checkout is encrypted and protected with mock SSL.</span>
                </div>

              </div>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}
