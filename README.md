# Amazon Clone - Clean Minimalist UI with Fake Data

A lightweight, responsive Amazon clone built with React, Vite, and Tailwind CSS. Features realistic mock data, interactive shopping cart, product details modal, search & multi-facet filtering, checkout flow, and mock order tracking.

---

## ✨ Key Features

1. **Amazon Header & Navigation**:
   - Iconic Amazon branding and styling.
   - Interactive Deliver-to location changer (City & Zip Code).
   - Real-time search bar with category selector dropdown and quick clear.
   - Account & Lists hover flyout.
   - Returns & Orders modal button with order count badge.
   - Shopping cart icon with dynamic badge count.
   - Sub-navbar with hamburger menu, category shortcuts, and Prime Day banner.

2. **Hero Carousel**:
   - Auto-cycling Amazon promotional banners with smooth crossfade and overlay.
   - Pause-on-hover and responsive navigation controls.
   - Smooth gradient blend into the products section.

3. **4-Quadrant Featured Category Cards**:
   - Classic Amazon home page quadrant cards (Electronics, Home & Kitchen, Gaming, Fashion).
   - Clickable sub-items that automatically filter and jump to relevant department items.

4. **Product Listings & Cards**:
   - Badges: `#1 Best Seller`, `Amazon's Choice`, and discount percentage tags.
   - Star ratings with review counts and "2K+ bought in past month" social proof tags.
   - Realistic pricing with typical list price strikethroughs and savings calculation.
   - Fast Prime delivery badge and low-stock indicators.
   - "Quick look" modal trigger and quick "Add to Cart" button.

5. **Sidebar Filters & Sorting**:
   - Amazon Prime Free Delivery toggle.
   - Department / Category selector.
   - Customer Reviews star rating filter (4★ & Up, 3★ & Up, etc.).
   - Price range quick presets + custom Min/Max range with "Go" button.
   - Sort dropdown: Featured, Price: Low to High, Price: High to Low, Avg Customer Review, Highest Discount.

6. **Interactive Product Details Modal**:
   - Image gallery with selectable thumbnails.
   - Stock status, warranty & return guarantee cards.
   - Bullet point feature specifications.
   - Quantity selector dropdown (1-10).
   - "Add to Cart" and "Buy Now" triggers.
   - Verified buyer customer reviews with star ratings and comments.

7. **Cart Drawer**:
   - Slide-over drawer with item breakdown and quantity adjustment (+ / -).
   - Dynamic **FREE Shipping Progress Bar** (e.g. shows remaining balance to hit free shipping threshold).
   - Delete item and Clear Cart options.

8. **Checkout & Mock Orders**:
   - 3-step checkout form: Editable shipping address, payment method selector (Amazon Visa / Amazon Pay balance), and order review.
   - Mock loading state with order placement.
   - "Returns & Orders" modal with timeline delivery tracker (Ordered -> Shipped -> Out for Delivery -> Delivered) and "Buy it again" quick re-order.

---

## 🚀 Getting Started

### 1. Install dependencies (already installed)
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:3000` (or `http://localhost:5173`).

### 3. Production Build
```bash
npm run build
npm run preview
```

---

## 🛠️ Tech Stack
- **Framework**: React 18
- **Bundler**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Storage**: Browser LocalStorage for persistent Cart and Orders
