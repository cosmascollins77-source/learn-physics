import React from 'react';
import './SeniorThree.css';

const SeniorThree = () => {
  const topics = [
    {
      id: 1,
      title: 'Electrostatics',
      description: 'Study of electric charges at rest.'
    },
    {
      id: 2,
      title: 'Current Electricity',
      description: 'Flow of electric charges and electrical circuits.'
    },
    {
      id: 3,
      title: 'Electromagnetism',
      description: 'Relationship between electric and magnetic fields.'
    }
  ];

  return (
    <div className="senior-three">
      <h1>Senior Three Physics</h1>
      <p className="subtitle">Understanding electricity and magnetism</p>
      
      <div className="topics-container">
        {topics.map(topic => (
          <div key={topic.id} className="topic-card">
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
            <button className="learn-button">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeniorThree;