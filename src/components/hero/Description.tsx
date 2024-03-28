import { useEffect, useState } from "react";
import BookBtn from "../bookings/BookBtn";

export function Description() {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Anywhere,", "Everywhere,", "We are there"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="description animated-text">
      <p>Mark all your events</p>
      <h3>{words[wordIndex]}</h3>
      <BookBtn />
    </div>
  );
}
