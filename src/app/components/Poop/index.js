import React from 'react';
import './index.scss';

function Poop({ items, onClick }) {
  const { Android, Bowl, poopArray } = items;

  const randomStyle = () => {
    return {
      marginLeft: Math.floor(Math.random() * (50 - 5) + 5) + 'px',
      top: Math.floor(Math.random() * (180 - 150) + 150) + 'px',
      fontSize: Math.floor(Math.random() * (50 - 15) + 15) + 'px',
    };
  };

  const clear = () => {
    document.querySelector('.poop--container').innerHTML = '';
  };

  return (
    <div className="poop">
      <img className="poop--logo" onClick={onClick} src={Android} alt="android" />
      {poopArray.length !== 0 && (
        <div className="poop--container">
          {poopArray.map((poop, index) => (
            <div className="poop--emoji" key={index} style={randomStyle()}>
              {poop}
            </div>
          ))}
        </div>
      )}
      <img className="poop--logo" src={Bowl} alt="apple" />
      <div className="poop--clear" onClick={clear}>
        {'🚽'}
      </div>
    </div>
  );
}

export default Poop;
