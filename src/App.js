import React from 'react';
import './App.css'
import NewPlace from './place/components/PlaceItem';
import Users from './user/pages/Users';

import { Routes, Route } from 'react-router-dom'
import Navbar from './shared/components/Navbar';
import UserPlaces from './place/pages/UserPlaces';
import ErrorPage from './user/pages/ErrorPage';
import Footer from './shared/components/Footer';
function App() {
  // bscf
  return (
    <div className='d-flex flex-column h-100'>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/:userId/places' element={<UserPlaces />} />
          <Route path='places/new' element={<NewPlace />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
