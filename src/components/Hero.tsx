import { useState } from 'react';
import { Description } from './hero/Description';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function Hero() {
  const [arrowIsVisible, setArrowIsVisible] = useState(true);

  return (
    <div className="hero" >
      <div className="tile tilt-1"></div>
      <div className="tile tilt-2"></div>
      <div className="tile tilt-3"></div>
      <Description setArrowIsVisible={setArrowIsVisible}/>
      {arrowIsVisible && <MdKeyboardDoubleArrowDown className='arrow-down' />}
    </div>
  );
}
