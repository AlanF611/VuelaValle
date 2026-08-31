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
    years: 0,
    totalFlights: 0,
    certifications: [],
    specialtyEs: '',
    specialtyEn: '',
    bioEs: '',
    bioEn: '',
    initials: 'LÁ',
  },
  {
    id: 'noe',
    name: 'Noé',
    years: 0,
    totalFlights: 0,
    certifications: [],
    specialtyEs: '',
    specialtyEn: '',
    bioEs: '',
    bioEn: '',
    initials: 'NO',
  },
  {
    id: 'percy',
    name: 'Percy',
    years: 0,
    totalFlights: 0,
    certifications: [],
    specialtyEs: '',
    specialtyEn: '',
    bioEs: '',
    bioEn: '',
    initials: 'PE',
  },
  {
    id: 'esteban',
    name: 'Esteban',
    years: 0,
    totalFlights: 0,
    certifications: [],
    specialtyEs: '',
    specialtyEn: '',
    bioEs: '',
    bioEn: '',
    initials: 'ES',
  },
  {
    id: 'enrique',
    name: 'Enrique',
    years: 0,
    totalFlights: 0,
    certifications: [],
    specialtyEs: '',
    specialtyEn: '',
    bioEs: '',
    bioEn: '',
    initials: 'EN',
  },
];

// Componente para mostrar un instructor individual
interface InstructorCardProps {
  instructor: Instructor;
}

export const InstructorCard: React.FC<InstructorCardProps> = ({ instructor }) => {
  return (
    <div className="instructor-card">
      <div className="instructor-initials">{instructor.initials}</div>
      <h3>{instructor.name}</h3>
      <p>Años de experiencia: {instructor.years}</p>
      <p>Vuelos totales: {instructor.totalFlights}</p>
      <p>Certificaciones: {instructor.certifications.join(', ')}</p>
      <p>Especialidad: {instructor.specialtyEs}</p>
      <p>Biografía: {instructor.bioEs}</p>
    </div>
  );
};

// Componente para la lista completa de instructores
interface InstructorListProps {
  instructors?: Instructor[];
}

export const InstructorList: React.FC<InstructorListProps> = ({ instructors: propInstructors }) => {
  const displayInstructors = propInstructors || instructors;

  return (
    <div className="instructors-container">
      <h2>Nuestros Instructores</h2>
      <div className="instructors-grid">
        {displayInstructors.map((instructor) => (
          <InstructorCard key={instructor.id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

// Componente principal para usar en la aplicación
export const InstructorsSection: React.FC = () => {
  return (
    <section className="instructors-section">
      <div className="container">
        <InstructorList />
      </div>
    </section>
  );
};

// Si necesitas un componente con estilos básicos incluidos (opcional)
export const InstructorsWithStyles: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <style>
        {`
          .instructors-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }
          .instructors-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
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
          }
          .instructor-initials {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #2c3e50;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
          }
          .instructor-card h3 {
            margin: 10px 0;
            color: #2c3e50;
          }
          .instructor-card p {
            margin: 5px 0;
            color: #555;
            font-size: 14px;
          }
        `}
      </style>
      <InstructorsSection />
    </div>
  );
};

export default InstructorsSection;
