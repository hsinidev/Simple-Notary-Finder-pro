
import type { Coordinates, NotaryLocation } from '../types';
import { notaryLocations } from '../data/notaryLocations';

export const getUserLocation = (): Promise<Coordinates> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by your browser."));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        () => {
          reject(new Error("Unable to retrieve your location. Please enable location permissions."));
        }
      );
    }
  });
};

export const getSimulatedNearbyNotaries = (userCoords: Coordinates): NotaryLocation[] => {
  // In a real app, this would use the Haversine formula and a backend query.
  // Here, we just sort by a simulated distance to show functionality.
  return notaryLocations
    .map(location => ({
      ...location,
      distance: parseFloat((Math.random() * 5 + 0.5).toFixed(1)), // Simulate distance between 0.5 and 5.5 miles
    }))
    .sort((a, b) => (a.distance ?? 0) - (b.distance ?? 0));
};
