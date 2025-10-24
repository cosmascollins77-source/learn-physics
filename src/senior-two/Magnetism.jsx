import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Magnetism.css';

const Magnetism = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);

  return (
    <div className="physics-topic">
      <div className="topic-header">
        <h1>Magnetism</h1>
        <p className="subtitle">Understanding magnetic fields and electromagnetic interactions</p>
        <Link to="/senior-two" className="back-link">← Back to Senior Two</Link>
      </div>
      
      <div className="content-container">
        <div className="learning-objectives">
          <h2>Learning Objectives</h2>
          <ul>
            <li>Understand the properties of magnets</li>
            <li>Learn about magnetic fields and field lines</li>
            <li>Study the Earth's magnetic field</li>
            <li>Understand electromagnetic induction</li>
            <li>Learn about applications of magnetism</li>
          </ul>
        </div>
        
        <div className="topic-content">
          <h2>Introduction to Magnetism</h2>
          <p>
            Magnetism is a fundamental force of nature that arises from the motion of electric charges. 
            Magnetic materials have the ability to attract certain metals such as iron, nickel, and cobalt.
          </p>
          
          <h3>Properties of Magnets</h3>
          <ul>
            <li><strong>Two poles:</strong> Every magnet has a north pole and a south pole</li>
            <li><strong>Like poles repel, unlike poles attract</strong></li>
            <li><strong>Magnetic poles always exist in pairs:</strong> A magnet cannot have only one pole</li>
            <li><strong>Strongest at poles:</strong> Magnetic force is strongest at the poles and weakest at the center</li>
            <li><strong>Attractive property:</strong> Magnets attract magnetic materials like iron, nickel, and cobalt</li>
            <li><strong>Directive property:</strong> A freely suspended magnet aligns itself in the north-south direction</li>
          </ul>
          
          <h3>Types of Magnets</h3>
          
          <div className="magnet-types">
            <div className="magnet-type">
              <h4>Natural Magnets</h4>
              <p>Magnets found in nature without human intervention.</p>
              <p><strong>Example:</strong> Lodestone (magnetite)</p>
            </div>
            <div className="magnet-type">
              <h4>Artificial Magnets</h4>
              <p>Magnets created by humans through various methods.</p>
              <p><strong>Examples:</strong> Bar magnets, horseshoe magnets, electromagnets</p>
            </div>
          </div>
          
          <div className="magnet-classification">
            <div className="classification">
              <h4>Permanent Magnets</h4>
              <p>Materials that retain their magnetism for a long time.</p>
              <p><strong>Examples:</strong> Steel, alnico</p>
            </div>
            <div className="classification">
              <h4>Temporary Magnets</h4>
              <p>Materials that lose their magnetism quickly.</p>
              <p><strong>Examples:</strong> Soft iron</p>
            </div>
          </div>
          
          <h3>Magnetic Fields</h3>
          <p>
            A magnetic field is the region around a magnet where its magnetic force can be detected. 
            Magnetic fields are represented by magnetic field lines.
          </p>
          
          <div className="field-properties">
            <div className="field-property">
              <h4>Properties of Magnetic Field Lines</h4>
              <ul>
                <li>They form continuous closed loops</li>
                <li>They never intersect each other</li>
                <li>They emerge from the north pole and enter the south pole</li>
                <li>The density of lines indicates the strength of the field</li>
                <li>They repel each other when parallel and in the same direction</li>
              </ul>
            </div>
            <div className="field-property">
              <h4>Magnetic Field Patterns</h4>
              <ul>
                <li><strong>Bar magnet:</strong> Field lines emerge from N-pole and enter S-pole</li>
                <li><strong>Two like poles:</strong> Field lines repel each other</li>
                <li><strong>Two unlike poles:</strong> Field lines attract each other</li>
              </ul>
            </div>
          </div>
          
          <h3>Earth's Magnetic Field</h3>
          <p>
            The Earth behaves like a giant magnet with its magnetic south pole near the geographic north pole 
            and its magnetic north pole near the geographic south pole.
          </p>
          
          <div className="earth-magnetism">
            <div className="earth-property">
              <h4>Magnetic Elements</h4>
              <ul>
                <li><strong>Magnetic Declination:</strong> Angle between magnetic and geographic north</li>
                <li><strong>Magnetic Inclination/Dip:</strong> Angle made by magnetic needle with horizontal</li>
                <li><strong>Horizontal Component:</strong> Horizontal intensity of Earth's magnetic field</li>
              </ul>
            </div>
            <div className="earth-property">
              <h4>Applications</h4>
              <ul>
                <li>Navigation using compass</li>
                <li>Migration of birds and animals</li>
                <li>Protection from solar wind</li>
              </ul>
            </div>
          </div>
          
          <h3>Electromagnetism</h3>
          <p>
            Electromagnetism is the interaction between electrically charged particles and magnetic fields. 
            When electric current flows through a conductor, it creates a magnetic field around it.
          </p>
          
          <div className="electromagnetism">
            <div className="electro-concept">
              <h4>Oersted's Experiment</h4>
              <p>Demonstrated that electric current produces a magnetic field.</p>
              <p>When current flows through a wire, a nearby compass needle deflects.</p>
            </div>
            <div className="electro-concept">
              <h4>Right-Hand Rule</h4>
              <p>Used to determine the direction of magnetic field around a current-carrying conductor.</p>
              <p>Thumb points in current direction, curled fingers show magnetic field direction.</p>
            </div>
          </div>
          
          <h3>Electromagnetic Induction</h3>
          <p>
            Electromagnetic induction is the process of generating electric current in a conductor 
            by changing the magnetic field around it.
          </p>
          
          <div className="induction">
            <div className="induction-concept">
              <h4>Faraday's Laws</h4>
              <ul>
                <li><strong>First Law:</strong> An emf is induced in a circuit when magnetic flux changes</li>
                <li><strong>Second Law:</strong> Induced emf is proportional to the rate of change of flux</li>
              </ul>
            </div>
            <div className="induction-concept">
              <h4>Lenz's Law</h4>
              <p>The direction of induced current opposes the change producing it.</p>
            </div>
          </div>
          
          <h3>Applications of Magnetism</h3>
          
          <div className="applications-grid">
            <div className="application-card">
              <h4>Electric Motors</h4>
              <p>Convert electrical energy to mechanical energy using magnetic fields.</p>
            </div>
            <div className="application-card">
              <h4>Electric Generators</h4>
              <p>Convert mechanical energy to electrical energy through electromagnetic induction.</p>
            </div>
            <div className="application-card">
              <h4>Transformers</h4>
              <p>Change voltage levels in electrical circuits using mutual induction.</p>
            </div>
            <div className="application-card">
              <h4>Magnetic Storage</h4>
              <p>Data storage in computer hard drives and magnetic tapes.</p>
            </div>
            <div className="application-card">
              <h4>Medical Applications</h4>
              <p>MRI machines use strong magnetic fields for imaging.</p>
            </div>
            <div className="application-card">
              <h4>Compasses</h4>
              <p>Navigation instruments that align with Earth's magnetic field.</p>
            </div>
          </div>
        </div>
        
        <div className="practice-section">
          <h2>Practice Questions</h2>
          <div className="question">
            <h4>Question 1</h4>
            <p>State three properties of magnets.</p>
            <button className="show-answer" onClick={() => setShowAnswer1(!showAnswer1)}>
              {showAnswer1 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer1 && (
              <div className="answer">
                <p>
                  1. Every magnet has two poles - a north pole and a south pole<br/>
                  2. Like poles repel each other and unlike poles attract each other<br/>
                  3. Magnetic poles always exist in pairs - a magnet cannot have only one pole
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 2</h4>
            <p>Explain how Earth's magnetic field helps in navigation.</p>
            <button className="show-answer" onClick={() => setShowAnswer2(!showAnswer2)}>
              {showAnswer2 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer2 && (
              <div className="answer">
                <p>
                  Earth's magnetic field helps in navigation through the use of compasses. 
                  A compass contains a magnetized needle that is free to rotate. 
                  The needle aligns itself with Earth's magnetic field, with its north pole pointing 
                  toward the magnetic north pole of the Earth. This allows navigators to determine 
                  directions and navigate accurately.
                </p>
              </div>
            )}
          </div>
          
          <div className="question">
            <h4>Question 3</h4>
            <p>What is electromagnetic induction? State Faraday's laws.</p>
            <button className="show-answer" onClick={() => setShowAnswer3(!showAnswer3)}>
              {showAnswer3 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer3 && (
              <div className="answer">
                <p>
                  Electromagnetic induction is the process of generating electric current in a conductor 
                  by changing the magnetic field around it.<br/><br/>
                  <strong>Faraday's Laws:</strong><br/>
                  1. First Law: An emf is induced in a circuit when magnetic flux through the circuit changes<br/>
                  2. Second Law: The magnitude of the induced emf is proportional to the rate of change of magnetic flux
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magnetism;