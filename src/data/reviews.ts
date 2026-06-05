export interface Review {
  id: number;
  stars: number;
  textEs: string;
  textEn: string;
  name: string;
  cityEs: string;
  cityEn: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    stars: 5,
    textEs: 'Una experiencia incre\u00edble. Carlos fue un piloto excepcional, me sent\u00ed seguro en todo momento. Las vistas del lago son impresionantes.',
    textEn: 'An incredible experience. Carlos was an exceptional pilot, I felt safe the entire time. The lake views are stunning.',
    name: 'Mar\u00eda G.',
    cityEs: 'Ciudad de M\u00e9xico',
    cityEn: 'Mexico City',
    date: '2025-01-15',
  },
  {
    id: 2,
    stars: 5,
    textEs: 'El vuelo sunset fue m\u00e1gico. Las fotos con GoPro quedaron espectaculares. 100% recomendado para parejas.',
    textEn: 'The sunset flight was magical. The GoPro photos came out spectacular. 100% recommended for couples.',
    name: 'Roberto L.',
    cityEs: 'Monterrey',
    cityEn: 'Monterrey',
    date: '2024-12-28',
  },
  {
    id: 3,
    stars: 5,
    textEs: 'Vol\u00e9 con Daniela y fue la mejor experiencia de mi vida. Super profesional y muy paciente. Ya quiero volver.',
    textEn: 'I flew with Daniela and it was the best experience of my life. Super professional and very patient. I want to come back already.',
    name: 'Ana P.',
    cityEs: 'Guadalajara',
    cityEn: 'Guadalajara',
    date: '2025-02-10',
  },
  {
    id: 4,
    stars: 5,
    textEn: 'Absolutely world-class. The XC flight from El Pe\u00f1\u00f3n was a dream. Rodrigo guided us perfectly through the thermals.',
    textEs: 'Absolutamente de clase mundial. El vuelo XC desde El Pe\u00f1\u00f3n fue un sue\u00f1o. Rodrigo nos gui\u00f3 perfectamente a trav\u00e9s de las t\u00e9rmicas.',
    name: 'James W.',
    cityEn: 'San Francisco',
    cityEs: 'San Francisco',
    date: '2025-01-22',
  },
  {
    id: 5,
    stars: 5,
    textEn: 'Best thing we did in Mexico! The team was professional and made us feel completely safe. The video footage is amazing.',
    textEs: 'Lo mejor que hicimos en M\u00e9xico. El equipo fue profesional y nos hizo sentir completamente seguros. El video es incre\u00edble.',
    name: 'Sarah K.',
    cityEn: 'London',
    cityEs: 'Londres',
    date: '2024-11-15',
  },
  {
    id: 6,
    stars: 5,
    textEn: 'I came for a tandem flight and left signed up for the beginner course. That tells you everything about how good this team is.',
    textEs: 'Vine por un vuelo t\u00e1ndem y me fui inscrito al curso de iniciaci\u00f3n. Eso te dice todo sobre lo bueno que es este equipo.',
    name: 'Mike D.',
    cityEn: 'Toronto',
    cityEs: 'Toronto',
    date: '2025-03-05',
  },
];
