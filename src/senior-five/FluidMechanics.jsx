import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FluidMechanics.css';

const FluidMechanics = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);

  return (
    <div className="physics-topic">
      <div className="topic-header">
        <h1>Fluid Mechanics</h1>
        <p className="subtitle">Understanding the behavior of fluids at rest and in motion</p>
        <Link to="/senior-five" className="back-link">← Back to Senior Five</Link>
      </div>
      
      <div className="content-container">
        <div className="learning-objectives">
          <h2>Learning Objectives</h2>
          <ul>
            <li>Understand the properties of fluids and fluid statics</li>
            <li>Learn about pressure and Pascal's principle</li>
            <li>Study Archimedes' principle and buoyancy</li>
            <li>Understand fluid dynamics and Bernoulli's principle</li>
            <li>Learn about viscosity and Stokes' law</li>
          </ul>
        </div>
        
        <div className="topic-content">
          <h2>Introduction to Fluid Mechanics</h2>
          <p>
            Fluid mechanics is the branch of physics that studies the behavior of fluids (liquids and gases) at rest and in motion. 
            It has applications in engineering, meteorology, oceanography, and biological systems.
          </p>
          
          <h3>Properties of Fluids</h3>
          <p>
            Fluids are substances that can flow and take the shape of their container. They include liquids and gases.
          </p>
          
          <div className="fluid-properties">
            <div className="property">
              <h4>Density (ρ)</h4>
              <p>Mass per unit volume of a substance</p>
              <p><strong>Formula:</strong> ρ = m/V</p>
              <p><strong>Unit:</strong> kg/m³</p>
            </div>
            <div className="property">
              <h4>Pressure (P)</h4>
              <p>Force per unit area exerted by a fluid</p>
              <p><strong>Formula:</strong> P = F/A</p>
              <p><strong>Unit:</strong> Pascal (Pa) or N/m²</p>
            </div>
            <div className="property">
              <h4>Specific Gravity</h4>
              <p>Ratio of density of substance to density of water</p>
              <p><strong>Formula:</strong> SG = ρ<sub>substance</sub>/ρ<sub>water</sub></p>
              <p>Dimensionless quantity</p>
            </div>
          </div>
          
          <h3>Fluid Statics</h3>
          <p>
            Fluid statics deals with fluids at rest and the forces acting on them.
          </p>
          
          <div className="fluid-statics">
            <div className="pressure-variation">
              <h4>Pressure Variation with Depth</h4>
              <p><strong>Formula:</strong> P = P₀ + ρgh</p>
              <p>Where P₀ = atmospheric pressure, h = depth below surface</p>
              <p>Pressure increases linearly with depth</p>
            </div>
            <div className="pascals-principle">
              <h4>Pascal's Principle</h4>
              <p>Pressure applied to an enclosed fluid is transmitted undiminished to every portion of the fluid and walls of the container</p>
              <p><strong>Application:</strong> Hydraulic lifts, brakes</p>
              <p><strong>Formula:</strong> F₁/A₁ = F₂/A₂</p>
            </div>
          </div>
          
          <h3>Buoyancy and Archimedes' Principle</h3>
          <p>
            When an object is partially or fully immersed in a fluid, it experiences an upward force called buoyant force.
          </p>
          
          <div className="buoyancy">
            <div className="archimedes-principle">
              <h4>Archimedes' Principle</h4>
              <p>When a body is wholly or partially immersed in a fluid, it experiences an upward thrust equal to the weight of fluid displaced</p>
              <p><strong>Buoyant Force:</strong> F<sub>B</sub> = ρ<sub>fluid</sub>V<sub>displaced</sub>g</p>
            </div>
            <div className="floating-conditions">
              <h4>Conditions for Floating</h4>
              <ul>
                <li><strong>Floating:</strong> Weight = Buoyant force, ρ<sub>body</sub> {'<'} ρ<sub>fluid</sub></li>
                <li><strong>Sinking:</strong> Weight {'>'} Buoyant force, ρ<sub>body</sub> {'>'} ρ<sub>fluid</sub></li>
                <li><strong>Neutral equilibrium:</strong> Weight = Buoyant force, ρ<sub>body</sub> = ρ<sub>fluid</sub></li>
              </ul>
            </div>
          </div>
          
          <h3>Fluid Dynamics</h3>
          <p>
            Fluid dynamics deals with fluids in motion and the forces acting on them.
          </p>
          
          <div className="fluid-dynamics">
            <div className="flow-types">
              <h4>Types of Flow</h4>
              <ul>
                <li><strong>Steady/Streamline Flow:</strong> Velocity at a point remains constant with time</li>
                <li><strong>Turbulent Flow:</strong> Irregular flow with eddies and whirlpools</li>
                <li><strong>Viscous Flow:</strong> Flow with internal friction</li>
                <li><strong>Non-viscous Flow:</strong> Flow with no internal friction</li>
              </ul>
            </div>
            <div className="equation-continuity">
              <h4>Equation of Continuity</h4>
              <p>For incompressible fluids: A₁v₁ = A₂v₂ = constant</p>
              <p>Where A = cross-sectional area, v = velocity</p>
              <p>Mass flow rate remains constant</p>
            </div>
          </div>
          
          <h3>Bernoulli's Principle</h3>
          <p>
            Bernoulli's principle states that in a steady flow of an incompressible, non-viscous fluid, 
            the sum of pressure energy, kinetic energy, and potential energy per unit volume remains constant.
          </p>
          
          <div className="bernoulli">
            <p><strong>Bernoulli's Equation:</strong> P + ½ρv² + ρgh = constant</p>
            <p>Where P = pressure, ρ = density, v = velocity, h = height</p>
            <p><strong>Applications:</strong></p>
            <ul>
              <li>Venturimeter</li>
              <li>Airfoil lift</li>
              <li>Atomizers and sprayers</li>
              <li>Blood flow in arteries</li>
            </ul>
          </div>
          
          <h3>Viscosity</h3>
          <p>
            Viscosity is the internal friction in a fluid that opposes the relative motion between its layers.
          </p>
          
          <div className="viscosity">
            <div className="viscous-force">
              <h4>Viscous Force</h4>
              <p><strong>Formula:</strong> F = ηA(dv/dx)</p>
              <p>Where η = coefficient of viscosity</p>
              <p>Unit: Pa·s or N·s/m²</p>
            </div>
            <div className="stokes-law">
              <h4>Stokes' Law</h4>
              <p>Viscous drag on a spherical body moving through a fluid:</p>
              <p><strong>Formula:</strong> F = 6πηrv</p>
              <p>Where r = radius of sphere, v = velocity</p>
              <p>Terminal velocity: v<sub>t</sub> = (2r²(ρ - σ)g)/(9η)</p>
            </div>
          </div>
          
          <h3>Surface Tension</h3>
          <p>
            Surface tension is the property of a liquid surface that allows it to resist external forces.
          </p>
          
          <div className="surface-tension">
            <div className="surface-definition">
              <h4>Definition</h4>
              <p>Surface tension (T) = Force/Length = Energy/Area</p>
              <p>Unit: N/m</p>
              <p>Caused by cohesive forces between liquid molecules</p>
            </div>
            <div className="surface-phenomena">
              <h4>Phenomena Due to Surface Tension</h4>
              <ul>
                <li>Formation of droplets and bubbles</li>
                <li>Capillary action</li>
                <li>Insects walking on water</li>
                <li>Rise of sap in trees</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="practice-section">
          <h2>Practice Questions</h2>
          <div className="question">
            <h4>Question 1</h4>
            <p>State Pascal's principle and give two applications of it.</p>
            <button className="show-answer" onClick={() => setShowAnswer1(!showAnswer1)}>
              {showAnswer1 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer1 && (
              <div className="answer">
                <p>
                  <strong>Pascal's Principle:</strong><br/>
                  Pressure applied to an enclosed fluid is transmitted undiminished to every portion of the fluid and the walls of the container.<br/><br/>
                  <strong>Applications:</strong><br/>
                  1. <strong>Hydraulic Lift:</strong> Used to lift heavy objects by applying a small force on a small piston to create a large force on a large piston<br/>
                  2. <strong>Hydraulic Brakes:</strong> Used in vehicles to transmit force from brake pedal to brake shoes<br/>
                  3. <strong>Hydraulic Press:</strong> Used to compress materials<br/>
                  4. <strong>Hydraulic Jacks:</strong> Used to lift vehicles
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 2</h4>
            <p>A block of wood floats in water with 2/5th of its volume above the surface. Calculate the density of wood. (Density of water = 1000 kg/m³)</p>
            <button className="show-answer" onClick={() => setShowAnswer2(!showAnswer2)}>
              {showAnswer2 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer2 && (
              <div className="answer">
                <p>
                  Given:<br/>
                  Volume above water = (2/5)V<br/>
                  Volume submerged = V - (2/5)V = (3/5)V<br/>
                  Density of water (ρ<sub>w</sub>) = 1000 kg/m³<br/><br/>
                  By law of floatation:<br/>
                  Weight of wood = Weight of water displaced<br/>
                  V × ρ<sub>wood</sub> × g = (3/5)V × ρ<sub>w</sub> × g<br/>
                  ρ<sub>wood</sub> = (3/5) × ρ<sub>w</sub><br/>
                  ρ<sub>wood</sub> = (3/5) × 1000<br/>
                  ρ<sub>wood</sub> = 600 kg/m³<br/><br/>
                  The density of wood is 600 kg/m³.
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 3</h4>
            <p>State Bernoulli's principle and derive its equation.</p>
            <button className="show-answer" onClick={() => setShowAnswer3(!showAnswer3)}>
              {showAnswer3 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer3 && (
              <div className="answer">
                <p>
                  <strong>Bernoulli's Principle:</strong><br/>
                  In a steady flow of an incompressible, non-viscous fluid, the sum of pressure energy, kinetic energy, and potential energy per unit volume remains constant along a streamline.<br/><br/>
                  <strong>Derivation:</strong><br/>
                  Consider a fluid flowing through a pipe with varying cross-section. Let the fluid move from point 1 to point 2 in time dt.<br/><br/>
                  Work done by pressure force at point 1: dW₁ = P₁A₁dx₁ = P₁dV<br/>
                  Work done against pressure force at point 2: dW₂ = P₂A₂dx₂ = P₂dV<br/>
                  Net work done: dW = (P₁ - P₂)dV<br/><br/>
                  Increase in kinetic energy: dK = ½dm(v₂² - v₁²) = ½ρdV(v₂² - v₁²)<br/>
                  Increase in potential energy: dU = dm g(h₂ - h₁) = ρdV g(h₂ - h₁)<br/><br/>
                  By work-energy theorem:<br/>
                  dW = dK + dU<br/>
                  (P₁ - P₂)dV = ½ρdV(v₂² - v₁²) + ρdV g(h₂ - h₁)<br/>
                  P₁ - P₂ = ½ρ(v₂² - v₁²) + ρg(h₂ - h₁)<br/>
                  P₁ + ½ρv₁² + ρgh₁ = P₂ + ½ρv₂² + ρgh₂<br/><br/>
                  Therefore: P + ½ρv² + ρgh = constant<br/><br/>
                  This is Bernoulli's equation.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FluidMechanics;