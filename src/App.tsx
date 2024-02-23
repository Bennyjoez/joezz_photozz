// app.tsx
import React from 'react';
import Layout from './Layout';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Layout>
      <Navbar />
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Outlet />
    </Layout>
  );
};

export default App;
