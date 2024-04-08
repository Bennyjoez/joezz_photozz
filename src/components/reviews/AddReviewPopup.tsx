import { useState } from "react";
import { closeReviewsPopup } from "../../Features/modal/modalSlice";
import { useAppDispatch } from "../../app/hooks";
import { addReview, detailsProps } from "../../utils/reviewsEndpoints";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const AddReviewPopup = () => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  const [details, setDetails] = useState({
    rating: "0",
    message: "",
  });

  const onCloseButtonClick = () => {
    dispatch(closeReviewsPopup());
  };

  const addReviewMutation = useMutation({
    mutationFn: (details: detailsProps) => addReview(details) 
  })

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!details.rating || !details.message) {
      toast.error("Please fill out all required fields.");
      return;
    }
  
    try {
      addReviewMutation.mutate(details)
      toast.success("Review will be added soon");
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
      dispatch(closeReviewsPopup());
    } catch (err) {
      console.error("An error occurred while adding the review:", err);
      toast.error("An error occurred while adding the review. Please try again later.");
    }
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
            min='0'
            max='5'
            step='0.1'
            onChange={handleInput}
            value={details.rating}
          />
          <div className="rating-value">
            {details.rating} Stars
          </div>

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
