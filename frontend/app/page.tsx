import React from 'react';
import Navbar from '../components/Navbar';
import PropertyCard from '../components/PropertyCard';
import RealTimeStats from '../components/RealTimeStats';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function Home() {
  const properties = [
    {
      id: 1,
      title: "The Glass Pavilion",
      price: 1250000,
      location: "Beverly Hills, CA",
      bedrooms: 4,
      bathrooms: 5,
      sqft: 4200,
      appreciation: "4.2%",
      status: "HOT DEAL"
    },
    {
      id: 2,
      title: "Modernist Loft",
      price: 890000,
      location: "SoHo, Manhattan",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1800,
      appreciation: "1.8%",
      status: "NEW LISTING"
    },
    {
      id: 3,
      title: "Skyline Penthouse",
      price: 3450000,
      location: "Chicago, IL",
      bedrooms: 3,
      bathrooms: 4,
      sqft: 3100,
      appreciation: "5.7%",
      status: "FEATURED"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Find your next <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                architectural masterpiece
              </span>
            </h1>
            <p className="text-xl text-gray-500 mb-10 leading-relaxed">
              Real-time market insights and exclusive listings powered by AI. 
              Experience the future of real estate today.
            </p>
            
            <div className="bg-white p-2 rounded-[32px] shadow-xl shadow-indigo-100 flex items-center border border-gray-100">
              <div className="flex-1 flex items-center px-6">
                <Search className="text-indigo-600 w-5 h-5 mr-3" />
                <input 
                  type="text" 
                  placeholder="Search by location, style, or features..." 
                  className="w-full bg-transparent border-none focus:ring-0 text-gray-900 placeholder:text-gray-400 font-medium"
                />
              </div>
              <button className="p-4 bg-gray-50 text-gray-600 rounded-2xl hover:bg-gray-100 transition mr-2">
                <SlidersHorizontal className="w-5 h-5" />
              </button>
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-[24px] font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
                Search Properties
              </button>
            </div>
          </div>
        </section>

        {/* Real-time Stats */}
        <RealTimeStats />

        {/* Listings Section */}
        <section className="mt-20">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Exclusive Listings</h2>
              <p className="text-gray-500">Curated properties matching your search criteria</p>
            </div>
            <div className="flex space-x-2">
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-full font-semibold">For You</button>
              <button className="px-6 py-2 bg-white text-gray-600 rounded-full font-semibold border border-gray-100">Popular</button>
              <button className="px-6 py-2 bg-white text-gray-600 rounded-full font-semibold border border-gray-100">Price Drops</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map(p => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
