import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Relativity.css';

const Relativity = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);

  return (
    <div className="physics-topic">
      <div className="topic-header">
        <h1>Relativity</h1>
        <p className="subtitle">Understanding space, time, and gravity through Einstein's theories</p>
        <Link to="/senior-six" className="back-link">← Back to Senior Six</Link>
      </div>
      
      <div className="content-container">
        <div className="learning-objectives">
          <h2>Learning Objectives</h2>
          <ul>
            <li>Understand the postulates of special relativity</li>
            <li>Learn about time dilation and length contraction</li>
            <li>Study the equivalence of mass and energy (E=mc²)</li>
            <li>Understand the principles of general relativity</li>
            <li>Learn about spacetime curvature and gravitational effects</li>
          </ul>
        </div>
        
        <div className="topic-content">
          <h2>Introduction to Relativity</h2>
          <p>
            Relativity is a fundamental theory in physics developed by Albert Einstein that describes the relationship between space and time. 
            There are two theories of relativity: Special Relativity (1905) and General Relativity (1915).
          </p>
          
          <h3>Special Relativity</h3>
          <p>
            Special relativity deals with objects moving at constant speeds, particularly those approaching the speed of light.
          </p>
          
          <div className="special-relativity">
            <div className="postulates">
              <h4>Postulates of Special Relativity</h4>
              <ol>
                <li><strong>Principle of Relativity:</strong> The laws of physics are the same in all inertial reference frames</li>
                <li><strong>Constancy of Speed of Light:</strong> The speed of light in vacuum is constant for all observers</li>
              </ol>
            </div>
            <div className="consequences">
              <h4>Consequences of Special Relativity</h4>
              <ul>
                <li>Time dilation</li>
                <li>Length contraction</li>
                <li>Relativistic mass increase</li>
                <li>Mass-energy equivalence (E=mc²)</li>
                <li>Simultaneity is relative</li>
              </ul>
            </div>
          </div>
          
          <h3>Time Dilation</h3>
          <p>
            Time dilation is the phenomenon where time passes slower for an object in motion relative to an observer at rest.
          </p>
          
          <div className="time-dilation">
            <div className="time-dilation-equation">
              <h4>Time Dilation Equation</h4>
              <p>t = t₀ / √(1 - v²/c²)</p>
              <p>Where t = dilated time, t₀ = proper time, v = velocity, c = speed of light</p>
              <p>The factor γ = 1/√(1 - v²/c²) is called the Lorentz factor</p>
            </div>
            <div className="time-dilation-explanation">
              <h4>Explanation</h4>
              <p>As velocity approaches the speed of light, time dilation becomes significant</p>
              <p>At everyday speeds, the effect is negligible</p>
              <p>Time dilation has been confirmed by experiments with atomic clocks</p>
            </div>
          </div>
          
          <h3>Length Contraction</h3>
          <p>
            Length contraction is the phenomenon where objects appear shorter in the direction of motion when moving at relativistic speeds.
          </p>
          
          <div className="length-contraction">
            <div className="length-contraction-equation">
              <h4>Length Contraction Equation</h4>
              <p>L = L₀ × √(1 - v²/c²)</p>
              <p>Where L = contracted length, L₀ = proper length, v = velocity, c = speed of light</p>
            </div>
            <div className="length-contraction-explanation">
              <h4>Explanation</h4>
              <p>Contraction only occurs in the direction of motion</p>
              <p>At everyday speeds, the effect is negligible</p>
              <p>Objects at rest appear longest to observers</p>
            </div>
          </div>
          
          <h3>Relativistic Momentum and Energy</h3>
          <p>
            At relativistic speeds, the classical equations for momentum and energy must be modified.
          </p>
          
          <div className="relativistic-equations">
            <div className="relativistic-momentum">
              <h4>Relativistic Momentum</h4>
              <p>p = γmv = mv / √(1 - v²/c²)</p>
              <p>Where p = momentum, m = rest mass, v = velocity</p>
            </div>
            <div className="relativistic-energy">
              <h4>Relativistic Energy</h4>
              <p>E = γmc² = mc² / √(1 - v²/c²)</p>
              <p>Total energy = Rest energy + Kinetic energy</p>
              <p>E = mc² + KE</p>
            </div>
            <div className="mass-energy-equivalence">
              <h4>Mass-Energy Equivalence</h4>
              <p>E = mc²</p>
              <p>Rest energy of an object with mass m</p>
              <p>This equation shows that mass and energy are interchangeable</p>
            </div>
          </div>
          
          <h3>General Relativity</h3>
          <p>
            General relativity is Einstein's theory of gravitation that describes gravity as the curvature of spacetime.
          </p>
          
          <div className="general-relativity">
            <div className="equivalence-principle">
              <h4>Equivalence Principle</h4>
              <p>Gravitational mass and inertial mass are equivalent</p>
              <p>Gravitational effects are indistinguishable from acceleration</p>
              <p>A person in a closed room cannot tell if they're in a gravitational field or accelerating</p>
            </div>
            <div className="spacetime-curvature">
              <h4>Spacetime Curvature</h4>
              <p>Mass and energy curve spacetime</p>
              <p>Objects follow the straightest possible paths (geodesics) through curved spacetime</p>
              <p>What we perceive as gravitational force is actually motion through curved spacetime</p>
            </div>
          </div>
          
          <h3>Experimental Evidence</h3>
          <p>
            Several experiments and observations confirm the predictions of relativity.
          </p>
          
          <div className="experimental-evidence">
            <div className="special-evidence">
              <h4>Evidence for Special Relativity</h4>
              <ul>
                <li>Michelson-Morley experiment (constant speed of light)</li>
                <li>Time dilation in atomic clocks on airplanes</li>
                <li>Extended lifetime of high-speed muons</li>
                <li>GPS satellite corrections</li>
              </ul>
            </div>
            <div className="general-evidence">
              <h4>Evidence for General Relativity</h4>
              <ul>
                <li>Gravitational time dilation</li>
                <li>Gravitational lensing of light</li>
                <li>Perihelion precession of Mercury</li>
                <li>Gravitational redshift</li>
                <li>Detection of gravitational waves</li>
              </ul>
            </div>
          </div>
          
          <h3>Applications of Relativity</h3>
          <p>
            Relativity has practical applications in modern technology and our understanding of the universe.
          </p>
          
          <div className="applications">
            <div className="technology-applications">
              <h4>Technology Applications</h4>
              <ul>
                <li>Global Positioning System (GPS)</li>
                <li>Particle accelerators</li>
                <li>Nuclear energy</li>
                <li>Medical imaging (PET scans)</li>
              </ul>
            </div>
            <div className="cosmological-applications">
              <h4>Cosmological Applications</h4>
              <ul>
                <li>Understanding black holes</li>
                <li>Big Bang theory</li>
                <li>Cosmic expansion</li>
                <li>Dark matter and dark energy</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="practice-section">
          <h2>Practice Questions</h2>
          <div className="question">
            <h4>Question 1</h4>
            <p>A spaceship travels at 0.8c relative to Earth. Calculate the time dilation factor γ.</p>
            <button className="show-answer" onClick={() => setShowAnswer1(!showAnswer1)}>
              {showAnswer1 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer1 && (
              <div className="answer">
                <p>
                  Given:<br/>
                  v = 0.8c<br/><br/>
                  γ = 1/√(1 - v²/c²)<br/>
                  γ = 1/√(1 - (0.8c)²/c²)<br/>
                  γ = 1/√(1 - 0.64)<br/>
                  γ = 1/√(0.36)<br/>
                  γ = 1/0.6<br/>
                  γ = 1.67<br/><br/>
                  The time dilation factor is 1.67.
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 2</h4>
            <p>Explain the equivalence principle in general relativity.</p>
            <button className="show-answer" onClick={() => setShowAnswer2(!showAnswer2)}>
              {showAnswer2 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer2 && (
              <div className="answer">
                <p>
                  <strong>Equivalence Principle:</strong><br/>
                  The equivalence principle states that gravitational mass and inertial mass are equivalent, 
                  and that gravitational effects are indistinguishable from acceleration.<br/><br/>
                  <strong>Key Points:</strong><br/>
                  1. A person in a closed room cannot tell if they're experiencing a gravitational field or if the room is accelerating<br/>
                  2. All objects fall at the same rate in a gravitational field, regardless of their mass<br/>
                  3. This principle led Einstein to realize that gravity is not a force but a curvature of spacetime<br/><br/>
                  <strong>Example:</strong><br/>
                  If you're in an elevator in free fall, you would feel weightless, just as if you were in deep space far from any gravitational field. 
                  Conversely, if the elevator accelerates upward, you would feel heavier, just as if gravity had increased.
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 3</h4>
            <p>Calculate the rest energy of an electron (mass = 9.1 × 10⁻³¹ kg).</p>
            <button className="show-answer" onClick={() => setShowAnswer3(!showAnswer3)}>
              {showAnswer3 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer3 && (
              <div className="answer">
                <p>
                  Given:<br/>
                  m = 9.1 × 10⁻³¹ kg<br/>
                  c = 3 × 10⁸ m/s<br/><br/>
                  Using E = mc²:<br/>
                  E = (9.1 × 10⁻³¹) × (3 × 10⁸)²<br/>
                  E = (9.1 × 10⁻³¹) × (9 × 10¹⁶)<br/>
                  E = 81.9 × 10⁻¹⁵ J<br/>
                  E = 8.19 × 10⁻¹⁴ J<br/><br/>
                  The rest energy of an electron is 8.19 × 10⁻¹⁴ Joules.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relativity;