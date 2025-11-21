
export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface NotaryLocation {
  id: number;
  name: string;
  address: string;
  hours: string;
  lat: number;
  lng: number;
  distance?: number;
}
