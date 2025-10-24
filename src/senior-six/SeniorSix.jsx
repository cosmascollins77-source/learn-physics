import React from 'react';
import { Link } from 'react-router-dom';
import './SeniorSix.css';

const SeniorSix = () => {
  return (
    <div className="senior-six">
      <div className="level-header">
        <h1>Senior Six Physics</h1>
        <p className="subtitle">Advanced Topics in Modern Physics</p>
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
      
      <div className="content-container">
        <div className="intro-section">
          <h2>Course Overview</h2>
          <p>
            Senior Six Physics explores the frontiers of modern physics, including quantum mechanics, 
            relativity, and astrophysics. These advanced topics provide insights into the fundamental 
            nature of reality, from the smallest particles to the largest structures in the universe.
          </p>
          <p>
            This course builds on the foundational knowledge from previous years and introduces 
            students to cutting-edge concepts that have shaped our understanding of the physical world.
          </p>
        </div>
        
        <h2 className="topics-container">Core Topics</h2>
        <div className="topics-container">
          <div className="topic-card">
            <h3>Quantum Mechanics</h3>
            <p>
              Explore the strange and fascinating world of quantum physics, where particles 
              exhibit both wave and particle properties, and uncertainty rules.
            </p>
            <Link to="/senior-six/quantum-mechanics" className="learn-button">
              Learn More
            </Link>
          </div>
          
          <div className="topic-card">
            <h3>Relativity</h3>
            <p>
              Understand Einstein's revolutionary theories that transformed our concepts of 
              space, time, and gravity, and their profound implications for the universe.
            </p>
            <Link to="/senior-six/relativity" className="learn-button">
              Learn More
            </Link>
          </div>
          
          <div className="topic-card">
            <h3>Astrophysics</h3>
            <p>
              Journey through the cosmos to study stars, galaxies, black holes, and the 
              evolution of the universe from the Big Bang to the present day.
            </p>
            <Link to="/senior-six/astrophysics" className="learn-button">
              Learn More
            </Link>
          </div>
        </div>
        
        <div className="resources-section">
          <h2>Additional Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>Complete Physics Notes</h3>
              <p>
                Access the complete physics notes covering all topics from Senior One to Senior Six.
              </p>
              <a 
                href="/assets/notes/UCE PHYSICS COMPLETE TEXT-1.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="notes-link"
              >
                Download PDF Notes
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeniorSix;