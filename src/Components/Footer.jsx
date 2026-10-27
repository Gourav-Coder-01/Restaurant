import React from 'react';
import { Utensils, Globe, Share2, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <div>
          <div className="flex items-center space-x-2 text-white mb-4">
            <Utensils className="w-5 h-5 text-amber-400" />
            <span className="font-serif font-bold text-xl">AURA</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Modern dining experience highlighting organic seasonal ingredients and artisan wine pairings.
          </p>
          
          {/* Social Icons using Inline SVGs or Lucide icons */}
          <div className="flex space-x-3 text-slate-400">
            {/* Instagram SVG */}
            <a href="#" className="p-2 bg-slate-900 rounded-full hover:text-amber-400 hover:bg-slate-800 transition" aria-label="Instagram">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Facebook SVG */}
            <a href="#" className="p-2 bg-slate-900 rounded-full hover:text-amber-400 hover:bg-slate-800 transition" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
              </svg>
            </a>

            {/* X / Twitter SVG */}
            <a href="#" className="p-2 bg-slate-900 rounded-full hover:text-amber-400 hover:bg-slate-800 transition" aria-label="Twitter">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Hours</h4>
          <ul className="text-xs space-y-2">
            <li>Mon - Thu: 5:00 PM – 10:00 PM</li>
            <li>Fri - Sat: 5:00 PM – 11:30 PM</li>
            <li>Sunday: 4:30 PM – 9:30 PM</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Location</h4>
          <p className="text-xs leading-relaxed">
            452 Grand Avenue, Suite 100<br />
            Downtown Financial District<br />
            New York, NY 10013
          </p>
        </div>

        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Newsletter</h4>
          <p className="text-xs mb-3">Subscribe for exclusive chef tasting event invites.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-3 py-2 bg-slate-900 border border-slate-800 rounded-l-lg text-xs w-full text-white focus:outline-none focus:border-amber-500"
            />
            <button className="px-4 py-2 bg-amber-500 text-slate-950 font-bold text-xs rounded-r-lg hover:bg-amber-400 transition cursor-pointer">
              Join
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-900 text-center text-xs text-slate-600">
        © 2026 AURA Bistro & Bar. All rights reserved.
      </div>
    </footer>
  );
}