import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    contact: '',
    password: ''
  })

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const { name, email, contact, password } = user;
  
    const url = await import.meta.env.VITE_JOEZ_PHOTOZZ_API_URL + '/users/register';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          contact,
          password,
        }),
      })

      if (!response.ok) {
        const data = await response.json();
        if (response.status === 409) {
          // User with the same credentials already exists
          toast.error(data.error);
        } else {
          // Handle other errors
          toast.error('Registration failed. Please try again later.');
        }
        return;
      }

      // registration was successful
      const data = await response.json();
      toast.success(data.message);
    } catch (err) {
      toast.error('An unexpected error occurred. Please try again later.')}
  };
  

  const handleInput = (e: { target: { name: string; value: string; }; }) => {
    const target = e.target.name;
    setUser((prev) => ({ ...prev, [target]: e.target.value }));
  };

  return (
    <>
      <form onSubmit={handleSubmit} id='form-container' className='signup-form'>
        <h2>Register</h2>
        <div className='flex-form'>
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" id="name" value={user.name} onChange={handleInput} />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={user.email} onChange={handleInput} />
          <label htmlFor="contact">Contact</label>
          <input type="tel" name="contact" id="contact" value={user.contact} onChange={handleInput} />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={user.password} onChange={handleInput} />
          <button type="submit" className='book-session-btn'>Register</button>
        </div>
      </form>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
  )
}

export default Register