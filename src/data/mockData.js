export const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Cpath d='M160 180a20 20 0 1040 0 20 20 0 00-40 0zm-30 80l40-50 30 35 45-60 55 75H130z' fill='%23cbd5e1'/%3E%3Ctext x='200' y='300' font-family='sans-serif' font-size='14' fill='%2394a3b8' text-anchor='middle'%3EAmazon Product Image%3C/text%3E%3C/svg%3E";

export const CATEGORIES = [
  "All",
  "Electronics",
  "Computers",
  "Audio & Headphones",
  "Smart Home",
  "Fashion",
  "Home & Kitchen",
  "Gaming",
  "Books"
];

export const HERO_BANNERS = [
  {
    id: 1,
    title: "Mega Electronics & Tech Deals",
    subtitle: "Upgrade your workspace with top-rated gear up to 45% off",
    cta: "Shop Tech Deals",
    category: "Electronics",
    bgGradient: "from-blue-950 via-slate-900 to-indigo-950",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
    badge: "Limited Time Offer"
  },
  {
    id: 2,
    title: "Level Up Your Gaming Battle Station",
    subtitle: "High refresh rate monitors, mechanical keyboards, and low latency mice",
    cta: "Explore Gaming",
    category: "Gaming",
    bgGradient: "from-purple-950 via-slate-900 to-zinc-900",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    badge: "Amazon Exclusive"
  },
  {
    id: 3,
    title: "Modern Minimalist Home & Kitchen",
    subtitle: "Premium cookware, espresso machines, and aesthetic home essentials",
    cta: "Discover Home",
    category: "Home & Kitchen",
    bgGradient: "from-amber-950 via-stone-900 to-zinc-900",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    badge: "Trending Now"
  },
  {
    id: 4,
    title: "Fall & Winter Urban Fashion Essentials",
    subtitle: "Outerwear, sneakers, and everyday minimalist classics for everyone",
    cta: "Browse Wardrobe",
    category: "Fashion",
    bgGradient: "from-emerald-950 via-slate-900 to-gray-900",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
    badge: "Prime Fast Shipping"
  }
];

export const FEATURED_COLLECTIONS = [
  {
    id: "col-1",
    title: "Trending in Electronics",
    linkText: "See all tech deals",
    category: "Electronics",
    items: [
      {
        name: "Wireless ANC",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Smart Watch",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Mechanical Keyboards",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "4K Action Camera",
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=300&q=80"
      }
    ]
  },
  {
    id: "col-2",
    title: "Refresh your home & space",
    linkText: "Shop home goods",
    category: "Home & Kitchen",
    items: [
      {
        name: "Espresso Maker",
        image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Cast Iron Skillet",
        image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Air Purifiers",
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Modern Lighting",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=300&q=80"
      }
    ]
  },
  {
    id: "col-3",
    title: "Top picks in Gaming gear",
    linkText: "View battle stations",
    category: "Gaming",
    items: [
      {
        name: "Pro Controller",
        image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Gaming Headset",
        image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Precision Mouse",
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Curved Monitors",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=300&q=80"
      }
    ]
  },
  {
    id: "col-4",
    title: "Casual & Fitness Apparel",
    linkText: "Shop new arrivals",
    category: "Fashion",
    items: [
      {
        name: "Running Shoes",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Classic Sunglasses",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Leather Backpack",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Minimalist Watch",
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=300&q=80"
      }
    ]
  }
];

export const PRODUCTS = [
  {
    id: "prod-1",
    title: "Sony WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones with Auto NC Optimizer",
    brand: "Sony",
    category: "Audio & Headphones",
    price: 348.00,
    originalPrice: 399.99,
    discount: 13,
    rating: 4.8,
    reviewsCount: 14820,
    prime: true,
    bestSeller: true,
    amazonsChoice: false,
    inStock: true,
    stockCount: 18,
    deliveryDate: "Tomorrow, 2 PM",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Industry Leading Noise Cancellation with two processors and 8 microphones",
      "Magnificent Sound engineered with the new Integrated Processor V1",
      "Crystal clear hands-free calling with 4 beamforming microphones",
      "Up to 30-hour battery life with quick charging (3 min charge for 3 hours of playback)",
      "Ultra-comfortable, lightweight design with soft fit leather"
    ],
    description: "The WH-1000XM5 headphones rewrite the rules for distraction-free listening. Two processors control 8 microphones for unprecedented noise cancellation and exceptional call quality.",
    reviews: [
      { author: "Marcus Vance", rating: 5, date: "October 18, 2026", title: "Best ANC on the market bar none", comment: "The comfort is significantly improved over the XM4. Soundstage is wide and crisp." },
      { author: "Emily R.", rating: 4, date: "October 5, 2026", title: "Great sound, slightly bulky case", comment: "ANC blocks out airplane hum effortlessly. Highly recommended for travelers." }
    ]
  },
  {
    id: "prod-2",
    title: "Apple Watch Series 10 [GPS 46mm] Smartwatch with Midnight Aluminum Case & Sport Band",
    brand: "Apple",
    category: "Electronics",
    price: 399.00,
    originalPrice: 429.00,
    discount: 7,
    rating: 4.7,
    reviewsCount: 8930,
    prime: true,
    bestSeller: false,
    amazonsChoice: true,
    inStock: true,
    stockCount: 9,
    deliveryDate: "Tomorrow, 11 AM",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Thinnest Apple Watch ever with the biggest display yet",
      "Advanced health insights: ECG, sleep apnea notifications, cycle tracking",
      "Faster charging: 80% battery in about 30 minutes",
      "Water resistant to 50 meters and depth gauge with water temperature sensor",
      "Seamless integration with iOS ecosystem"
    ],
    description: "Apple Watch Series 10 brings a monumental milestone in design with an expansive wide-angle OLED display, enhanced acoustic speaker, and groundbreaking wellness metrics.",
    reviews: [
      { author: "David Chen", rating: 5, date: "October 22, 2026", title: "Screen is breathtaking", comment: "The viewing angles and brightness in bright sunlight are unmatched." }
    ]
  },
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
    bestSeller: true,
    amazonsChoice: true,
    inStock: true,
    stockCount: 42,
    deliveryDate: "Tomorrow, 2 PM",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
    additionalImages: [],
    features: [
      "Quiet clicks deliver satisfying tactile feel with 90% less click noise",
      "8,000 DPI optical sensor tracks anywhere - even on glass surfaces",
      "MagSpeed electromagnetic scrolling is remarkably fast, precise, and quiet",
      "Ergonomic silhouette crafted to support your palm and fingers naturally",
      "Flow cross-computer control: work across multiple computers and OS seamlessly"
    ],
    description: "An icon remastered. Feel every moment of your workflow with even more precision, tactility, and performance, thanks to Quiet Clicks and an 8,000 DPI track-on-glass sensor.",
    reviews: [
      { author: "Sarah Jenkins", rating: 5, date: "September 30, 2026", title: "Worth every penny for productivity", comment: "The horizontal scroll wheel and infinite scroll wheel changed how I edit spreadsheets." }
    ]
  },
  {
    id: "prod-4",
    title: "Breville Barista Touch Espresso Machine, Brushed Stainless Steel, BES880BSS",
    brand: "Breville",
    category: "Home & Kitchen",
    price: 899.95,
    originalPrice: 999.95,
    discount: 10,
    rating: 4.6,
    reviewsCount: 5120,
    prime: true,
    bestSeller: false,
    amazonsChoice: true,
    inStock: true,
    stockCount: 5,
    deliveryDate: "Thursday, Nov 2",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Touch screen display simplifies how to make your favorite cafe coffee in 3 easy steps",
      "ThermoJet heating system achieves optimum extraction temperature in 3 seconds",
      "Auto milk froth temperature and texture delivered by the hands-free steam wand",
      "Integrated conical burr grinder with dose control",
      "5 pre-programmed cafe favorites and customize up to 8 of your own coffees"
    ],
    description: "Barista-quality performance with a new intuitive touchscreen display with pre-programmed cafe drinks menu and automatic milk texturing. All within a compact footprint.",
    reviews: [
      { author: "Lucas Bradley", rating: 5, date: "October 14, 2026", title: "Cafe quality in my kitchen", comment: "Dialed in beans within 2 shots. Microfoam texture is silky smooth." }
    ]
  },
  {
    id: "prod-5",
    title: "Nike Air Zoom Pegasus 41 Men's Road Running Shoes - Responsive Cushioning",
    brand: "Nike",
    category: "Fashion",
    price: 139.99,
    originalPrice: 155.00,
    discount: 10,
    rating: 4.5,
    reviewsCount: 3410,
    prime: true,
    bestSeller: false,
    amazonsChoice: false,
    inStock: true,
    stockCount: 14,
    deliveryDate: "Tomorrow, 5 PM",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    additionalImages: [],
    features: [
      "Responsive ReactX foam midsole delivers 13% more energy return",
      "Engineered mesh upper reduces weight and increases breathability",
      "Signature dual Air Zoom units at forefoot and heel",
      "Waffle-inspired rubber outsole for traction and flexibility",
      "Plush collar and tongue for a secure, comfortable fit"
    ],
    description: "Responsive cushioning in the Pegasus provides an energized ride for everyday road running. Experience lighter-weight energy return with dual Air Zoom units.",
    reviews: [
      { author: "Carlos M.", rating: 5, date: "October 10, 2026", title: "My daily running staple", comment: "Comfortable from mile 1 to 20. True to size fit." }
    ]
  },
  {
    id: "prod-6",
    title: "Keychron Q1 Pro Wireless Custom Mechanical Keyboard 75% Layout QMK/VIA Hot-Swappable",
    brand: "Keychron",
    category: "Computers",
    price: 189.99,
    originalPrice: 219.99,
    discount: 14,
    rating: 4.8,
    reviewsCount: 1980,
    prime: true,
    bestSeller: true,
    amazonsChoice: false,
    inStock: true,
    stockCount: 7,
    deliveryDate: "Tomorrow, 2 PM",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    additionalImages: [],
    features: [
      "Full CNC machined aluminum body for extreme solid typing acoustics",
      "Double-gasket mount design drastically reduces acoustic resonance",
      "Broadcom Bluetooth 5.1 connects up to 3 devices smoothly",
      "Hot-swappable sockets support both 3-pin and 5-pin MX mechanical switches",
      "Programmable sound control knob and QMK/VIA key remapping support"
    ],
    description: "Keychron Q1 Pro is a groundbreaking full metal wireless custom mechanical keyboard. With our double-gasket design, PBT keycaps, and screw-in stabs, it delivers an incomparable typing experience.",
    reviews: [
      { author: "Alex K.", rating: 5, date: "October 2, 2026", title: "The sound profile is deep and creamy", comment: "Best stock mechanical keyboard I've ever owned. Zero rattle." }
    ]
  },
  {
    id: "prod-7",
    title: "Sony PlayStation 5 DualSense Wireless Controller - Midnight Black Edition",
    brand: "Sony",
    category: "Gaming",
    price: 69.99,
    originalPrice: 74.99,
    discount: 7,
    rating: 4.9,
    reviewsCount: 42100,
    prime: true,
    bestSeller: true,
    amazonsChoice: true,
    inStock: true,
    stockCount: 30,
    deliveryDate: "Tomorrow, 2 PM",
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80",
    additionalImages: [],
    features: [
      "Haptic feedback immerses you physically in gaming environments",
      "Dynamic adaptive triggers simulate physical resistance and tensions",
      "Built-in microphone and headset jack for easy communication",
      "Create button lets you capture and broadcast your epic gaming moments",
      "Signature comfortable iconic design with integrated motion sensors"
    ],
    description: "Discover a deeper gaming experience with the innovative PS5 controller, featuring immersive haptic feedback, dynamic adaptive triggers, and a built-in microphone.",
    reviews: [
      { author: "Ryan G.", rating: 5, date: "October 25, 2026", title: "Haptics are game changing", comment: "Pairs easily with PC via Bluetooth as well as PS5." }
    ]
  },
  {
    id: "prod-8",
    title: "Kindle Paperwhite (16 GB) – Now with 6.8\" display, warm light, and weeks of battery life",
    brand: "Amazon",
    category: "Books",
    price: 149.99,
    originalPrice: 169.99,
    discount: 12,
    rating: 4.8,
    reviewsCount: 36700,
    prime: true,
    bestSeller: true,
    amazonsChoice: true,
    inStock: true,
    stockCount: 25,
    deliveryDate: "Tomorrow, 11 AM",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    additionalImages: [],
    features: [
      "Now with a 6.8” display and thinner borders, adjustable warm light, up to 10 weeks of battery life",
      "Purpose-built for reading with a flush-front design and 300 ppi glare-free display that reads like real paper",
      "More books in more places: Store thousands of titles, then take them all with you",
      "Waterproof reading: Built to withstand accidental immersion in water (IPX8 rated)",
      "Instant access to millions of eBooks and audiobooks with Audible"
    ],
    description: "Kindle Paperwhite is thin, lightweight, and travels easily so you can enjoy your favorite books at any time. With our signature 300 ppi glare-free Paperwhite display.",
    reviews: [
      { author: "Rachel W.", rating: 5, date: "October 9, 2026", title: "Adjustable warm light is magical for bedtime reading", comment: "No eye fatigue whatsoever. The battery lasts over a month on a single charge." }
    ]
  },
  {
    id: "prod-9",
    title: "Philips Hue Smart LED Light Bar Starter Kit - 16 Million Colors & Sync to PC Screen",
    brand: "Philips Hue",
    category: "Smart Home",
    price: 129.99,
    originalPrice: 159.99,
    discount: 19,
    rating: 4.7,
    reviewsCount: 11200,
    prime: true,
    bestSeller: false,
    amazonsChoice: true,
    inStock: true,
    stockCount: 12,
    deliveryDate: "Tomorrow, 2 PM",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    additionalImages: [],
    features: [
      "Create vibrant ambiance with 16 million colors and tunable warm-to-cool whites",
      "Sync with games, movies, and music for real-time responsive lighting",
      "Versatile mounting: lay flat, stand upright, or mount directly behind your TV or monitor",
      "Voice control compatible with Alexa, Google Assistant, and Apple HomeKit",
      "Hue Bridge included for total whole-home smart lighting control"
    ],
    description: "Transform your living room or gaming setup with the Philips Hue Play light bars. Choose from 16 million colors to experience different light effects and sync with multimedia.",
    reviews: [
      { author: "Jordan T.", rating: 5, date: "September 24, 2026", title: "Cinema vibes at home", comment: "Mounted these behind my OLED monitor. Ambient illumination is top tier." }
    ]
  },
  {
    id: "prod-10",
    title: "Ray-Ban Classic Wayfarer Polarized Sunglasses, Black Frame / Green G-15 Lens",
    brand: "Ray-Ban",
    category: "Fashion",
    price: 178.00,
    originalPrice: 210.00,
    discount: 15,
    rating: 4.6,
    reviewsCount: 7890,
    prime: true,
    bestSeller: false,
    amazonsChoice: true,
    inStock: true,
    stockCount: 15,
    deliveryDate: "Tomorrow, 2 PM",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    additionalImages: [],
    features: [
      "100% UV400 Protection coating blocks harmful UVA and UVB rays",
      "High quality polarized crystal lenses eliminate glare from water and road surfaces",
      "Durable acetate frame designed for comfort and longevity",
      "Signature silver rivets and iconic Ray-Ban metal logo at temples",
      "Includes protective leather case and microfiber cleaning cloth"
    ],
    description: "Ray-Ban Original Wayfarer Classics are the most recognizable style in the history of sunglasses. Since its initial design in 1952, Wayfarer gained popularity among celebrities and artists.",
    reviews: [
      { author: "Christopher L.", rating: 5, date: "October 11, 2026", title: "Timeless icon", comment: "Polarized lenses provide supreme optical clarity while driving." }
    ]
  },
  {
    id: "prod-11",
    title: "Lodge 10.25 Inch Cast Iron Pre-Seasoned Skillet with Silicone Hot Handle Holder",
    brand: "Lodge",
    category: "Home & Kitchen",
    price: 24.90,
    originalPrice: 34.25,
    discount: 27,
    rating: 4.8,
    reviewsCount: 94000,
    prime: true,
    bestSeller: true,
    amazonsChoice: true,
    inStock: true,
    stockCount: 100,
    deliveryDate: "Tomorrow, 11 AM",
    image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=800&q=80",
    additionalImages: [],
    features: [
      "Pre-seasoned with 100% natural vegetable oil for a natural, easy-release finish",
      "Unparalleled heat retention and even heating throughout",
      "Use in the oven, on the stove, on the grill, or over a campfire",
      "Made in the USA with foundry-seasoned heirloom quality cast iron",
      "Red silicone hot handle holder protects hands from heat up to 450°F"
    ],
    description: "The Lodge Cast Iron 10.25-inch Skillet is a multi-functional cookware that works wonders with slow-cooking recipes and all your favorite foods. Sear, sauté, bake, broil, or grill.",
    reviews: [
      { author: "Chef Anthony", rating: 5, date: "September 15, 2026", title: "Indestructible and sears steaks to perfection", comment: "Heats evenly and will easily last for generations." }
    ]
  },
  {
    id: "prod-12",
    title: "Dell UltraSharp 27 4K USB-C Hub Monitor (U2723QE) - IPS Black Technology 2000:1 Contrast",
    brand: "Dell",
    category: "Computers",
    price: 529.99,
    originalPrice: 629.99,
    discount: 16,
    rating: 4.7,
    reviewsCount: 4210,
    prime: true,
    bestSeller: false,
    amazonsChoice: true,
    inStock: true,
    stockCount: 8,
    deliveryDate: "Tomorrow, 2 PM",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    additionalImages: [],
    features: [
      "IPS Black technology delivers exceptional 2,000:1 contrast ratio with deeper blacks",
      "4K UHD (3840 x 2160) resolution with 98% DCI-P3 color gamut",
      "Single USB-C cable supplies up to 90W power delivery, video, and Ethernet data",
      "ComfortView Plus reduces low blue light without compromising color accuracy",
      "Full ergonomic adjustability: height, tilt, swivel, and 90-degree pivot"
    ],
    description: "Be your most productive on a 27-inch 4K monitor with brilliant color and contrast that features industry-first IPS Black technology and a connectivity hub.",
    reviews: [
      { author: "Julian R.", rating: 5, date: "October 1, 2026", title: "Color calibration is incredible", comment: "The USB hub cleaned up all cables from my MacBook setup." }
    ]
  },
  {
    id: "prod-13",
    title: "Dune by Frank Herbert - Deluxe Hardcover Collector's Edition with Stenciled Edges",
    brand: "Ace Books",
    category: "Books",
    price: 29.99,
    originalPrice: 50.00,
    discount: 40,
    rating: 4.9,
    reviewsCount: 38200,
    prime: true,
    bestSeller: true,
    amazonsChoice: true,
    inStock: true,
    stockCount: 35,
    deliveryDate: "Tomorrow, 11 AM",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
    additionalImages: [],
    features: [
      "Stunning embossed hardcover design with custom endpapers and stained page edges",
      "Includes full-color planetary maps and detailed appendixes",
      "Winner of the prestigious Hugo and Nebula awards for Sci-Fi literature",
      "High quality acid-free archival paper with bound ribbon bookmark",
      "Definitive master text approved by the Herbert estate"
    ],
    description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, who will become the mysterious man known as Muad'Dib as he avenges the traitorous plot against his family.",
    reviews: [
      { author: "Trevor P.", rating: 5, date: "October 16, 2026", title: "Masterpiece in bookbinding", comment: "The embossed cover art is gorgeous on any bookshelf." }
    ]
  },
  {
    id: "prod-14",
    title: "Anker Prime 100W GaN Fast Charger, 3-Port Compact Wall Charger for Mac, iPhone, Galaxy",
    brand: "Anker",
    category: "Electronics",
    price: 54.99,
    originalPrice: 84.99,
    discount: 35,
    rating: 4.8,
    reviewsCount: 16500,
    prime: true,
    bestSeller: true,
    amazonsChoice: true,
    inStock: true,
    stockCount: 60,
    deliveryDate: "Tomorrow, 2 PM",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
    additionalImages: [],
    features: [
      "Fast charge 3 devices at once with 2 USB-C ports and 1 USB-A port",
      "100W max single port fast charging powers a 16-inch MacBook Pro to 50% in 30 minutes",
      "43% smaller than standard manufacturer 96W power bricks",
      "ActiveShield 2.0 temperature sensor monitors heat over 3 million times per day",
      "Foldable prongs design for travel convenience"
    ],
    description: "Experience hyper-speed charging for your laptops, tablets, and phones simultaneously with Anker's most compact GaNPrime architecture charger yet.",
    reviews: [
      { author: "Liam S.", rating: 5, date: "October 20, 2026", title: "Replaced 3 bulky chargers on trips", comment: "Stays cool even while charging a laptop and two phones at once." }
    ]
  },
  {
    id: "prod-15",
    title: "SteelSeries Arctis Nova Pro Wireless Multi-System Gaming Headset with Active Noise Cancelling",
    brand: "SteelSeries",
    category: "Gaming",
    price: 299.99,
    originalPrice: 349.99,
    discount: 14,
    rating: 4.6,
    reviewsCount: 6840,
    prime: true,
    bestSeller: false,
    amazonsChoice: true,
    inStock: true,
    stockCount: 11,
    deliveryDate: "Tomorrow, 2 PM",
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=800&q=80",
    additionalImages: [],
    features: [
      "Almighty Audio with premium high fidelity drivers and 360 Spatial Audio",
      "Active Noise Cancellation with 4-mic hybrid system and transparency pass-through",
      "Infinity Power System: hot-swap two batteries for nonstop cordless play",
      "Multi-System Connect: switch between PC, PlayStation, Switch, or Mac with a button",
      "AI-Powered noise cancelling retractable ClearCast Gen 2 microphone"
    ],
    description: "Arctis Nova Pro Wireless brings legendary acoustic clarity and unmatched audio immersion to gaming with seamless dual wireless connection and hot-swappable batteries.",
    reviews: [
      { author: "GamerDan", rating: 5, date: "October 8, 2026", title: "The hot swappable battery is genius", comment: "Never having to plug in a headset again is unbelievable. Sounds incredible." }
    ]
  },
  {
    id: "prod-16",
    title: "Ember Temperature Control Smart Mug 2, 14 oz, Matte Black, 80 Min Battery Life",
    brand: "Ember",
    category: "Smart Home",
    price: 134.95,
    originalPrice: 149.95,
    discount: 10,
    rating: 4.5,
    reviewsCount: 14200,
    prime: true,
    bestSeller: false,
    amazonsChoice: true,
    inStock: true,
    stockCount: 16,
    deliveryDate: "Tomorrow, 11 AM",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    additionalImages: [],
    features: [
      "Keep your hot beverage at the exact drinking temperature you like (120°F - 145°F)",
      "Longer lasting battery: maintains your set temperature for up to 80 minutes",
      "Control with smartphone: set temperature, customize presets, and track caffeine intake",
      "Auto sleep: intelligently senses when to turn on and shut off based on liquid motion",
      "Hand wash safe with scratch-resistant ceramic coating (IPX7 waterproof)"
    ],
    description: "Designed for home or office, Ember Mug 2 does more than simply keep your coffee hot. Our smart mug allows you to set an exact drinking temperature so your hot drink is never too hot or cold.",
    reviews: [
      { author: "Samantha K.", rating: 5, date: "October 22, 2026", title: "Never have lukewarm coffee again", comment: "Game changer if you sip coffee slowly while working." }
    ]
  }
];

export const MOCK_ORDERS = [
  {
    id: "114-8923481-9018241",
    date: "October 28, 2026",
    total: 399.00,
    status: "Delivered yesterday",
    shippingAddress: "Ramanand Garg, 742 Evergreen Terrace, San Francisco, CA 94107",
    items: [
      {
        id: "prod-2",
        title: "Apple Watch Series 10 [GPS 46mm] Smartwatch with Midnight Aluminum Case",
        price: 399.00,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=200&q=80"
      }
    ]
  },
  {
    id: "114-1294029-7629103",
    date: "October 15, 2026",
    total: 124.89,
    status: "Delivered October 17",
    shippingAddress: "Ramanand Garg, 742 Evergreen Terrace, San Francisco, CA 94107",
    items: [
      {
        id: "prod-3",
        title: "Logitech MX Master 3S Wireless Performance Mouse",
        price: 99.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=200&q=80"
      },
      {
        id: "prod-11",
        title: "Lodge 10.25 Inch Cast Iron Pre-Seasoned Skillet",
        price: 24.90,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=200&q=80"
      }
    ]
  }
];
