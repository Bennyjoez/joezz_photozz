import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from '../../app/hooks';
import { saveUser } from '../../Features/user/userSlice';
import axiosInstance from '../../utils/axiosInstance';
import handleErrors from '../../utils/handleErrors';
import AuthContainer from './AuthContainer';

function Register() {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState({
    name: '',
    email: '',
    contact: '',
    password: ''
  })

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const { data }  = await axiosInstance.post('/users/register', user);

      // registration was successful
      toast.success(data.message);
      dispatch(saveUser(data.user));
      localStorage.setItem('authToken', data.token);
      setUser({
        name: '',
        email: '',
        contact: '',
        password: ''
      })
    } catch (err: unknown) {
      handleErrors(err);
    }
  };
  

  const handleInput = (e: { target: { name: string; value: string; }; }) => {
    const target = e.target.name;
    setUser((prev) => ({ ...prev, [target]: e.target.value }));
  };

  return (
    <AuthContainer>
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
          Already have an account? <Link to='/login'>Login</Link>
        </p>
      </form>
    </AuthContainer>
  )
}

export default Register