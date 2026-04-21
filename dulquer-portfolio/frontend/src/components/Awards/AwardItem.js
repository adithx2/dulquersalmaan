import React from 'react';
import './AwardItem.css';

const AwardItem = ({ award }) => (
  <div className="award-item">
    <div className="award-item__icon">★</div>
    <div className="award-item__body">
      <h3 className="award-item__name">{award.name}</h3>
      {award.film && <p className="award-item__film">{award.film}</p>}
      <div className="award-item__meta">
        {award.year && <span className="award-item__year">{award.year}</span>}
        {award.organization && (
          <span className="award-item__org">{award.organization}</span>
        )}
      </div>
    </div>
  </div>
);

export default AwardItem;
