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
    priceMXN: 1900,
    duration: '20',
    image: '/img/VUELO1.jpeg',
  },
  sunset: {
    id: 'sunset',
    priceMXN: 1800,
    duration: '35',
    image: '/img/VUELO3.jpeg',
  },
  xc: {
    id: 'xc',
    priceMXN: 2900,
    duration: '60',
    image: '/img/VUELO4.jpeg',
  },
};

export const addOnPrices = {
  goproPhotos: 300,
  goproVideo: 300,
  privateTransport: 200,
  certificate: 150,
};

export const depositAmount = 500;
