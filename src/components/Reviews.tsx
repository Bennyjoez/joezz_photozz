import { showReviewsPopup } from '../Features/modal/modalSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { Review, reviewDataProps } from './reviews/review';
import { getReviews } from '../utils/reviewsEndpoints';
import { useQuery } from '@tanstack/react-query';
import Loading from './loading/Loading';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Reviews() {
  const dispatch = useAppDispatch();
  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => getReviews(),
    enabled: false,
  });

  const userName = useAppSelector((state) => state.user.name);
  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, [refetch])

  const handleClick = () => {
    if (userName) {
      dispatch(showReviewsPopup());
    } else {
      toast("Please Login first!");
      navigate("/login");
    }
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
        !reviews || reviews === undefined
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
