import { Link } from "react-router-dom";

interface AuthButtonProps {
  location: string
}

export function AuthButton({ location }: AuthButtonProps) {
  return (
    <div>
      {location === "/register" ? (
        <Link to="/login" className="register-btn">
          Login
        </Link>
      ) : (
        <Link to="/register" className="register-btn">
          Sign Up
        </Link>
      )}
    </div>
  );
}
