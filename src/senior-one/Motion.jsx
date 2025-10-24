import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Motion.css';

const Motion = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);

  return (
    <div className="physics-topic">
      <div className="topic-header">
        <h1>Motion</h1>
        <p className="subtitle">Understanding movement in one dimension</p>
        <Link to="/senior-one" className="back-link">← Back to Senior One</Link>
      </div>
      
      <div className="content-container">
        <div className="learning-objectives">
          <h2>Learning Objectives</h2>
          <ul>
            <li>Define distance, displacement, speed, and velocity</li>
            <li>Understand the concept of acceleration</li>
            <li>Distinguish between uniform and non-uniform motion</li>
            <li>Solve problems involving motion in a straight line</li>
            <li>Interpret distance-time and velocity-time graphs</li>
          </ul>
        </div>
        
        <div className="topic-content">
          <h2>Introduction to Motion</h2>
          <p>
            Motion is the change in position of an object with respect to time. In physics, we study motion to understand 
            how objects move and the forces that cause this movement. Motion can be described in terms of displacement, 
            velocity, and acceleration.
          </p>
          
          <h3>Basic Concepts of Motion</h3>
          
          <div className="concepts-grid">
            <div className="concept-card">
              <h4>Distance</h4>
              <p>The total length of the path traveled by an object, regardless of direction. It is a scalar quantity.</p>
              <p><strong>Unit:</strong> Meter (m)</p>
            </div>
            <div className="concept-card">
              <h4>Displacement</h4>
              <p>The shortest distance between the initial and final positions of an object in a specific direction. It is a vector quantity.</p>
              <p><strong>Unit:</strong> Meter (m)</p>
            </div>
            <div className="concept-card">
              <h4>Speed</h4>
              <p>The rate at which an object covers distance. It is a scalar quantity.</p>
              <p><strong>Formula:</strong> Speed = Distance/Time</p>
              <p><strong>Unit:</strong> m/s</p>
            </div>
            <div className="concept-card">
              <h4>Velocity</h4>
              <p>The rate of change of displacement. It is a vector quantity.</p>
              <p><strong>Formula:</strong> Velocity = Displacement/Time</p>
              <p><strong>Unit:</strong> m/s</p>
            </div>
          </div>
          
          <h3>Types of Motion</h3>
          <div className="motion-types">
            <div className="motion-type">
              <h4>Uniform Motion</h4>
              <p>Motion with constant velocity (speed and direction remain unchanged).</p>
              <ul>
                <li>Equal distances covered in equal intervals of time</li>
                <li>Acceleration is zero</li>
              </ul>
            </div>
            <div className="motion-type">
              <h4>Non-uniform Motion</h4>
              <p>Motion with variable velocity (speed or direction changes).</p>
              <ul>
                <li>Unequal distances covered in equal intervals of time</li>
                <li>Acceleration is non-zero</li>
              </ul>
            </div>
          </div>
          
          <h3>Acceleration</h3>
          <p>
            Acceleration is the rate of change of velocity with respect to time. It is a vector quantity.
          </p>
          <p><strong>Formula:</strong> Acceleration = (Final Velocity - Initial Velocity)/Time</p>
          <p><strong>Unit:</strong> m/s²</p>
          
          <div className="equations">
            <h4>Equations of Motion</h4>
            <p>For uniformly accelerated motion:</p>
            <ol>
              <li><strong>v = u + at</strong><br/>Final velocity = Initial velocity + (Acceleration × Time)</li>
              <li><strong>s = ut + ½at²</strong><br/>Distance = (Initial velocity × Time) + ½(Acceleration × Time²)</li>
              <li><strong>v² = u² + 2as</strong><br/>Final velocity² = Initial velocity² + 2(Acceleration × Distance)</li>
            </ol>
            <p>Where:<br/>
              u = Initial velocity<br/>
              v = Final velocity<br/>
              a = Acceleration<br/>
              t = Time<br/>
              s = Distance
            </p>
          </div>
          
          <h3>Graphical Representation of Motion</h3>
          
          <div className="graphs">
            <div className="graph-type">
              <h4>Distance-Time Graphs</h4>
              <ul>
                <li>Straight line with positive slope = Uniform motion</li>
                <li>Horizontal line = Object at rest</li>
                <li>Curved line = Non-uniform motion</li>
              </ul>
            </div>
            <div className="graph-type">
              <h4>Velocity-Time Graphs</h4>
              <ul>
                <li>Horizontal line = Uniform motion (zero acceleration)</li>
                <li>Straight line with slope = Uniform acceleration</li>
                <li>Area under the graph = Distance traveled</li>
              </ul>
            </div>
          </div>
          
          <h3>Free Fall</h3>
          <p>
            Free fall is the motion of an object under the influence of gravity alone, with no other forces acting on it. 
            Near the Earth's surface, all objects in free fall accelerate at the same rate, approximately 9.8 m/s².
          </p>
          <p><strong>Acceleration due to gravity (g):</strong> 9.8 m/s²</p>
        </div>
        
        <div className="practice-section">
          <h2>Practice Questions</h2>
          <div className="question">
            <h4>Question 1</h4>
            <p>What is the difference between distance and displacement?</p>
            <button className="show-answer" onClick={() => setShowAnswer1(!showAnswer1)}>
              {showAnswer1 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer1 && (
              <div className="answer">
                <p>
                  Distance is the total length of the path traveled by an object, regardless of direction. It is a scalar quantity.<br/><br/>
                  Displacement is the shortest distance between the initial and final positions of an object in a specific direction. It is a vector quantity.
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 2</h4>
            <p>A car accelerates uniformly from rest to a velocity of 20 m/s in 10 seconds. Calculate its acceleration.</p>
            <button className="show-answer" onClick={() => setShowAnswer2(!showAnswer2)}>
              {showAnswer2 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer2 && (
              <div className="answer">
                <p>
                  Given:<br/>
                  Initial velocity (u) = 0 m/s<br/>
                  Final velocity (v) = 20 m/s<br/>
                  Time (t) = 10 s<br/><br/>
                  Using the formula: a = (v - u)/t<br/>
                  a = (20 - 0)/10 = 2 m/s²<br/><br/>
                  The acceleration of the car is 2 m/s².
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 3</h4>
            <p>What information can be obtained from the slope of a distance-time graph?</p>
            <button className="show-answer" onClick={() => setShowAnswer3(!showAnswer3)}>
              {showAnswer3 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer3 && (
              <div className="answer">
                <p>
                  The slope of a distance-time graph gives the speed of the object.<br/><br/>
                  - A steeper slope indicates higher speed<br/>
                  - A constant slope indicates uniform speed<br/>
                  - A changing slope indicates changing speed (acceleration or deceleration)
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motion;