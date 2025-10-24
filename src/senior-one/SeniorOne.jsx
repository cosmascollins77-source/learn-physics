import React from 'react';
import { Link } from 'react-router-dom';
import './SeniorOne.css';

const SeniorOne = () => {
  const topics = [
    {
      id: 1,
      title: 'Introduction to Physics',
      description: 'Understanding what physics is, its branches, and its importance in everyday life.',
      path: '/senior-one/introduction-to-physics'
    },
    {
      id: 2,
      title: 'Measurements',
      description: 'Units, dimensions, measurement techniques, and error analysis.',
      path: '/senior-one/measurements'
    },
    {
      id: 3,
      title: 'Motion',
      description: 'Study of motion in one dimension including distance, displacement, speed, and velocity.',
      path: '/senior-one/motion'
    }
  ];

  return (
    <div className="senior-one">
      <div className="level-header">
        <h1>Senior One Physics</h1>
        <p className="subtitle">Introduction to the fundamentals of physics</p>
        <Link to="/" className="back-link">← Back to Curriculum</Link>
      </div>
      
      <div className="content-container">
        <div className="intro-section">
          <h2>Course Overview</h2>
          <p>
            Senior One Physics introduces students to the fundamental concepts of physics. 
            This course lays the foundation for more advanced topics in later years by 
            covering basic principles, measurement techniques, and introductory mechanics.
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
              <p>Ugandan High School Physics Textbook - Senior One</p>
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

export default SeniorOne;