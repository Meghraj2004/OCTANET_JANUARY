import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact form submission
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={20} />
                <div>
                  <p>123 Gourmet Street</p>
                  <p>Foodville,1 Pune 424203</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} />
                <p>+91 94216 12110</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} />
                <p>info@MeghResto.com</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Hours</h3>
            <div className="space-y-2">
              <p>Monday - Friday: 11am - 10pm</p>
              <p>Saturday: 10am - 11pm</p>
              <p>Sunday: 10am - 9pm</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"
              />
              <input
                type="text"
                placeholder="Subject"
                className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"
              />
              <textarea
                placeholder="Message"
                className="md:col-span-2 px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"
                rows={4}
                required
              ></textarea>
              <button
                type="submit"
                className="md:col-span-2 bg-white text-black px-6 py-2 rounded hover:bg-gray-100 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>      
      </div>
    </footer>
  );
}