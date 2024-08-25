import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Homepage from './Pages/HomePage';
import UsBanks from './Pages/UsBanks';
import Ukbanks from './Pages/Ukbanks';
import CanadaBanks from './Pages/CanadaBanks'
import RussiaBanks from './Pages/RussiaBanks'
import Payment from './components/Payment'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Homepage />} />
      {/* Dynamic route for UsBanks */}
      <Route path='/payment' element={<Payment />} />
      <Route path='/UsBanks/:bankName' element={<UsBanks />} />
      <Route path='/Ukbanks/:bankName' element={<Ukbanks />} />
      <Route path='/canadabanks/:bankName' element={<CanadaBanks />} />
      <Route path='/russiabanks/:bankName' element={<RussiaBanks />} />

    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
