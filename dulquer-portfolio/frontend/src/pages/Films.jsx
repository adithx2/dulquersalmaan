import React, { useState } from 'react';
import FilmCard from '../components/Films/FilmCard';
import useFetch from '../hooks/useFetch';
import { getFilms } from '../utils/api';
import './Films.css';

const LANGUAGES = ['All', 'Malayalam', 'Tamil', 'Telugu', 'Hindi', 'Kannada'];
const STATUSES = ['All', 'released', 'upcoming'];

const Films = () => {
  const [lang, setLang] = useState('All');
  const [status, setStatus] = useState('All');

  const { data: films, loading, error } = useFetch(getFilms);

  const filtered = (films || []).filter((f) => {
    const langMatch = lang === 'All' || f.language === lang;
    const statusMatch = status === 'All' || f.status === status;
    return langMatch && statusMatch;
  });

  return (
    <div className="films-page">
      <div className="films-page__header container">
        <span className="gold-tag">Complete Works</span>
        <h1 className="section-heading">Film<span>ography</span></h1>
        <p className="section-sub">Every film in Dulquer Salmaan's career, from 2012 to present.</p>
        

        <div className="films-page__filters">
          <div className="filter-group">
            <span className="filter-label">Language</span>
            <div className="filter-pills">
              {LANGUAGES.map((l) => (
                <button
                  key={l}
                  className={`filter-pill ${lang === l ? 'active' : ''}`}
                  onClick={() => setLang(l)}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <span className="filter-label">Status</span>
            <div className="filter-pills">
              {STATUSES.map((s) => (
                <button
                  key={s}
                  className={`filter-pill ${status === s ? 'active' : ''}`}
                  onClick={() => setStatus(s)}
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {loading && <div className="loader"><div className="spinner" /></div>}
        {error && <div className="error-msg">{error}</div>}
        {!loading && !error && (
          <>
            <p className="films-page__count">{filtered.length} film{filtered.length !== 1 ? 's' : ''}</p>
            <div className="films-grid-full">
              {filtered.map((film) => (
                <FilmCard key={film._id} film={film} />
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="films-page__empty">No films found for this filter.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Films;
