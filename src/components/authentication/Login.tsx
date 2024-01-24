import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const {email, password} = user;
    const url = await import.meta.env.VITE_JOEZ_PHOTOZZ_API_URL + '/users/login';

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
        if (response.status === 400) {
          // wrong password or email
          toast.error(data.error);
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
    <>
      <form onSubmit={handleSubmit} id='form-container' className='signup-form' >
        <h2>Login</h2>
        <div className='flex-form'>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={handleInput} />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={handleInput} />
          <button type="submit" className='book-session-btn'>Login</button>
        </div>
        <Link to='/register' className='register-btn'>Sign Up</Link>
      </form>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
  )
}

export default Login