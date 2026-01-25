'use client';

import { useState } from 'react';

interface StarRatingProps {
  rating: number;
  onRate?: (stars: number) => void;
  readonly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  showCount?: boolean;
  count?: number;
}

export function StarRating({
  rating,
  onRate,
  readonly = false,
  size = 'md',
  showCount = false,
  count = 0,
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const displayRating = hoverRating !== null ? hoverRating : rating;

  const handleClick = (stars: number) => {
    if (!readonly && onRate) {
      // If clicking the same star, remove the rating
      if (rating === stars) {
        onRate(0);
      } else {
        onRate(stars);
      }
    }
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => {
          const isFilled = star <= displayRating;
          const isPartial = star > displayRating && star - 1 < displayRating;

          return (
            <button
              key={star}
              type="button"
              onClick={() => handleClick(star)}
              onMouseEnter={() => !readonly && setHoverRating(star)}
              onMouseLeave={() => setHoverRating(null)}
              disabled={readonly}
              className={`${sizeClasses[size]} ${
                readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'
              } transition-transform duration-150`}
              aria-label={`${star} star${star > 1 ? 's' : ''}`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                {/* Background star (empty) */}
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="var(--color-bg-tertiary)"
                  stroke="var(--ctp-yellow)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Filled star overlay */}
                {(isFilled || isPartial) && (
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="var(--ctp-yellow)"
                    stroke="var(--ctp-yellow)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={
                      isPartial
                        ? {
                            clipPath: `inset(0 ${100 - (displayRating - Math.floor(displayRating)) * 100}% 0 0)`,
                          }
                        : undefined
                    }
                  />
                )}
              </svg>
            </button>
          );
        })}
      </div>
      {showCount && count > 0 && (
        <span
          className="text-xs ml-1"
          style={{ color: 'var(--color-text-muted)' }}
        >
          ({count})
        </span>
      )}
    </div>
  );
}
