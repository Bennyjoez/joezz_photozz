import { ReactNode } from "react"
import { useAppSelector } from "../../app/hooks";
import { Navigate } from "react-router-dom";
import formImage from '/joez_photozz_web/2.jpg';

interface AuthContainerProps {
  children: ReactNode
}

const AuthContainer: React.FunctionComponent<AuthContainerProps> = ({ children }) => {
  const loggedInUser = useAppSelector((state) => state.user.name);
  return (
    <section className="auth-container">
      {
        loggedInUser 
        ?
        <Navigate to="/" replace={true} />
        :
        <section className='form-container'>
          <div className='placeholder-image'>
            <img src={formImage} alt="form image" />
          </div>
          {children}
        </section>
}
    </section>
  )
}

export default AuthContainer