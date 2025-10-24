import React from 'react';
import { Link } from 'react-router-dom';
import './SeniorSix.css';

const SeniorSix = () => {
  const topics = [
    {
      id: 1,
      title: 'Quantum Mechanics',
      description: 'Physics of subatomic particles, wave-particle duality, and quantum theory.'
    },
    {
      id: 2,
      title: 'Relativity',
      description: 'Special and general relativity theories, spacetime, and gravitational effects.'
    },
    {
      id: 3,
      title: 'Astrophysics',
      description: 'Physics of celestial objects, stellar evolution, and cosmological phenomena.'
    }
  ];

  return (
    <div className="senior-six">
      <div className="level-header">
        <h1>Senior Six Physics</h1>
        <p className="subtitle">Advanced topics in modern physics</p>
        <Link to="/" className="back-link">← Back to Curriculum</Link>
      </div>
      
      <div className="content-container">
        <div className="intro-section">
          <h2>Course Overview</h2>
          <p>
            Senior Six Physics represents the culmination of the Ugandan high school physics curriculum. 
            Students will explore the frontiers of modern physics, including quantum mechanics, relativity, 
            and astrophysics, preparing them for advanced studies or careers in science and technology.
          </p>
        </div>
        
        <div className="topics-container">
          <h2>Topics Covered</h2>
          {topics.map(topic => (
            <div key={topic.id} className="topic-card">
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
              <button className="learn-button">Learn More</button>
            </div>
          ))}
        </div>
        
        <div className="resources-section">
          <h2>Learning Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>Textbook</h3>
              <p>Ugandan High School Physics Textbook - Senior Six</p>
            </div>
            <div className="resource-card">
              <h3>Practice Problems</h3>
              <p>End-of-chapter exercises with solutions</p>
            </div>
            <div className="resource-card">
              <h3>Video Lessons</h3>
              <p>Interactive video explanations for each topic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeniorSix;