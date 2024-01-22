import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './pages/Error.tsx';
import './index.css'
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import Register from './components/authentication/Register.tsx';
import Login from './components/authentication/Login.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: 'services',
    element: <Services />
  },
  {
    path: 'register',
    element: <Register />
  },
  {
    path: 'login',
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
