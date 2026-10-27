import React, { useState } from 'react';
import { Search, Flame, Leaf, Award } from 'lucide-react';

const MENU_ITEMS = [
  {
    id: 1,
    category: 'starters',
    name: 'Truffle & Burrata Crostini',
    description: 'Creamy Puglia burrata, shaved black winter truffle, wildflower honey drizzle, toasted sourdough.',
    price: '$22',
    calories: '480 kcal',
    tag: 'Chef Special',
    isVegan: false,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp-qvEbpEyKqrm7qTUHgZc1Q48CWrp-4XVMqCjQ_e4bA&s'
  },
  {
    id: 2,
    category: 'starters',
    name: 'Wood-Fired Octopus',
    description: 'Charred octopus tentacles, smoked paprika potato mousse, caperberries, lemon herb oil.',
    price: '$26',
    calories: '520 kcal',
    tag: 'Popular',
    isVegan: false,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    category: 'mains',
    name: 'Prime Dry-Aged Ribeye (14oz)',
    description: '45-day dry-aged USDA Prime beef, bone marrow butter, charred cipollini onions, red wine jus.',
    price: '$64',
    calories: '890 kcal',
    tag: 'Signature',
    isVegan: false,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    category: 'mains',
    name: 'Pan-Seared Chilean Sea Bass',
    description: 'Wild sea bass, saffron risotto, baby fennel, saffron shellfish emulsion.',
    price: '$48',
    calories: '610 kcal',
    tag: 'Fresh',
    isVegan: false,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    category: 'mains',
    name: 'Wild Mushroom Risotto',
    description: 'Arborio rice, porcini & chanterelle mushrooms, aged Parmesan foam, crispy sage.',
    price: '$32',
    calories: '540 kcal',
    tag: 'Vegetarian',
    isVegan: true,
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    category: 'desserts',
    name: 'Valrhona Dark Chocolate Sphere',
    description: 'Warm salted caramel drizzle, hazelnut praline crunch, Madagascar vanilla bean gelée.',
    price: '$16',
    calories: '420 kcal',
    tag: 'Must Try',
    isVegan: false,
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeTab === 'all' || item.category === activeTab;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-semibold tracking-widest text-xs uppercase">Culinary Excellence</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold mt-2 mb-4">Our Seasonal Menu</h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Curated daily by Executive Chef Julian Vance, combining traditional techniques with contemporary flair.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 bg-slate-950 p-1.5 rounded-full border border-slate-800">
            {['all', 'starters', 'mains', 'desserts'].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold capitalize transition cursor-pointer ${
                  activeTab === cat ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-full text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition"
            />
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/40 transition group">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                {item.tag && (
                  <span className="absolute top-3 right-3 px-3 py-1 bg-amber-500/90 backdrop-blur-sm text-slate-950 text-[10px] font-bold uppercase rounded-full">
                    {item.tag}
                  </span>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif font-bold text-lg text-white group-hover:text-amber-400 transition">
                    {item.name}
                  </h3>
                  <span className="font-serif font-bold text-amber-400 text-lg">{item.price}</span>
                </div>
                
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-800/80 pt-3">
                  <span>{item.calories}</span>
                  {item.isVegan && (
                    <span className="flex items-center text-emerald-400 gap-1">
                      <Leaf className="w-3 h-3" /> Vegan / Veg
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}