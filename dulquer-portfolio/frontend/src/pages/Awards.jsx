import React from 'react';
import AwardItem from '../components/Awards/AwardItem';
import useFetch from '../hooks/useFetch';
import { getAwards } from '../utils/api';
import './Awards.css';

const Awards = () => {
  const { data: awards, loading, error } = useFetch(getAwards);

  return (
    <div className="awards-page">
      
      <div className="container">
        <span className="gold-tag">Recognition</span>
        <h1 className="section-heading">Awards &amp; <span>Honours</span></h1>
        <p className="section-sub">A career celebrated across Indian cinema's most prestigious bodies.</p>

        {loading && <div className="loader"><div className="spinner" /></div>}
        {error && <div className="error-msg">{error}</div>}
        {!loading && !error && (
          <div className="awards-list">
            {(awards || []).map((award) => (
              <AwardItem key={award._id} award={award} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Awards;
