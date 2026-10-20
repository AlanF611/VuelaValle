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
    id: 'percy',
    name: 'Percy Grave',
    years: 35,
    totalFlights: 5000,
    certifications: ['AVLM Instructor', 'APPI SIV'],
    specialtyEs: 'Acrobacias y SIV',
    specialtyEn: 'Acrobatics and SIV',
    bioEs: 'Percy es conocido por su habilidad en acrobacias aéreas y manejo de emergencias. Con 35 años de experiencia, su curso de SIV es uno de los más completos de la región.',
    bioEn: 'Percy is known for his skill in aerial acrobatics and emergency management. With 35 years of experience, his SIV course is one of the most comprehensive in the region.',
    initials: 'PG',
  },
  {
    id: 'noe',
    name: 'Noé Colín',
    years: 29,
    totalFlights: 4200,
    certifications: ['AVLM Instructor', 'APPI Tandem'],
    specialtyEs: 'Vuelos Tandem y formación',
    specialtyEn: 'Tandem flights and training',
    bioEs: 'Noé es especialista en vuelos tándem y formación de nuevos pilotos. Sus 29 años de experiencia, enfoque pedagógico y paciencia lo convierten en el instructor ideal para quienes dan sus primeros pasos.',
    bioEn: 'Noé specializes in tandem flights and training new pilots. His 29 years of experience, pedagogical approach and patience make him the ideal instructor for those taking their first steps.',
    initials: 'NC',
  },
  {
    id: 'enrique',
    name: 'Enrique Benítez',
    years: 28,
    totalFlights: 3800,
    certifications: ['AVLM Instructor', 'APPI Tandem'],
    specialtyEs: 'Vuelos de montaña y expediciones',
    specialtyEn: 'Mountain flights and expeditions',
    bioEs: 'Enrique ha explorado las montañas más desafiantes de México durante 28 años. Su experiencia en vuelos de montaña lo convierte en un instructor único para quienes buscan aventura en terrenos exigentes.',
    bioEn: 'Enrique has explored the most challenging mountains in Mexico for 28 years. His experience in mountain flights makes him a unique instructor for those seeking adventure in demanding terrain.',
    initials: 'EB',
  },
  {
    id: 'esteban',
    name: 'Esteban Delgado',
    years: 26,
    totalFlights: 3500,
    certifications: ['AVLM Instructor'],
    specialtyEs: 'Vuelo térmico y cross-country',
    specialtyEn: 'Thermal flying and cross-country',
    bioEs: 'Esteban es un apasionado del vuelo térmico con 26 años de trayectoria. Ha logrado vuelos de más de 150 km y disfruta compartiendo sus conocimientos sobre lectura de condiciones meteorológicas.',
    bioEn: 'Esteban is passionate about thermal flying with 26 years of trajectory. He has achieved flights of more than 150 km and enjoys sharing his knowledge about reading weather conditions.',
    initials: 'ED',
  },
  {
    id: 'lazaro',
    name: 'Lázaro González',
    years: 20,
    totalFlights: 2800,
    certifications: ['AVLM Instructor', 'APPI Tandem'],
    specialtyEs: 'Vuelos XC y competencias',
    specialtyEn: 'XC flights and competitions',
    bioEs: 'Lázaro es un instructor experimentado con 20 años de experiencia en el parapente. Ha participado en múltiples competencias internacionales y es conocido por su técnica impecable.',
    bioEn: 'Lázaro is an experienced instructor with 20 years of experience in paragliding. He has participated in multiple international competitions and is known for his impeccable technique.',
    initials: 'LG',
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
