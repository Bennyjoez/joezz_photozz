import { useAppSelector } from "../app/hooks";
import useTokenValidityCheck from "../utils/useCustomValidityCheck";

// profile page
function Profile() {
  // validate userToken
  useTokenValidityCheck();
  // if valid, get user details
  const {name, email, contact} = useAppSelector((state) => state.user);

  return (
    <section id="profile-page">
      <div>
        <p>Hello, {name.toLocaleUpperCase()}</p>
        <p>Email: {email}</p>
        <p>Contact: {contact}</p>
      </div>
    </section>
  )
}

export default Profile