import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  size?: 'sm' | 'md';
}

export default function StarRating({ rating, size = 'sm' }: StarRatingProps) {
  const iconSize = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`${iconSize} ${i < rating ? 'text-accent-400 fill-accent-400' : 'text-dark-200'}`}
        />
      ))}
    </div>
  );
}
