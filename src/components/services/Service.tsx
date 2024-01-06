interface Service {
  title: string;
  description: string;
}

export default function Service({title, description}: Service) {
  return (
    <div className="service">
      <img src="" alt="potrait" />
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <button type="button" className="book-session-btn">Book Now</button>
    </div>
  )
}
