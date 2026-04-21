import React from 'react';
import { Link } from 'react-router-dom';
import './FilmCard.css';

const LANG_COLORS = {
  ML: '#1a6b4a',
  TA: '#5a1a6b',
  TE: '#1a4a6b',
  HI: '#6b3a1a',
  KN: '#1a5a3a',
};

const FilmCard = ({ film }) => {
  return (
    <Link to={`/films/${film._id}`} className="film-card">
      <div className="film-card__poster">
        {film.posterUrl ? (
          <img src={film.posterUrl} alt={film.title} />
        ) : (
          <div className="film-card__poster-placeholder">
            <span>{film.title.charAt(0)}</span>
          </div>
        )}
        {film.status === 'upcoming' && (
          <span className="film-card__badge film-card__badge--upcoming">Upcoming</span>
        )}
        {film.featured && film.status !== 'upcoming' && (
          <span className="film-card__badge film-card__badge--featured">Featured</span>
        )}
      </div>
      <div className="film-card__body">
        <div className="film-card__meta">
          <span className="film-card__year">{film.year}</span>
          <span
            className="film-card__lang"
            style={{ background: LANG_COLORS[film.languageCode] || '#333' }}
          >
            {film.languageCode || film.language?.slice(0, 2).toUpperCase()}
          </span>
        </div>
        <h3 className="film-card__title">{film.title}</h3>
        {film.director && <p className="film-card__director">Dir. {film.director}</p>}
        {film.note && <p className="film-card__note">{film.note}</p>}
        {film.boxOffice && <p className="film-card__box">{film.boxOffice}</p>}
      </div>
    </Link>
  );
};

export default FilmCard;
