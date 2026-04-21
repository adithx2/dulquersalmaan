import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { getFilmById } from '../utils/api';
import './FilmDetail.css';

const FilmDetail = () => {
  const { id } = useParams();
  const { data: film, loading, error } = useFetch(() => getFilmById(id), [id]);

  if (loading) return <div className="loader" style={{ paddingTop: '8rem' }}><div className="spinner" /></div>;
  if (error) return <div className="error-msg" style={{ paddingTop: '8rem' }}>{error}</div>;
  if (!film) return null;

  return (
    <div className="film-detail">
      <div className="container">
        <Link to="/films" className="film-detail__back">← Back to Filmography</Link>
        <div className="film-detail__grid">
          <div className="film-detail__poster">
            {film.posterUrl ? (
              <img src={film.posterUrl} alt={film.title} />
            ) : (
              <div className="film-detail__poster-placeholder">
                <span>{film.title.charAt(0)}</span>
              </div>
            )}
          </div>
          <div className="film-detail__info">
            <span className="gold-tag">{film.language} · {film.year}</span>
            <h1 className="film-detail__title">{film.title}</h1>
            {film.note && <p className="film-detail__note">{film.note}</p>}

            <div className="film-detail__meta-grid">
              {film.director && (
                <div className="film-detail__meta-item">
                  <span className="film-detail__meta-label">Director</span>
                  <span className="film-detail__meta-value">{film.director}</span>
                </div>
              )}
              {film.role && (
                <div className="film-detail__meta-item">
                  <span className="film-detail__meta-label">Role</span>
                  <span className="film-detail__meta-value">{film.role}</span>
                </div>
              )}
              {film.genre && (
                <div className="film-detail__meta-item">
                  <span className="film-detail__meta-label">Genre</span>
                  <span className="film-detail__meta-value">{film.genre}</span>
                </div>
              )}
              {film.boxOffice && (
                <div className="film-detail__meta-item">
                  <span className="film-detail__meta-label">Box Office</span>
                  <span className="film-detail__meta-value film-detail__meta-value--gold">{film.boxOffice}</span>
                </div>
              )}
              <div className="film-detail__meta-item">
                <span className="film-detail__meta-label">Status</span>
                <span className={`film-detail__status ${film.status}`}>{film.status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmDetail;
