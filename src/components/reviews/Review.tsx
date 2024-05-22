import { capitalize } from "../../utils/module";
import { Rating } from "./rating";

export interface reviewDataProps {
  comment: string;
  date: Date;
  rating: number;
  reviewer: null | string;
  _id: string;
}

interface ReviewProps {
  reviewData: reviewDataProps | undefined;
}

export function Review({ reviewData }: ReviewProps) {
  if (!reviewData) return null;
  const { comment, date, rating, reviewer } = reviewData;

  const named = reviewer ? capitalize(reviewer) : "Anonymous";

  return (
    <div className="review">
      <span className="quotation-mark">"</span>
      <div className="review-comment">
        <p>{comment}</p>
      </div>
      <Rating rating={rating} />
      <div className="reviewer">
        <h3>{named}</h3>
        <h4>{new Date(date).toDateString()}</h4>
      </div>
    </div>
  );
}
