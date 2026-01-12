import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo" aria-label="Ir al inicio">
            <img src="/logo.png" alt="HidroPlus" className="logo-image" />
          </Link>

          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                to="/productos" 
                className={location.pathname === '/productos' ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Productos
              </Link>
            </li>
            <li>
              <Link 
                to="/contacto" 
                className={location.pathname === '/contacto' ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
