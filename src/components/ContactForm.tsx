import { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Form() {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // send request to the backend
    const url = `${import.meta.env.VITE_JOEZ_PHOTOZZ_BACKEND}/api/v1/messages`;

    try {
      const res = await axios.post(url, details);
      if(res.status >= 200 && res.status < 300) {
        // message is saved
        setDetails({name: '', email: '', message: ''});
        toast.success('Message sent!')
      }
    } catch (error) {
      const { status, errors } = error.response.data;
      console.log(status)
      const errorKeys = Object.keys(errors)
      errorKeys.forEach(er => {
        const message = `🔻${er}: ${errors[er].message} \n` 
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
    </section>
  )
}
