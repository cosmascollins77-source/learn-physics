import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Electrostatics.css';

const Electrostatics = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);

  return (
    <div className="physics-topic">
      <div className="topic-header">
        <h1>Electrostatics</h1>
        <p className="subtitle">Understanding electric charges at rest</p>
        <Link to="/senior-three" className="back-link">← Back to Senior Three</Link>
      </div>
      
      <div className="content-container">
        <div className="learning-objectives">
          <h2>Learning Objectives</h2>
          <ul>
            <li>Understand the nature of electric charges</li>
            <li>Learn Coulomb's law and electric field concepts</li>
            <li>Study electric potential and potential difference</li>
            <li>Understand capacitors and their applications</li>
            <li>Learn about lightning and electrostatic phenomena</li>
          </ul>
        </div>
        
        <div className="topic-content">
          <h2>Introduction to Electrostatics</h2>
          <p>
            Electrostatics is the branch of physics that deals with the phenomena and properties of stationary or slow-moving electric charges. 
            The term "electrostatics" comes from the Greek word "elektron" meaning amber and "statikos" meaning standing or stationary.
          </p>
          
          <h3>Electric Charge</h3>
          <p>
            Electric charge is a fundamental property of matter that causes it to experience a force when placed in an electric field. 
            There are two types of electric charges:
          </p>
          
          <div className="charge-types">
            <div className="charge-type">
              <h4>Positive Charge</h4>
              <p>Produced when an object loses electrons</p>
              <p><strong>Example:</strong> Glass rod rubbed with silk</p>
            </div>
            <div className="charge-type">
              <h4>Negative Charge</h4>
              <p>Produced when an object gains electrons</p>
              <p><strong>Example:</strong> Plastic rod rubbed with fur</p>
            </div>
          </div>
          
          <h3>Properties of Electric Charge</h3>
          <ul>
            <li><strong>Conservation of Charge:</strong> The total electric charge in an isolated system remains constant</li>
            <li><strong>Quantization of Charge:</strong> Electric charge exists in discrete packets (multiples of elementary charge e = 1.6 × 10⁻¹⁹ C)</li>
            <li><strong>Additive Property:</strong> Total charge of a system is the algebraic sum of all individual charges</li>
            <li><strong>Like charges repel, unlike charges attract</strong></li>
          </ul>
          
          <h3>Coulomb's Law</h3>
          <p>
            Coulomb's law states that the force between two point charges is directly proportional to the product of their charges 
            and inversely proportional to the square of the distance between them.
          </p>
          
          <div className="coulomb-law">
            <p><strong>Formula:</strong> F = k(q₁q₂)/r²</p>
            <p>Where:</p>
            <ul>
              <li>F = Force between charges (N)</li>
              <li>k = Coulomb's constant = 9 × 10⁹ N·m²/C²</li>
              <li>q₁, q₂ = Magnitudes of charges (C)</li>
              <li>r = Distance between charges (m)</li>
            </ul>
          </div>
          
          <h3>Electric Field</h3>
          <p>
            An electric field is a region around a charged particle where other charges experience a force. 
            The electric field at a point is defined as the force per unit positive charge placed at that point.
          </p>
          
          <div className="electric-field">
            <p><strong>Formula:</strong> E = F/q</p>
            <p>Where:</p>
            <ul>
              <li>E = Electric field strength (N/C or V/m)</li>
              <li>F = Force experienced by test charge (N)</li>
              <li>q = Test charge (C)</li>
            </ul>
            <p><strong>Electric field due to a point charge:</strong> E = kQ/r²</p>
          </div>
          
          <h3>Electric Field Lines</h3>
          <p>
            Electric field lines are imaginary lines used to visualize electric fields. They represent the direction of the electric field at any point.
          </p>
          
          <div className="field-lines">
            <div className="field-properties">
              <h4>Properties of Electric Field Lines</h4>
              <ul>
                <li>Start from positive charges and end at negative charges</li>
                <li>Do not intersect each other</li>
                <li>Do not form closed loops</li>
                <li>Are perpendicular to the surface of conductors</li>
                <li>Density represents field strength</li>
              </ul>
            </div>
            <div className="field-patterns">
              <h4>Common Field Patterns</h4>
              <ul>
                <li>Isolated positive charge: Radially outward</li>
                <li>Isolated negative charge: Radially inward</li>
                <li>Two like charges: Repel each other</li>
                <li>Two unlike charges: Attract each other</li>
              </ul>
            </div>
          </div>
          
          <h3>Electric Potential</h3>
          <p>
            Electric potential at a point is the work done per unit positive charge in bringing it from infinity to that point 
            against the electric field.
          </p>
          
          <div className="electric-potential">
            <p><strong>Formula:</strong> V = W/q</p>
            <p>Where:</p>
            <ul>
              <li>V = Electric potential (V or J/C)</li>
              <li>W = Work done (J)</li>
              <li>q = Charge (C)</li>
            </ul>
            <p><strong>Potential due to a point charge:</strong> V = kQ/r</p>
            <p><strong>Potential difference:</strong> V = V₂ - V₁</p>
          </div>
          
          <h3>Capacitors</h3>
          <p>
            A capacitor is a device that stores electrical energy in an electric field. It consists of two conductors separated by an insulator.
          </p>
          
          <div className="capacitors">
            <div className="capacitor-types">
              <h4>Types of Capacitors</h4>
              <ul>
                <li>Parallel plate capacitor</li>
                <li>Spherical capacitor</li>
                <li>Cylindrical capacitor</li>
              </ul>
            </div>
            <div className="capacitor-formula">
              <h4>Capacitance</h4>
              <p><strong>Formula:</strong> C = Q/V</p>
              <p>Where:</p>
              <ul>
                <li>C = Capacitance (F)</li>
                <li>Q = Charge stored (C)</li>
                <li>V = Potential difference (V)</li>
              </ul>
              <p><strong>Parallel plate capacitor:</strong> C = ε₀A/d</p>
            </div>
          </div>
          
          <h3>Applications of Electrostatics</h3>
          
          <div className="applications-grid">
            <div className="application-card">
              <h4>Lightning Rods</h4>
              <p>Protect buildings from lightning strikes by providing a path for electric discharge</p>
            </div>
            <div className="application-card">
              <h4>Photocopiers</h4>
              <p>Use electrostatic principles to transfer toner particles to paper</p>
            </div>
            <div className="application-card">
              <h4>Air Purifiers</h4>
              <p>Remove dust and pollutants using electrostatic precipitation</p>
            </div>
            <div className="application-card">
              <h4>Paint Spraying</h4>
              <p>Ensure even coating by electrostatically charging paint droplets</p>
            </div>
          </div>
        </div>
        
        <div className="practice-section">
          <h2>Practice Questions</h2>
          <div className="question">
            <h4>Question 1</h4>
            <p>State Coulomb's law and give its mathematical expression.</p>
            <button className="show-answer" onClick={() => setShowAnswer1(!showAnswer1)}>
              {showAnswer1 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer1 && (
              <div className="answer">
                <p>
                  Coulomb's law states that the force between two point charges is directly proportional to the product of their charges 
                  and inversely proportional to the square of the distance between them.<br/><br/>
                  <strong>Mathematical expression:</strong> F = k(q₁q₂)/r²<br/>
                  Where F is the force, q₁ and q₂ are the charges, r is the distance between them, 
                  and k is Coulomb's constant (9 × 10⁹ N·m²/C²).
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 2</h4>
            <p>Two charges of +2μC and -3μC are placed 0.1m apart. Calculate the force between them.</p>
            <button className="show-answer" onClick={() => setShowAnswer2(!showAnswer2)}>
              {showAnswer2 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer2 && (
              <div className="answer">
                <p>
                  Given:<br/>
                  q₁ = +2μC = +2 × 10⁻⁶ C<br/>
                  q₂ = -3μC = -3 × 10⁻⁶ C<br/>
                  r = 0.1 m<br/>
                  k = 9 × 10⁹ N·m²/C²<br/><br/>
                  Using Coulomb's law: F = k(q₁q₂)/r²<br/>
                  F = (9 × 10⁹) × (2 × 10⁻⁶) × (-3 × 10⁻⁶) / (0.1)²<br/>
                  F = (9 × 10⁹) × (-6 × 10⁻¹²) / 0.01<br/>
                  F = -54 × 10⁻³ / 0.01<br/>
                  F = -5.4 N<br/><br/>
                  The negative sign indicates attraction. The force is 5.4 N (attractive).
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 3</h4>
            <p>What is a capacitor? Give two applications of capacitors.</p>
            <button className="show-answer" onClick={() => setShowAnswer3(!showAnswer3)}>
              {showAnswer3 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer3 && (
              <div className="answer">
                <p>
                  A capacitor is a device that stores electrical energy in an electric field. It consists of two conductors 
                  separated by an insulator (dielectric).<br/><br/>
                  <strong>Applications:</strong><br/>
                  1. Energy storage in electronic circuits<br/>
                  2. Filtering in power supplies<br/>
                  3. Tuning in radio receivers<br/>
                  4. Flash photography<br/>
                  5. Motor starting circuits
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Electrostatics;