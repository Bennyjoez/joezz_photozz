import { toast } from "react-toastify";
import { useAppSelector } from "../app/hooks";
import { useNavigate } from "react-router-dom";

export default function BookBtn() {
  const navigate = useNavigate();
  const userName = useAppSelector((state) => state.user.name);

  const handleClick = () => {
    // If logged in, navigate to booking form else login/signup form
    if (userName) {
      navigate('/book-session');
    } else {
      toast('Please Login first!')
      navigate('/login')
    }
  }

  return (
    <button type="button" onClick={handleClick} className='book-session-btn'>Book Session</button>
  )
}
