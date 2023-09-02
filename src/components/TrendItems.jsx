import React from 'react';
import { Link } from 'react-router-dom';

export const TrendItems = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`}>
              {item.title || item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
