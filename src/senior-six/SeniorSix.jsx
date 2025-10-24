import React from 'react';
import './SeniorSix.css';

const SeniorSix = () => {
  const topics = [
    {
      id: 1,
      title: 'Quantum Mechanics',
      description: 'Physics of subatomic particles and wave-particle duality.'
    },
    {
      id: 2,
      title: 'Relativity',
      description: 'Special and general relativity theories.'
    },
    {
      id: 3,
      title: 'Astrophysics',
      description: 'Physics of celestial objects and phenomena.'
    }
  ];

  return (
    <div className="senior-six">
      <h1>Senior Six Physics</h1>
      <p className="subtitle">Advanced topics in modern physics</p>
      
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

export default SeniorSix;