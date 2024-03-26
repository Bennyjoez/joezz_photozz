import { Review } from './reviews/review';
import profile from "/profile.png"

export default function Reviews() {
  return (
    <section id='reviews-container'>
      <div className="reviews">
        <Review   profile={profile}  />
        <Review   profile={profile}  />
        <Review   profile={profile}  />
      </div>
      <button className="book-session-btn ">Add Review</button>
    </section>
  )
}
