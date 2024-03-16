import { useState } from 'react';
import { toast } from 'react-toastify';
import axiosInstance from '../utils/axiosInstance';
import { FiPhoneCall } from "react-icons/fi";
import { TbMailShare, TbWorldUp } from "react-icons/tb";

export default function Form() {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post('/messages', details);
      if(res.status >= 200 && res.status < 300) {
        // message is saved
        setDetails({name: '', email: '', message: ''});
        toast.success('Message sent!')
      }
    } catch (error: unknown) {
      // console.log(error)
      const { status, errors } = error.response.data;
      const errorKeys = Object.keys(errors)
      errorKeys.forEach(er => {
        const message = `🔻${er}: ${errors[er].message} ${status}` 
        toast.error(`${message}`)
        const target = document.querySelector(`#${er}`)
        if(target) {
          target.style.backgroundColor = '#ff9d9d';
          setTimeout(() => {
            target.style.backgroundColor = 'white';
          }, 6000)
        }
      });

    }

  };

  const handleInput = (e: { target: { name: string; value: string; }; }) => {
    const target = e.target.name;
    setDetails((prev) => ({ ...prev, [target]: e.target.value }));
  };


  return (
    <section id='contact' className="bookings-form-container">
      <ul className='contact-details-container'>
        <li className='contact-details'>
          <span className='contact-icon'>
            <FiPhoneCall />
          </span>
          <span>Phone: +254703599501</span>
        </li>
        <li className='contact-details'>
          <span className='contact-icon'>
            <TbMailShare />
          </span>
          <span>Email: <a href="mailto:njugunab655@gmail.com">njugunab655@gmail.com</a></span>
        </li>
        <li className='contact-details'>
          <span className='contact-icon'><TbWorldUp />
          </span><span>Website: <a href="https://soft-portfolio.netlify.app/">Portfolio</a></span>
        </li>
      </ul>
      <form onSubmit={handleSubmit} className='signup-form'>
        <div className='flex-form'>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" placeholder='Your Full Name' onChange={handleInput} value={details.name} />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" placeholder='Your Email' onChange={handleInput} value={details.email} />
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" placeholder='Your message...' onChange={handleInput} value={details.message}></textarea>

          <button type="submit" className='book-session-btn'>Send Message</button>
        </div>
      </form>
      <footer>Project by Benson Njuguna Kamau</footer>
    </section>
  )
}
