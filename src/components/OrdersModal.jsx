import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Package, CheckCircle2, Truck, RefreshCw, ShoppingCart, Clock } from 'lucide-react';

export default function OrdersModal() {
  const { isOrdersOpen, setIsOrdersOpen, orders, addToCart, showToast } = useCart();
  const [trackingOrderId, setTrackingOrderId] = useState(null);

  if (!isOrdersOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto relative text-gray-900 border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="bg-amazon-light_dark text-white px-6 py-4 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-amazon-yellow" />
            <h3 className="font-bold text-lg">Your Orders</h3>
          </div>
          <button
            onClick={() => setIsOrdersOpen(false)}
            className="text-gray-400 hover:text-white transition p-1 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {orders.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <Package className="w-16 h-16 mx-auto mb-3 text-gray-300" />
              <p className="font-medium text-gray-700">You haven't placed any orders yet.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-xs">
                  
                  {/* Order Top Ribbon */}
                  <div className="bg-gray-100/90 px-4 py-3 border-b border-gray-200 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-600">
                    <div className="flex flex-wrap items-center gap-6">
                      <div>
                        <span className="block text-gray-500 uppercase text-[10px] font-bold">Order Placed</span>
                        <span className="font-semibold text-gray-800">{order.date}</span>
                      </div>
                      <div>
                        <span className="block text-gray-500 uppercase text-[10px] font-bold">Total</span>
                        <span className="font-semibold text-gray-800">${order.total.toFixed(2)}</span>
                      </div>
                      <div>
                        <span className="block text-gray-500 uppercase text-[10px] font-bold">Ship To</span>
                        <span className="font-semibold text-gray-800 truncate max-w-[150px] inline-block">{order.shippingAddress}</span>
                      </div>
                    </div>
                    <div>
                      <span className="block text-gray-500 uppercase text-[10px] font-bold">Order # {order.id}</span>
                      <button 
                        onClick={() => showToast("Invoice downloaded to mock folder.")}
                        className="text-amazon-blue_link hover:underline text-xs"
                      >
                        View invoice
                      </button>
                    </div>
                  </div>

                  {/* Order Body */}
                  <div className="p-4 bg-white">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <h4 className="font-bold text-sm text-gray-900">{order.status}</h4>
                      </div>

                      <button
                        onClick={() => setTrackingOrderId(trackingOrderId === order.id ? null : order.id)}
                        className="border border-gray-300 hover:bg-gray-50 text-xs font-semibold py-1.5 px-3 rounded shadow-xs transition"
                      >
                        {trackingOrderId === order.id ? "Hide Tracking" : "Track Package"}
                      </button>
                    </div>

                    {/* Interactive Tracking Stepper Bar */}
                    {trackingOrderId === order.id && (
                      <div className="mb-5 p-4 bg-blue-50/60 border border-blue-200 rounded-lg animate-fade-in text-xs">
                        <div className="flex items-center justify-between relative mb-2">
                          <div className="flex flex-col items-center z-10">
                            <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">✓</div>
                            <span className="mt-1 font-semibold text-gray-800">Ordered</span>
                          </div>
                          <div className="flex flex-col items-center z-10">
                            <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">✓</div>
                            <span className="mt-1 font-semibold text-gray-800">Shipped</span>
                          </div>
                          <div className="flex flex-col items-center z-10">
                            <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center">
                              <Truck className="w-3.5 h-3.5" />
                            </div>
                            <span className="mt-1 font-semibold text-blue-700">Out for Delivery</span>
                          </div>
                          <div className="flex flex-col items-center z-10">
                            <div className="w-6 h-6 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center">4</div>
                            <span className="mt-1 font-semibold text-gray-500">Delivered</span>
                          </div>
                          {/* Connector Line */}
                          <div className="absolute top-3 left-4 right-4 h-0.5 bg-emerald-400 -z-0" />
                        </div>
                        <p className="text-[11px] text-gray-600 text-center mt-3">
                          Carrier: Amazon Logistics (TBA9821481249) • Estimated delivery by 8:00 PM
                        </p>
                      </div>
                    )}

                    {/* Items List */}
                    <div className="space-y-4 divide-y divide-gray-100">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="pt-3 first:pt-0 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-16 h-16 object-contain rounded border border-gray-100 p-1"
                            />
                            <div>
                              <h5 className="text-xs font-semibold text-gray-900 line-clamp-2 max-w-md">
                                {item.title}
                              </h5>
                              <p className="text-xs text-gray-500 mt-0.5">
                                Qty: {item.quantity} • ${item.price.toFixed(2)} each
                              </p>
                              <span className="text-[11px] text-emerald-700 font-semibold">
                                Return window closed 30 days after delivery
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              onClick={() => {
                                addToCart(item, 1);
                                showToast(`Added "${item.title.slice(0, 24)}..." back to cart`);
                              }}
                              className="bg-amazon-orange_button hover:bg-amazon-orange_hover text-amazon-dark font-medium text-xs py-1.5 px-3 rounded-full flex items-center gap-1.5 shadow-xs transition"
                            >
                              <ShoppingCart className="w-3.5 h-3.5" />
                              <span>Buy it again</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
