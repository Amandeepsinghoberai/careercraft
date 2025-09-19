import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Pricing from './pages/Pricing';
import Features from './pages/Features';
import Contact from './pages/Contact';
import { CustomNavbar } from './components/CustomNavbar';
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Component to handle dynamic background based on route
const AppContent = () => {
  const location = useLocation();
  const { user, loading } = useAuth();

  // Dynamic background based on route
  const getBackgroundClass = () => {
    switch (location.pathname) {
      case '/':
        return 'bg-gradient-to-br from-gray-900 via-gray-800 to-black';
      case '/features':
        return 'bg-gradient-to-br from-gray-900 via-gray-800 to-black';
      case '/pricing':
        return 'bg-gradient-to-br from-gray-900 via-gray-800 to-black';
      case '/contact':
        return 'bg-gradient-to-br from-gray-900 via-gray-800 to-black';
      case '/login':
        return 'bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900';
      case '/signup':
        return 'bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900';
      case '/dashboard':
        return 'bg-gradient-to-br from-slate-900 via-gray-800 to-blue-900';
      case '/profile':
        return 'bg-gradient-to-br from-gray-900 via-slate-800 to-purple-900';
      default:
        return 'bg-gradient-to-br from-gray-900 via-gray-800 to-black';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${getBackgroundClass()} transition-all duration-500`}>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route 
          path="/login" 
          element={
            user ? 
            <Navigate to="/dashboard" replace /> : 
            <Login />
          } 
        />
        <Route 
          path="/signup" 
          element={
            user ? 
            <Navigate to="/dashboard" replace /> : 
            <Signup />
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            user ? 
            <Dashboard /> : 
            <Navigate to="/login" replace />
          } 
        />
        <Route 
          path="/profile" 
          element={
            user ? 
            <Profile /> : 
            <Navigate to="/login" replace />
          } 
        />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;