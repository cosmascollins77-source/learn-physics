import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CurrentElectricity.css';

const CurrentElectricity = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);

  return (
    <div className="physics-topic">
      <div className="topic-header">
        <h1>Current Electricity</h1>
        <p className="subtitle">Understanding the flow of electric charges</p>
        <Link to="/senior-three" className="back-link">← Back to Senior Three</Link>
      </div>
      
      <div className="content-container">
        <div className="learning-objectives">
          <h2>Learning Objectives</h2>
          <ul>
            <li>Understand electric current and its measurement</li>
            <li>Learn Ohm's law and resistance concepts</li>
            <li>Study series and parallel circuits</li>
            <li>Understand electrical power and energy</li>
            <li>Learn about electrical safety and applications</li>
          </ul>
        </div>
        
        <div className="topic-content">
          <h2>Introduction to Current Electricity</h2>
          <p>
            Current electricity deals with the flow of electric charges through conductors. 
            When electric charges move in a definite direction, they constitute an electric current.
          </p>
          
          <h3>Electric Current</h3>
          <p>
            Electric current is the rate of flow of electric charge through a conductor.
          </p>
          
          <div className="current-concept">
            <p><strong>Formula:</strong> I = Q/t</p>
            <p>Where:</p>
            <ul>
              <li>I = Electric current (Ampere, A)</li>
              <li>Q = Charge (Coulomb, C)</li>
              <li>t = Time (Second, s)</li>
            </ul>
            <p><strong>Direction:</strong> Conventional current flows from positive to negative terminal</li>
            <p><strong>Actual flow:</strong> Electrons flow from negative to positive terminal</li>
          </div>
          
          <h3>Types of Electric Current</h3>
          
          <div className="current-types">
            <div className="current-type">
              <h4>Direct Current (DC)</h4>
              <p>Current that flows in one direction only</p>
              <p><strong>Sources:</strong> Cells, batteries, DC generators</p>
            </div>
            <div className="current-type">
              <h4>Alternating Current (AC)</h4>
              <p>Current that periodically reverses direction</p>
              <p><strong>Sources:</strong> AC generators, mains supply</p>
              <p><strong>Frequency:</strong> 50 Hz in Uganda</p>
            </div>
          </div>
          
          <h3>Electric Resistance</h3>
          <p>
            Resistance is the opposition offered by a conductor to the flow of electric current.
          </p>
          
          <div className="resistance">
            <p><strong>Formula:</strong> R = V/I (Ohm's Law)</p>
            <p>Where:</p>
            <ul>
              <li>R = Resistance (Ohm, Ω)</li>
              <li>V = Potential difference (Volt, V)</li>
              <li>I = Current (Ampere, A)</li>
            </ul>
            <p><strong>Factors affecting resistance:</strong></p>
            <ul>
              <li>Length of conductor (R ∝ L)</li>
              <li>Area of cross-section (R ∝ 1/A)</li>
              <li>Nature of material (resistivity, ρ)</li>
              <li>Temperature</li>
            </ul>
            <p><strong>Formula:</strong> R = ρL/A</p>
          </div>
          
          <h3>Ohm's Law</h3>
          <p>
            Ohm's law states that the current flowing through a conductor is directly proportional 
            to the potential difference across its ends, provided physical conditions remain constant.
          </p>
          
          <div className="ohms-law">
            <p><strong>Statement:</strong> V ∝ I or V = IR</p>
            <p><strong>Graph:</strong> Straight line passing through origin</p>
            <p><strong>Limitations:</strong></p>
            <ul>
              <li>Not applicable to non-ohmic conductors (diodes, LEDs)</li>
              <li>Not applicable at very high temperatures</li>
              <li>Not applicable to semiconductors</li>
            </ul>
          </div>
          
          <h3>Electrical Circuits</h3>
          
          <div className="circuits">
            <div className="circuit-type">
              <h4>Series Circuit</h4>
              <ul>
                <li>Components connected end-to-end</li>
                <li>Same current flows through all components</li>
                <li>Total resistance: R = R₁ + R₂ + R₃ + ...</li>
                <li>Total voltage: V = V₁ + V₂ + V₃ + ...</li>
                <li>If one component fails, entire circuit breaks</li>
              </ul>
            </div>
            <div className="circuit-type">
              <h4>Parallel Circuit</h4>
              <ul>
                <li>Components connected across same two points</li>
                <li>Same voltage across all components</li>
                <li>Total current: I = I₁ + I₂ + I₃ + ...</li>
                <li>Total resistance: 1/R = 1/R₁ + 1/R₂ + 1/R₃ + ...</li>
                <li>If one component fails, others continue to work</li>
              </ul>
            </div>
          </div>
          
          <h3>Electrical Power and Energy</h3>
          <p>
            Electrical power is the rate at which electrical energy is converted to other forms of energy.
          </p>
          
          <div className="power-energy">
            <p><strong>Power:</strong></p>
            <ul>
              <li>P = VI</li>
              <li>P = I²R</li>
              <li>P = V²/R</li>
            </ul>
            <p>Unit: Watt (W)</p>
            <p><strong>Energy:</strong></p>
            <ul>
              <li>E = Pt</li>
              <li>E = VIt</li>
              <li>E = I²Rt</li>
              <li>E = (V²t)/R</li>
            </ul>
            <p>Unit: Joule (J) or Kilowatt-hour (kWh)</p>
          </div>
          
          <h3>Electrical Safety</h3>
          
          <div className="safety">
            <div className="safety-measures">
              <h4>Safety Measures</h4>
              <ul>
                <li>Use of fuses and circuit breakers</li>
                <li>Proper earthing/grounding</li>
                <li>Insulation of wires</li>
                <li>Use of switches in live wire</li>
                <li>Regular maintenance of electrical appliances</li>
              </ul>
            </div>
            <div className="safety-devices">
              <h4>Safety Devices</h4>
              <ul>
                <li><strong>Fuses:</strong> Protect against overcurrent</li>
                <li><strong>Circuit breakers:</strong> Automatic switches</li>
                <li><strong>Earth wire:</strong> Provides safety path for leakage current</li>
                <li><strong>Residual Current Device (RCD):</strong> Detects earth leakage</li>
              </ul>
            </div>
          </div>
          
          <h3>Applications of Current Electricity</h3>
          
          <div className="applications-grid">
            <div className="application-card">
              <h4>Heating Appliances</h4>
              <p>Electric heaters, kettles, irons use heating effect of current</p>
            </div>
            <div className="application-card">
              <h4>Lighting</h4>
              <p>Incandescent bulbs, fluorescent lamps, LEDs</p>
            </div>
            <div className="application-card">
              <h4>Electroplating</h4>
              <p>Coating objects with metal using electric current</p>
            </div>
            <div className="application-card">
              <h4>Electric Motors</h4>
              <p>Convert electrical energy to mechanical energy</p>
            </div>
          </div>
        </div>
        
        <div className="practice-section">
          <h2>Practice Questions</h2>
          <div className="question">
            <h4>Question 1</h4>
            <p>State Ohm's law and give its mathematical expression.</p>
            <button className="show-answer" onClick={() => setShowAnswer1(!showAnswer1)}>
              {showAnswer1 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer1 && (
              <div className="answer">
                <p>
                  Ohm's law states that the current flowing through a conductor is directly proportional 
                  to the potential difference across its ends, provided physical conditions remain constant.<br/><br/>
                  <strong>Mathematical expression:</strong> V = IR<br/>
                  Where V is the potential difference (volt), I is the current (ampere), 
                  and R is the resistance (ohm).
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 2</h4>
            <p>Two resistors of 4Ω and 6Ω are connected in series to a 12V battery. Calculate the total resistance and current.</p>
            <button className="show-answer" onClick={() => setShowAnswer2(!showAnswer2)}>
              {showAnswer2 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer2 && (
              <div className="answer">
                <p>
                  Given:<br/>
                  R₁ = 4Ω, R₂ = 6Ω, V = 12V<br/><br/>
                  For series connection:<br/>
                  Total resistance: R = R₁ + R₂ = 4 + 6 = 10Ω<br/>
                  Current: I = V/R = 12/10 = 1.2A<br/><br/>
                  Total resistance = 10Ω<br/>
                  Current = 1.2A
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 3</h4>
            <p>What is the difference between series and parallel circuits?</p>
            <button className="show-answer" onClick={() => setShowAnswer3(!showAnswer3)}>
              {showAnswer3 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer3 && (
              <div className="answer">
                <p>
                  <strong>Series Circuit:</strong><br/>
                  - Components connected end-to-end<br/>
                  - Same current flows through all components<br/>
                  - Total resistance is sum of individual resistances<br/>
                  - If one component fails, entire circuit breaks<br/><br/>
                  <strong>Parallel Circuit:</strong><br/>
                  - Components connected across same two points<br/>
                  - Same voltage across all components<br/>
                  - Total resistance is less than smallest individual resistance<br/>
                  - If one component fails, others continue to work
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentElectricity;