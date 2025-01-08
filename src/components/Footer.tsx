import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...formData,
      access_key: 'e99b466d-e31a-4dfe-9e20-188a24f69b8c', // Replace with your Web3Forms access key
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Error sending message. Please check your network and try again.');
    }
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
                  <p>Foodville, Pune 424203</p>
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
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"
              />
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"
              />
              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
            {status && <p className="mt-4 text-green-500">{status}</p>}
          </div>
        </div>
      </div>
    </footer>
  );
}
