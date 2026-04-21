import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/api',
  headers: { 'Content-Type': 'application/json' },
});

export const getAbout = () => api.get('/about');
export const getFilms = (params = {}) => api.get('/films', { params });
export const getFilmById = (id) => api.get(`/films/${id}`);
export const getAwards = () => api.get('/awards');

export default api;
