interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  id?: string;
}

export default function Card({ children, className = '', hover = true, id }: CardProps) {
  return (
    <div
      id={id}
      className={`bg-white rounded-2xl border border-dark-100 overflow-hidden ${
        hover ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
