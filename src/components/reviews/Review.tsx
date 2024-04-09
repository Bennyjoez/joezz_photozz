import { useEffect, useState } from 'react';
import { capitalize } from '../../utils/module';
import { Rating } from './rating';

export interface reviewDataProps {
  comment: string;
  date: Date;
  rating: number;
  reviewer: null | string;
  _id: string;
}

interface ReviewProps {
  reviewData: reviewDataProps | undefined;
  setTargetReview?: (value: reviewDataProps | undefined) => void;
  expanded?: boolean;
}

function truncateText(text: string, maxLength: number) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  } else {
    return text;
  }
}

export function Review({ reviewData, setTargetReview, expanded }: ReviewProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!reviewData) return null;
  const { comment, date, rating, reviewer } = reviewData;

  const named = reviewer ? capitalize(reviewer) : "Anonymous";

  const handleMouseEnter = () => {
    if (!isMobile) {
      setTargetReview?.(reviewData);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setTargetReview?.(undefined);
    }
  };

  return (
    <div
      className="review"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="quotation-mark">"</span>
      <div className="review-comment">
        {expanded || isMobile ? <p>{comment}</p> : <p>"{truncateText(comment, 60)}"</p>}
      </div>
      <Rating rating={rating} />
      <div className="reviewer">
        <h3>{named}</h3>
        <h4>{new Date(date).toDateString()}</h4>
      </div>
    </div>
  );
}
