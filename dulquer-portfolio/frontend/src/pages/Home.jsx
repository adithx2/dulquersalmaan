import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import FilmCard from '../components/Films/FilmCard';
import AwardItem from '../components/Awards/AwardItem';
import useFetch from '../hooks/useFetch';
import { getAbout, getFilms, getAwards } from '../utils/api';
import './Home.css';

const Home = () => {
  const { data: about, loading: aboutLoading } = useFetch(getAbout);
  const { data: films, loading: filmsLoading } = useFetch(() => getFilms({ featured: true }));
  const { data: awards, loading: awardsLoading } = useFetch(getAwards);

  return (
    <>
      <Hero about={aboutLoading ? null : about} />

      {/* Featured Films */}
      <section className="home-section">
        <div className="container">
          <span className="gold-tag">On Screen</span>
          <h2 className="section-heading">Featured <span>Films</span></h2>
          <p className="section-sub">Handpicked standouts from a 40+ film career spanning five languages.</p>
          {filmsLoading ? (
            <div className="loader"><div className="spinner" /></div>
          ) : (
            <div className="films-grid">
              {(films || []).slice(0, 6).map((film) => (
                <FilmCard key={film._id} film={film} />
              ))}
            </div>
          )}
          <div className="home-section__cta">
            <Link to="/films" className="btn btn--ghost">View Full Filmography →</Link>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="home-section home-section--alt">
        <div className="container">
          <span className="gold-tag">Recognition</span>
          <h2 className="section-heading">Awards &amp; <span>Honours</span></h2>
          <p className="section-sub">A career recognised across multiple award bodies in Indian cinema.</p>
          {awardsLoading ? (
            <div className="loader"><div className="spinner" /></div>
          ) : (
            <div className="awards-grid">
              {(awards || []).slice(0, 4).map((award) => (
                <AwardItem key={award._id} award={award} />
              ))}
            </div>
          )}
          <div className="home-section__cta">
            <Link to="/awards" className="btn btn--ghost">See All Awards →</Link>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="home-quote">
        <div className="container">
          <blockquote className="home-quote__text">
            "When an actor debuts, he has to earn the right to be a hero —
            and not get it through a shortcut route."
          </blockquote>
          <cite className="home-quote__cite">— Dulquer Salmaan</cite>
        </div>
      </section>
    </>
  );
};

export default Home;
