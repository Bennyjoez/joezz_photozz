import { useState } from "react";
import { closeReviewsPopup } from "../../Features/modal/modalSlice";
import { useAppDispatch } from "../../app/hooks";

const AddReviewPopup = () => {
  const dispatch = useAppDispatch();
  const [details, setDetails] = useState({
    rating: "0",
    message: "",
    name: "",
    email: "",
  });

  const onCloseButtonClick = () => {
    dispatch(closeReviewsPopup());
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("submiting", details);
  };

  const handleInput = (e: { target: { name: string; value: string } }) => {
    const target = e.target.name;
    setDetails((prev) => ({ ...prev, [target]: e.target.value }));
  };

  return (
    <section className="popup-form">
      <div className="reviews-form-container">
        <h1>Feedback Form</h1>
        <p>
          We would love to hear your thoughts, suggestions, concerns or problems
          with anything so we can improve!
        </p>
        <form onSubmit={handleSubmit} className="reviews-form">
          <label htmlFor="message">
            Describe your Feedback<span className="must">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="What would you like us to know about your booking..."
            onChange={handleInput}
            value={details.message}
            required
          ></textarea>

          <label htmlFor="rating">
            Rating<span className="must">*</span>
          </label>
          <input
            type="range"
            name="rating"
            id="rating"
            onChange={handleInput}
            value={details.rating}
            required
          />
          <div className="rating-value">
            {((Number(details.rating) / 100) * 5).toFixed(1)} Stars
          </div>

          <label htmlFor="name">
            Name<span className="must">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            onChange={handleInput}
            value={details.name}
            required
          />

          <label htmlFor="email">
            Email<span className="must">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            onChange={handleInput}
            value={details.email}
            required
          />

          <button id="submit-review" type="submit" className="book-session-btn">
            Submit Review
          </button>
        </form>
      </div>
      <span className="modal-close" role="button" onClick={onCloseButtonClick}>
        &#10005; {/* HTML code multiplication sign */}
      </span>
    </section>
  );
};

export default AddReviewPopup;
