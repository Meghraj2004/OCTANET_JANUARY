import React, { useState } from 'react';
import { Menu, X, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import logo from '../components/p.jpg'

const slides = [
  
  {
    url: "https://images.unsplash.com/photo-1544025162-d76694265947",
    title: "Exquisite Dining Experience"
  },
  {
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    title: "Elegant Atmosphere"
  },
  {
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    title: "Culinary Excellence"
  }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <header className="relative">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <img
                src={logo}
                alt="MeghResto Logo"
                className="h-20 w-25"
              />
            </div>


            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {['Home', 'Menu', 'About', 'Reservations', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Phone Number */}
            <div className="hidden md:flex items-center space-x-2 text-white">
              <Phone size={20} />
              <span>+91 94216 12110</span>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'Menu', 'About', 'Reservations', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-white hover:text-gray-300 px-3 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Image Slider */}
      <div className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={slide.url}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl md:text-6xl text-white font-serif text-center">
                {slide.title}
              </h2>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-black/20 rounded-full transition-colors"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-black/20 rounded-full transition-colors"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </header>
  );
}
