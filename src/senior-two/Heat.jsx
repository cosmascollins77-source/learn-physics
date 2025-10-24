import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Heat.css';

const Heat = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);

  return (
    <div className="physics-topic">
      <div className="topic-header">
        <h1>Heat</h1>
        <p className="subtitle">Understanding thermal energy and temperature</p>
        <Link to="/senior-two" className="back-link">← Back to Senior Two</Link>
      </div>
      
      <div className="content-container">
        <div className="learning-objectives">
          <h2>Learning Objectives</h2>
          <ul>
            <li>Understand the difference between heat and temperature</li>
            <li>Learn about temperature scales and measurement</li>
            <li>Study the effects of heat on matter</li>
            <li>Understand heat transfer mechanisms</li>
            <li>Learn about thermal expansion</li>
          </ul>
        </div>
        
        <div className="topic-content">
          <h2>Introduction to Heat</h2>
          <p>
            Heat is a form of energy that flows from a hotter object to a cooler object when they are in contact. 
            It is important to distinguish between heat and temperature:
          </p>
          
          <div className="concepts-grid">
            <div className="concept-card">
              <h4>Heat</h4>
              <p>Heat is a form of energy that flows due to temperature difference. It is measured in Joules (J).</p>
            </div>
            <div className="concept-card">
              <h4>Temperature</h4>
              <p>Temperature is a measure of the average kinetic energy of particles in a substance. It is measured in degrees Celsius (°C), Kelvin (K), or Fahrenheit (°F).</p>
            </div>
          </div>
          
          <h3>Temperature Scales</h3>
          <p>
            There are three main temperature scales used in physics:
          </p>
          
          <div className="scales-grid">
            <div className="scale-card">
              <h4>Celsius Scale (°C)</h4>
              <p>Water freezes at 0°C and boils at 100°C at standard atmospheric pressure.</p>
            </div>
            <div className="scale-card">
              <h4>Fahrenheit Scale (°F)</h4>
              <p>Water freezes at 32°F and boils at 212°F at standard atmospheric pressure.</p>
            </div>
            <div className="scale-card">
              <h4>Kelvin Scale (K)</h4>
              <p>The absolute temperature scale where 0 K is absolute zero. Water freezes at 273 K and boils at 373 K.</p>
            </div>
          </div>
          
          <h3>Conversion Between Temperature Scales</h3>
          <div className="conversion-formulas">
            <p><strong>Celsius to Fahrenheit:</strong> °F = (9/5 × °C) + 32</p>
            <p><strong>Fahrenheit to Celsius:</strong> °C = 5/9 × (°F - 32)</p>
            <p><strong>Celsius to Kelvin:</strong> K = °C + 273</p>
          </div>
          
          <h3>Effects of Heat on Matter</h3>
          <p>
            When heat is added to or removed from a substance, it can cause:
          </p>
          <ul>
            <li><strong>Rise or fall in temperature</strong> - Sensible heat</li>
            <li><strong>Change of state</strong> - Latent heat</li>
            <li><strong>Expansion or contraction</strong> - Thermal expansion</li>
          </ul>
          
          <h3>States of Matter</h3>
          <div className="states-grid">
            <div className="state-card">
              <h4>Solid</h4>
              <p>Definite shape and volume. Particles vibrate in fixed positions.</p>
            </div>
            <div className="state-card">
              <h4>Liquid</h4>
              <p>Definite volume but no definite shape. Particles can move past each other.</p>
            </div>
            <div className="state-card">
              <h4>Gas</h4>
              <p>No definite shape or volume. Particles move freely and rapidly.</p>
            </div>
          </div>
          
          <h3>Heat Transfer Mechanisms</h3>
          <div className="transfer-mechanisms">
            <div className="mechanism">
              <h4>Conduction</h4>
              <p>Transfer of heat through a material without the movement of the material itself. Occurs mainly in solids.</p>
              <p><strong>Example:</strong> Heating one end of a metal rod</p>
            </div>
            <div className="mechanism">
              <h4>Convection</h4>
              <p>Transfer of heat by the movement of heated particles. Occurs in fluids (liquids and gases).</p>
              <p><strong>Example:</strong> Boiling water in a pot</p>
            </div>
            <div className="mechanism">
              <h4>Radiation</h4>
              <p>Transfer of heat in the form of electromagnetic waves. Does not require a medium.</p>
              <p><strong>Example:</strong> Heat from the sun reaching Earth</p>
            </div>
          </div>
          
          <h3>Thermal Expansion</h3>
          <p>
            Most substances expand when heated and contract when cooled. This is due to the increased kinetic energy 
            of particles at higher temperatures, causing them to move further apart.
          </p>
          
          <div className="expansion-types">
            <div className="expansion-type">
              <h4>Linear Expansion</h4>
              <p>Expansion in length. Formula: ΔL = αL₀ΔT</p>
              <p>Where α = coefficient of linear expansion</p>
            </div>
            <div className="expansion-type">
              <h4>Area Expansion</h4>
              <p>Expansion in area. Formula: ΔA = 2αA₀ΔT</p>
            </div>
            <div className="expansion-type">
              <h4>Volume Expansion</h4>
              <p>Expansion in volume. Formula: ΔV = 3αV₀ΔT</p>
            </div>
          </div>
        </div>
        
        <div className="practice-section">
          <h2>Practice Questions</h2>
          <div className="question">
            <h4>Question 1</h4>
            <p>What is the difference between heat and temperature?</p>
            <button className="show-answer" onClick={() => setShowAnswer1(!showAnswer1)}>
              {showAnswer1 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer1 && (
              <div className="answer">
                <p>
                  Heat is a form of energy that flows due to temperature difference, measured in Joules (J).<br/><br/>
                  Temperature is a measure of the average kinetic energy of particles in a substance, measured in degrees Celsius (°C), Kelvin (K), or Fahrenheit (°F).
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 2</h4>
            <p>Convert 100°C to Kelvin and Fahrenheit.</p>
            <button className="show-answer" onClick={() => setShowAnswer2(!showAnswer2)}>
              {showAnswer2 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer2 && (
              <div className="answer">
                <p>
                  To convert 100°C to Kelvin:<br/>
                  K = °C + 273 = 100 + 273 = 373 K<br/><br/>
                  To convert 100°C to Fahrenheit:<br/>
                  °F = (9/5 × °C) + 32 = (9/5 × 100) + 32 = 180 + 32 = 212°F
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 3</h4>
            <p>Explain the three methods of heat transfer with examples.</p>
            <button className="show-answer" onClick={() => setShowAnswer3(!showAnswer3)}>
              {showAnswer3 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer3 && (
              <div className="answer">
                <p>
                  <strong>Conduction:</strong> Transfer of heat through a material without movement of the material. Example: Heating one end of a metal rod.<br/><br/>
                  <strong>Convection:</strong> Transfer of heat by movement of heated particles. Example: Boiling water in a pot.<br/><br/>
                  <strong>Radiation:</strong> Transfer of heat as electromagnetic waves without a medium. Example: Heat from the sun reaching Earth.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heat;