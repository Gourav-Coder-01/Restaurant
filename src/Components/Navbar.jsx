import  { useState, useEffect } from 'react';
import { Utensils, Menu, X, Phone } from 'lucide-react';

export default function Navbar({ onReserveClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
            <Utensils className="w-5 h-5" />
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight text-white">
            AURA <span className="text-amber-400 font-sans text-sm tracking-widest block uppercase font-normal">Bistro & Bar</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-200">
          <a href="#about" className="hover:text-amber-400 transition">About</a>
          <a href="#menu" className="hover:text-amber-400 transition">Menu</a>
          <a href="#gallery" className="hover:text-amber-400 transition">Gallery</a>
          <a href="#reviews" className="hover:text-amber-400 transition">Reviews</a>
          <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:+1234567890" className="flex items-center text-xs text-slate-300 hover:text-white transition">
            <Phone className="w-3.5 h-3.5 mr-1.5 text-amber-400" /> 9876543210
          </a>
          <button 
            onClick={onReserveClick}
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm rounded-full shadow-lg shadow-amber-500/20 transition cursor-pointer"
          >
            Book Table
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-200 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 pt-4 pb-6 space-y-4 text-center">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 py-2">About</a>
          <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 py-2">Menu</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 py-2">Gallery</a>
          <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 py-2">Reviews</a>
          <button 
            onClick={() => { setMobileMenuOpen(false); onReserveClick(); }}
            className="w-full py-3 bg-amber-500 text-slate-950 font-bold rounded-xl"
          >
            Reserve Table
          </button>
        </div>
      )}
    </nav>
  );
}