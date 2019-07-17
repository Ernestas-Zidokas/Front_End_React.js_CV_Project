import React from 'react';
import Title from '../Title';
import ProfilePic from '../../../images/profile.jpg';
import blueStroke from '../../../images/brush-stroke-three.png';
import './index.scss';

function Header() {
  return (
    <header className="Header">
      <div className="Header--image">
        <img src={ProfilePic} alt="My headshot" />
      </div>
      <div className="Header--title">
        <Title>Harry Potter</Title>
        <Title level="3" weightClass="font-weight-400" colorClass="color-purple-light">
          Wizard of Oz
        </Title>
      </div>
      <img className="Header--decoration" src={blueStroke} alt="paint brush stroke illustration" />
    </header>
  );
}

export default Header;
