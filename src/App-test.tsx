import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { CustomNavbar } from './components/CustomNavbar';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          <CustomNavbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/features" element={<div className="pt-20 text-white text-center">Features Page</div>} />
            <Route path="/pricing" element={<div className="pt-20 text-white text-center">Pricing Page</div>} />
            <Route path="/contact" element={<div className="pt-20 text-white text-center">Contact Page</div>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
