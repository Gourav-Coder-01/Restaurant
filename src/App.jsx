import { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Menu from './Components/Menu';
import Reservation from './Components/Reservation';
import Footer from './Components/Footer';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <div className="bg-slate-950 text-slate-100 font-sans min-h-screen">
      <Navbar onReserveClick={() => setIsReservationOpen(true)} />
      <Hero onReserveClick={() => setIsReservationOpen(true)} />
      <Menu />
      <Reservation 
        isOpen={isReservationOpen} 
        onClose={() => setIsReservationOpen(false)} 
      />
      <Footer />
    </div>
  );
}