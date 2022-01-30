import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
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

     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
       
         <Route path="/destinations" element={<Destinations />} />
               <Route path="/bookings"element={<Bookings/>} />
 <Route path="/hotels" element={<Hotels />} />
      <Route path="/flights" element={<Flights />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
