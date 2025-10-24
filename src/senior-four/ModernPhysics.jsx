import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ModernPhysics.css';

const ModernPhysics = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);

  return (
    <div className="physics-topic">
      <div className="topic-header">
        <h1>Modern Physics</h1>
        <p className="subtitle">Understanding quantum mechanics and relativity</p>
        <Link to="/senior-four" className="back-link">← Back to Senior Four</Link>
      </div>
      
      <div className="content-container">
        <div className="learning-objectives">
          <h2>Learning Objectives</h2>
          <ul>
            <li>Understand the photoelectric effect and its significance</li>
            <li>Learn about wave-particle duality</li>
            <li>Study the special theory of relativity</li>
            <li>Understand atomic structure and quantum mechanics</li>
            <li>Learn about lasers and their applications</li>
          </ul>
        </div>
        
        <div className="topic-content">
          <h2>Introduction to Modern Physics</h2>
          <p>
            Modern physics refers to the post-Newtonian developments in physics, primarily concerning relativity and quantum mechanics. 
            It provides a more accurate description of nature under extreme conditions.
          </p>
          
          <h3>Photoelectric Effect</h3>
          <p>
            The photoelectric effect is the emission of electrons from a metal surface when light of sufficient frequency falls on it.
          </p>
          
          <div className="photoelectric-effect">
            <div className="effect-observations">
              <h4>Key Observations</h4>
              <ul>
                <li>Photoelectric current is proportional to light intensity</li>
                <li>Maximum kinetic energy of photoelectrons depends on light frequency, not intensity</li>
                <li>There is a threshold frequency below which no photoelectrons are emitted</li>
                <li>Photoelectrons are emitted instantaneously, regardless of light intensity</li>
              </ul>
            </div>
            <div className="einstein-explanation">
              <h4>Einstein's Explanation</h4>
              <ul>
                <li>Light consists of photons (quanta of energy)</li>
                <li>Energy of photon: E = hf</li>
                <li>Photoelectric equation: hf = φ + ½mv²</li>
                <li>Where φ = work function of the metal</li>
              </ul>
            </div>
          </div>
          
          <h3>Wave-Particle Duality</h3>
          <p>
            All matter and energy exhibit both wave-like and particle-like properties depending on the experimental conditions.
          </p>
          
          <div className="duality">
            <div className="wave-particle">
              <h4>De Broglie Hypothesis</h4>
              <p>All matter has wave-like properties</p>
              <p><strong>De Broglie wavelength:</strong> λ = h/p = h/mv</p>
              <p>Where h = Planck's constant, p = momentum</p>
            </div>
            <div className="experimental-evidence">
              <h4>Experimental Evidence</h4>
              <ul>
                <li><strong>Wave nature:</strong> Interference and diffraction of electrons</li>
                <li><strong>Particle nature:</strong> Photoelectric effect, Compton effect</li>
              </ul>
            </div>
          </div>
          
          <h3>Special Theory of Relativity</h3>
          <p>
            Einstein's special theory of relativity deals with objects moving at constant speeds, particularly those approaching the speed of light.
          </p>
          
          <div className="relativity">
            <div className="postulates">
              <h4>Postulates</h4>
              <ul>
                <li>The laws of physics are the same in all inertial frames of reference</li>
                <li>The speed of light in vacuum is constant for all observers</li>
              </ul>
            </div>
            <div className="consequences">
              <h4>Consequences</h4>
              <ul>
                <li>Time dilation: Δt = Δt₀/√(1 - v²/c²)</li>
                <li>Length contraction: L = L₀√(1 - v²/c²)</li>
                <li>Mass-energy equivalence: E = mc²</li>
                <li>Relativistic mass: m = m₀/√(1 - v²/c²)</li>
              </ul>
            </div>
          </div>
          
          <h3>Atomic Structure</h3>
          <p>
            Modern atomic theory describes atoms in terms of quantum mechanics and electron probability distributions.
          </p>
          
          <div className="atomic-theory">
            <div className="bohr-model">
              <h4>Bohr's Model</h4>
              <ul>
                <li>Electrons orbit nucleus in discrete energy levels</li>
                <li>Electrons can jump between levels by absorbing/emitting photons</li>
                <li>Angular momentum is quantized: L = n(h/2π)</li>
              </ul>
            </div>
            <div className="quantum-model">
              <h4>Quantum Mechanical Model</h4>
              <ul>
                <li>Electrons exist in probability clouds (orbitals)</li>
                <li>Described by wave functions (ψ)</li>
                <li>Heisenberg uncertainty principle: Δx·Δp ≥ h/4π</li>
              </ul>
            </div>
          </div>
          
          <h3>Lasers</h3>
          <p>
            Laser (Light Amplification by Stimulated Emission of Radiation) produces coherent, monochromatic, and intense light beams.
          </p>
          
          <div className="laser-properties">
            <div className="laser-characteristics">
              <h4>Characteristics</h4>
              <ul>
                <li><strong>Coherent:</strong> All waves are in phase</li>
                <li><strong>Monochromatic:</strong> Single wavelength</li>
                <li><strong>Collimated:</strong> Parallel beam with low divergence</li>
                <li><strong>High intensity:</strong> Concentrated energy</li>
              </ul>
            </div>
            <div className="laser-principle">
              <h4>Working Principle</h4>
              <ul>
                <li><strong>Population inversion:</strong> More atoms in excited state than ground state</li>
                <li><strong>Stimulated emission:</strong> Photon triggers emission of identical photon</li>
                <li><strong>Optical resonator:</strong> Mirrors amplify light through multiple passes</li>
              </ul>
            </div>
          </div>
          
          <h3>Applications of Modern Physics</h3>
          
          <div className="applications-grid">
            <div className="application-card">
              <h4>Medical Imaging</h4>
              <p>X-rays, MRI, PET scans using quantum and nuclear principles</p>
            </div>
            <div className="application-card">
              <h4>Nuclear Power</h4>
              <p>Energy generation through nuclear fission and fusion</p>
            </div>
            <div className="application-card">
              <h4>Electronics</h4>
              <p>Semiconductors, transistors, and computer chips</p>
            </div>
            <div className="application-card">
              <h4>Telecommunications</h4>
              <p>Fiber optics and laser communication systems</p>
            </div>
            <div className="application-card">
              <h4>Space Technology</h4>
              <p>Satellites and GPS using relativistic corrections</p>
            </div>
            <div className="application-card">
              <h4>Quantum Computing</h4>
              <p>Next-generation computing using quantum principles</p>
            </div>
          </div>
        </div>
        
        <div className="practice-section">
          <h2>Practice Questions</h2>
          <div className="question">
            <h4>Question 1</h4>
            <p>Explain Einstein's photoelectric equation and its significance.</p>
            <button className="show-answer" onClick={() => setShowAnswer1(!showAnswer1)}>
              {showAnswer1 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer1 && (
              <div className="answer">
                <p>
                  Einstein's photoelectric equation is: hf = φ + ½mv²<br/><br/>
                  Where:<br/>
                  - hf = energy of incident photon<br/>
                  - φ = work function (minimum energy to remove electron)<br/>
                  - ½mv² = maximum kinetic energy of emitted photoelectron<br/><br/>
                  <strong>Significance:</strong><br/>
                  1. Confirmed the particle nature of light<br/>
                  2. Explained why kinetic energy depends on frequency, not intensity<br/>
                  3. Explained the existence of threshold frequency<br/>
                  4. Provided evidence for quantization of energy
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 2</h4>
            <p>Calculate the de Broglie wavelength of an electron moving with a speed of 10⁶ m/s.</p>
            <button className="show-answer" onClick={() => setShowAnswer2(!showAnswer2)}>
              {showAnswer2 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer2 && (
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
            <h4>Question 3</h4>
            <p>State the postulates of Einstein's special theory of relativity.</p>
            <button className="show-answer" onClick={() => setShowAnswer3(!showAnswer3)}>
              {showAnswer3 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer3 && (
              <div className="answer">
                <p>
                  <strong>Postulates of Special Theory of Relativity:</strong><br/><br/>
                  1. <strong>Principle of Relativity:</strong> The laws of physics are the same in all inertial frames of reference. 
                  No experiment can distinguish between a state of rest and uniform motion.<br/><br/>
                  2. <strong>Constancy of Speed of Light:</strong> The speed of light in vacuum is constant (c = 3 × 10⁸ m/s) 
                  and is independent of the motion of the source or observer.<br/><br/>
                  These postulates lead to consequences like time dilation, length contraction, and mass-energy equivalence.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernPhysics;