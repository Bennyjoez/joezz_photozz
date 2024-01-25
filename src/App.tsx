// app.tsx
import React from 'react';
import Layout from './Layout';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default App;
