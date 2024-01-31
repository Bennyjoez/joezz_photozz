import React, { ReactNode } from 'react';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
