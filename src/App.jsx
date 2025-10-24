import { useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import './App.css'
import SeniorOne from './senior-one/SeniorOne'
import SeniorTwo from './senior-two/SeniorTwo'
import SeniorThree from './senior-three/SeniorThree'
import SeniorFour from './senior-four/SeniorFour'
import SeniorFive from './senior-five/SeniorFive'
import SeniorSix from './senior-six/SeniorSix'

function App() {
  const navigate = useNavigate()
  
  const seniorLevels = [
    { 
      id: 1, 
      name: 'Senior One', 
      path: '/senior-one', 
      topics: ['Introduction to Physics', 'Measurements', 'Motion'],
      description: 'Foundations of physics including basic concepts, measurements, and motion in one dimension.',
      color: '#3498db'
    },
    { 
      id: 2, 
      name: 'Senior Two', 
      path: '/senior-two', 
      topics: ['Heat', 'Wave Motion', 'Magnetism'],
      description: 'Explore thermal energy, wave properties, and magnetic fields.',
      color: '#2ecc71'
    },
    { 
      id: 3, 
      name: 'Senior Three', 
      path: '/senior-three', 
      topics: ['Electrostatics', 'Current Electricity', 'Electromagnetism'],
      description: 'Dive into electric charges, circuits, and electromagnetic interactions.',
      color: '#e74c3c'
    },
    { 
      id: 4, 
      name: 'Senior Four', 
      path: '/senior-four', 
      topics: ['Optics', 'Modern Physics', 'Nuclear Physics'],
      description: 'Study light behavior, atomic physics, and nuclear reactions.',
      color: '#9b59b6'
    },
    { 
      id: 5, 
      name: 'Senior Five', 
      path: '/senior-five', 
      topics: ['Rotational Motion', 'Fluid Mechanics', 'Thermodynamics'],
      description: 'Advanced mechanics covering rotation, fluids, and energy transformations.',
      color: '#f39c12'
    },
    { 
      id: 6, 
      name: 'Senior Six', 
      path: '/senior-six', 
      topics: ['Quantum Mechanics', 'Relativity', 'Astrophysics'],
      description: 'Modern physics including quantum theory, relativity, and cosmology.',
      color: '#1abc9c'
    }
  ]

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>Ugandan High School Physics Curriculum</h1>
          <p className="header-subtitle">Senior One to Senior Six</p>
        </div>
        <nav className="main-nav">
          <Link to="/" className="nav-link">Home</Link>
          {seniorLevels.map(level => (
            <Link 
              key={level.id} 
              to={level.path} 
              className="nav-link"
            >
              {level.name}
            </Link>
          ))}
        </nav>
      </header>
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={
            <div className="home-page">
              <section className="hero-section">
                <div className="hero-content">
                  <h1>Master Physics with Our Comprehensive Curriculum Guide</h1>
                  <p className="hero-subtitle">Designed specifically for Ugandan high school students following the national curriculum from Senior One to Senior Six</p>
                  <div className="hero-buttons">
                    <button className="cta-button primary" onClick={() => navigate('/senior-one')}>
                      Start Learning
                    </button>
                    <button className="cta-button secondary" onClick={() => document.getElementById('curriculum').scrollIntoView({behavior: 'smooth'})}>
                      Explore Curriculum
                    </button>
                  </div>
                </div>
                <div className="hero-image">
                  <div className="physics-icon">⚛️</div>
                </div>
              </section>
              
              <section className="features-section">
                <h2>Why Choose Our Physics Learning Platform?</h2>
                <div className="features-grid">
                  <div className="feature-card">
                    <div className="feature-icon">📚</div>
                    <h3>Complete Curriculum Coverage</h3>
                    <p>All topics from the Ugandan national physics curriculum for Senior One to Senior Six</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">🔬</div>
                    <h3>Interactive Learning</h3>
                    <p>Engaging content with diagrams, simulations, and practical examples</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">✅</div>
                    <h3>Practice & Assessment</h3>
                    <p>End-of-topic questions and mock exams to test your understanding</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">🎓</div>
                    <h3>Exam Preparation</h3>
                    <p>Tailored content to help you excel in national examinations</p>
                  </div>
                </div>
              </section>
              
              <section id="curriculum" className="curriculum-section">
                <h2>Curriculum Overview</h2>
                <p className="section-description">
                  Our platform covers all the essential topics in the Ugandan high school physics curriculum, 
                  organized by class level to ensure progressive learning.
                </p>
                
                <div className="levels-grid">
                  {seniorLevels.map(level => (
                    <div 
                      key={level.id} 
                      className="level-card"
                      onClick={() => navigate(level.path)}
                    >
                      <div className="level-header" style={{backgroundColor: level.color}}>
                        <h3>{level.name}</h3>
                      </div>
                      <div className="level-content">
                        <p className="level-description">{level.description}</p>
                        <div className="level-topics">
                          <h4>Key Topics:</h4>
                          <ul>
                            {level.topics.map((topic, index) => (
                              <li key={index}>{topic}</li>
                            ))}
                          </ul>
                        </div>
                        <button className="view-level-button">Explore Topics</button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              
              <section className="about-section">
                <h2>About This Learning Platform</h2>
                <div className="about-content">
                  <p>
                    This educational platform has been specifically designed to support students in Ugandan high schools 
                    studying physics from Senior One through to Senior Six. Our content aligns with the national curriculum 
                    and is structured to build understanding progressively.
                  </p>
                  <p>
                    Whether you're just beginning your physics journey in Senior One or preparing for your final 
                    examinations in Senior Six, this platform provides the resources you need to succeed.
                  </p>
                </div>
              </section>
            </div>
          } />
          <Route path="/senior-one" element={<SeniorOne />} />
          <Route path="/senior-two" element={<SeniorTwo />} />
          <Route path="/senior-three" element={<SeniorThree />} />
          <Route path="/senior-four" element={<SeniorFour />} />
          <Route path="/senior-five" element={<SeniorFive />} />
          <Route path="/senior-six" element={<SeniorSix />} />
        </Routes>
      </main>
      
      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Ugandan Physics Curriculum</h3>
            <p>Comprehensive learning resources for Senior One to Senior Six students</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              {seniorLevels.map(level => (
                <li key={level.id}><Link to={level.path}>{level.name}</Link></li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>For questions or feedback:</p>
            <p>physics@uganda.edu</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Ugandan High School Physics Curriculum. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App