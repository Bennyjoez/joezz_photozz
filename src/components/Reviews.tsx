import profile from "/profile.png"

export default function Reviews() {
  return (
    <section id='reviews-container'>
      <h2 className="heading">Reviews</h2>
      <div className="reviews">
        <div className='review'>
          <img src={profile} className="review-profile" alt="reviewer" />
          <div>
            <h3>Benson Njuguna</h3>
            <p>"These guys saved the day by covering my event and making it memorable to every detail"</p>
          </div>
        </div>
        <div className='review'>
          <img src={profile} className="review-profile" alt="reviewer" />
          <div>
            <h3>Benson Njuguna</h3>
            <p>"These guys saved the day by covering my event and making it memorable to every detail"</p>
          </div>
        </div>
        <div className='review'>
          <img src={profile} className="review-profile" alt="reviewer" />
          <div>
            <h3>Benson Njuguna</h3>
            <p>"These guys saved the day by covering my event and making it memorable to every detail"</p>
          </div>
        </div>
      </div>
    </section>
  )
}
