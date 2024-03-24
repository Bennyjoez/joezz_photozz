import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "../../app/hooks";
import { saveUser } from "../../Features/user/userSlice";
import handleErrors from "../../utils/handleErrors";
import axiosInstance from "../../utils/axiosInstance";
import AuthContainer from "./AuthContainer";

function Login() {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const { data } = await axiosInstance.post("/users/login", user);

      // registration was successful
      toast.success("User Logged in!");
      dispatch(saveUser(data.user));
      localStorage.setItem("authToken", data.token);
      setUser({
        email: "",
        password: "",
      });
    } catch (err: unknown) {
      handleErrors(err);
    }
  };

  const handleInput = (e: { target: { name: string; value: string } }) => {
    const target = e.target.name;
    setUser((prev) => ({ ...prev, [target]: e.target.value }));
  };

  return (
    <AuthContainer>
      <form onSubmit={handleSubmit} className="signup-form">
        <h2 className="heading">Login</h2>
        <div className="flex-form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleInput}
            required
            placeholder="Email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleInput}
            required
            placeholder="Password"
          />
          <button type="submit" className="book-session-btn">
            Login
          </button>
        </div>
        <p className="register-btn">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </form>
    </AuthContainer>
  );
}

export default Login;
