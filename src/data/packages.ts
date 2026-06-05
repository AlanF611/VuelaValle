export type FlightType = 'classic' | 'sunset' | 'xc';

export interface FlightPackage {
  id: FlightType;
  priceMXN: number;
  duration: string;
  image: string;
}

export const flightPackages: Record<FlightType, FlightPackage> = {
  classic: {
    id: 'classic',
    priceMXN: 1200,
    duration: '20',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
  },
  sunset: {
    id: 'sunset',
    priceMXN: 1800,
    duration: '35',
    image: 'https://images.unsplash.com/photo-1601987077677-5346c463c08e?w=800',
  },
  xc: {
    id: 'xc',
    priceMXN: 2800,
    duration: '60',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
  },
};

export const addOnPrices = {
  goproPhotos: 300,
  goproVideo: 300,
  privateTransport: 200,
  certificate: 150,
};

export const depositAmount = 500;
