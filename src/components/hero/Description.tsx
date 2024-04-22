import { useEffect, useRef, useState } from "react";
import BookBtn from "../bookings/BookBtn";

interface descriptionProps {
  setArrowIsVisible: (value: boolean) => void;
}

export function Description({setArrowIsVisible}: descriptionProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Anywhere,", "Everywhere,", "We are there"];
  const componentRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [words.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setArrowIsVisible(true);
      } else {
        setArrowIsVisible(false);
      }
    });
  
    if (componentRef.current) {
      observer.observe(componentRef.current);
    }
  
    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [componentRef, setArrowIsVisible]);

  return (
    <div className="description animated-text" ref={componentRef} >
      <p>Mark all your events</p>
      <h3>{words[wordIndex]}</h3>
      <BookBtn />
    </div>
  );
}
