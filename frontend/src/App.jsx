// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import OwnerDashboard from './OwnerDashboard';
import DriverDashboard from './DriverDashboard';
import DealerDashboard from './DealerDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/owner-dashboard" element={<OwnerDashboard />} />
          <Route path="/driver-dashboard" element={<DriverDashboard />} />
          <Route path="/dealer-dashboard" element={<DealerDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;