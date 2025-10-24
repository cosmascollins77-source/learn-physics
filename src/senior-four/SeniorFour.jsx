import React from 'react';
import { Link } from 'react-router-dom';
import './SeniorFour.css';

const SeniorFour = () => {
  const topics = [
    {
      id: 1,
      title: 'Optics',
      description: 'Study of light behavior, reflection, refraction, lenses, and optical instruments.',
      path: '/senior-four/optics'
    },
    {
      id: 2,
      title: 'Modern Physics',
      description: 'Quantum mechanics, relativity, atomic structure, and lasers.',
      path: '/senior-four/modern-physics'
    },
    {
      id: 3,
      title: 'Nuclear Physics',
      description: 'Atomic nuclei, radioactive decay, nuclear reactions, and applications.',
      path: '/senior-four/nuclear-physics'
    }
  ];

  return (
    <div className="senior-four">
      <div className="level-header">
        <h1>Senior Four Physics</h1>
        <p className="subtitle">Exploring light, modern physics, and nuclear phenomena</p>
        <Link to="/" className="back-link">← Back to Curriculum</Link>
      </div>
      
      <div className="content-container">
        <div className="intro-section">
          <h2>Course Overview</h2>
          <p>
            Senior Four Physics expands students' understanding to include the behavior of light, 
            modern physics concepts, and nuclear phenomena. This course bridges classical and modern physics, 
            preparing students for advanced studies in physics and related fields.
          </p>
        </div>
        
        <div className="topics-container">
          <h2>Topics Covered</h2>
          {topics.map(topic => (
            <div key={topic.id} className="topic-card">
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
              <Link to={topic.path} className="learn-button">
                Learn More
              </Link>
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