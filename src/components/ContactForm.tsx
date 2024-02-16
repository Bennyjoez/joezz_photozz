import { useState } from 'react'

export default function Form() {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
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
