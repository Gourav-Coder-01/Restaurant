import React, { useState } from 'react';
import { Calendar, Users, Clock, CheckCircle } from 'lucide-react';

export default function Reservation({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '2',
    date: '',
    time: '19:00',
    seating: 'Main Dining'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-8 relative shadow-2xl text-white">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-serif font-bold text-white">Reserve Your Experience</h3>
              <p className="text-xs text-slate-400 mt-1">Select your preferred date & dining zone</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Full Name</label>
                <input 
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-500"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Guests</label>
                  <select 
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-500"
                    value={formData.guests}
                    onChange={e => setFormData({...formData, guests: e.target.value})}
                  >
                    {[1,2,3,4,5,6,8,10].map(n => <option key={n} value={n}>{n} Guests</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Seating Area</label>
                  <select 
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-500"
                    value={formData.seating}
                    onChange={e => setFormData({...formData, seating: e.target.value})}
                  >
                    <option value="Main Dining">Main Dining</option>
                    <option value="Chef's Counter">Chef's Counter</option>
                    <option value="Outdoor Terrace">Outdoor Terrace</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Date</label>
                  <input 
                    type="date"
                    required
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-500"
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Time</label>
                  <input 
                    type="time"
                    required
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-500"
                    value={formData.time}
                    onChange={e => setFormData({...formData, time: e.target.value})}
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition mt-2 cursor-pointer"
              >
                Confirm Reservation
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-amber-400 mx-auto mb-4" />
            <h4 className="text-xl font-serif font-bold text-white mb-2">Reservation Confirmed!</h4>
            <p className="text-xs text-slate-300 mb-6">
              Thank you, <strong className="text-amber-400">{formData.name}</strong>. We've reserved a table for {formData.guests} in our {formData.seating} area on {formData.date} at {formData.time}.
            </p>
            <button 
              onClick={() => { setSubmitted(false); onClose(); }}
              className="px-6 py-2.5 bg-slate-800 text-white rounded-full text-xs font-semibold hover:bg-slate-700"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}