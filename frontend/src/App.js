import React, { useState } from 'react';
import './App.css';
import UserLogin from './components/UserLogin';
import DriverLogin from './components/DriverLogin';
import UserDashboard from './components/UserDashboard';
import DriverDashboard from './components/DriverDashboard';

function App() {
  console.log("Rendering App Component");
  // State to store the logged-in user or driver
  const [user, setUser] = useState(null);  // Stores logged-in user
  const [driver, setDriver] = useState(null); // Stores logged-in driver

  return (
    <div className="App">
      <h1>Ambulance Booking System</h1>
      
      {/* Conditional rendering: show login or dashboard based on user/driver status */}
      {!user && !driver ? (
        <div>
          <h2>User Login</h2>
          <UserLogin setUser={setUser} />
          
          <h2>Driver Login</h2>
          <DriverLogin setDriver={setDriver} />
        </div>
      ) : user ? (
        <UserDashboard />
      ) : driver ? (
        <DriverDashboard />
      ) : null}
    </div>
  );
}

export default App;
