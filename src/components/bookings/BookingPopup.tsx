import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { closeBookingPopup } from "../../Features/modal/modalSlice";
import DateSelector from "./DatePicker";
import { toast } from "react-toastify";
import handleErrors from "../../utils/handleErrors";
import { addBooking } from "../../utils/bookingsEndpoints";
import { useMutation } from "@tanstack/react-query";

export interface DetailsState {
  event: string;
  reservationDate: Date | null;
  shootLocation: string;
  message: string;
}

export default function BookingForm() {
  const dispatch = useAppDispatch();

  const [details, setDetails] = useState<DetailsState>({
    event: "",
    shootLocation: "",
    reservationDate: null,
    message: "",
  });

  const addBookingMutation = useMutation({
    mutationFn: (details: DetailsState) => addBooking(details),
  });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const submitBtn = document.getElementById("submit-booking") as HTMLInputElement;

    if (submitBtn) {
      submitBtn.disabled = true;
    }
    try {
      if (!details.event || !details.shootLocation || !details.reservationDate) {
        toast.error("Cannot submit empty fields!")
        throw new Error("Cannot submit empty fields!")
      }
      addBookingMutation.mutate(details);

      // Booking saved
      dispatch(closeBookingPopup());
      toast.success("Reserved your shoot date!");
    } catch (error: unknown) {
      // Handle non-successful response
      handleErrors(error);
    }
    if (submitBtn) {
      submitBtn.disabled = true;
    }
  };

  const handleInput = (e: { target: { name: string; value: string } }) => {
    const target = e.target.name;
    setDetails((prev) => ({ ...prev, [target]: e.target.value }));
  };

  const onCloseButtonClick = () => {
    dispatch(closeBookingPopup());
  };

  return (
    <section className="popup-form">
      <div className="bookings-form-container">
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="flex-form">
            <label htmlFor="event">Event</label>
            <input
              type="text"
              name="event"
              id="event"
              placeholder="What is the occasion?"
              onChange={handleInput}
              value={details.event}
            />
            <label htmlFor="contact">Shoot Location</label>
            <input
              type="text"
              name="shootLocation"
              id="location"
              placeholder="Where's the shoot?"
              onChange={handleInput}
              value={details.shootLocation}
            />
            <label htmlFor="date">Select a date</label>
            <DateSelector
              setDetails={setDetails}
              value={details.reservationDate}
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="What would you like us to know about your booking..."
              onChange={handleInput}
              value={details.message}
            ></textarea>

            <button id="submit-booking" type="submit" className="book-session-btn">
              Submit Booking
            </button>
          </div>
        </form>
      </div>
      <span className="modal-close" role="button" onClick={onCloseButtonClick}>
        &#10005; {/* HTML code multiplication sign */}
      </span>
    </section>
  );
}
