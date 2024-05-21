import ContactDetails from "./ContactDetails";
import logo from "/logo.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
        <h2>Joez Photozz</h2>
      </div>
      <div className="footer-description">
        <h2 className="heading ">Get in Touch</h2>
        <p className="motto">Wherever, and whenever you need us, we will be there to mark the greatest of memories.</p>
        <ContactDetails />
      </div>
    </section>
  )
}

export default Footer