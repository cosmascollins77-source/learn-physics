import React from 'react';
import './SeniorTwo.css';

const SeniorTwo = () => {
  const topics = [
    {
      id: 1,
      title: 'Heat',
      description: 'Thermal energy, temperature, and heat transfer.'
    },
    {
      id: 2,
      title: 'Wave Motion',
      description: 'Properties of waves and wave behavior.'
    },
    {
      id: 3,
      title: 'Magnetism',
      description: 'Magnetic fields and electromagnetic interactions.'
    }
  ];

  return (
    <div className="senior-two">
      <h1>Senior Two Physics</h1>
      <p className="subtitle">Exploring heat, waves, and magnetism</p>
      
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

export default SeniorTwo;