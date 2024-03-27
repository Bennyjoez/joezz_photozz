import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { showBookingPopup } from "../../Features/modal/modalSlice";
import useTokenValidityCheck from "../../utils/useCustomValidityCheck";

export default function BookBtn() {
  const dispatch = useAppDispatch();

  // validate userToken
  useTokenValidityCheck();
  const navigate = useNavigate();
  const userName = useAppSelector((state) => state.user.name);

  const handleClick = () => {
    const bookSessionBtn = document.getElementById("book-session-button") as HTMLInputElement;
    if (!bookSessionBtn) {
      return;
    }
    bookSessionBtn.disabled = true;
    // If logged in, navigate to booking form else login/signup form
    if (userName) {
      dispatch(showBookingPopup());
    } else {
      toast("Please Login first!");
      navigate("/login");
    }
    bookSessionBtn.disabled = false;
  };

  return (
    <button id="book-session-button" type="button" onClick={handleClick} className="book-session-btn">
      Book Session
    </button>
  );
}
