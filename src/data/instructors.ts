import React from 'react';

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
    id: 'lazaro',
    name: 'Lázaro',
    years: 12,
    totalFlights: 2400,
    certifications: ['AVLM Instructor', 'APPI Tandem'],
    specialtyEs: 'Vuelos XC y competencias',
    specialtyEn: 'XC flights and competitions',
    bioEs: 'Lázaro es un instructor experimentado con más de 12 años de experiencia en el parapente. Ha participado en múltiples competencias internacionales y es conocido por su técnica impecable.',
    bioEn: 'Lázaro is an experienced instructor with over 12 years of experience in paragliding. He has participated in multiple international competitions and is known for his impeccable technique.',
    initials: 'LZ',
  },
  {
    id: 'noe',
    name: 'Noé',
    years: 8,
    totalFlights: 1600,
    certifications: ['AVLM Instructor', 'APPI Tandem'],
    specialtyEs: 'Vuelos Tandem y formación',
    specialtyEn: 'Tandem flights and training',
    bioEs: 'Noé es especialista en vuelos tándem y formación de nuevos pilotos. Su enfoque pedagógico y su paciencia lo convierten en el instructor ideal para quienes dan sus primeros pasos.',
    bioEn: 'Noé specializes in tandem flights and training new pilots. His pedagogical approach and patience make him the ideal instructor for those taking their first steps.',
    initials: 'NE',
  },
  {
    id: 'percy',
    name: 'Percy',
    years: 6,
    totalFlights: 900,
    certifications: ['AVLM Pilot', 'APPI SIV'],
    specialtyEs: 'Acrobacias y SIV',
    specialtyEn: 'Acrobatics and SIV',
    bioEs: 'Percy es conocido por su habilidad en acrobacias aéreas y manejo de emergencias. Su curso de SIV es uno de los más completos de la región.',
    bioEn: 'Percy is known for his skill in aerial acrobatics and emergency management. His SIV course is one of the most comprehensive in the region.',
    initials: 'PY',
  },
  {
    id: 'esteban',
    name: 'Esteban',
    years: 5,
    totalFlights: 700,
    certifications: ['AVLM Instructor'],
    specialtyEs: 'Vuelo térmico y cross-country',
    specialtyEn: 'Thermal flying and cross-country',
    bioEs: 'Esteban es un apasionado del vuelo térmico. Ha logrado vuelos de más de 150 km y disfruta compartiendo sus conocimientos sobre lectura de condiciones meteorológicas.',
    bioEn: 'Esteban is passionate about thermal flying. He has achieved flights of more than 150 km and enjoys sharing his knowledge about reading weather conditions.',
    initials: 'EB',
  },
  {
    id: 'enrique',
    name: 'Enrique',
    years: 7,
    totalFlights: 1200,
    certifications: ['AVLM Instructor', 'APPI Tandem'],
    specialtyEs: 'Vuelos de montaña y expediciones',
    specialtyEn: 'Mountain flights and expeditions',
    bioEs: 'Enrique ha explorado las montañas más desafiantes de México. Su experiencia en vuelos de montaña lo convierte en un instructor único para quienes buscan aventura en terrenos exigentes.',
    bioEn: 'Enrique has explored the most challenging mountains in Mexico. His experience in mountain flights makes him a unique instructor for those seeking adventure in demanding terrain.',
    initials: 'EQ',
  },
];

// Componente InstructorCard usando React.createElement
export const InstructorCard: React.FC<{ instructor: Instructor }> = ({ instructor }) => {
  return React.createElement(
    'div',
    { className: 'instructor-card' },
    React.createElement('div', { className: 'instructor-initials' }, instructor.initials),
    React.createElement('h3', null, instructor.name),
    React.createElement('p', null, `Años de experiencia: ${instructor.years}`),
    React.createElement('p', null, `Vuelos totales: ${instructor.totalFlights}`),
    React.createElement('p', null, `Certificaciones: ${instructor.certifications.join(', ')}`),
    React.createElement('p', null, `Especialidad: ${instructor.specialtyEs}`),
    React.createElement('p', null, `Biografía: ${instructor.bioEs}`)
  );
};

// Componente InstructorList usando React.createElement
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

// Componente principal usando React.createElement
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

// Componente con estilos usando React.createElement
export const InstructorsWithStyles: React.FC = () => {
  return React.createElement(
    'div',
    { style: { padding: '20px', fontFamily: 'Arial, sans-serif' } },
    React.createElement('style', null, `
      .instructors-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
      }
      .instructors-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
        margin-top: 20px;
      }
      .instructor-card {
        background: #f8f9fa;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
      }
      .instructor-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.15);
      }
      .instructor-initials {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: #2c3e50;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .instructor-card h3 {
        margin: 10px 0;
        color: #2c3e50;
        font-size: 18px;
      }
      .instructor-card p {
        margin: 5px 0;
        color: #555;
        font-size: 14px;
        line-height: 1.5;
      }
    `),
    React.createElement(InstructorsSection, null)
  );
};

export default InstructorsSection;
