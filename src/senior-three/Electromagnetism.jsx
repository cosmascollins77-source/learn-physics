import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Electromagnetism.css';

const Electromagnetism = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);

  return (
    <div className="physics-topic">
      <div className="topic-header">
        <h1>Electromagnetism</h1>
        <p className="subtitle">Understanding the relationship between electricity and magnetism</p>
        <Link to="/senior-three" className="back-link">← Back to Senior Three</Link>
      </div>
      
      <div className="content-container">
        <div className="learning-objectives">
          <h2>Learning Objectives</h2>
          <ul>
            <li>Understand the magnetic effect of electric current</li>
            <li>Learn about electromagnetic induction</li>
            <li>Study Faraday's and Lenz's laws</li>
            <li>Understand transformers and their applications</li>
            <li>Learn about electromagnetic waves</li>
          </ul>
        </div>
        
        <div className="topic-content">
          <h2>Introduction to Electromagnetism</h2>
          <p>
            Electromagnetism is the branch of physics that studies the interaction between electrically charged particles and magnetic fields. 
            It combines the phenomena of electricity and magnetism into a single theory.
          </p>
          
          <h3>Magnetic Effect of Electric Current</h3>
          <p>
            When electric current flows through a conductor, it produces a magnetic field around it. 
            This phenomenon was first discovered by Hans Christian Oersted in 1820.
          </p>
          
          <div className="oersted-experiment">
            <div className="experiment-details">
              <h4>Oersted's Experiment</h4>
              <ul>
                <li>A compass needle deflects when placed near a current-carrying wire</li>
                <li>The deflection increases with current strength</li>
                <li>Reversing current reverses the deflection</li>
                <li>The magnetic field forms concentric circles around the wire</li>
              </ul>
            </div>
            <div className="right-hand-rule">
              <h4>Right-Hand Rule</h4>
              <p>Used to determine the direction of magnetic field around a current-carrying conductor:</p>
              <ul>
                <li>Thumb points in the direction of current</li>
                <li>Curling fingers show the direction of magnetic field</li>
              </ul>
            </div>
          </div>
          
          <h3>Magnetic Field Patterns</h3>
          
          <div className="field-patterns">
            <div className="pattern">
              <h4>Straight Conductor</h4>
              <ul>
                <li>Field lines are concentric circles</li>
                <li>Field strength decreases with distance</li>
                <li>Direction given by right-hand rule</li>
              </ul>
            </div>
            <div className="pattern">
              <h4>Circular Coil</h4>
              <ul>
                <li>Field lines are straight at the center</li>
                <li>Field direction perpendicular to coil plane</li>
                <li>Field strength increases with turns and current</li>
              </ul>
            </div>
            <div className="pattern">
              <h4>Solenoid</h4>
              <ul>
                <li>Field lines parallel and uniform inside</li>
                <li>Behaves like a bar magnet</li>
                <li>Strong field inside, weak outside</li>
              </ul>
            </div>
          </div>
          
          <h3>Electromagnetic Induction</h3>
          <p>
            Electromagnetic induction is the process of generating electric current in a conductor 
            by changing the magnetic field around it. This phenomenon was discovered by Michael Faraday.
          </p>
          
          <div className="induction-concepts">
            <div className="faraday-law">
              <h4>Faraday's Laws of Electromagnetic Induction</h4>
              <ul>
                <li><strong>First Law:</strong> An emf is induced in a circuit when magnetic flux changes</li>
                <li><strong>Second Law:</strong> Induced emf is proportional to the rate of change of flux</li>
                <li><strong>Formula:</strong> E = -N(dΦ/dt)</li>
              </ul>
            </div>
            <div className="lenz-law">
              <h4>Lenz's Law</h4>
              <p>The direction of induced current opposes the change producing it.</p>
              <p>This is in accordance with the law of conservation of energy.</p>
            </div>
          </div>
          
          <h3>Factors Affecting Induced EMF</h3>
          <ul>
            <li><strong>Rate of change of magnetic flux:</strong> Faster change produces larger emf</li>
            <li><strong>Number of turns:</strong> More turns produce larger emf</li>
            <li><strong>Strength of magnetic field:</strong> Stronger field produces larger emf</li>
            <li><strong>Area of coil:</strong> Larger area produces larger emf</li>
            <li><strong>Angle between field and coil:</strong> Maximum when perpendicular</li>
          </ul>
          
          <h3>AC Generator (Alternator)</h3>
          <p>
            An AC generator converts mechanical energy into electrical energy using electromagnetic induction.
          </p>
          
          <div className="generator">
            <div className="generator-parts">
              <h4>Main Parts</h4>
              <ul>
                <li><strong>Field magnet:</strong> Produces magnetic field</li>
                <li><strong>Armature:</strong> Rotating coil where emf is induced</li>
                <li><strong>Slip rings:</strong> Transfer current to external circuit</li>
                <li><strong>Brushes:</strong> Make contact with slip rings</li>
              </ul>
            </div>
            <div className="generator-working">
              <h4>Working Principle</h4>
              <ul>
                <li>Armature rotates in magnetic field</li>
                <li>Magnetic flux through coil changes continuously</li>
                <li>Alternating emf is induced in the coil</li>
                <li>Current flows in external circuit</li>
              </ul>
            </div>
          </div>
          
          <h3>Transformers</h3>
          <p>
            A transformer is a device that transfers electrical energy between two circuits 
            through electromagnetic induction, changing voltage levels.
          </p>
          
          <div className="transformer-types">
            <div className="transformer-type">
              <h4>Step-Up Transformer</h4>
              <p>Increases voltage from primary to secondary</p>
              <p>N<sub>S</sub> &gt; N<sub>P</sub> (more turns in secondary)</p>
            </div>
            <div className="transformer-type">
              <h4>Step-Down Transformer</h4>
              <p>Decreases voltage from primary to secondary</p>
              <p>N<sub>S</sub> &lt; N<sub>P</sub> (fewer turns in secondary)</p>
            </div>
          </div>
          
          <div className="transformer-equation">
            <p><strong>Transformer Equation:</strong> V<sub>P</sub>/V<sub>S</sub> = N<sub>P</sub>/N<sub>S</sub> = I<sub>S</sub>/I<sub>P</sub></p>
            <p>Where:</p>
            <ul>
              <li>V<sub>P</sub>, V<sub>S</sub> = Primary and secondary voltages</li>
              <li>N<sub>P</sub>, N<sub>S</sub> = Number of turns in primary and secondary</li>
              <li>I<sub>P</sub>, I<sub>S</sub> = Primary and secondary currents</li>
            </ul>
          </div>
          
          <h3>Electromagnetic Waves</h3>
          <p>
            Electromagnetic waves are waves that propagate through space with electric and magnetic fields 
            oscillating perpendicular to each other and to the direction of propagation.
          </p>
          
          <div className="em-waves">
            <div className="wave-properties">
              <h4>Properties</h4>
              <ul>
                <li>Transverse waves</li>
                <li>Travel at speed of light (c = 3 × 10⁸ m/s)</li>
                <li>Do not require medium for propagation</li>
                <li>Obey wave equation: c = fλ</li>
              </ul>
            </div>
            <div className="wave-spectrum">
              <h4>Electromagnetic Spectrum</h4>
              <ul>
                <li>Radio waves</li>
                <li>Microwaves</li>
                <li>Infrared</li>
                <li>Visible light</li>
                <li>Ultraviolet</li>
                <li>X-rays</li>
                <li>Gamma rays</li>
              </ul>
            </div>
          </div>
          
          <h3>Applications of Electromagnetism</h3>
          
          <div className="applications-grid">
            <div className="application-card">
              <h4>Electric Motors</h4>
              <p>Convert electrical energy to mechanical energy</p>
            </div>
            <div className="application-card">
              <h4>Electric Generators</h4>
              <p>Convert mechanical energy to electrical energy</p>
            </div>
            <div className="application-card">
              <h4>Transformers</h4>
              <p>Change voltage levels in power transmission</p>
            </div>
            <div className="application-card">
              <h4>Induction Cookers</h4>
              <p>Heat cooking vessels using eddy currents</p>
            </div>
            <div className="application-card">
              <h4>Wireless Charging</h4>
              <p>Charge devices without physical connections</p>
            </div>
            <div className="application-card">
              <h4>MRI Machines</h4>
              <p>Medical imaging using strong magnetic fields</p>
            </div>
          </div>
        </div>
        
        <div className="practice-section">
          <h2>Practice Questions</h2>
          <div className="question">
            <h4>Question 1</h4>
            <p>State Faraday's laws of electromagnetic induction.</p>
            <button className="show-answer" onClick={() => setShowAnswer1(!showAnswer1)}>
              {showAnswer1 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer1 && (
              <div className="answer">
                <p>
                  <strong>Faraday's Laws of Electromagnetic Induction:</strong><br/><br/>
                  <strong>First Law:</strong> An emf is induced in a circuit whenever the magnetic flux linked with the circuit changes.<br/><br/>
                  <strong>Second Law:</strong> The magnitude of the induced emf is directly proportional to the rate of change of magnetic flux linked with the circuit.<br/>
                  Mathematically: E = -N(dΦ/dt)<br/>
                  Where E is induced emf, N is number of turns, and dΦ/dt is rate of change of flux.
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 2</h4>
            <p>A transformer has 500 turns in the primary coil and 2000 turns in the secondary coil. If the primary voltage is 100V, calculate the secondary voltage.</p>
            <button className="show-answer" onClick={() => setShowAnswer2(!showAnswer2)}>
              {showAnswer2 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer2 && (
              <div className="answer">
                <p>
                  Given:<br/>
                  N<sub>P</sub> = 500 turns, N<sub>S</sub> = 2000 turns, V<sub>P</sub> = 100V<br/><br/>
                  Using transformer equation: V<sub>P</sub>/V<sub>S</sub> = N<sub>P</sub>/N<sub>S</sub><br/>
                  100/V<sub>S</sub> = 500/2000<br/>
                  100/V<sub>S</sub> = 1/4<br/>
                  V<sub>S</sub> = 100 × 4 = 400V<br/><br/>
                  The secondary voltage is 400V. This is a step-up transformer.
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 3</h4>
            <p>Explain the difference between step-up and step-down transformers.</p>
            <button className="show-answer" onClick={() => setShowAnswer3(!showAnswer3)}>
              {showAnswer3 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer3 && (
              <div className="answer">
                <p>
                  <strong>Step-Up Transformer:</strong><br/>
                  - Increases voltage from primary to secondary<br/>
                  - Has more turns in secondary coil than primary (N<sub>S</sub> &gt; N<sub>P</sub>)<br/>
                  - Secondary voltage &gt; Primary voltage<br/>
                  - Secondary current &lt; Primary current<br/><br/>
                  <strong>Step-Down Transformer:</strong><br/>
                  - Decreases voltage from primary to secondary<br/>
                  - Has fewer turns in secondary coil than primary (N<sub>S</sub> &lt; N<sub>P</sub>)<br/>
                  - Secondary voltage &lt; Primary voltage<br/>
                  - Secondary current &gt; Primary current
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Electromagnetism;