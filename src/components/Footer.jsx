import React from 'react';
import { Globe, DollarSign } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 bg-amazon-light_dark text-white text-xs select-none">
      
      {/* Back To Top Button */}
      <button
        onClick={scrollToTop}
        className="w-full bg-[#37475a] hover:bg-[#485769] text-gray-200 py-3.5 text-center text-xs font-semibold tracking-wider transition cursor-pointer"
      >
        Back to top
      </button>

      {/* 4 Columns Links */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-sm mb-3 text-white">Get to Know Us</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Amazon Newsletter</li>
            <li className="hover:underline cursor-pointer">About Amazon</li>
            <li className="hover:underline cursor-pointer">Accessibility</li>
            <li className="hover:underline cursor-pointer">Sustainability</li>
            <li className="hover:underline cursor-pointer">Amazon Science</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm mb-3 text-white">Make Money with Us</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:underline cursor-pointer">Sell products on Amazon</li>
            <li className="hover:underline cursor-pointer">Sell on Amazon Business</li>
            <li className="hover:underline cursor-pointer">Sell apps on Amazon</li>
            <li className="hover:underline cursor-pointer">Become an Affiliate</li>
            <li className="hover:underline cursor-pointer">Advertise Your Products</li>
            <li className="hover:underline cursor-pointer">Self-Publish with Us</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm mb-3 text-white">Amazon Payment Products</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:underline cursor-pointer">Amazon Visa</li>
            <li className="hover:underline cursor-pointer">Amazon Store Card</li>
            <li className="hover:underline cursor-pointer">Amazon Secured Card</li>
            <li className="hover:underline cursor-pointer">Amazon Business Card</li>
            <li className="hover:underline cursor-pointer">Shop with Points</li>
            <li className="hover:underline cursor-pointer">Reload Your Balance</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm mb-3 text-white">Let Us Help You</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:underline cursor-pointer">Amazon and COVID-19</li>
            <li className="hover:underline cursor-pointer">Your Account</li>
            <li className="hover:underline cursor-pointer">Your Orders</li>
            <li className="hover:underline cursor-pointer">Shipping Rates & Policies</li>
            <li className="hover:underline cursor-pointer">Returns & Replacements</li>
            <li className="hover:underline cursor-pointer">Help & Customer Service</li>
          </ul>
        </div>
      </div>

      {/* Middle Brand & Language Bar */}
      <div className="border-t border-gray-700 py-8 bg-amazon-light_dark">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 text-gray-300">
          <div className="flex items-baseline font-black tracking-tight text-xl text-white">
            <span>amazon</span>
            <span className="text-amazon-orange text-xs">.com</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 border border-gray-500 rounded px-3 py-1.5 hover:border-white cursor-pointer">
              <Globe className="w-3.5 h-3.5" />
              <span>English</span>
            </div>
            <div className="flex items-center gap-1.5 border border-gray-500 rounded px-3 py-1.5 hover:border-white cursor-pointer">
              <span>$ USD - U.S. Dollar</span>
            </div>
            <div className="flex items-center gap-1.5 border border-gray-500 rounded px-3 py-1.5 hover:border-white cursor-pointer">
              <span>🇺🇸 United States</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="bg-amazon-dark py-6 text-center text-[11px] text-gray-400">
        <div className="flex flex-wrap justify-center gap-4 mb-2">
          <span className="hover:underline cursor-pointer">Conditions of Use</span>
          <span className="hover:underline cursor-pointer">Privacy Notice</span>
          <span className="hover:underline cursor-pointer">Consumer Health Data Privacy</span>
          <span className="hover:underline cursor-pointer">Your Ads Privacy Choices</span>
        </div>
        <p>© 1996-2026, Amazon.com, Inc. or its affiliates. Built with simple clean UI and fake mock data.</p>
      </div>

    </footer>
  );
}
