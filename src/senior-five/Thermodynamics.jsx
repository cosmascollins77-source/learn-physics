import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Thermodynamics.css';

const Thermodynamics = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);

  return (
    <div className="physics-topic">
      <div className="topic-header">
        <h1>Thermodynamics</h1>
        <p className="subtitle">Understanding heat and energy transformations</p>
        <Link to="/senior-five" className="back-link">← Back to Senior Five</Link>
      </div>
      
      <div className="content-container">
        <div className="learning-objectives">
          <h2>Learning Objectives</h2>
          <ul>
            <li>Understand the laws of thermodynamics</li>
            <li>Learn about thermal equilibrium and temperature</li>
            <li>Study heat engines and refrigerators</li>
            <li>Understand entropy and the second law of thermodynamics</li>
            <li>Learn about thermodynamic processes and cycles</li>
          </ul>
        </div>
        
        <div className="topic-content">
          <h2>Introduction to Thermodynamics</h2>
          <p>
            Thermodynamics is the branch of physics that deals with heat, work, temperature, and the statistical nature of energy and its transformations. 
            It governs the behavior of systems in thermal equilibrium and the direction of spontaneous processes.
          </p>
          
          <h3>Basic Concepts</h3>
          
          <div className="basic-concepts">
            <div className="concept">
              <h4>System and Surroundings</h4>
              <p><strong>System:</strong> The part of the universe under study</p>
              <p><strong>Surroundings:</strong> Everything outside the system</p>
              <p><strong>Boundary:</strong> Separates system from surroundings</p>
            </div>
            <div className="concept">
              <h4>Types of Systems</h4>
              <ul>
                <li><strong>Open System:</strong> Exchange of matter and energy with surroundings</li>
                <li><strong>Closed System:</strong> Exchange of energy but not matter</li>
                <li><strong>Isolated System:</strong> No exchange of matter or energy</li>
              </ul>
            </div>
            <div className="concept">
              <h4>Thermodynamic Equilibrium</h4>
              <p>State where macroscopic properties do not change with time</p>
              <p>Conditions:</p>
              <ul>
                <li>Mechanical equilibrium (no unbalanced forces)</li>
                <li>Thermal equilibrium (uniform temperature)</li>
                <li>Chemical equilibrium (no chemical reactions)</li>
              </ul>
            </div>
          </div>
          
          <h3>Zeroth Law of Thermodynamics</h3>
          <p>
            If two systems are each in thermal equilibrium with a third system, then they are in thermal equilibrium with each other.
          </p>
          
          <div className="zeroth-law">
            <div className="law-statement">
              <h4>Statement and Significance</h4>
              <p>This law provides the basis for temperature measurement</p>
              <p>Establishes the concept of temperature as a fundamental property</p>
            </div>
            <div className="temperature-scales">
              <h4>Temperature Scales</h4>
              <ul>
                <li><strong>Celsius:</strong> 0°C (ice point), 100°C (steam point)</li>
                <li><strong>Fahrenheit:</strong> 32°F (ice point), 212°F (steam point)</li>
                <li><strong>Kelvin:</strong> Absolute zero at 0 K, no negative values</li>
                <li><strong>Conversion:</strong> K = °C + 273.15</li>
              </ul>
            </div>
          </div>
          
          <h3>First Law of Thermodynamics</h3>
          <p>
            The first law of thermodynamics is a statement of the law of conservation of energy applied to thermodynamic systems.
          </p>
          
          <div className="first-law">
            <div className="law-statement">
              <h4>Statement</h4>
              <p>Energy cannot be created or destroyed, only transformed from one form to another</p>
              <p><strong>Mathematical Form:</strong> ΔU = Q - W</p>
              <p>Where ΔU = change in internal energy, Q = heat added, W = work done by system</p>
            </div>
            <div className="sign-convention">
              <h4>Sign Convention</h4>
              <ul>
                <li><strong>Q positive:</strong> Heat added to system</li>
                <li><strong>Q negative:</strong> Heat removed from system</li>
                <li><strong>W positive:</strong> Work done by system</li>
                <li><strong>W negative:</strong> Work done on system</li>
                <li><strong>ΔU positive:</strong> Increase in internal energy</li>
              </ul>
            </div>
          </div>
          
          <h3>Thermodynamic Processes</h3>
          
          <div className="thermodynamic-processes">
            <div className="process">
              <h4>Isothermal Process</h4>
              <p>Temperature remains constant (ΔT = 0)</p>
              <p>For ideal gas: PV = constant</p>
              <p>ΔU = 0, Q = W</p>
            </div>
            <div className="process">
              <h4>Adiabatic Process</h4>
              <p>No heat exchange (Q = 0)</p>
              <p>For ideal gas: PVᵞ = constant</p>
              <p>ΔU = -W</p>
            </div>
            <div className="process">
              <h4>Isobaric Process</h4>
              <p>Pressure remains constant</p>
              <p>W = P(V₂ - V₁)</p>
              <p>ΔU = Q - W</p>
            </div>
            <div className="process">
              <h4>Isochoric Process</h4>
              <p>Volume remains constant (W = 0)</p>
              <p>ΔU = Q</p>
              <p>All heat added increases internal energy</p>
            </div>
          </div>
          
          <h3>Heat Engines</h3>
          <p>
            A heat engine is a device that converts heat energy into mechanical work.
          </p>
          
          <div className="heat-engines">
            <div className="engine-components">
              <h4>Essential Components</h4>
              <ul>
                <li>Hot reservoir (high temperature source)</li>
                <li>Cold reservoir (low temperature sink)</li>
                <li>Working substance</li>
              </ul>
            </div>
            <div className="engine-efficiency">
              <h4>Efficiency</h4>
              <p><strong>Formula:</strong> η = W/Q₁ = (Q₁ - Q₂)/Q₁</p>
              <p>Where Q₁ = heat absorbed, Q₂ = heat rejected, W = work output</p>
              <p>0 {'<'} η {'<'} 1 (always less than 100%)</p>
            </div>
          </div>
          
          <h3>Second Law of Thermodynamics</h3>
          <p>
            The second law of thermodynamics indicates the direction of spontaneous processes and introduces the concept of entropy.
          </p>
          
          <div className="second-law">
            <div className="kelvin-statement">
              <h4>Kelvin-Planck Statement</h4>
              <p>It is impossible to construct a heat engine that operates in a cycle and produces no other effect than the absorption of heat from a single reservoir and the performance of an equivalent amount of work.</p>
              <p>No heat engine can have 100% efficiency.</p>
            </div>
            <div className="clausius-statement">
              <h4>Clausius Statement</h4>
              <p>It is impossible for heat to flow spontaneously from a colder body to a hotter body without external work being done.</p>
              <p>Refrigerators require work input to transfer heat from cold to hot reservoir.</p>
            </div>
          </div>
          
          <h3>Entropy</h3>
          <p>
            Entropy is a measure of the disorder or randomness of a system.
          </p>
          
          <div className="entropy">
            <div className="entropy-definition">
              <h4>Definition</h4>
              <p>For reversible process: ΔS = Q<sub>rev</sub>/T</p>
              <p>Unit: J/K</p>
              <p>For irreversible process: ΔS {'>'} Q/T</p>
            </div>
            <div className="entropy-principle">
              <h4>Principle of Entropy Increase</h4>
              <p>In any isolated system, entropy always increases or remains constant.</p>
              <p>ΔS ≥ 0 for isolated systems</p>
              <p>Provides direction for spontaneous processes</p>
            </div>
          </div>
          
          <h3>Carnot Engine</h3>
          <p>
            A Carnot engine is an idealized heat engine that operates between two temperatures with maximum possible efficiency.
          </p>
          
          <div className="carnot-engine">
            <div className="carnot-cycle">
              <h4>Carnot Cycle</h4>
              <ul>
                <li>Isothermal expansion (absorbs heat Q₁)</li>
                <li>Adiabatic expansion (temperature drops)</li>
                <li>Isothermal compression (rejects heat Q₂)</li>
                <li>Adiabatic compression (temperature rises)</li>
              </ul>
            </div>
            <div className="carnot-efficiency">
              <h4>Efficiency</h4>
              <p><strong>Formula:</strong> η = 1 - T₂/T₁</p>
              <p>Where T₁ = temperature of hot reservoir, T₂ = temperature of cold reservoir</p>
              <p>This is maximum possible efficiency for any heat engine operating between these temperatures.</p>
            </div>
          </div>
        </div>
        
        <div className="practice-section">
          <h2>Practice Questions</h2>
          <div className="question">
            <h4>Question 1</h4>
            <p>State the first law of thermodynamics and explain its significance.</p>
            <button className="show-answer" onClick={() => setShowAnswer1(!showAnswer1)}>
              {showAnswer1 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer1 && (
              <div className="answer">
                <p>
                  <strong>First Law of Thermodynamics:</strong><br/>
                  Energy cannot be created or destroyed, only transformed from one form to another. 
                  In the context of thermodynamic systems, it states that the change in internal energy of a system 
                  is equal to the heat added to the system minus the work done by the system.<br/><br/>
                  <strong>Mathematical Form:</strong> ΔU = Q - W<br/><br/>
                  <strong>Significance:</strong><br/>
                  1. Establishes the principle of conservation of energy for thermal systems<br/>
                  2. Relates heat, work, and internal energy changes<br/>
                  3. Forms the basis for understanding heat engines and refrigerators<br/>
                  4. Explains why perpetual motion machines of the first kind are impossible
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 2</h4>
            <p>A Carnot engine operates between temperatures 400 K and 300 K. Calculate its efficiency. If it absorbs 1000 J of heat from the hot reservoir, how much work does it perform?</p>
            <button className="show-answer" onClick={() => setShowAnswer2(!showAnswer2)}>
              {showAnswer2 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer2 && (
              <div className="answer">
                <p>
                  Given:<br/>
                  T₁ = 400 K, T₂ = 300 K, Q₁ = 1000 J<br/><br/>
                  <strong>Efficiency:</strong><br/>
                  η = 1 - T₂/T₁ = 1 - 300/400 = 1 - 0.75 = 0.25 or 25%<br/><br/>
                  <strong>Work performed:</strong><br/>
                  η = W/Q₁<br/>
                  W = η × Q₁ = 0.25 × 1000 = 250 J<br/><br/>
                  The efficiency of the Carnot engine is 25% and it performs 250 J of work.
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 3</h4>
            <p>Explain the difference between the Kelvin-Planck and Clausius statements of the second law of thermodynamics.</p>
            <button className="show-answer" onClick={() => setShowAnswer3(!showAnswer3)}>
              {showAnswer3 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer3 && (
              <div className="answer">
                <p>
                  <strong>Kelvin-Planck Statement:</strong><br/>
                  It is impossible to construct a heat engine that operates in a cycle and produces no other effect 
                  than the absorption of heat from a single reservoir and the performance of an equivalent amount of work.<br/><br/>
                  <strong>Clausius Statement:</strong><br/>
                  It is impossible for heat to flow spontaneously from a colder body to a hotter body without external work being done.<br/><br/>
                  <strong>Relationship:</strong><br/>
                  Both statements are equivalent and express the same fundamental principle - that certain processes are impossible. 
                  If one statement is violated, the other is also violated. They both establish that heat engines cannot have 100% 
                  efficiency and that refrigerators require work input to operate.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thermodynamics;