import React from 'react';
import { Search, Home, Map, MessageSquare, User, Bell } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
          <Home className="text-white w-6 h-6" />
        </div>
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          RealEstate.AI
        </span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
        <a href="#" className="hover:text-indigo-600 transition">Buy</a>
        <a href="#" className="hover:text-indigo-600 transition">Rent</a>
        <a href="#" className="hover:text-indigo-600 transition">Sell</a>
        <a href="#" className="hover:text-indigo-600 transition">Agents</a>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-400 hover:text-indigo-600 relative">
          <Bell className="w-6 h-6" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <div className="h-8 w-[1px] bg-gray-200"></div>
        <button className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full hover:bg-gray-100 transition border border-gray-200">
          <User className="w-5 h-5 text-gray-600" />
          <span className="text-sm font-semibold text-gray-700">Sign In</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
