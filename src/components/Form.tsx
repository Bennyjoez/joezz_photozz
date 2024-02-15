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
      <div className="custom-shape-divider-top-1708010965">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
          </svg>
      </div>
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
