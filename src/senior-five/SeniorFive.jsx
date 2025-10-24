import React from 'react';
import { Link } from 'react-router-dom';
import './SeniorFive.css';

const SeniorFive = () => {
  const topics = [
    {
      id: 1,
      title: 'Rotational Motion',
      description: 'Motion of objects rotating around an axis, angular velocity, torque, and moment of inertia.'
    },
    {
      id: 2,
      title: 'Fluid Mechanics',
      description: 'Behavior of fluids at rest and in motion, pressure, buoyancy, and fluid dynamics.'
    },
    {
      id: 3,
      title: 'Thermodynamics',
      description: 'Laws governing heat and energy transformations, heat engines, and entropy.'
    }
  ];

  return (
    <div className="senior-five">
      <div className="level-header">
        <h1>Senior Five Physics</h1>
        <p className="subtitle">Advanced mechanics and thermodynamics</p>
        <Link to="/" className="back-link">← Back to Curriculum</Link>
      </div>
      
      <div className="content-container">
        <div className="intro-section">
          <h2>Course Overview</h2>
          <p>
            Senior Five Physics presents advanced topics in mechanics and thermodynamics. 
            Students will explore rotational motion, fluid mechanics, and the laws of thermodynamics, 
            developing a deeper understanding of physical principles and their applications.
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
              <p>Ugandan High School Physics Textbook - Senior Five</p>
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

export default SeniorFive;