import logo from '/logo.png'
import { ImWhatsapp } from "react-icons/im";

export default function Navbar() {
  return (
    <div className='navbar'>
    <div className='logo'>
      <img src={logo} alt="Logo" />
    </div>
    <ul className='nav-options'>
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>
        <a href="https://wa.me/254703599801" target='_blank' title='WhatsApp Us'><ImWhatsapp /></a>
      </li>
    </ul>
    </div>
  )
}
