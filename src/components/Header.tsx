import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Menu, X, Zap } from 'lucide-react';

interface HeaderProps {
  isAuthenticated?: boolean;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated = false, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ResumeAI Pro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {!isAuthenticated ? (
              <>
                <Link 
                  to="/" 
                  className={`text-gray-700 hover:text-blue-600 transition-colors ${
                    isActive('/') ? 'text-blue-600 font-medium' : ''
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/features" 
                  className={`text-gray-700 hover:text-blue-600 transition-colors ${
                    isActive('/features') ? 'text-blue-600 font-medium' : ''
                  }`}
                >
                  Features
                </Link>
                <Link 
                  to="/pricing" 
                  className={`text-gray-700 hover:text-blue-600 transition-colors ${
                    isActive('/pricing') ? 'text-blue-600 font-medium' : ''
                  }`}
                >
                  Pricing
                </Link>
                <Link 
                  to="/contact" 
                  className={`text-gray-700 hover:text-blue-600 transition-colors ${
                    isActive('/contact') ? 'text-blue-600 font-medium' : ''
                  }`}
                >
                  Contact
                </Link>
              </>
            ) : (
              <>
                <Link 
                  to="/dashboard" 
                  className={`text-gray-700 hover:text-blue-600 transition-colors ${
                    isActive('/dashboard') ? 'text-blue-600 font-medium' : ''
                  }`}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/profile" 
                  className={`text-gray-700 hover:text-blue-600 transition-colors ${
                    isActive('/profile') ? 'text-blue-600 font-medium' : ''
                  }`}
                >
                  Profile
                </Link>
              </>
            )}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {!isAuthenticated ? (
              <>
                <Link 
                  to="/login" 
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Sign In
                </Link>
                <Link 
                  to="/signup" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2"
                >
                  <Zap className="h-4 w-4" />
                  <span>Get Started</span>
                </Link>
              </>
            ) : (
              <button 
                onClick={onLogout}
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Sign Out
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {!isAuthenticated ? (
                <>
                  <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Home
                  </Link>
                  <Link to="/features" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Features
                  </Link>
                  <Link to="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Pricing
                  </Link>
                  <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Contact
                  </Link>
                  <div className="pt-4 border-t border-gray-200">
                    <Link to="/login" className="block text-gray-700 hover:text-blue-600 transition-colors mb-2">
                      Sign In
                    </Link>
                    <Link 
                      to="/signup" 
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                    >
                      <Zap className="h-4 w-4" />
                      <span>Get Started</span>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Dashboard
                  </Link>
                  <Link to="/profile" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Profile
                  </Link>
                  <button 
                    onClick={onLogout}
                    className="text-left text-gray-700 hover:text-red-600 transition-colors"
                  >
                    Sign Out
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;