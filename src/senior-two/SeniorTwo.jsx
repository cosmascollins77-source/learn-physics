import React from 'react';
import { Link } from 'react-router-dom';
import './SeniorTwo.css';

const SeniorTwo = () => {
  const topics = [
    {
      id: 1,
      title: 'Heat',
      description: 'Thermal energy, temperature scales, heat transfer mechanisms, and thermal expansion.',
      path: '/senior-two/heat'
    },
    {
      id: 2,
      title: 'Wave Motion',
      description: 'Properties of waves, types of waves, wave behavior, and sound waves.',
      path: '/senior-two/wave-motion'
    },
    {
      id: 3,
      title: 'Magnetism',
      description: 'Magnetic fields, magnetic materials, and electromagnetic interactions.',
      path: '/senior-two/magnetism'
    }
  ];

  return (
    <div className="senior-two">
      <div className="level-header">
        <h1>Senior Two Physics</h1>
        <p className="subtitle">Exploring heat, waves, and magnetism</p>
        <Link to="/" className="back-link">← Back to Curriculum</Link>
      </div>
      
      <div className="content-container">
        <div className="intro-section">
          <h2>Course Overview</h2>
          <p>
            Senior Two Physics builds upon the foundations established in Senior One, 
            introducing students to thermal physics, wave phenomena, and magnetism. 
            These topics are essential for understanding more complex physics concepts 
            in later years.
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
              <p>Ugandan High School Physics Textbook - Senior Two</p>
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

export default SeniorTwo;