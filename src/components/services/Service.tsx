import BookBtn from "../bookings/BookBtn";

interface Service {
  title: string;
  description: string;
  img: string;
}

export default function Service({ title, description, img }: Service) {
  return (
    <div className="service">
      <div className="service-image">
        <img src={img} alt="potrait" />
      </div>
      <div>
        <h3 className="service-heading">{title}</h3>
        <p>{description}</p>
      </div>
      <BookBtn />
    </div>
  );
}
