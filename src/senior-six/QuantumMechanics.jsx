import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './QuantumMechanics.css';

const QuantumMechanics = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);

  return (
    <div className="physics-topic">
      <div className="topic-header">
        <h1>Quantum Mechanics</h1>
        <p className="subtitle">Understanding the behavior of matter and energy at atomic and subatomic scales</p>
        <Link to="/senior-six" className="back-link">← Back to Senior Six</Link>
      </div>
      
      <div className="content-container">
        <div className="learning-objectives">
          <h2>Learning Objectives</h2>
          <ul>
            <li>Understand the wave-particle duality of matter and energy</li>
            <li>Learn about the Schrödinger equation and its applications</li>
            <li>Study quantum states and quantum numbers</li>
            <li>Understand the uncertainty principle and tunneling</li>
            <li>Learn about quantum entanglement and applications</li>
          </ul>
        </div>
        
        <div className="topic-content">
          <h2>Introduction to Quantum Mechanics</h2>
          <p>
            Quantum mechanics is the branch of physics that studies the behavior of matter and energy at the atomic and subatomic level. 
            It provides a mathematical framework for understanding phenomena that cannot be explained by classical physics.
          </p>
          
          <h3>Wave-Particle Duality</h3>
          <p>
            All matter and energy exhibit both wave-like and particle-like properties depending on the experimental conditions.
          </p>
          
          <div className="wave-particle-duality">
            <div className="duality-concept">
              <h4>De Broglie Hypothesis</h4>
              <p>All matter has wave-like properties</p>
              <p><strong>De Broglie wavelength:</strong> λ = h/p = h/mv</p>
              <p>Where h = Planck's constant, p = momentum, m = mass, v = velocity</p>
            </div>
            <div className="experimental-evidence">
              <h4>Experimental Evidence</h4>
              <ul>
                <li><strong>Wave nature:</strong> Electron diffraction, interference patterns</li>
                <li><strong>Particle nature:</strong> Photoelectric effect, Compton scattering</li>
              </ul>
            </div>
          </div>
          
          <h3>Schrödinger Equation</h3>
          <p>
            The Schrödinger equation is the fundamental equation of quantum mechanics that describes how the quantum state of a physical system changes with time.
          </p>
          
          <div className="schrodinger-equation">
            <div className="time-dependent">
              <h4>Time-Dependent Schrödinger Equation</h4>
              <p>iℏ ∂Ψ/∂t = ĤΨ</p>
              <p>Where Ψ = wave function, Ĥ = Hamiltonian operator, ℏ = reduced Planck's constant</p>
            </div>
            <div className="time-independent">
              <h4>Time-Independent Schrödinger Equation</h4>
              <p>ĤΨ = EΨ</p>
              <p>Used for stationary states with definite energy E</p>
            </div>
          </div>
          
          <h3>Wave Function and Probability</h3>
          <p>
            The wave function Ψ contains all the information about a quantum system. 
            The square of its absolute value gives the probability density.
          </p>
          
          <div className="wave-function">
            <div className="probability-concept">
              <h4>Probability Interpretation</h4>
              <p>|Ψ(x,t)|² = probability density</p>
              <p>∫|Ψ(x,t)|² dx = 1 (Normalization condition)</p>
              <p>Probability of finding particle between x₁ and x₂: ∫ₓ₁ˣ² |Ψ(x,t)|² dx</p>
            </div>
            <div className="properties">
              <h4>Properties of Wave Function</h4>
              <ul>
                <li>Must be continuous and single-valued</li>
                <li>Must be normalizable</li>
                <li>First derivative must be continuous (except at infinite potential steps)</li>
              </ul>
            </div>
          </div>
          
          <h3>Quantum States and Quantum Numbers</h3>
          <p>
            Quantum states are described by quantum numbers that specify the properties of electrons in atoms.
          </p>
          
          <div className="quantum-states">
            <div className="quantum-numbers">
              <h4>Principal Quantum Number (n)</h4>
              <p>Determines the energy level and size of the orbital</p>
              <p>Values: n = 1, 2, 3, ...</p>
            </div>
            <div className="angular-momentum">
              <h4>Angular Momentum Quantum Number (l)</h4>
              <p>Determines the shape of the orbital</p>
              <p>Values: l = 0, 1, 2, ..., (n-1)</p>
              <p>l = 0 (s), 1 (p), 2 (d), 3 (f)</p>
            </div>
            <div className="magnetic-number">
              <h4>Magnetic Quantum Number (mₗ)</h4>
              <p>Determines the orientation of the orbital</p>
              <p>Values: mₗ = -l, ..., -1, 0, 1, ..., l</p>
            </div>
            <div className="spin-number">
              <h4>Spin Quantum Number (mₛ)</h4>
              <p>Determines the spin orientation of the electron</p>
              <p>Values: mₛ = +½, -½</p>
            </div>
          </div>
          
          <h3>Heisenberg Uncertainty Principle</h3>
          <p>
            The uncertainty principle states that certain pairs of physical properties cannot be simultaneously measured with perfect precision.
          </p>
          
          <div className="uncertainty-principle">
            <div className="position-momentum">
              <h4>Position-Momentum Uncertainty</h4>
              <p>Δx·Δp ≥ ℏ/2</p>
              <p>The more precisely position is known, the less precisely momentum can be known</p>
            </div>
            <div className="energy-time">
              <h4>Energy-Time Uncertainty</h4>
              <p>ΔE·Δt ≥ ℏ/2</p>
              <p>Allows for temporary violations of energy conservation</p>
            </div>
          </div>
          
          <h3>Quantum Tunneling</h3>
          <p>
            Quantum tunneling is a quantum mechanical phenomenon where particles can pass through potential barriers that they classically shouldn't be able to surmount.
          </p>
          
          <div className="tunneling">
            <div className="tunneling-concept">
              <h4>Concept</h4>
              <p>Wave function can penetrate into classically forbidden regions</p>
              <p>Transmission probability: T ≈ e^(-2κd)</p>
              <p>Where κ = √(2m(V₀-E))/ℏ, d = barrier width</p>
            </div>
            <div className="applications">
              <h4>Applications</h4>
              <ul>
                <li>Scanning Tunneling Microscope (STM)</li>
                <li>Nuclear fusion in stars</li>
                <li>Alpha decay</li>
                <li>Tunnel diodes</li>
              </ul>
            </div>
          </div>
          
          <h3>Quantum Entanglement</h3>
          <p>
            Quantum entanglement is a phenomenon where two or more particles become correlated in such a way that the quantum state of each particle cannot be described independently.
          </p>
          
          <div className="entanglement">
            <div className="entanglement-concept">
              <h4>Concept</h4>
              <p>Measurement of one particle instantly affects the state of its entangled partner</p>
              <p>Einstein called it "spooky action at a distance"</p>
              <p>Violates Bell's inequalities</p>
            </div>
            <div className="applications">
              <h4>Applications</h4>
              <ul>
                <li>Quantum computing</li>
                <li>Quantum cryptography</li>
                <li>Quantum teleportation</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="practice-section">
          <h2>Practice Questions</h2>
          <div className="question">
            <h4>Question 1</h4>
            <p>Calculate the de Broglie wavelength of an electron moving with a speed of 10⁶ m/s.</p>
            <button className="show-answer" onClick={() => setShowAnswer1(!showAnswer1)}>
              {showAnswer1 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer1 && (
              <div className="answer">
                <p>
                  Given:<br/>
                  v = 10⁶ m/s<br/>
                  m (electron) = 9.1 × 10⁻³¹ kg<br/>
                  h = 6.63 × 10⁻³⁴ Js<br/><br/>
                  Using de Broglie equation: λ = h/mv<br/>
                  λ = (6.63 × 10⁻³⁴) / (9.1 × 10⁻³¹ × 10⁶)<br/>
                  λ = (6.63 × 10⁻³⁴) / (9.1 × 10⁻²⁵)<br/>
                  λ = 0.729 × 10⁻⁹ m<br/>
                  λ = 0.729 nm<br/><br/>
                  The de Broglie wavelength of the electron is 0.729 nanometers.
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 2</h4>
            <p>State the Heisenberg uncertainty principle and explain its significance.</p>
            <button className="show-answer" onClick={() => setShowAnswer2(!showAnswer2)}>
              {showAnswer2 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer2 && (
              <div className="answer">
                <p>
                  <strong>Heisenberg Uncertainty Principle:</strong><br/>
                  It is impossible to simultaneously know both the exact position and exact momentum of a particle with perfect precision.<br/><br/>
                  <strong>Mathematical Expression:</strong><br/>
                  Δx·Δp ≥ ℏ/2<br/>
                  Where Δx = uncertainty in position, Δp = uncertainty in momentum, ℏ = reduced Planck's constant<br/><br/>
                  <strong>Significance:</strong><br/>
                  1. Fundamental limit to measurement precision in quantum mechanics<br/>
                  2. Shows that classical concepts of definite trajectories do not apply at quantum scales<br/>
                  3. Explains the stability of atoms (electrons cannot spiral into nucleus)<br/>
                  4. Basis for quantum tunneling and other quantum phenomena
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 3</h4>
            <p>What are the four quantum numbers? Briefly explain each one.</p>
            <button className="show-answer" onClick={() => setShowAnswer3(!showAnswer3)}>
              {showAnswer3 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer3 && (
              <div className="answer">
                <p>
                  <strong>Four Quantum Numbers:</strong><br/><br/>
                  1. <strong>Principal Quantum Number (n):</strong><br/>
                  - Determines the energy level and size of the orbital<br/>
                  - Values: n = 1, 2, 3, ...<br/><br/>
                  2. <strong>Angular Momentum Quantum Number (l):</strong><br/>
                  - Determines the shape of the orbital<br/>
                  - Values: l = 0, 1, 2, ..., (n-1)<br/>
                  - l = 0 (s), 1 (p), 2 (d), 3 (f)<br/><br/>
                  3. <strong>Magnetic Quantum Number (mₗ):</strong><br/>
                  - Determines the orientation of the orbital in space<br/>
                  - Values: mₗ = -l, ..., -1, 0, 1, ..., l<br/><br/>
                  4. <strong>Spin Quantum Number (mₛ):</strong><br/>
                  - Determines the spin orientation of the electron<br/>
                  - Values: mₛ = +½, -½
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumMechanics;