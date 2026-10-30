import React, { useState, useEffect } from 'react';
import { HERO_BANNERS } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { setSelectedCategory, setSearchQuery } = useCart();

  // Auto rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_BANNERS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_BANNERS.length) % HERO_BANNERS.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_BANNERS.length);
  };

  const handleCtaClick = (category) => {
    setSelectedCategory(category);
    setSearchQuery('');
    const element = document.getElementById('products-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slide = HERO_BANNERS[currentSlide];

  return (
    <div className="relative w-full max-w-[1580px] mx-auto overflow-hidden select-none">
      {/* Banner Container */}
      <div className="relative h-[280px] sm:h-[380px] lg:h-[480px] w-full transition-all duration-700">
        
        {/* Background Image with Ambient Gradient */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out scale-105"
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} opacity-85 mix-blend-multiply`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        </div>

        {/* Content Overlay */}
        <div className="relative h-full max-w-[1580px] mx-auto px-6 sm:px-12 flex flex-col justify-center text-white z-10 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 bg-amazon-orange text-amazon-dark text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full w-max mb-3 shadow">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{slide.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight drop-shadow-md">
            {slide.title}
          </h2>

          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-200 line-clamp-2 max-w-lg drop-shadow">
            {slide.subtitle}
          </p>

          <div className="mt-5">
            <button
              onClick={() => handleCtaClick(slide.category)}
              className="bg-amazon-orange_button hover:bg-amazon-orange_hover text-amazon-dark font-bold text-sm sm:text-base px-6 py-2.5 rounded-full shadow-lg transition transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              {slide.cta} &rarr;
            </button>
          </div>
        </div>

        {/* Next/Prev Navigation Buttons */}
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-2 sm:left-4 top-1/3 -translate-y-1/2 p-2 sm:p-3 rounded-md bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm transition focus:outline-none focus:ring-2 focus:ring-amazon-yellow z-20 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-2 sm:right-4 top-1/3 -translate-y-1/2 p-2 sm:p-3 rounded-md bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm transition focus:outline-none focus:ring-2 focus:ring-amazon-yellow z-20 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-16 sm:bottom-28 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {HERO_BANNERS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'w-8 bg-amazon-orange' : 'w-2.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Classic Amazon Bottom Gradient Blend */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
}
