import React from 'react';

export const Final = ({ results }) => (
  <div>
    <h2>Congratulations!</h2>
    <ul>
      {results.map(res =>
        <li>{res}</li>)
      }
    </ul>
  </div>
);