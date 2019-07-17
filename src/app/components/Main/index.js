import React from 'react';
import InfoContainer from '../InfoContainer';
import content from './data';
import './index.scss';

function Item(data, index) {
  return (
    <li key={index}>
      {data.map(({ tag: Tag, ...rest }, contentIndex) => {
        const props = rest.target === '_blank' ? { ...rest, rel: 'noopener noreferrer' } : rest;
        return <Tag key={contentIndex} {...props} />;
      })}
    </li>
  );
}

function Main({ language }) {
  const { profile, contacts, skills, education, experience } = content[language];
  return (
    <main className="Main">
      <section className="Main--section">
        <InfoContainer title={profile.title} className="Main--section-profile">
          <p>{profile.text}</p>
        </InfoContainer>
        <InfoContainer title={contacts.title} className="Main--section-contacts">
          <ul>{contacts.content.map(Item)}</ul>
        </InfoContainer>
        <InfoContainer title={skills.title} className="Main--section-skills">
          <ul>{skills.content.map(Item)}</ul>
        </InfoContainer>
      </section>
      <section className="Main--section">
        <InfoContainer title={education.title} className="Main--section-education">
          <ul>{education.content.map(Item)}</ul>
        </InfoContainer>
        <InfoContainer title={experience.title} className="Main--section-experience">
          <ul>{experience.content.map(Item)}</ul>
        </InfoContainer>
      </section>
    </main>
  );
}

export default Main;
