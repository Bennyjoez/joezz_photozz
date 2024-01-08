interface Service {
  title: string;
  description: string;
  img: string;
}

export default function Service({title, description, img}: Service) {
  return (
    <div className="service">
      <img src={img} alt="potrait" />
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <button type="button" className="book-session-btn">Book Now</button>
    </div>
  )
}
