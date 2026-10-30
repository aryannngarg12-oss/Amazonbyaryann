import React, { createContext, useContext, useState, useEffect } from 'react';
import { MOCK_ORDERS } from '../data/mockData';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Cart state persisted to localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('amazon_clone_cart');
      return saved ? JSON.parse(saved) : [
        {
          id: "prod-3",
          title: "Logitech MX Master 3S Wireless Performance Mouse with Quiet Clicks and 8K DPI Sensor",
          brand: "Logitech",
          category: "Computers",
          price: 99.99,
          originalPrice: 119.99,
          discount: 17,
          rating: 4.9,
          reviewsCount: 22450,
          prime: true,
          inStock: true,
          stockCount: 42,
          deliveryDate: "Tomorrow, 2 PM",
          image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
          quantity: 1
        }
      ];
    } catch {
      return [];
    }
  });

  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('amazon_clone_orders');
      return saved ? JSON.parse(saved) : MOCK_ORDERS;
    } catch {
      return MOCK_ORDERS;
    }
  });

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [filterPrimeOnly, setFilterPrimeOnly] = useState(false);
  const [filterMinRating, setFilterMinRating] = useState(0);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  // Modal and drawer states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeProductModal, setActiveProductModal] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);

  // Delivery zip state (mock)
  const [deliveryLocation, setDeliveryLocation] = useState({ city: 'San Francisco', zip: '94107' });

  // Toast feedback state
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('amazon_clone_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('amazon_clone_orders', JSON.stringify(orders));
    } catch (e) {
      console.error(e);
    }
  }, [orders]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
    showToast(`Added "${product.title.slice(0, 32)}..." to your cart!`);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    showToast("Item removed from your cart", "info");
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const placeOrder = (customerDetails) => {
    const newOrder = {
      id: `114-${Math.floor(1000000 + Math.random() * 9000000)}-${Math.floor(1000000 + Math.random() * 9000000)}`,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      total: cartSubtotal,
      status: "Arriving in 1 business day",
      shippingAddress: `${customerDetails.name}, ${customerDetails.address}, ${customerDetails.city}, ${customerDetails.state} ${customerDetails.zip}`,
      items: [...cart]
    };

    setOrders([newOrder, ...orders]);
    clearCart();
    setIsCheckoutOpen(false);
    showToast("🎉 Order placed successfully! Check 'Returns & Orders'.", "success");
    setIsOrdersOpen(true);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSortBy('featured');
    setFilterPrimeOnly(false);
    setFilterMinRating(0);
    setPriceRange({ min: 0, max: 1000 });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        sortBy,
        setSortBy,
        filterPrimeOnly,
        setFilterPrimeOnly,
        filterMinRating,
        setFilterMinRating,
        priceRange,
        setPriceRange,
        resetFilters,
        isCartOpen,
        setIsCartOpen,
        activeProductModal,
        setActiveProductModal,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isOrdersOpen,
        setIsOrdersOpen,
        deliveryLocation,
        setDeliveryLocation,
        toast,
        showToast,
        placeOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
