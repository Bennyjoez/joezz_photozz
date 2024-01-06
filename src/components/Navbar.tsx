import logo from '/logo.png'

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
        <div className='contact'>+254-703-599-801</div>
      </li>
    </ul>
    </div>
  )
}
