import { useEffect, useState } from "react";
import BookBtn from "../bookings/BookBtn";

interface Service {
  title: string;
  description: string;
  img: string;
  count: number;
}

export default function Service({ title, description, img, count }: Service) {
  const [serviceClass, setServiceClass] = useState("");

  useEffect(() => {
    const res = count % 2 === 0 ? "even-service" : "odd-service";
    setServiceClass(res);
  }, [count]);

  return (
    <div className={`service ${serviceClass}`}>
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
