import React from 'react';
import { Link } from 'react-router-dom';
import './SeniorThree.css';

const SeniorThree = () => {
  const topics = [
    {
      id: 1,
      title: 'Electrostatics',
      description: 'Study of electric charges at rest, Coulomb\'s law, electric fields, and electric potential.'
    },
    {
      id: 2,
      title: 'Current Electricity',
      description: 'Flow of electric charges, Ohm\'s law, electrical circuits, and electrical power.'
    },
    {
      id: 3,
      title: 'Electromagnetism',
      description: 'Relationship between electric and magnetic fields, electromagnets, and electromagnetic induction.'
    }
  ];

  return (
    <div className="senior-three">
      <div className="level-header">
        <h1>Senior Three Physics</h1>
        <p className="subtitle">Understanding electricity and magnetism</p>
        <Link to="/" className="back-link">← Back to Curriculum</Link>
      </div>
      
      <div className="content-container">
        <div className="intro-section">
          <h2>Course Overview</h2>
          <p>
            Senior Three Physics delves into the fascinating world of electricity and magnetism. 
            Students will explore electrostatics, current electricity, and electromagnetism, 
            building a strong foundation for advanced physics topics in later years.
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
              <p>Ugandan High School Physics Textbook - Senior Three</p>
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

export default SeniorThree;