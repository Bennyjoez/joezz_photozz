import { Review } from './reviews/review';
import profile from "/profile.png"

export default function Reviews() {

  const handleClick = () => {
    console.log("clicked")
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
