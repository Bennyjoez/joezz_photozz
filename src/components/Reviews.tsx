import { showReviewsPopup } from '../Features/modal/modalSlice';
import { useAppDispatch } from '../app/hooks';
import { Review } from './reviews/review';
import profile from "/profile.png"

export default function Reviews() {

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(showReviewsPopup());
  }

  return (
    <section id='reviews-container'>
      <div className="reviews">
        <Review   profile={profile}  />
        <Review   profile={profile}  />
        <Review   profile={profile}  />
      </div>
      <button className="book-session-btn" onClick={handleClick}>Add Review</button>
    </section>
  )
}
