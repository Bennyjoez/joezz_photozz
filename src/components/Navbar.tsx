import logo from '/logo.png'
import { ImWhatsapp } from "react-icons/im";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar'>
    <div className='logo'>
      <img src={logo} alt="Logo" />
    </div>
    <ul className='nav-options'>
      <li>
        <Link to='/register' className='register-btn'>Sign Up</Link>
      </li>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='services'>Services</Link>
      </li>
      <li>
        <a href="https://wa.me/254703599801" target='_blank' title='WhatsApp Us'><ImWhatsapp /></a>
      </li>
    </ul>
    </div>
  )
}
