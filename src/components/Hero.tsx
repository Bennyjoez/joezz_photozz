import { Description } from './hero/Description';
import BookBtn from "./bookings/BookBtn";

export default function Hero() {
  return (
    <div className="hero">
      <div className="tile tilt-1"></div>
      <div className="tile tilt-2"></div>
      <div className="tile tilt-3"></div>
      <Description     />
    </div>
  );
}
