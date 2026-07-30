import React from 'react';
import { Bed, Bath, Square, Heart, MapPin } from 'lucide-react';

const PropertyCard = ({ property }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.image || "https://images.unsplash.com/photo-1600585154340-be6191dae10c?auto=format&fit=crop&w=800&q=80"} 
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-indigo-600 shadow-sm">
            {property.status || "NEW LISTING"}
          </span>
        </div>
        <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition">
          <Heart className="w-5 h-5" />
        </button>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl flex justify-between items-center shadow-lg">
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Price</p>
              <p className="text-lg font-bold text-gray-900">${property.price.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-lg">
                +{property.appreciation || "2.4%"} 
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-gray-400 text-sm mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          {property.location}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition">
          {property.title}
        </h3>
        
        <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-50">
          <div className="flex flex-col items-center">
            <div className="flex items-center text-gray-600 mb-1">
              <Bed className="w-4 h-4 mr-1" />
              <span className="font-bold text-sm">{property.bedrooms}</span>
            </div>
            <span className="text-[10px] text-gray-400 uppercase font-medium">Beds</span>
          </div>
          <div className="flex flex-col items-center border-x border-gray-50">
            <div className="flex items-center text-gray-600 mb-1">
              <Bath className="w-4 h-4 mr-1" />
              <span className="font-bold text-sm">{property.bathrooms}</span>
            </div>
            <span className="text-[10px] text-gray-400 uppercase font-medium">Baths</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center text-gray-600 mb-1">
              <Square className="w-4 h-4 mr-1" />
              <span className="font-bold text-sm">{property.sqft}</span>
            </div>
            <span className="text-[10px] text-gray-400 uppercase font-medium">Sq. Ft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
