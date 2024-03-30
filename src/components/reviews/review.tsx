import { capitalize } from '../../utils/module';
import { Rating } from './rating';

export interface reviewDataProps {
  comment: string
  date: Date
  rating: number
  reviewer: null | string
  _id: string
}

interface ReviewProps {
  reviewData: reviewDataProps;
}

export function Review({ reviewData }: ReviewProps) {
  const { comment, date, rating, reviewer } = reviewData;

  const named = reviewer ? capitalize(reviewer) : "Anonymous";

  return (
    <div className="review">
      <div className='review-comment'>
        <span className='quotation-mark'>"</span>
        <p>"{comment}"</p>
        <Rating rating={rating} />
      </div>
      <div className="reviewer">
        <h3>{named}</h3>
        <h4>{new Date(date).toDateString()}</h4>
      </div>
    </div>
  );
}
