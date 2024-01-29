import { useState } from 'react'

export default function Form() {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    contact: '',
    event: '',
    location: '',
    message: ''
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(details.name, details.email, details.contact, details.event, details.location, details.message);
  };

  const handleInput = (e: { target: { name: string; value: string; }; }) => {
    const target = e.target.name;
    setDetails((prev) => ({ ...prev, [target]: e.target.value }));
  };


  return (
    <section id='book-session' className="bookings-form-container">
      <form onSubmit={handleSubmit} className='signup-form'>
        <div className='flex-form'>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" placeholder='Your Full Name' onChange={handleInput} />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" placeholder='Your Email' onChange={handleInput} />
          <label htmlFor="contact">WhatsApp Contact:</label>
          <input type="tel" name="contact" id="contact" placeholder='Your WhatsApp Contact' onChange={handleInput} />
          <label htmlFor="event">Event:</label>
          <input type="text" name="event" id="event" placeholder='What is the occasion' onChange={handleInput} />
          <label htmlFor="contact">Shoot Location</label>
          <input type="text" name="location" id="location" placeholder="Where's the shoot" onChange={handleInput} />
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" placeholder='What would you like us to know about your booking...' onChange={handleInput}></textarea>

          <button type="submit" className='book-session-btn'>Submit Booking</button>
        </div>
      </form>
    </section>
  )
}
