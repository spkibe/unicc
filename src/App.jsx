// src/App.jsx
import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Homepage from './Pages/HomePage';
import UsBanks from './Pages/UsBanks';
import Ukbanks from './Pages/Ukbanks';
import CanadaBanks from './Pages/CanadaBanks';
import RussiaBanks from './Pages/RussiaBanks';
import Payment from './components/Payment';
import AuthPage from './components/AuthPage'; // Import AuthPage component

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem('user'); // Check if the user is logged in
  return isAuthenticated ? element : <Navigate to="/auth" replace />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Combined AuthPage route */}
      <Route path="/auth" element={<AuthPage />} />
      
      {/* Protected Routes */}
      <Route path="/" element={<ProtectedRoute element={<MainLayout />} />}>
        <Route index element={<Homepage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/UsBanks/:bankName" element={<UsBanks />} />
        <Route path="/Ukbanks/:bankName" element={<Ukbanks />} />
        <Route path="/canadabanks/:bankName" element={<CanadaBanks />} />
        <Route path="/russiabanks/:bankName" element={<RussiaBanks />} />
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
