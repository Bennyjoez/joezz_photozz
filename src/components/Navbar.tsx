import logo from '/logo.png'
import { ImWhatsapp } from "react-icons/im";
import { Link } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';

export default function Navbar() {
  const userName = useAppSelector((state) => state.user.name);
  return (
    <div className='navbar'>
    <div className='logo'>
      <Link to='/'>
        <img src={logo} alt="Logo" />
      </Link>
    </div>
    <ul className='nav-options'>
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
    {userName ?
      <div>Welcome, {userName.toUpperCase()}</div>
      : 
      <div>
        <Link to='/register' className='register-btn'>Sign Up</Link>
      </div>
    }
    </div>
  )
}
