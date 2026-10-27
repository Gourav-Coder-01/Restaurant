import React from 'react';
import { Star, Clock, MapPin, ChevronDown } from 'lucide-react';
console.log(React)
export default function Hero({ onReserveClick }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-950 text-white overflow-hidden">
      {/* Background Image with Dark Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 transition-transform duration-10000"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=80')` }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/60 to-slate-950/40" />

      {/* Hero Content */}
      <div className="relative max-w-5xl mx-auto px-4 text-center pt-24 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-6">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> Michelin Guide Recommended 2026
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight">
          Crafted Flavors, <br />
          <span className="italic font-light text-amber-300">Unforgettable</span> Atmosphere.
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 mb-10 leading-relaxed">
          Experience artisan wood-fired cuisine, hand-selected organic ingredients, and modern mixology in an intimate architectural space.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button 
            onClick={onReserveClick}
            className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base rounded-full shadow-lg shadow-amber-500/25 transition transform hover:-translate-y-0.5 cursor-pointer"
          >
            Reserve a Table
          </button>
          <a 
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-medium text-base rounded-full border border-white/20 transition"
          >
            Explore Menu
          </a>
        </div>

        {/* Info Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-8 border-t border-slate-800/80 text-xs text-slate-300">
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Tue - Sun: 5:00 PM – 11:00 PM</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>452 Grand Avenue, Downtown</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>4.9 / 5.0 (1,200+ Reviews)</span>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-white animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </a>
    </div>
  );
}