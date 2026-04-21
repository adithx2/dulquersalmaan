import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = ({ about }) => {
  const stats = about?.heroStats || { debutYear: 2012, totalFilms: 40, filmfareAwards: 5, languages: 5 };

  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="hero__accent" />
      <div className="hero__content container">
        <span className="gold-tag">Actor · Producer · Singer</span>
        <h1 className="hero__name">
          Dulquer<br />
          <span>Salmaan</span>
        </h1>
        <p className="hero__desc">
          One of Malayalam cinema's most versatile stars — son of legend Mammootty,
          a pan-Indian force across five languages.
        </p>
        <div className="hero__actions">
          <Link to="/films" className="btn btn--primary">View Filmography</Link>
          <Link to="/about" className="btn btn--ghost">About DQ</Link>
        </div>
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">{stats.debutYear}</span>
            <span className="hero__stat-label">Debut Year</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">{stats.totalFilms}+</span>
            <span className="hero__stat-label">Films</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">{stats.filmfareAwards}</span>
            <span className="hero__stat-label">Filmfare Awards</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">{stats.languages}</span>
            <span className="hero__stat-label">Languages</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
