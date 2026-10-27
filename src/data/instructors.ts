import React from 'react';

export interface Instructor {
  id: string;
  name: string;
  years: number;
  totalFlights: number;
  certifications: string[]; // siempre array, nunca undefined
  specialtyEs: string;
  specialtyEn: string;
  bioEs: string;
  bioEn: string;
  initials: string;
}

export const instructors: Instructor[] = [
  {
    id: 'percy',
    name: 'Percy Grave',
    years: 35,
    totalFlights: 5000,
    certifications: [],
    specialtyEs: 'Acrobacias y SIV',
    specialtyEn: 'Acrobatics and SIV',
    bioEs: 'Percy es un instructor experimentado. Empezó volando ala delta y después se cambió al parapente. Ha participado en múltiples competencias internacionales.',
    bioEn: 'Percy is an experienced instructor. He started flying hang gliders and later switched to paragliding. He has participated in multiple international competitions.',
    initials: 'PG',
  },
  {
    id: 'noe',
    name: 'Noé Colín',
    years: 29,
    totalFlights: 5000,
    certifications: [],
    specialtyEs: 'Vuelos Tandem y formación',
    specialtyEn: 'Tandem flights and training',
    bioEs: 'Noé es especialista en vuelos tándem. Es de los pioneros en Valle de Bravo en vuelos con pasajero. Uno de los pilotos más experimentados.',
    bioEn: 'Noé specializes in tandem flights. He is one of the pioneers in Valle de Bravo in passenger flights. One of the most experienced pilots.',
    initials: 'NC',
  },
  {
    id: 'enrique',
    name: 'Enrique Benítez',
    years: 28,
    totalFlights: 5000,
    certifications: [],
    specialtyEs: 'Vuelos de montaña y expediciones',
    specialtyEn: 'Mountain flights and expeditions',
    bioEs: 'Enriquito es experto en vuelos tándem. Tiene una técnica de despegue impecable. Está involucrado en el vuelo libre desde que nació.',
    bioEn: 'Enriquito is an expert in tandem flights. He has an impeccable takeoff technique. He has been involved in free flight since birth.',
    initials: 'EB',
  },
  {
    id: 'esteban',
    name: 'Esteban Delgado',
    years: 28,
    totalFlights: 5000,
    certifications: [],
    specialtyEs: 'Vuelo térmico y cross-country',
    specialtyEn: 'Thermal flying and cross-country',
    bioEs: 'Estaba Delgado, pero ya no tanto... Apasionado del vuelo en la modalidad de cross country. Cualquier duda es el indicado para responderla. Lo que no sabe lo inventa.',
    bioEn: 'He used to be "Delgado" (slim), but not so much anymore... Passionate about cross-country flying. He is the right person to answer any question. What he doesn\'t know, he makes up.',
    initials: 'ED',
  },
  {
    id: 'lazaro',
    name: 'Lázaro González',
    years: 20,
    totalFlights: 5000,
    certifications: [],
    specialtyEs: 'Vuelos XC y competencias',
    specialtyEn: 'XC flights and competitions',
    bioEs: 'Instructor con muchos años de experiencia y muy buen sentido del humor. Él nos entretiene mientras subimos al despegue.',
    bioEn: 'Instructor with many years of experience and a great sense of humor. He entertains us while we head up to the takeoff.',
    initials: 'LG',
  },
];

export const InstructorCard: React.FC<{ instructor: Instructor }> = ({ instructor }) => {
  return React.createElement(
    'div',
    { className: 'instructor-card' },
    React.createElement('div', { className: 'instructor-initials' }, instructor.initials),
    React.createElement('h3', null, instructor.name),
    React.createElement('p', null, `Años de experiencia: ${instructor.years}`),
    React.createElement('p', null, `Vuelos totales: ${instructor.totalFlights}+`),
    instructor.certifications.length > 0
      ? React.createElement('p', null, `Certificaciones: ${instructor.certifications.join(', ')}`)
      : null,
    React.createElement('p', null, `Especialidad: ${instructor.specialtyEs}`),
    React.createElement('p', null, `Biografía: ${instructor.bioEs}`)
  );
};

export const InstructorList: React.FC<{ instructors?: Instructor[] }> = ({ 
  instructors: propInstructors 
}) => {
  const displayInstructors = propInstructors || instructors;

  return React.createElement(
    'div',
    { className: 'instructors-container' },
    React.createElement('h2', null, 'Nuestros Instructores'),
    React.createElement(
      'div',
      { className: 'instructors-grid' },
      displayInstructors.map((instructor) =>
        React.createElement(InstructorCard, { key: instructor.id, instructor })
      )
    )
  );
};

export const InstructorsSection: React.FC = () => {
  return React.createElement(
    'section',
    { className: 'instructors-section' },
    React.createElement(
      'div',
      { className: 'container' },
      React.createElement(InstructorList, null)
    )
  );
};

export const InstructorsWithStyles: React.FC = () => {
  return React.createElement(
    'div',
    { style: { padding: '20px', fontFamily: 'Arial, sans-serif' } },
    React.createElement('style', null, `
      .instructors-container { max-width: 1200px; margin: 0 auto; padding: 20px; }
      .instructors-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-top: 20px; }
      .instructor-card { background: #f8f9fa; border-radius: 8px; padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: transform 0.3s ease; }
      .instructor-card:hover { transform: translateY(-5px); box-shadow: 0 4px 8px rgba(0,0,0,0.15); }
      .instructor-initials { width: 60px; height: 60px; border-radius: 50%; background: #2c3e50; color: white; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold; margin-bottom: 10px; }
      .instructor-card h3 { margin: 10px 0; color: #2c3e50; font-size: 18px; }
      .instructor-card p { margin: 5px 0; color: #555; font-size: 14px; line-height: 1.5; }
    `),
    React.createElement(InstructorsSection, null)
  );
};

export default InstructorsSection;
