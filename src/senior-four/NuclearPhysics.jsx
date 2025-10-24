import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NuclearPhysics.css';

const NuclearPhysics = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);

  return (
    <div className="physics-topic">
      <div className="topic-header">
        <h1>Nuclear Physics</h1>
        <p className="subtitle">Understanding the structure and behavior of atomic nuclei</p>
        <Link to="/senior-four" className="back-link">← Back to Senior Four</Link>
      </div>
      
      <div className="content-container">
        <div className="learning-objectives">
          <h2>Learning Objectives</h2>
          <ul>
            <li>Understand the structure of the atomic nucleus</li>
            <li>Learn about radioactive decay and half-life</li>
            <li>Study nuclear reactions and binding energy</li>
            <li>Understand nuclear fission and fusion</li>
            <li>Learn about applications of nuclear physics</li>
          </ul>
        </div>
        
        <div className="topic-content">
          <h2>Introduction to Nuclear Physics</h2>
          <p>
            Nuclear physics is the field of physics that studies the constituents and interactions of atomic nuclei. 
            It explores the forces that hold nuclei together and the processes that change one nucleus into another.
          </p>
          
          <h3>Structure of the Nucleus</h3>
          <p>
            The nucleus is the dense central core of an atom, containing protons and neutrons.
          </p>
          
          <div className="nucleus-structure">
            <div className="nucleus-components">
              <h4>Nucleons</h4>
              <ul>
                <li><strong>Protons:</strong> Positively charged particles (charge = +e)</li>
                <li><strong>Neutrons:</strong> Neutral particles (charge = 0)</li>
                <li>Both have approximately the same mass (1.67 × 10⁻²⁷ kg)</li>
                <li>Collectively called nucleons</li>
              </ul>
            </div>
            <div className="nucleus-properties">
              <h4>Nucleus Properties</h4>
              <ul>
                <li>Diameter: ~10⁻¹⁵ m (1 femtometer)</li>
                <li>Density: ~2.3 × 10¹⁷ kg/m³</li>
                <li>Contains 99.9% of atom's mass</li>
                <li>Held together by strong nuclear force</li>
              </ul>
            </div>
          </div>
          
          <h3>Nuclear Notation</h3>
          <p>
            Nuclei are represented by the symbol: <sup>A</sup><sub>Z</sub>X
          </p>
          
          <div className="nuclear-notation">
            <p>Where:</p>
            <ul>
              <li><strong>X:</strong> Chemical symbol of the element</li>
              <li><strong>Z:</strong> Atomic number (number of protons)</li>
              <li><strong>A:</strong> Mass number (total number of nucleons)</li>
              <li><strong>N:</strong> Number of neutrons = A - Z</li>
            </ul>
            <p><strong>Example:</strong> <sup>14</sup><sub>7</sub>N represents nitrogen with 7 protons and 7 neutrons</p>
          </div>
          
          <h3>Radioactivity</h3>
          <p>
            Radioactivity is the spontaneous disintegration of unstable nuclei with the emission of radiation.
          </p>
          
          <div className="radioactive-decay">
            <div className="decay-types">
              <h4>Types of Radioactive Decay</h4>
              <ul>
                <li><strong>Alpha (α) decay:</strong> Emission of helium nucleus (⁴₂He)</li>
                <li><strong>Beta (β) decay:</strong> Emission of electron (β⁻) or positron (β⁺)</li>
                <li><strong>Gamma (γ) decay:</strong> Emission of high-energy photons</li>
              </ul>
            </div>
            <div className="decay-properties">
              <h4>Properties of Radiation</h4>
              <div className="radiation-types">
                <div className="radiation-type">
                  <h5>Alpha Particles</h5>
                  <p>High ionizing, low penetrating power</p>
                </div>
                <div className="radiation-type">
                  <h5>Beta Particles</h5>
                  <p>Moderate ionizing and penetrating power</p>
                </div>
                <div className="radiation-type">
                  <h5>Gamma Rays</h5>
                  <p>Low ionizing, high penetrating power</p>
                </div>
              </div>
            </div>
          </div>
          
          <h3>Half-Life</h3>
          <p>
            Half-life is the time taken for half of the radioactive nuclei in a sample to decay.
          </p>
          
          <div className="half-life">
            <p><strong>Mathematical Expression:</strong> N = N₀(½)^(t/T₁/₂)</p>
            <p>Where:</p>
            <ul>
              <li>N = number of undecayed nuclei at time t</li>
              <li>N₀ = initial number of nuclei</li>
              <li>T₁/₂ = half-life</li>
              <li>t = time elapsed</li>
            </ul>
            <p><strong>Activity:</strong> A = λN (where λ = decay constant)</p>
          </div>
          
          <h3>Nuclear Binding Energy</h3>
          <p>
            Binding energy is the energy required to separate a nucleus into its constituent nucleons.
          </p>
          
          <div className="binding-energy">
            <div className="mass-defect">
              <h4>Mass Defect</h4>
              <p>Δm = (Zmₚ + Nmₙ) - M</p>
              <p>Where mₚ = proton mass, mₙ = neutron mass, M = nuclear mass</p>
            </div>
            <div className="binding-equation">
              <h4>Binding Energy Equation</h4>
              <p>BE = Δm × 931.5 MeV/u</p>
              <p><strong>Binding Energy per Nucleon:</strong> BE/A</p>
            </div>
          </div>
          
          <h3>Nuclear Reactions</h3>
          
          <div className="nuclear-reactions">
            <div className="fission">
              <h4>Nuclear Fission</h4>
              <p>Splitting of a heavy nucleus into two or more lighter nuclei</p>
              <ul>
                <li>Example: ²³⁵₉₂U + ¹₀n → ¹⁴₁₅₆Ba + ⁹₂₃₆Kr + 3¹₀n + energy</li>
                <li>Chain reaction possible</li>
                <li>Used in nuclear reactors and weapons</li>
              </ul>
            </div>
            <div className="fusion">
              <h4>Nuclear Fusion</h4>
              <p>Combining of light nuclei to form a heavier nucleus</p>
              <ul>
                <li>Example: ²₁H + ³₁H → ⁴₂He + ¹₀n + energy</li>
                <li>Requires extremely high temperature and pressure</li>
                <li>Power source of stars including the Sun</li>
              </ul>
            </div>
          </div>
          
          <h3>Applications of Nuclear Physics</h3>
          
          <div className="applications-grid">
            <div className="application-card">
              <h4>Nuclear Power Generation</h4>
              <p>Electricity production through controlled fission reactions</p>
            </div>
            <div className="application-card">
              <h4>Medical Applications</h4>
              <p>Radiation therapy, diagnostic imaging, and radioisotope tracers</p>
            </div>
            <div className="application-card">
              <h4>Food Preservation</h4>
              <p>Irradiation to kill bacteria and extend shelf life</p>
            </div>
            <div className="application-card">
              <h4>Industrial Applications</h4>
              <p>Thickness gauges, material testing, and sterilization</p>
            </div>
            <div className="application-card">
              <h4>Archaeology</h4>
              <p>Carbon dating to determine age of organic materials</p>
            </div>
            <div className="application-card">
              <h4>Space Exploration</h4>
              <p>Radioisotope thermoelectric generators for spacecraft</p>
            </div>
          </div>
        </div>
        
        <div className="practice-section">
          <h2>Practice Questions</h2>
          <div className="question">
            <h4>Question 1</h4>
            <p>Explain the difference between nuclear fission and nuclear fusion.</p>
            <button className="show-answer" onClick={() => setShowAnswer1(!showAnswer1)}>
              {showAnswer1 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer1 && (
              <div className="answer">
                <p>
                  <strong>Nuclear Fission:</strong><br/>
                  - Splitting of a heavy nucleus into two or more lighter nuclei<br/>
                  - Releases energy due to mass defect<br/>
                  - Requires slow-moving neutrons to initiate<br/>
                  - Used in nuclear reactors and atomic bombs<br/>
                  - Produces radioactive waste<br/><br/>
                  <strong>Nuclear Fusion:</strong><br/>
                  - Combining of light nuclei to form a heavier nucleus<br/>
                  - Releases energy due to mass defect<br/>
                  - Requires extremely high temperature and pressure<br/>
                  - Powers the Sun and hydrogen bombs<br/>
                  - Produces less radioactive waste
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 2</h4>
            <p>A radioactive sample has a half-life of 10 days. If the initial activity is 800 Bq, what will be the activity after 30 days?</p>
            <button className="show-answer" onClick={() => setShowAnswer2(!showAnswer2)}>
              {showAnswer2 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer2 && (
              <div className="answer">
                <p>
                  Given:<br/>
                  T₁/₂ = 10 days<br/>
                  Initial activity (A₀) = 800 Bq<br/>
                  t = 30 days<br/><br/>
                  Number of half-lives: n = t/T₁/₂ = 30/10 = 3<br/><br/>
                  Using the formula: A = A₀(½)ⁿ<br/>
                  A = 800 × (½)³<br/>
                  A = 800 × (1/8)<br/>
                  A = 100 Bq<br/><br/>
                  The activity after 30 days will be 100 Bq.
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 3</h4>
            <p>What is meant by binding energy of a nucleus? Explain its significance.</p>
            <button className="show-answer" onClick={() => setShowAnswer3(!showAnswer3)}>
              {showAnswer3 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer3 && (
              <div className="answer">
                <p>
                  Binding energy is the energy required to separate a nucleus into its individual protons and neutrons.<br/><br/>
                  <strong>Significance:</strong><br/>
                  1. <strong>Stability Indicator:</strong> Higher binding energy per nucleon indicates greater nuclear stability<br/>
                  2. <strong>Energy Source:</strong> Energy released in nuclear reactions comes from changes in binding energy<br/>
                  3. <strong>Nuclear Chart:</strong> Binding energy per nucleon curve explains why fusion (light nuclei) and fission (heavy nuclei) release energy<br/>
                  4. <strong>Mass Defect:</strong> Related to Einstein's mass-energy equivalence (E = mc²)
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuclearPhysics;