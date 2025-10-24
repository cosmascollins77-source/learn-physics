import React from 'react';
import './SeniorFour.css';

const SeniorFour = () => {
  const topics = [
    {
      id: 1,
      title: 'Optics',
      description: 'Behavior and properties of light.'
    },
    {
      id: 2,
      title: 'Modern Physics',
      description: 'Atomic and quantum physics concepts.'
    },
    {
      id: 3,
      title: 'Nuclear Physics',
      description: 'Structure and reactions of atomic nuclei.'
    }
  ];

  return (
    <div className="senior-four">
      <h1>Senior Four Physics</h1>
      <p className="subtitle">Exploring light and modern physics concepts</p>
      
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

export default SeniorFour;