import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import formImage from '../../../public/form.jpg';

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const {email, password} = user;
    const url = await import.meta.env.VITE_JOEZ_PHOTOZZ_BACKEND + '/users/login';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })

      if (!response.ok) {
        const data = await response.json();
        if (response.status === 400 || response.status === 401) {
          // wrong password or email
          toast.error(data.error.message);
        } else {
          // Handle other errors
          toast.error('Login failed. Please try again later.');
        }
        return;
      }

      // login was successful
      toast.success('Login Successful!');
    } catch (err) {
      toast.error('An unexpected error occurred. Please try again later.')
    }
  }

  const handleInput = (e: { target: { name: string; value: string; }; }) => {
    const target = e.target.name;
    setUser((prev) => ({ ...prev, [target]: e.target.value }));
  };

  return (
    <section className='form-container'>
      <div className='placeholder-image'>
        <img src={formImage} alt="form image" />
      </div>
      <form onSubmit={handleSubmit} className='signup-form' >
        <h2 className='heading'>Login</h2>
        <div className='flex-form'>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={handleInput} required placeholder='Email' />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={handleInput} required placeholder='Password' />
          <button type="submit" className='book-session-btn'>Login</button>
        </div>
        <p className='register-btn'>
          Don't have an account? <Link to='/register'>Sign Up</Link>
        </p>
      </form>
    </section>
  )
}

export default Login