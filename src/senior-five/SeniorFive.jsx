import React from 'react';
import './SeniorFive.css';

const SeniorFive = () => {
  const topics = [
    {
      id: 1,
      title: 'Rotational Motion',
      description: 'Motion of objects rotating around an axis.'
    },
    {
      id: 2,
      title: 'Fluid Mechanics',
      description: 'Behavior of fluids at rest and in motion.'
    },
    {
      id: 3,
      title: 'Thermodynamics',
      description: 'Laws governing heat and energy transformations.'
    }
  ];

  return (
    <div className="senior-five">
      <h1>Senior Five Physics</h1>
      <p className="subtitle">Advanced mechanics and thermodynamics</p>
      
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

export default SeniorFive;