import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './IntroductionToPhysics.css';

const IntroductionToPhysics = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);

  return (
    <div className="physics-topic">
      <div className="topic-header">
        <h1>Introduction to Physics</h1>
        <p className="subtitle">Understanding the fundamental science of matter and energy</p>
        <Link to="/senior-one" className="back-link">← Back to Senior One</Link>
      </div>
      
      <div className="content-container">
        <div className="learning-objectives">
          <h2>Learning Objectives</h2>
          <ul>
            <li>Define physics and understand its scope</li>
            <li>Identify branches of physics</li>
            <li>Recognize the importance of physics in daily life</li>
            <li>Understand the scientific method</li>
            <li>Learn about physical quantities and measurement</li>
          </ul>
        </div>
        
        <div className="topic-content">
          <h2>What is Physics?</h2>
          <p>
            Physics is the natural science that studies matter, its motion and behavior through space and time, 
            and the related entities of energy and force. It is one of the most fundamental scientific disciplines, 
            with its main goal being to understand how the universe behaves.
          </p>
          
          <h3>Branches of Physics</h3>
          <div className="branches-grid">
            <div className="branch-card">
              <h4>Classical Mechanics</h4>
              <p>The study of motion of objects under the influence of forces.</p>
            </div>
            <div className="branch-card">
              <h4>Thermodynamics</h4>
              <p>The study of heat, temperature, and their relation to energy and work.</p>
            </div>
            <div className="branch-card">
              <h4>Electromagnetism</h4>
              <p>The study of electric and magnetic fields and their interactions.</p>
            </div>
            <div className="branch-card">
              <h4>Optics</h4>
              <p>The study of the behavior and properties of light.</p>
            </div>
            <div className="branch-card">
              <h4>Quantum Mechanics</h4>
              <p>The study of the behavior of matter and light at atomic and subatomic scales.</p>
            </div>
            <div className="branch-card">
              <h4>Nuclear Physics</h4>
              <p>The study of atomic nuclei and their interactions.</p>
            </div>
          </div>
          
          <h3>Importance of Physics</h3>
          <p>
            Physics plays a crucial role in our daily lives. It helps us understand natural phenomena 
            and has led to the development of technologies that improve our quality of life. From the 
            smartphones we use to communicate to the vehicles we use for transportation, physics principles 
            are at work.
          </p>
          
          <h3>The Scientific Method</h3>
          <p>
            The scientific method is a systematic approach used to investigate phenomena, acquire new knowledge, 
            or correct and integrate previous knowledge. The steps include:
          </p>
          <ol>
            <li>Observation of a phenomenon</li>
            <li>Formulation of a hypothesis</li>
            <li>Conducting experiments to test the hypothesis</li>
            <li>Analysis of data</li>
            <li>Formation of conclusions</li>
            <li>Peer review and replication</li>
          </ol>
          
          <h3>Physical Quantities</h3>
          <p>
            In physics, we measure various quantities to describe and understand natural phenomena. 
            These quantities can be classified as:
          </p>
          <div className="quantity-types">
            <div className="quantity-type">
              <h4>Base Quantities</h4>
              <p>Fundamental quantities that cannot be expressed in terms of other quantities.</p>
              <ul>
                <li>Length (meter)</li>
                <li>Mass (kilogram)</li>
                <li>Time (second)</li>
                <li>Electric current (ampere)</li>
                <li>Temperature (kelvin)</li>
              </ul>
            </div>
            <div className="quantity-type">
              <h4>Derived Quantities</h4>
              <p>Quantities expressed in terms of base quantities.</p>
              <ul>
                <li>Area (length × length)</li>
                <li>Volume (length × length × length)</li>
                <li>Speed (length/time)</li>
                <li>Force (mass × acceleration)</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="practice-section">
          <h2>Practice Questions</h2>
          <div className="question">
            <h4>Question 1</h4>
            <p>Define physics in your own words.</p>
            <button className="show-answer" onClick={() => setShowAnswer1(!showAnswer1)}>
              {showAnswer1 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer1 && (
              <div className="answer">
                <p>Physics is the study of matter, energy, and their interactions. It seeks to understand the fundamental principles that govern the natural world.</p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 2</h4>
            <p>Name three branches of physics and briefly describe what each studies.</p>
            <button className="show-answer" onClick={() => setShowAnswer2(!showAnswer2)}>
              {showAnswer2 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer2 && (
              <div className="answer">
                <p>
                  1. Mechanics - Studies motion and forces<br/>
                  2. Thermodynamics - Studies heat and temperature<br/>
                  3. Electromagnetism - Studies electric and magnetic fields
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 3</h4>
            <p>Explain the importance of physics in technology development.</p>
            <button className="show-answer" onClick={() => setShowAnswer3(!showAnswer3)}>
              {showAnswer3 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer3 && (
              <div className="answer">
                <p>Physics provides the fundamental principles that guide the development of new technologies. Understanding physical laws enables engineers to design and create devices like computers, smartphones, medical equipment, and transportation systems.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionToPhysics;