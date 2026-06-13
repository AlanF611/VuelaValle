interface BadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'primary' | 'dark';
  className?: string;
}

const variantStyles = {
  accent: 'bg-accent-100 text-accent-700',
  primary: 'bg-primary-100 text-primary-700',
  dark: 'bg-dark-100 text-dark-700',
};

export default function Badge({ children, variant = 'accent', className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
