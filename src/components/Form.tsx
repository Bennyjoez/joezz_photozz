import React from 'react'

export default function Form() {
  return (
    <form id='form-container'>
      <div className='flex-form'>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" placeholder='Your Full Name' />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" placeholder='Your Email' />
        <label htmlFor="contact">WhatsApp Contact:</label>
        <input type="tel" name="Contact" id="contact" placeholder='Your WhatsApp Contact' />
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" cols="30" rows="10" placeholder='What would you like us to know about your booking...'></textarea>

        <button type="submit" className='book-session-btn'>Submit Booking</button>
      </div>
    </form>
  )
}
