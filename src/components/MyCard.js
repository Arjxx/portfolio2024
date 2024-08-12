import React from 'react';
import './mycard.css';

export const MyCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <h3 className="card-subtitle">{props.subtitle}</h3>
      </div>
      <div className="card-description">
        {props.description}
      </div>
      <div className="card-link">
        <a href={props.link}>More</a>
      </div>
    </div>
  );
};
