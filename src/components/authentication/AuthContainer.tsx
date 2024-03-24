import { ReactNode } from "react"
import { useAppSelector } from "../../app/hooks";
import { Navigate } from "react-router-dom";
import formImage from '../../../public/form.jpg';

interface AuthContainerProps {
  children: ReactNode
}

const AuthContainer: React.FunctionComponent<AuthContainerProps> = ({ children }) => {
  const loggedInUser = useAppSelector((state) => state.user.name);
  return (
    <section>
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