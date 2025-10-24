import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './WaveMotion.css';

const WaveMotion = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);

  return (
    <div className="physics-topic">
      <div className="topic-header">
        <h1>Wave Motion</h1>
        <p className="subtitle">Understanding the behavior and properties of waves</p>
        <Link to="/senior-two" className="back-link">← Back to Senior Two</Link>
      </div>
      
      <div className="content-container">
        <div className="learning-objectives">
          <h2>Learning Objectives</h2>
          <ul>
            <li>Define waves and understand their formation</li>
            <li>Distinguish between transverse and longitudinal waves</li>
            <li>Understand wave properties: amplitude, wavelength, frequency, and period</li>
            <li>Learn about wave behavior: reflection, refraction, diffraction, and interference</li>
            <li>Study the electromagnetic spectrum</li>
          </ul>
        </div>
        
        <div className="topic-content">
          <h2>Introduction to Waves</h2>
          <p>
            A wave is a disturbance that transfers energy through matter or space without the transfer of matter itself. 
            Waves are produced by vibrating sources and can travel through various media or even through a vacuum.
          </p>
          
          <h3>Types of Waves</h3>
          
          <div className="wave-types">
            <div className="wave-type">
              <h4>Mechanical Waves</h4>
              <p>Waves that require a material medium for propagation.</p>
              <p><strong>Examples:</strong> Sound waves, water waves, seismic waves</p>
            </div>
            <div className="wave-type">
              <h4>Electromagnetic Waves</h4>
              <p>Waves that do not require a medium and can travel through a vacuum.</p>
              <p><strong>Examples:</strong> Light, radio waves, X-rays</p>
            </div>
          </div>
          
          <div className="wave-classification">
            <div className="classification">
              <h4>Transverse Waves</h4>
              <p>Particles of the medium vibrate perpendicular to the direction of wave propagation.</p>
              <p><strong>Examples:</strong> Water waves, light waves, waves on a string</p>
            </div>
            <div className="classification">
              <h4>Longitudinal Waves</h4>
              <p>Particles of the medium vibrate parallel to the direction of wave propagation.</p>
              <p><strong>Examples:</strong> Sound waves, compression waves in springs</p>
            </div>
          </div>
          
          <h3>Wave Properties</h3>
          
          <div className="properties-grid">
            <div className="property-card">
              <h4>Amplitude (A)</h4>
              <p>The maximum displacement of particles from their equilibrium position.</p>
              <p><strong>Unit:</strong> Meter (m)</p>
            </div>
            <div className="property-card">
              <h4>Wavelength (λ)</h4>
              <p>The distance between two successive points in phase on a wave.</p>
              <p><strong>Unit:</strong> Meter (m)</p>
            </div>
            <div className="property-card">
              <h4>Frequency (f)</h4>
              <p>The number of complete waves passing a point per second.</p>
              <p><strong>Unit:</strong> Hertz (Hz)</p>
            </div>
            <div className="property-card">
              <h4>Period (T)</h4>
              <p>The time taken for one complete wave to pass a point.</p>
              <p><strong>Unit:</strong> Second (s)</p>
              <p><strong>Relationship:</strong> T = 1/f</p>
            </div>
            <div className="property-card">
              <h4>Wave Speed (v)</h4>
              <p>The distance traveled by a wave per unit time.</p>
              <p><strong>Unit:</strong> m/s</p>
              <p><strong>Formula:</strong> v = fλ</p>
            </div>
          </div>
          
          <h3>Wave Behavior</h3>
          
          <div className="behavior-grid">
            <div className="behavior-card">
              <h4>Reflection</h4>
              <p>Bouncing back of waves when they encounter a barrier.</p>
              <p><strong>Law of Reflection:</strong> Angle of incidence = Angle of reflection</p>
            </div>
            <div className="behavior-card">
              <h4>Refraction</h4>
              <p>Bending of waves when they pass from one medium to another.</p>
              <p>Cause: Change in wave speed</p>
            </div>
            <div className="behavior-card">
              <h4>Diffraction</h4>
              <p>Spreading of waves around obstacles or through openings.</p>
              <p>More pronounced when the opening size is comparable to wavelength.</p>
            </div>
            <div className="behavior-card">
              <h4>Interference</h4>
              <p>Interaction of two or more waves to form a resultant wave.</p>
              <p><strong>Constructive:</strong> Waves add up (amplitude increases)</p>
              <p><strong>Destructive:</strong> Waves cancel out (amplitude decreases)</p>
            </div>
          </div>
          
          <h3>Electromagnetic Spectrum</h3>
          <p>
            The electromagnetic spectrum is the range of all types of electromagnetic radiation, 
            arranged in order of increasing frequency or decreasing wavelength.
          </p>
          
          <div className="spectrum-grid">
            <div className="spectrum-card">
              <h4>Radio Waves</h4>
              <p>Longest wavelength, lowest frequency. Used in communication.</p>
            </div>
            <div className="spectrum-card">
              <h4> Microwaves</h4>
              <p>Used in cooking and communication.</p>
            </div>
            <div className="spectrum-card">
              <h4>Infrared</h4>
              <p>Heat radiation. Used in remote controls and thermal imaging.</p>
            </div>
            <div className="spectrum-card">
              <h4>Visible Light</h4>
              <p>The only part of the spectrum visible to the human eye.</p>
            </div>
            <div className="spectrum-card">
              <h4>Ultraviolet</h4>
              <p>Causes sunburn and is used in sterilization.</p>
            </div>
            <div className="spectrum-card">
              <h4>X-rays</h4>
              <p>Used in medical imaging and security screening.</p>
            </div>
            <div className="spectrum-card">
              <h4>Gamma Rays</h4>
              <p>Highest frequency, most energetic. Used in cancer treatment.</p>
            </div>
          </div>
          
          <h3>Sound Waves</h3>
          <p>
            Sound waves are longitudinal mechanical waves that require a medium for propagation. 
            They cannot travel through a vacuum.
          </p>
          
          <div className="sound-properties">
            <div className="sound-property">
              <h4>Speed of Sound</h4>
              <p>Varies with medium and temperature:</p>
              <ul>
                <li>Air (20°C): 343 m/s</li>
                <li>Water: 1500 m/s</li>
                <li>Steel: 5000 m/s</li>
              </ul>
            </div>
            <div className="sound-property">
              <h4>Characteristics of Sound</h4>
              <ul>
                <li><strong>Loudness:</strong> Depends on amplitude</li>
                <li><strong>Pitch:</strong> Depends on frequency</li>
                <li><strong>Quality/Timbre:</strong> Depends on waveform</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="practice-section">
          <h2>Practice Questions</h2>
          <div className="question">
            <h4>Question 1</h4>
            <p>What is the difference between transverse and longitudinal waves? Give one example of each.</p>
            <button className="show-answer" onClick={() => setShowAnswer1(!showAnswer1)}>
              {showAnswer1 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer1 && (
              <div className="answer">
                <p>
                  <strong>Transverse waves:</strong> Particles of the medium vibrate perpendicular to the direction of wave propagation.<br/>
                  Example: Water waves, light waves<br/><br/>
                  <strong>Longitudinal waves:</strong> Particles of the medium vibrate parallel to the direction of wave propagation.<br/>
                  Example: Sound waves, compression waves in springs
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 2</h4>
            <p>A wave has a frequency of 50 Hz and a wavelength of 0.6 m. Calculate its speed.</p>
            <button className="show-answer" onClick={() => setShowAnswer2(!showAnswer2)}>
              {showAnswer2 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer2 && (
              <div className="answer">
                <p>
                  Given:<br/>
                  Frequency (f) = 50 Hz<br/>
                  Wavelength (λ) = 0.6 m<br/><br/>
                  Using the formula: v = fλ<br/>
                  v = 50 × 0.6 = 30 m/s<br/><br/>
                  The speed of the wave is 30 m/s.
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 3</h4>
            <p>Explain the difference between constructive and destructive interference.</p>
            <button className="show-answer" onClick={() => setShowAnswer3(!showAnswer3)}>
              {showAnswer3 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer3 && (
              <div className="answer">
                <p>
                  <strong>Constructive interference:</strong> Occurs when two waves meet in phase (crest meets crest or trough meets trough), 
                  resulting in a wave with increased amplitude.<br/><br/>
                  <strong>Destructive interference:</strong> Occurs when two waves meet out of phase (crest meets trough), 
                  resulting in a wave with decreased or zero amplitude.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaveMotion;