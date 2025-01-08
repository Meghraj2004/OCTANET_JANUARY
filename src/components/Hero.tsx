import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import video from './hero.mp4';

interface HeroProps {
  onReserve: () => void;
}

export default function Hero({ onReserve }: HeroProps) {
  return (
    <section className="relative h-screen">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Experience Fine Dining
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl mb-8 max-w-2xl text-gray-200">
            <span className="text-indigo-400">Indulge</span> in a
            <span className="text-yellow-400"> culinary journey </span>
            where <span className="text-green-400">tradition</span> meets
            <span className="text-red-400"> innovation</span>.
          </p>

          <button
            onClick={onReserve}
            className="bg-white text-black px-10 py-4 text-xl font-semibold rounded-full hover:bg-gray-200 shadow-lg transition-all"
          >
            Reserve Now
          </button>

          <div className="mt-12 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-12 text-lg">
            <div className="flex items-center space-x-2 bg-black p-4 rounded-lg shadow-lg">
              <Clock size={28} className="text-white" />
              <span className="font-semibold text-white">Open Daily: 11am - 10pm</span>
            </div>
            <div className="flex items-center space-x-2 bg-black p-4 rounded-lg shadow-lg">
              <MapPin size={28} className="text-white" />
              <span className="font-semibold text-white">123 Gourmet Street, Foodville</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
