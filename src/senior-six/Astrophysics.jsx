import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Astrophysics.css';

const Astrophysics = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);

  return (
    <div className="physics-topic">
      <div className="topic-header">
        <h1>Astrophysics</h1>
        <p className="subtitle">Understanding the physics of celestial objects and the universe</p>
        <Link to="/senior-six" className="back-link">← Back to Senior Six</Link>
      </div>
      
      <div className="content-container">
        <div className="learning-objectives">
          <h2>Learning Objectives</h2>
          <ul>
            <li>Understand the structure and evolution of stars</li>
            <li>Learn about galaxies and large-scale structure of the universe</li>
            <li>Study cosmology and the Big Bang theory</li>
            <li>Understand black holes and other extreme objects</li>
            <li>Learn about exoplanets and the search for life</li>
          </ul>
        </div>
        
        <div className="topic-content">
          <h2>Introduction to Astrophysics</h2>
          <p>
            Astrophysics is the branch of astronomy that applies the principles of physics and chemistry to understand the nature of celestial objects and phenomena. 
            It combines observations with theoretical models to explain how the universe works.
          </p>
          
          <h3>Stellar Structure and Evolution</h3>
          <p>
            Stars are massive, luminous spheres of plasma held together by gravity. They form from collapsing clouds of gas and dust and evolve through distinct phases.
          </p>
          
          <div className="stellar-evolution">
            <div className="star-formation">
              <h4>Star Formation</h4>
              <p>Stars form in molecular clouds when gravity overcomes thermal pressure</p>
              <p>Process: Molecular cloud → Protostar → Main sequence star</p>
              <p>Triggered by shock waves from nearby supernovae or collisions</p>
            </div>
            <div className="main-sequence">
              <h4>Main Sequence Phase</h4>
              <p>Stars spend most of their lives fusing hydrogen into helium</p>
              <p>Hydrostatic equilibrium between gravity and radiation pressure</p>
              <p>Mass determines luminosity, temperature, and lifetime</p>
            </div>
            <div className="stellar-end">
              <h4>End of Stellar Life</h4>
              <p>Low-mass stars (like Sun): Red giant → Planetary nebula → White dwarf</p>
              <p>High-mass stars: Red supergiant → Supernova → Neutron star or black hole</p>
            </div>
          </div>
          
          <h3>Stellar Classification</h3>
          <p>
            Stars are classified based on their spectral characteristics, which reveal their temperature, composition, and other properties.
          </p>
          
          <div className="stellar-classification">
            <div className="spectral-classes">
              <h4>Spectral Classes (OBAFGKM)</h4>
              <ul>
                <li><strong>O:</strong> Blue, &gt;30,000K, rare, massive</li>
                <li><strong>B:</strong> Blue-white, 10,000-30,000K, luminous</li>
                <li><strong>A:</strong> White, 7,500-10,000K, Sirius-like</li>
                <li><strong>F:</strong> Yellow-white, 6,000-7,500K, Procyon-like</li>
                <li><strong>G:</strong> Yellow, 5,200-6,000K, Sun-like</li>
                <li><strong>K:</strong> Orange, 3,700-5,200K, cooler</li>
                <li><strong>M:</strong> Red, &lt;3,700K, most common</li>
              </ul>
            </div>
            <div className="luminosity-classes">
              <h4>Luminosity Classes</h4>
              <ul>
                <li><strong>I:</strong> Supergiants (brightest)</li>
                <li><strong>II:</strong> Bright giants</li>
                <li><strong>III:</strong> Giants</li>
                <li><strong>IV:</strong> Subgiants</li>
                <li><strong>V:</strong> Main sequence (dwarfs)</li>
                <li><strong>VI:</strong> Subdwarfs</li>
                <li><strong>VII:</strong> White dwarfs</li>
              </ul>
            </div>
          </div>
          
          <h3>Galaxies</h3>
          <p>
            Galaxies are massive systems of stars, gas, dust, and dark matter bound together by gravity.
          </p>
          
          <div className="galaxies">
            <div className="galaxy-types">
              <h4>Types of Galaxies</h4>
              <ul>
                <li><strong>Spiral:</strong> Disk with spiral arms (Milky Way)</li>
                <li><strong>Elliptical:</strong> Ellipsoidal shape, older stars</li>
                <li><strong>Irregular:</strong> No defined shape, often star-forming</li>
                <li><strong>Lenticular:</strong> Between spiral and elliptical</li>
              </ul>
            </div>
            <div className="milky-way">
              <h4>The Milky Way Galaxy</h4>
              <p>Spiral galaxy with barred structure</p>
              <p>Contains 100-400 billion stars</p>
              <p>Diameter: ~100,000 light-years</p>
              <p>Sun is 26,000 light-years from center</p>
            </div>
          </div>
          
          <h3>Cosmology and the Big Bang</h3>
          <p>
            Cosmology is the study of the origin, evolution, and ultimate fate of the universe.
          </p>
          
          <div className="cosmology">
            <div className="big-bang">
              <h4>Big Bang Theory</h4>
              <p>Universe began ~13.8 billion years ago from extremely hot, dense state</p>
              <p>Evidence: Cosmic microwave background, Hubble's law, light element abundance</p>
              <p>Expansion continues today (Hubble's law: v = H₀d)</p>
            </div>
            <div className="cosmic-evolution">
              <h4>Evolution of the Universe</h4>
              <ol>
                <li>Planck epoch (0 to 10⁻⁴³ s)</li>
                <li>Inflationary epoch</li>
                <li>Formation of first particles</li>
                <li>Nucleosynthesis (first 20 minutes)</li>
                <li>Formation of first atoms (380,000 years)</li>
                <li>Formation of first stars and galaxies (200 million years)</li>
              </ol>
            </div>
          </div>
          
          <h3>Black Holes</h3>
          <p>
            Black holes are regions of spacetime where gravity is so strong that nothing, not even light, can escape.
          </p>
          
          <div className="black-holes">
            <div className="black-hole-types">
              <h4>Types of Black Holes</h4>
              <ul>
                <li><strong>Stellar-mass:</strong> 3-20 solar masses, formed from collapsed stars</li>
                <li><strong>Intermediate-mass:</strong> 100-100,000 solar masses</li>
                <li><strong>Supermassive:</strong> Millions to billions of solar masses, in galaxy centers</li>
                <li><strong>Primordial:</strong> Hypothetical, formed in early universe</li>
              </ul>
            </div>
            <div className="black-hole-structure">
              <h4>Structure</h4>
              <ul>
                <li><strong>Singularity:</strong> Point of infinite density at center</li>
                <li><strong>Event horizon:</strong> Boundary beyond which nothing can escape</li>
                <li><strong>Schwarzschild radius:</strong> Radius of event horizon</li>
                <li><strong>Accretion disk:</strong> Matter spiraling into black hole</li>
              </ul>
            </div>
          </div>
          
          <h3>Exoplanets and the Search for Life</h3>
          <p>
            Exoplanets are planets that orbit stars other than the Sun. Thousands have been discovered.
          </p>
          
          <div className="exoplanets">
            <div className="detection-methods">
              <h4>Detection Methods</h4>
              <ul>
                <li><strong>Transit method:</strong> Planet passes in front of star, dimming light</li>
                <li><strong>Radial velocity:</strong> Star wobbles due to planet's gravity</li>
                <li><strong>Direct imaging:</strong> Taking actual pictures of planets</li>
                <li><strong>Gravitational microlensing:</strong> Gravity bends light from background star</li>
              </ul>
            </div>
            <div className="habitable-zone">
              <h4>Habitable Zone</h4>
              <p>Region around star where liquid water could exist</p>
              <p>Also called "Goldilocks zone"</p>
              <p>Depends on star's luminosity and planet's atmosphere</p>
              <p>Earth is in Sun's habitable zone</p>
            </div>
          </div>
        </div>
        
        <div className="practice-section">
          <h2>Practice Questions</h2>
          <div className="question">
            <h4>Question 1</h4>
            <p>Describe the main stages in the life cycle of a star like our Sun.</p>
            <button className="show-answer" onClick={() => setShowAnswer1(!showAnswer1)}>
              {showAnswer1 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer1 && (
              <div className="answer">
                <p>
                  <strong>Life Cycle of a Sun-like Star:</strong><br/><br/>
                  1. <strong>Star Formation:</strong> Gravity collapses a molecular cloud to form a protostar<br/><br/>
                  2. <strong>Main Sequence:</strong> Hydrogen fuses to helium in core (~10 billion years for Sun)<br/><br/>
                  3. <strong>Red Giant:</strong> Core contracts, outer layers expand and cool<br/><br/>
                  4. <strong>Helium Flash:</strong> Helium fusion begins in core<br/><br/>
                  5. <strong>Asymptotic Giant Branch:</strong> Double-shell burning occurs<br/><br/>
                  6. <strong>Planetary Nebula:</strong> Outer layers expelled into space<br/><br/>
                  7. <strong>White Dwarf:</strong> Hot, dense core remnant that slowly cools over billions of years
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 2</h4>
            <p>What evidence supports the Big Bang theory?</p>
            <button className="show-answer" onClick={() => setShowAnswer2(!showAnswer2)}>
              {showAnswer2 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer2 && (
              <div className="answer">
                <p>
                  <strong>Evidence for the Big Bang Theory:</strong><br/><br/>
                  1. <strong>Hubble's Law:</strong> Galaxies are moving away from us, with velocity proportional to distance<br/><br/>
                  2. <strong>Cosmic Microwave Background (CMB):</strong> Uniform radiation from early universe (~2.7K)<br/><br/>
                  3. <strong>Abundance of Light Elements:</strong> Predicted ratios of hydrogen, helium, and lithium match observations<br/><br/>
                  4. <strong>Large-Scale Structure:</strong> Distribution of galaxies matches predictions from Big Bang with inflation<br/><br/>
                  5. <strong>Age of Oldest Stars:</strong> Oldest stars are younger than universe's age from expansion
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 3</h4>
            <p>Explain how the transit method is used to detect exoplanets.</p>
            <button className="show-answer" onClick={() => setShowAnswer3(!showAnswer3)}>
              {showAnswer3 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer3 && (
              <div className="answer">
                <p>
                  <strong>Transit Method for Exoplanet Detection:</strong><br/><br/>
                  <strong>Principle:</strong> When a planet passes in front of its host star (transits), it blocks a small portion of the star's light, causing a temporary dip in brightness.<br/><br/>
                  <strong>How it works:</strong><br/>
                  1. Telescope continuously monitors brightness of thousands of stars<br/>
                  2. When planet transits, star's light decreases by small but detectable amount<br/>
                  3. Depth of dip reveals planet's size relative to star<br/>
                  4. Duration and frequency of dips reveal orbital period and distance<br/><br/>
                  <strong>Information obtained:</strong><br/>
                  - Planet's radius (size)<br/>
                  - Orbital period<br/>
                  - Orbital distance (using Kepler's laws)<br/>
                  - Orbital inclination<br/><br/>
                  <strong>Limitations:</strong><br/>
                  - Only works for planets with orbits aligned with our line of sight<br/>
                  - Smaller planets produce weaker signals<br/>
                  - Requires long observation periods for distant planets
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Astrophysics;