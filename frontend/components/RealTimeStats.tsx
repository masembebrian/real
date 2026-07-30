import React, { useState, useEffect } from 'react';
import { Activity, TrendingUp, Users } from 'lucide-react';

const RealTimeStats = () => {
  const [stats, setStats] = useState({
    liveViewers: 124,
    marketTrend: '+5.2%',
    activeListings: 1420
  });

  useEffect(() => {
    // In a real implementation, this would connect to the FastAPI WebSocket
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        liveViewers: prev.liveViewers + Math.floor(Math.random() * 5) - 2
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 rounded-3xl text-white shadow-lg shadow-indigo-200">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-white/20 rounded-xl">
            <Users className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded-full uppercase">Live Now</span>
        </div>
        <h4 className="text-3xl font-bold mb-1">{stats.liveViewers}</h4>
        <p className="text-indigo-100 text-sm">Active buyers searching right now</p>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-green-50 rounded-xl">
            <TrendingUp className="text-green-600 w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full uppercase">Bullish</span>
        </div>
        <h4 className="text-3xl font-bold mb-1 text-gray-900">{stats.marketTrend}</h4>
        <p className="text-gray-500 text-sm">Market appreciation this quarter</p>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-purple-50 rounded-xl">
            <Activity className="text-purple-600 w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-full uppercase">Real-time</span>
        </div>
        <h4 className="text-3xl font-bold mb-1 text-gray-900">{stats.activeListings}</h4>
        <p className="text-gray-500 text-sm">Properties listed in your area</p>
      </div>
    </div>
  );
};

export default RealTimeStats;
