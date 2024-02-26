import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useNavigate } from "react-router-dom";
import { showPopup } from "../Features/modal/modalSlice";

export default function BookBtn() {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const userName = useAppSelector((state) => state.user.name);

  const handleClick = () => {
    // If logged in, navigate to booking form else login/signup form
    if (userName) {
      dispatch(showPopup())
    } else {
      toast('Please Login first!')
      navigate('/login')
    }
  }

  return (
    <button type="button" onClick={handleClick} className='book-session-btn'>Book Session</button>
  )
}
