import { showReviewsPopup } from '../Features/modal/modalSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { Review, reviewDataProps } from './reviews/Review';
import { getReviews } from '../utils/reviewsEndpoints';
import { useQuery } from '@tanstack/react-query';
import Loading from './loading/Loading';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Reviews() {
  const dispatch = useAppDispatch();
  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => getReviews(),
    enabled: false,
  });
  const [reviews, setReviews] = useState([]);

  const userName = useAppSelector((state) => state.user.name);
  const [targetReview, setTargetReview] = useState<reviewDataProps | undefined>();
  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, [refetch])

  useEffect(() => {
    if (data?.data.data) {
      setReviews(data?.data.data)
    }
  }, [data?.data.data])


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

  return (
    <section id='reviews-container'>
      {
        targetReview
        &&
        <div className='expanded'>
          {/* floating review */}
          <Review reviewData={targetReview} expanded={true} />
        </div>
      }
      {
        !reviews
        ?
        <div>No reviews yet!</div>
        :
        <div className="reviews">
          {reviews.map((review: reviewDataProps) => (
            <Review key={review._id} reviewData={review} setTargetReview={setTargetReview} />
          ))}
        </div>
      }
      <button className="book-session-btn" onClick={handleClick}>Add Review</button>
    </section>
  )
}
