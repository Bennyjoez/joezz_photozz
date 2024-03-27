import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";
import Services from "../components/services/Services";
import About from "../components/About";
import BookingForm from "../components/bookings/BookingPopup";
import { useAppSelector } from "../app/hooks";
import Gallery from "../components/gallery/Gallery";
import AddReviewPopup from "../components/reviews/AddReviewPopup";

export default function Home() {
  const showBookingsModal = useAppSelector((state) => state.modal.showBookingsModal);
  const showReviewsModal = useAppSelector((state) => state.modal.showReviewsModal);
  return (
    <>
      <div id="home">
        <Hero />
        <h2 className="heading">Our Services</h2>
        <Services />
        <h2 className="heading">About Us</h2>
        <About />
        <Gallery />
        <h2 className="heading">Reviews</h2>
        <Reviews />
        <h2 className="heading">Contact Us</h2>
        <ContactForm />
      </div>
      {showBookingsModal && <BookingForm />}
      {showReviewsModal && <AddReviewPopup />}
    </>
  );
}
