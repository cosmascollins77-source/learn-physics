import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Optics.css';

const Optics = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);

  return (
    <div className="physics-topic">
      <div className="topic-header">
        <h1>Optics</h1>
        <p className="subtitle">Understanding the behavior and properties of light</p>
        <Link to="/senior-four" className="back-link">← Back to Senior Four</Link>
      </div>
      
      <div className="content-container">
        <div className="learning-objectives">
          <h2>Learning Objectives</h2>
          <ul>
            <li>Understand the nature and properties of light</li>
            <li>Learn about reflection and refraction of light</li>
            <li>Study lenses and their applications</li>
            <li>Understand optical instruments</li>
            <li>Learn about wave and particle nature of light</li>
          </ul>
        </div>
        
        <div className="topic-content">
          <h2>Introduction to Optics</h2>
          <p>
            Optics is the branch of physics that studies the behavior and properties of light, 
            including its interactions with matter and the construction of instruments that use or detect it.
          </p>
          
          <h3>Nature of Light</h3>
          <p>
            Light exhibits both wave and particle properties, known as wave-particle duality.
          </p>
          
          <div className="light-nature">
            <div className="wave-nature">
              <h4>Wave Nature</h4>
              <ul>
                <li>Light travels as electromagnetic waves</li>
                <li>Exhibits interference and diffraction</li>
                <li>Has wavelength and frequency</li>
                <li>Speed in vacuum: c = 3 × 10⁸ m/s</li>
              </ul>
            </div>
            <div className="particle-nature">
              <h4>Particle Nature</h4>
              <ul>
                <li>Light consists of photons (packets of energy)</li>
                <li>Explains photoelectric effect</li>
                <li>Energy of photon: E = hf</li>
                <li>Momentum of photon: p = h/λ</li>
              </ul>
            </div>
          </div>
          
          <h3>Reflection of Light</h3>
          <p>
            Reflection is the bouncing back of light when it strikes a surface.
          </p>
          
          <div className="reflection">
            <div className="laws-reflection">
              <h4>Laws of Reflection</h4>
              <ul>
                <li>The incident ray, reflected ray, and normal all lie in the same plane</li>
                <li>The angle of incidence equals the angle of reflection (i = r)</li>
              </ul>
            </div>
            <div className="reflection-types">
              <h4>Types of Reflection</h4>
              <ul>
                <li><strong>Regular Reflection:</strong> Occurs from smooth surfaces</li>
                <li><strong>Diffuse Reflection:</strong> Occurs from rough surfaces</li>
              </ul>
            </div>
          </div>
          
          <h3>Refraction of Light</h3>
          <p>
            Refraction is the bending of light when it passes from one medium to another due to change in speed.
          </p>
          
          <div className="refraction">
            <div className="laws-refraction">
              <h4>Laws of Refraction</h4>
              <ul>
                <li>The incident ray, refracted ray, and normal all lie in the same plane</li>
                <li>Snell's Law: n₁sin(i) = n₂sin(r)</li>
              </ul>
            </div>
            <div className="refractive-index">
              <h4>Refractive Index</h4>
              <p><strong>Absolute Refractive Index:</strong> n = c/v</p>
              <p><strong>Relative Refractive Index:</strong> ⁱⁿ₂ = n₂/n₁ = v₁/v₂</p>
              <p>Where c = speed of light in vacuum, v = speed of light in medium</p>
            </div>
          </div>
          
          <h3>Lenses</h3>
          <p>
            A lens is a transparent material bounded by two spherical surfaces or one spherical and one plane surface.
          </p>
          
          <div className="lens-types">
            <div className="lens-type">
              <h4>Convex Lens (Converging)</h4>
              <ul>
                <li>Thicker at center, thinner at edges</li>
                <li>Converges parallel rays to a focal point</li>
                <li>Forms real and virtual images</li>
              </ul>
            </div>
            <div className="lens-type">
              <h4>Concave Lens (Diverging)</h4>
              <ul>
                <li>Thinner at center, thicker at edges</li>
                <li>Diverges parallel rays</li>
                <li>Forms only virtual images</li>
              </ul>
            </div>
          </div>
          
          <div className="lens-formula">
            <p><strong>Lens Formula:</strong> 1/f = 1/v - 1/u</p>
            <p><strong>Magnification:</strong> m = v/u = hᵢ/hₒ</p>
            <p><strong>Power of Lens:</strong> P = 1/f (in diopters)</p>
            <p>Where f = focal length, u = object distance, v = image distance</p>
          </div>
          
          <h3>Optical Instruments</h3>
          
          <div className="instruments">
            <div className="instrument">
              <h4>Simple Microscope</h4>
              <p>Single convex lens with short focal length</p>
              <p>Magnification: m = 1 + D/f (when image at near point)</p>
            </div>
            <div className="instrument">
              <h4>Compound Microscope</h4>
              <p>Two convex lenses: objective and eyepiece</p>
              <p>Total magnification: m = mₒ × mₑ</p>
            </div>
            <div className="instrument">
              <h4>Telescope</h4>
              <p>Two lenses: objective (large focal length) and eyepiece</p>
              <p>Magnification: m = fₒ/fₑ</p>
            </div>
          </div>
          
          <h3>Dispersion of Light</h3>
          <p>
            Dispersion is the splitting of white light into its constituent colors when passing through a prism.
          </p>
          
          <div className="dispersion">
            <div className="spectrum">
              <h4>Visible Spectrum</h4>
              <p>Colors in order: Violet, Indigo, Blue, Green, Yellow, Orange, Red (VIBGYOR)</p>
              <p>Violet has shortest wavelength and highest refractive index</p>
            </div>
            <div className="dispersion-cause">
              <h4>Cause of Dispersion</h4>
              <p>Different wavelengths have different refractive indices in the same medium</p>
              <p>This causes different colors to bend by different amounts</p>
            </div>
          </div>
          
          <h3>Applications of Optics</h3>
          
          <div className="applications-grid">
            <div className="application-card">
              <h4>Cameras</h4>
              <p>Use lenses to form real images on film or digital sensors</p>
            </div>
            <div className="application-card">
              <h4>Telescopes</h4>
              <p>Observe distant celestial objects</p>
            </div>
            <div className="application-card">
              <h4>Microscopes</h4>
              <p>Magnify small objects for detailed observation</p>
            </div>
            <div className="application-card">
              <h4>Fiber Optics</h4>
              <p>Transmit light signals over long distances</p>
            </div>
            <div className="application-card">
              <h4>Laser Technology</h4>
              <p>Coherent light for medical, industrial, and communication applications</p>
            </div>
            <div className="application-card">
              <h4>Corrective Lenses</h4>
              <p>Correct vision defects like myopia and hypermetropia</p>
            </div>
          </div>
        </div>
        
        <div className="practice-section">
          <h2>Practice Questions</h2>
          <div className="question">
            <h4>Question 1</h4>
            <p>State the laws of reflection of light.</p>
            <button className="show-answer" onClick={() => setShowAnswer1(!showAnswer1)}>
              {showAnswer1 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer1 && (
              <div className="answer">
                <p>
                  <strong>Laws of Reflection:</strong><br/><br/>
                  1. The incident ray, reflected ray, and normal to the reflecting surface at the point of incidence all lie in the same plane.<br/><br/>
                  2. The angle of incidence is equal to the angle of reflection (i = r).
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 2</h4>
            <p>A convex lens has a focal length of 10 cm. An object is placed 15 cm from the lens. Find the image distance and magnification.</p>
            <button className="show-answer" onClick={() => setShowAnswer2(!showAnswer2)}>
              {showAnswer2 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer2 && (
              <div className="answer">
                <p>
                  Given:<br/>
                  f = 10 cm, u = -15 cm (object distance is negative by sign convention)<br/><br/>
                  Using lens formula: 1/f = 1/v - 1/u<br/>
                  1/10 = 1/v - 1/(-15)<br/>
                  1/10 = 1/v + 1/15<br/>
                  1/v = 1/10 - 1/15 = (3-2)/30 = 1/30<br/>
                  v = 30 cm<br/><br/>
                  Magnification: m = v/u = 30/(-15) = -2<br/><br/>
                  The image is formed 30 cm from the lens on the opposite side (real image) and is magnified 2 times (inverted).
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 3</h4>
            <p>What is dispersion of light? Explain why white light splits into different colors when passing through a prism.</p>
            <button className="show-answer" onClick={() => setShowAnswer3(!showAnswer3)}>
              {showAnswer3 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer3 && (
              <div className="answer">
                <p>
                  Dispersion is the phenomenon of splitting white light into its constituent colors when passing through a refracting medium like a prism.<br/><br/>
                  <strong>Explanation:</strong><br/>
                  White light is composed of seven different colors (VIBGYOR). When white light enters a prism, each color has a different wavelength and therefore a different refractive index in the prism material. According to Snell's law, each color bends by a different amount, with violet bending the most and red bending the least. This causes the colors to separate and form a spectrum.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Optics;