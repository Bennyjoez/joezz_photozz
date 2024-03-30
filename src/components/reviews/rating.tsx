interface RatingProps {
  rating: number;
}

export function Rating({
  rating
}: RatingProps) {
  const maxRating = 5;
  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    const starClassName = i <= rating ? 'star-filled' : 'star-empty';
    stars.push(<span key={i} className={`star ${starClassName}`}>★</span>);
  }

  return <div className="rating">
      {stars}
    </div>;
}
  