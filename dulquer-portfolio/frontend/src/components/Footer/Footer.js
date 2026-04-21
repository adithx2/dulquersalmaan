import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__inner container">
      <div className="footer__brand">
        <span className="footer__logo">DQ<span>.</span></span>
        <p className="footer__tagline">Dulquer Salmaan — Actor. Producer. Storyteller.</p>
      </div>
      <nav className="footer__nav">
        <Link to="/">Home</Link>
        <Link to="/films">Films</Link>
        <Link to="/awards">Awards</Link>
        <Link to="/about">About</Link>
      </nav>
      <p className="footer__copy">© {new Date().getFullYear()} Dulquer Salmaan Fan Portfolio. Built with MERN Stack.</p>
    </div>
  </footer>
);

export default Footer;
