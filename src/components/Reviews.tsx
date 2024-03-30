import { showReviewsPopup } from '../Features/modal/modalSlice';
import { useAppDispatch } from '../app/hooks';
import { Review, reviewDataProps } from './reviews/review';
import { getReviews } from '../utils/reviewsEndpoints';
import { useQuery } from '@tanstack/react-query';
import Loading from './loading/Loading';
import { useEffect } from 'react';

export default function Reviews() {
  const dispatch = useAppDispatch();
  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => getReviews(),
    enabled: false,
  });

  useEffect(() => {
    refetch();
  }, [refetch])

  const handleClick = () => {
    dispatch(showReviewsPopup());
  }

  if(isPending) {
    return <Loading />
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  const reviews = data?.data.data;

  return (
    <section id='reviews-container'>
      {
        !reviews
        ?
        <div>No reviews yet!</div>
        :
        <div className="reviews">
        {reviews.map((review: reviewDataProps) => (
          <Review key={review._id} reviewData={review} />
        ))}
      </div>
      }
      <button className="book-session-btn" onClick={handleClick}>Add Review</button>
    </section>
  )
}
