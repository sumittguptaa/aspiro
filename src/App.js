import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Bookings from './Bookings';
import Destinations from './Destinations';
import Flights from './Flights';
import Hotels from './Hotels';
import Login from './Login';
import Signup from './Signup';


function App() {
  return (
    <div>

   <Home/>
  <Routes>
     
       <Home/>
      <Route path="/bookings" ><Bookings/></Route>
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/flights" element={<Flights />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
  </Routes>
    </div>

  );
}

export default App;
