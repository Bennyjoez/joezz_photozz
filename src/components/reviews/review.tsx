interface reviewProps {
  profile: string
}

export function Review({
  profile
}: reviewProps) {
  return <div className='review'>
          <img src={profile} className="review-profile" alt="reviewer" />
          <div>
            <h3>Benson Njuguna</h3>
            <p>"These guys saved the day by covering my event and making it memorable to every detail"</p>
          </div>
        </div>;
}
  