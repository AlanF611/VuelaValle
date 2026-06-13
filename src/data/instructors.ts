export interface Instructor {
  id: string;
  name: string;
  years: number;
  totalFlights: number;
  certifications: string[];
  specialtyEs: string;
  specialtyEn: string;
  bioEs: string;
  bioEn: string;
  initials: string;
}

export const instructors: Instructor[] = [
  {
    id: 'carlos',
    name: 'Carlos Mendoza',
    years: 12,
    totalFlights: 2400,
    certifications: ['AVLM Instructor', 'APPI Tandem'],
    specialtyEs: 'Vuelos XC y competencias',
    specialtyEn: 'XC flights and competitions',
    bioEs: 'Carlos comenz\u00f3 a volar en Valle de Bravo hace 12 a\u00f1os y desde entonces ha representado a M\u00e9xico en competencias internacionales. Su pasi\u00f3n por el cross-country lo ha llevado a recorrer m\u00e1s de 200 km en un solo vuelo.',
    bioEn: 'Carlos started flying in Valle de Bravo 12 years ago and has represented Mexico in international competitions. His passion for cross-country has taken him over 200 km in a single flight.',
    initials: 'CM',
  },
  {
    id: 'daniela',
    name: 'Daniela Reyes',
    years: 8,
    totalFlights: 1600,
    certifications: ['AVLM Instructora', 'APPI Tandem'],
    specialtyEs: 'Vuelos Sunset, grupos y eventos',
    specialtyEn: 'Sunset flights, groups and events',
    bioEs: 'Daniela es la piloto m\u00e1s solicitada para vuelos al atardecer. Su calma y precisi\u00f3n en el aire hacen que cada vuelo sea una experiencia memorable. Organiza vuelos grupales para empresas y celebraciones.',
    bioEn: 'Daniela is the most requested pilot for sunset flights. Her calm and precision in the air make every flight a memorable experience. She organizes group flights for companies and celebrations.',
    initials: 'DR',
  },
  {
    id: 'rodrigo',
    name: 'Rodrigo Varela',
    years: 6,
    totalFlights: 900,
    certifications: ['AVLM Piloto', 'APPI SIV'],
    specialtyEs: 'Cursos de iniciaci\u00f3n y SIV',
    specialtyEn: 'Beginner courses and SIV',
    bioEs: 'Rodrigo es el instructor favorito de los principiantes. Su paciencia y metodolog\u00eda clara han ayudado a m\u00e1s de 200 personas a dar sus primeros pasos en el parapente. Certificado en simulaci\u00f3n de incidentes en vuelo (SIV).',
    bioEn: 'Rodrigo is the favorite instructor for beginners. His patience and clear methodology have helped over 200 people take their first steps in paragliding. Certified in Simulated Incident in Flight (SIV).',
    initials: 'RV',
  },
];
