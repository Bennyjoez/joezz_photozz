import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import formImage from '../../../public/form.jpg';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { saveUser } from '../../Features/user/userSlice';

function Register() {
  const dispatch = useAppDispatch();
  const loggedInUser = useAppSelector((state) => state.user.name);
  const [user, setUser] = useState({
    name: '',
    email: '',
    contact: '',
    password: ''
  })

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const { name, email, contact, password } = user;
  
    const url = await import.meta.env.VITE_JOEZ_PHOTOZZ_BACKEND + '/users/register';
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

        throw new Error(`${JSON.stringify(data.errors.message)}`);
      }

      // registration was successful
      const data = await response.json();
      toast.success(data.message);
      dispatch(saveUser(data.data.user));
    } catch (err: unknown) {
      toast.error(`Registration failed: ${err}`)}
  };
  

  const handleInput = (e: { target: { name: string; value: string; }; }) => {
    const target = e.target.name;
    setUser((prev) => ({ ...prev, [target]: e.target.value }));
  };

  return (
    <div className='m-2'>
      {
        loggedInUser 
        ?
        <Navigate to="/" replace={true} />
        :
        <section className='form-container'>
          <div className='placeholder-image'>
            <img src={formImage} alt="form image" />
          </div>
          <form onSubmit={handleSubmit} className='signup-form'>
            <h2 className='heading'>Register</h2>
            <div className='flex-form'>
              <label htmlFor="name">Full Name</label>
              <input type="text" name="name" id="name" value={user.name} onChange={handleInput} required placeholder='Name' />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" value={user.email} onChange={handleInput} required placeholder='Email' />
              <label htmlFor="contact">Contact</label>
              <input type="tel" name="contact" id="contact" value={user.contact} onChange={handleInput} required placeholder='Contact' />
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" value={user.password} onChange={handleInput} minLength={6} required placeholder='Password' />
              <button type="submit" className='book-session-btn'>Register</button>
            </div>
            <p className='register-btn'>
              You already have an account? <Link to='/login'>Login</Link>
            </p>
          </form>
        </section>
      }
    </div>
  )
}

export default Register