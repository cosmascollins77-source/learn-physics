import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Measurements.css';

const Measurements = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);

  return (
    <div className="physics-topic">
      <div className="topic-header">
        <h1>Measurements</h1>
        <p className="subtitle">Understanding units, dimensions, and measurement techniques</p>
        <Link to="/senior-one" className="back-link">← Back to Senior One</Link>
      </div>
      
      <div className="content-container">
        <div className="learning-objectives">
          <h2>Learning Objectives</h2>
          <ul>
            <li>Understand the importance of measurements in physics</li>
            <li>Identify fundamental and derived quantities</li>
            <li>Learn SI units and their symbols</li>
            <li>Understand measurement techniques and instruments</li>
            <li>Calculate and express measurement errors</li>
          </ul>
        </div>
        
        <div className="topic-content">
          <h2>Introduction to Measurements</h2>
          <p>
            Measurement is the process of determining the magnitude of a physical quantity by comparing it with a standard unit. 
            In physics, accurate measurements are essential for understanding natural phenomena and validating theories.
          </p>
          
          <h3>Physical Quantities</h3>
          <p>
            Physical quantities are properties of matter or energy that can be measured. They are classified into two categories:
          </p>
          
          <div className="quantity-types">
            <div className="quantity-type">
              <h4>Fundamental Quantities</h4>
              <p>Basic quantities that cannot be expressed in terms of other quantities.</p>
              <ul>
                <li><strong>Length</strong> - Meter (m)</li>
                <li><strong>Mass</strong> - Kilogram (kg)</li>
                <li><strong>Time</strong> - Second (s)</li>
                <li><strong>Electric Current</strong> - Ampere (A)</li>
                <li><strong>Temperature</strong> - Kelvin (K)</li>
                <li><strong>Amount of Substance</strong> - Mole (mol)</li>
                <li><strong>Luminous Intensity</strong> - Candela (cd)</li>
              </ul>
            </div>
            <div className="quantity-type">
              <h4>Derived Quantities</h4>
              <p>Quantities expressed in terms of fundamental quantities.</p>
              <ul>
                <li><strong>Area</strong> - Length × Length (m²)</li>
                <li><strong>Volume</strong> - Length × Length × Length (m³)</li>
                <li><strong>Speed</strong> - Length/Time (m/s)</li>
                <li><strong>Force</strong> - Mass × Acceleration (kg·m/s² or N)</li>
                <li><strong>Energy</strong> - Force × Length (N·m or J)</li>
              </ul>
            </div>
          </div>
          
          <h3>International System of Units (SI)</h3>
          <p>
            The International System of Units (SI) is the modern form of the metric system and is the most widely used system of measurement globally. 
            It provides a coherent system of units for science, technology, industry, and commerce.
          </p>
          
          <div className="si-units-table">
            <h4>SI Base Units</h4>
            <table>
              <thead>
                <tr>
                  <th>Quantity</th>
                  <th>Unit</th>
                  <th>Symbol</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Length</td>
                  <td>Meter</td>
                  <td>m</td>
                </tr>
                <tr>
                  <td>Mass</td>
                  <td>Kilogram</td>
                  <td>kg</td>
                </tr>
                <tr>
                  <td>Time</td>
                  <td>Second</td>
                  <td>s</td>
                </tr>
                <tr>
                  <td>Electric Current</td>
                  <td>Ampere</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>Temperature</td>
                  <td>Kelvin</td>
                  <td>K</td>
                </tr>
                <tr>
                  <td>Amount of Substance</td>
                  <td>Mole</td>
                  <td>mol</td>
                </tr>
                <tr>
                  <td>Luminous Intensity</td>
                  <td>Candela</td>
                  <td>cd</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3>Measurement Instruments</h3>
          <div className="instruments-grid">
            <div className="instrument-card">
              <h4>Meter Rule</h4>
              <p>Used to measure length with an accuracy of about 1 mm.</p>
            </div>
            <div className="instrument-card">
              <h4>Vernier Caliper</h4>
              <p>Measures length with an accuracy of 0.1 mm or 0.01 cm.</p>
            </div>
            <div className="instrument-card">
              <h4>Micrometer Screw Gauge</h4>
              <p>Measures very small distances with an accuracy of 0.01 mm.</p>
            </div>
            <div className="instrument-card">
              <h4>Beam Balance</h4>
              <p>Used to measure mass by comparing with known masses.</p>
            </div>
            <div className="instrument-card">
              <h4>Stopwatch</h4>
              <p>Used to measure time intervals.</p>
            </div>
            <div className="instrument-card">
              <h4>Measuring Cylinder</h4>
              <p>Used to measure the volume of liquids.</p>
            </div>
          </div>
          
          <h3>Errors in Measurement</h3>
          <p>
            No measurement is perfectly accurate. Errors can be classified into two main types:
          </p>
          
          <div className="error-types">
            <div className="error-type">
              <h4>Systematic Errors</h4>
              <p>Consistent errors that occur due to faulty instruments or procedures.</p>
              <ul>
                <li>Zero error in instruments</li>
                <li>Incorrect calibration</li>
                <li>Environmental factors</li>
              </ul>
            </div>
            <div className="error-type">
              <h4>Random Errors</h4>
              <p>Unpredictable errors that vary in magnitude and direction.</p>
              <ul>
                <li>Parallax error</li>
                <li>Fluctuations in environmental conditions</li>
                <li>Limitations of measuring instruments</li>
              </ul>
            </div>
          </div>
          
          <h3>Significant Figures</h3>
          <p>
            Significant figures are the digits in a number that carry meaning contributing to its precision. 
            Rules for determining significant figures:
          </p>
          <ul>
            <li>All non-zero digits are significant</li>
            <li>Zeros between non-zero digits are significant</li>
            <li>Leading zeros are not significant</li>
            <li>Trailing zeros in a number with a decimal point are significant</li>
          </ul>
        </div>
        
        <div className="practice-section">
          <h2>Practice Questions</h2>
          <div className="question">
            <h4>Question 1</h4>
            <p>What are the seven fundamental quantities in the SI system and their units?</p>
            <button className="show-answer" onClick={() => setShowAnswer1(!showAnswer1)}>
              {showAnswer1 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer1 && (
              <div className="answer">
                <p>
                  1. Length - Meter (m)<br/>
                  2. Mass - Kilogram (kg)<br/>
                  3. Time - Second (s)<br/>
                  4. Electric Current - Ampere (A)<br/>
                  5. Temperature - Kelvin (K)<br/>
                  6. Amount of Substance - Mole (mol)<br/>
                  7. Luminous Intensity - Candela (cd)
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 2</h4>
            <p>Explain the difference between systematic and random errors.</p>
            <button className="show-answer" onClick={() => setShowAnswer2(!showAnswer2)}>
              {showAnswer2 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer2 && (
              <div className="answer">
                <p>
                  Systematic errors are consistent and repeatable errors that occur due to faulty instruments or procedures. 
                  They can be eliminated by calibrating instruments or improving techniques.<br/><br/>
                  Random errors are unpredictable variations that occur due to factors beyond our control. 
                  They can be minimized by taking multiple measurements and finding the average.
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 3</h4>
            <p>How many significant figures are in the number 0.00450?</p>
            <button className="show-answer" onClick={() => setShowAnswer3(!showAnswer3)}>
              {showAnswer3 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer3 && (
              <div className="answer">
                <p>
                  The number 0.00450 has 3 significant figures. The leading zeros (0.00) are not significant, 
                  but the digits 4 and 5 are significant, and the trailing zero after the decimal point (0) is also significant.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Measurements;