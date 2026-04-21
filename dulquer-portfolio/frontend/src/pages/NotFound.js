import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => (
  <div className="notfound">
    <div className="notfound__inner">
      <span className="notfound__code">404</span>
      <h1 className="notfound__title">Scene Not Found</h1>
      <p className="notfound__desc">Looks like this page went off-script. Let's get you back on set.</p>
      <Link to="/" className="btn btn--primary">Back to Home</Link>
    </div>
  </div>
);

export default NotFound;
