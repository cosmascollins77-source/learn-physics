import React from 'react';
import { Link } from 'react-router-dom';
import './SeniorFour.css';

const SeniorFour = () => {
  const topics = [
    {
      id: 1,
      title: 'Optics',
      description: 'Behavior and properties of light, reflection, refraction, lenses, and optical instruments.'
    },
    {
      id: 2,
      title: 'Modern Physics',
      description: 'Atomic structure, quantum theory, photoelectric effect, and atomic spectra.'
    },
    {
      id: 3,
      title: 'Nuclear Physics',
      description: 'Structure of the nucleus, radioactive decay, nuclear reactions, and applications.'
    }
  ];

  return (
    <div className="senior-four">
      <div className="level-header">
        <h1>Senior Four Physics</h1>
        <p className="subtitle">Exploring light and modern physics concepts</p>
        <Link to="/" className="back-link">← Back to Curriculum</Link>
      </div>
      
      <div className="content-container">
        <div className="intro-section">
          <h2>Course Overview</h2>
          <p>
            Senior Four Physics introduces students to the fascinating world of optics and modern physics. 
            This course covers the behavior of light, atomic physics, and nuclear physics, 
            providing insights into both classical and contemporary physics concepts.
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
              <p>Ugandan High School Physics Textbook - Senior Four</p>
            </div>
            <div className="resource-card">
              <h3>Practice Problems</h3>
              <p>End-of-chapter exercises with solutions</p>
            </div>
            <div className="resource-card">
              <h3>Video Lessons</h3>
              <p>Interactive video explanations for each topic</p>
            </div>
            <div className="resource-card">
              <h3>Complete Notes</h3>
              <p>
                <a 
                  href="/assets/notes/UCE PHYSICS COMPLETE TEXT-1.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="notes-link"
                >
                  Download Complete Physics Notes (PDF)
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeniorFour;