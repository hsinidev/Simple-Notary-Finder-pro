
import React, { useState, useCallback } from 'react';
import { getUserLocation, getSimulatedNearbyNotaries } from '../services/geolocationService';
import type { Coordinates, NotaryLocation } from '../types';

const NotaryFinderTool: React.FC = () => {
  const [userCoords, setUserCoords] = useState<Coordinates | null>(null);
  const [nearbyNotaries, setNearbyNotaries] = useState<NotaryLocation[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFindNotaries = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const coords = await getUserLocation();
      setUserCoords(coords);
      const notaries = getSimulatedNearbyNotaries(coords);
      setNearbyNotaries(notaries);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
      setNearbyNotaries([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="space-y-8">
      <div className="text-center bg-gray-900/50 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-white/10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Find a Notary Public Instantly</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
          Use our secure tool to find a list of trusted notary services near you. Click the button below to share your location.
        </p>
        <button
          onClick={handleFindNotaries}
          disabled={isLoading}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:scale-100 disabled:from-gray-500"
        >
          {isLoading ? (
            <div className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Locating...
            </div>
          ) : (
            'Find Notaries Near Me'
          )}
        </button>
        {error && (
          <div className="mt-4 p-4 bg-red-900/50 border border-red-700 text-red-300 rounded-lg max-w-md mx-auto">
            <p className="font-semibold">Location Error</p>
            <p className="text-sm">{error}</p>
          </div>
        )}
      </div>

      {userCoords && (
        <div className="bg-gray-900/50 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 overflow-hidden">
          <div className="h-64 md:h-80 bg-gray-800/50 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
            <div className="text-center z-10 p-4">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-400 mx-auto animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                 <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
               </svg>
               <p className="text-white font-semibold mt-2">You Are Here</p>
               <p className="text-xs text-gray-400">(Simulated Map View)</p>
            </div>
          </div>
          <div className="p-4 md:p-6">
            <h3 className="text-2xl font-bold mb-4 text-indigo-300">Nearby Notary Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {nearbyNotaries.map(notary => (
                <div key={notary.id} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-indigo-500/80 hover:bg-gray-800/80 transition-all duration-300 transform hover:-translate-y-1">
                  <h4 className="font-bold text-lg text-white">{notary.name}</h4>
                  <p className="text-gray-400 text-sm">{notary.address}</p>
                  <p className="text-gray-400 text-sm mt-2">{notary.hours}</p>
                  <p className="text-indigo-400 font-bold text-right mt-2">{notary.distance} miles away</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotaryFinderTool;
