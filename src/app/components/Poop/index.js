import React from 'react';
import './index.scss';

function Poop({ items, onClick, onClear }) {
  const { Android, Bowl, poopArray } = items;

  return (
    <div className="poop">
      <img className="poop--logo" onClick={onClick} src={Android} alt="android" />
      {poopArray.length !== 0 && (
        <div className="poop--container">
          {poopArray.map((poop, index) => (
            <div className="poop--emoji" key={index} style={poop.style}>
              {poop.emoji}
            </div>
          ))}
        </div>
      )}
      <img className="poop--logo" src={Bowl} alt="apple" />
      <div className="poop--clear" onClick={onClear}>
        {'🚽'}
      </div>
    </div>
  );
}

export default Poop;
