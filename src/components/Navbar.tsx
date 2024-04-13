import logo from "/logo.png";
import { ImWhatsapp } from "react-icons/im";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { CgProfile } from "react-icons/cg";
import useTokenValidityCheck from "../utils/useCustomValidityCheck";
import { capitalize } from "../utils/module";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AuthButton } from "./authentication/AuthButton";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [greeting, setGreeting] = useState('Welcome,');
  const [showNavOptions, setShowNavOptions] = useState(window.innerWidth >= 768);
  const [closedNavOptions, setClosedNavOptions] = useState(true);

  // validate userToken
  useTokenValidityCheck();
  const location = useLocation().pathname;
  // if valid, get username
  const userName = useAppSelector((state) => state.user.name);

  const toggleHamburger = () => {
    setShowNavOptions(!showNavOptions);
    setClosedNavOptions(!closedNavOptions);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setGreeting('');
    }, 10000);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setShowNavOptions(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // execute on location change
    if(window.innerWidth <= 767) {
      setShowNavOptions(false)
      setClosedNavOptions(true)
    }
  }, [location])

  return (
    <section id="nav-container">
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className={showNavOptions ? "nav-options" : "nav-options hide"}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="services">Services</NavLink>
          </li>
          <li>
            <Link
              to="https://wa.me/254703599801"
              target="_blank"
              title="WhatsApp Us"
            >
              <ImWhatsapp />
            </Link>
          </li>
        </ul>
        {userName ? (
          <div className="profile-link">
            <span>{greeting} {capitalize(userName)}</span>
            <Link to="/profile" className="link-btn">
              <CgProfile />
            </Link>
          </div>
        ) : (
          <AuthButton location={location} />
        )}
        <GiHamburgerMenu onClick={toggleHamburger} className={showNavOptions ? "hamburger, hide" : "hamburger"}/>
        <IoClose className={closedNavOptions ? "hide" : ""} onClick={toggleHamburger}/>
      </div>
    </section>
  );
}
