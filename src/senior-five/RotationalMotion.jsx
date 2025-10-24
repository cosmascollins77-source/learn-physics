import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RotationalMotion.css';

const RotationalMotion = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);

  return (
    <div className="physics-topic">
      <div className="topic-header">
        <h1>Rotational Motion</h1>
        <p className="subtitle">Understanding motion of objects rotating around an axis</p>
        <Link to="/senior-five" className="back-link">← Back to Senior Five</Link>
      </div>
      
      <div className="content-container">
        <div className="learning-objectives">
          <h2>Learning Objectives</h2>
          <ul>
            <li>Understand angular displacement, velocity, and acceleration</li>
            <li>Learn about moment of inertia and torque</li>
            <li>Study rotational kinetic energy and angular momentum</li>
            <li>Understand the parallel axis theorem</li>
            <li>Learn about rolling motion and its applications</li>
          </ul>
        </div>
        
        <div className="topic-content">
          <h2>Introduction to Rotational Motion</h2>
          <p>
            Rotational motion is the motion of an object around a fixed axis. Unlike translational motion where all points 
            move in the same direction, in rotational motion different points on the object follow circular paths.
          </p>
          
          <h3>Angular Quantities</h3>
          <p>
            In rotational motion, we use angular quantities to describe the motion instead of linear quantities.
          </p>
          
          <div className="angular-quantities">
            <div className="angular-quantity">
              <h4>Angular Displacement (θ)</h4>
              <p>The angle through which a point or line has been rotated</p>
              <p><strong>Unit:</strong> Radian (rad)</p>
              <p><strong>Relation to linear displacement:</strong> s = rθ</p>
            </div>
            <div className="angular-quantity">
              <h4>Angular Velocity (ω)</h4>
              <p>Rate of change of angular displacement</p>
              <p><strong>Average:</strong> ω = Δθ/Δt</p>
              <p><strong>Instantaneous:</strong> ω = dθ/dt</p>
              <p><strong>Unit:</strong> rad/s</p>
              <p><strong>Relation to linear velocity:</strong> v = rω</p>
            </div>
            <div className="angular-quantity">
              <h4>Angular Acceleration (α)</h4>
              <p>Rate of change of angular velocity</p>
              <p><strong>Average:</strong> α = Δω/Δt</p>
              <p><strong>Instantaneous:</strong> α = dω/dt</p>
              <p><strong>Unit:</strong> rad/s²</p>
              <p><strong>Relation to linear acceleration:</strong> a = rα</p>
            </div>
          </div>
          
          <h3>Equations of Rotational Motion</h3>
          <p>
            For uniform angular acceleration, the equations of rotational motion are analogous to linear motion equations.
          </p>
          
          <div className="rotational-equations">
            <div className="equation-group">
              <p><strong>ω = ω₀ + αt</strong></p>
              <p>Final angular velocity = Initial angular velocity + (Angular acceleration × Time)</p>
            </div>
            <div className="equation-group">
              <p><strong>θ = ω₀t + ½αt²</strong></p>
              <p>Angular displacement = (Initial angular velocity × Time) + ½(Angular acceleration × Time²)</p>
            </div>
            <div className="equation-group">
              <p><strong>ω² = ω₀² + 2αθ</strong></p>
              <p>Final angular velocity² = Initial angular velocity² + 2(Angular acceleration × Angular displacement)</p>
            </div>
          </div>
          
          <h3>Moment of Inertia (I)</h3>
          <p>
            Moment of inertia is the rotational equivalent of mass. It measures an object's resistance to changes in its rotational motion.
          </p>
          
          <div className="moment-inertia">
            <div className="inertia-definition">
              <p><strong>Definition:</strong> I = Σmr²</p>
              <p>For continuous bodies: I = ∫r²dm</p>
              <p>Where m = mass of particle, r = distance from axis of rotation</p>
            </div>
            <div className="common-inertias">
              <h4>Common Moments of Inertia</h4>
              <ul>
                <li>Solid sphere about diameter: I = (2/5)MR²</li>
                <li>Hollow sphere about diameter: I = (2/3)MR²</li>
                <li>Solid cylinder about axis: I = (1/2)MR²</li>
                <li>Thin rod about center: I = (1/12)ML²</li>
                <li>Thin ring about diameter: I = MR²</li>
              </ul>
            </div>
          </div>
          
          <h3>Torque (τ)</h3>
          <p>
            Torque is the rotational equivalent of force. It measures the tendency of a force to rotate an object about an axis.
          </p>
          
          <div className="torque">
            <div className="torque-definition">
              <p><strong>Definition:</strong> τ = rFsin(θ)</p>
              <p>Where r = distance from axis to point of application, F = force, θ = angle between r and F</p>
              <p><strong>Vector form:</strong> τ = r × F</p>
            </div>
            <div className="torque-relation">
              <p><strong>Relation to angular acceleration:</strong> τ = Iα</p>
              <p>This is rotational equivalent of Newton's second law: F = ma</p>
            </div>
          </div>
          
          <h3>Rotational Kinetic Energy</h3>
          <p>
            Rotational kinetic energy is the energy associated with the rotation of an object.
          </p>
          
          <div className="rotational-ke">
            <p><strong>Formula:</strong> KE = ½Iω²</p>
            <p>This is rotational equivalent of translational kinetic energy: KE = ½mv²</p>
            <p><strong>Total kinetic energy for rolling:</strong> KE = ½mv² + ½Iω²</p>
          </div>
          
          <h3>Angular Momentum (L)</h3>
          <p>
            Angular momentum is the rotational equivalent of linear momentum.
          </p>
          
          <div className="angular-momentum">
            <div className="momentum-definition">
              <p><strong>Definition:</strong> L = Iω</p>
              <p>For point mass: L = mvr</p>
              <p><strong>Vector form:</strong> L = r × p</p>
            </div>
            <div className="conservation-law">
              <h4>Law of Conservation of Angular Momentum</h4>
              <p>If net external torque is zero, angular momentum remains constant</p>
              <p><strong>Expression:</strong> L = constant or I₁ω₁ = I₂ω₂</p>
            </div>
          </div>
          
          <h3>Parallel Axis Theorem</h3>
          <p>
            The parallel axis theorem relates the moment of inertia about any axis to the moment of inertia about a parallel axis through the center of mass.
          </p>
          
          <div className="parallel-axis">
            <p><strong>Theorem:</strong> I = I<sub>cm</sub> + Md²</p>
            <p>Where I<sub>cm</sub> = moment of inertia about center of mass axis</p>
            <p>M = total mass, d = distance between the two parallel axes</p>
          </div>
          
          <h3>Rolling Motion</h3>
          <p>
            Rolling motion is a combination of translational and rotational motion where there is no slipping at the point of contact.
          </p>
          
          <div className="rolling-motion">
            <div className="rolling-conditions">
              <h4>Condition for Rolling Without Slipping</h4>
              <p>v = ωR (linear velocity = angular velocity × radius)</p>
              <p>a = αR (linear acceleration = angular acceleration × radius)</p>
            </div>
            <div className="rolling-energy">
              <h4>Kinetic Energy of Rolling Motion</h4>
              <p>KE = ½mv² + ½Iω²</p>
              <p>For rolling without slipping: KE = ½mv²(1 + k²/R²)</p>
              <p>Where k = radius of gyration</p>
            </div>
          </div>
        </div>
        
        <div className="practice-section">
          <h2>Practice Questions</h2>
          <div className="question">
            <h4>Question 1</h4>
            <p>Define angular velocity and angular acceleration. Give their units and dimensional formulas.</p>
            <button className="show-answer" onClick={() => setShowAnswer1(!showAnswer1)}>
              {showAnswer1 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer1 && (
              <div className="answer">
                <p>
                  <strong>Angular Velocity (ω):</strong><br/>
                  - Rate of change of angular displacement<br/>
                  - ω = dθ/dt<br/>
                  - Unit: rad/s<br/>
                  - Dimensional formula: [M⁰L⁰T⁻¹]<br/><br/>
                  <strong>Angular Acceleration (α):</strong><br/>
                  - Rate of change of angular velocity<br/>
                  - α = dω/dt<br/>
                  - Unit: rad/s²<br/>
                  - Dimensional formula: [M⁰L⁰T⁻²]
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 2</h4>
            <p>A wheel starts from rest and accelerates uniformly to an angular velocity of 20 rad/s in 5 seconds. Calculate its angular acceleration and angular displacement during this time.</p>
            <button className="show-answer" onClick={() => setShowAnswer2(!showAnswer2)}>
              {showAnswer2 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer2 && (
              <div className="answer">
                <p>
                  Given:<br/>
                  Initial angular velocity (ω₀) = 0<br/>
                  Final angular velocity (ω) = 20 rad/s<br/>
                  Time (t) = 5 s<br/><br/>
                  Using: ω = ω₀ + αt<br/>
                  20 = 0 + α(5)<br/>
                  α = 4 rad/s²<br/><br/>
                  Using: θ = ω₀t + ½αt²<br/>
                  θ = 0(5) + ½(4)(5)²<br/>
                  θ = 0 + ½(4)(25)<br/>
                  θ = 50 rad<br/><br/>
                  Angular acceleration = 4 rad/s²<br/>
                  Angular displacement = 50 rad
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 3</h4>
            <p>State the parallel axis theorem and use it to find the moment of inertia of a solid sphere about a tangent.</p>
            <button className="show-answer" onClick={() => setShowAnswer3(!showAnswer3)}>
              {showAnswer3 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer3 && (
              <div className="answer">
                <p>
                  <strong>Parallel Axis Theorem:</strong><br/>
                  The moment of inertia of a body about any axis is equal to the moment of inertia about a parallel axis through the center of mass plus the product of the mass of the body and the square of the distance between the two axes.<br/>
                  I = I<sub>cm</sub> + Md²<br/><br/>
                  <strong>For a solid sphere about a tangent:</strong><br/>
                  Moment of inertia about diameter: I<sub>cm</sub> = (2/5)MR²<br/>
                  Distance from center to tangent: d = R<br/>
                  Using parallel axis theorem:<br/>
                  I = (2/5)MR² + MR²<br/>
                  I = (2/5)MR² + (5/5)MR²<br/>
                  I = (7/5)MR²<br/><br/>
                  Moment of inertia of a solid sphere about a tangent is (7/5)MR².
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotationalMotion;