import { useState } from 'react'
import './App.css'

function App() {
  const [selectedLevel, setSelectedLevel] = useState(null)

  const seniorLevels = [
    { id: 1, name: 'Senior One', topics: ['Introduction to Physics', 'Measurements', 'Motion'] },
    { id: 2, name: 'Senior Two', topics: ['Heat', 'Wave Motion', 'Magnetism'] },
    { id: 3, name: 'Senior Three', topics: ['Electrostatics', 'Current Electricity', 'Electromagnetism'] },
    { id: 4, name: 'Senior Four', topics: ['Optics', 'Modern Physics', 'Nuclear Physics'] },
    { id: 5, name: 'Senior Five', topics: ['Rotational Motion', 'Fluid Mechanics', 'Thermodynamics'] },
    { id: 6, name: 'Senior Six', topics: ['Quantum Mechanics', 'Relativity', 'Astrophysics'] }
  ]

  return (
    <div className="app">
      <header className="app-header">
        <h1>Ugandan High School Physics Curriculum</h1>
        <p>Senior One to Senior Six</p>
      </header>
      
      <main className="main-content">
        {!selectedLevel ? (
          <div className="level-selection">
            <h2>Select a Class Level</h2>
            <div className="level-grid">
              {seniorLevels.map(level => (
                <div 
                  key={level.id} 
                  className="level-card"
                  onClick={() => setSelectedLevel(level)}
                >
                  <h3>{level.name}</h3>
                  <ul>
                    {level.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="level-detail">
            <button onClick={() => setSelectedLevel(null)} className="back-button">
              ← Back to Levels
            </button>
            <h2>{selectedLevel.name} Physics Topics</h2>
            <ul className="topic-list">
              {selectedLevel.topics.map((topic, index) => (
                <li key={index} className="topic-item">
                  {topic}
                </li>
              ))}
            </ul>
            <div className="coming-soon">
              <p>Detailed content for each topic coming soon...</p>
            </div>
          </div>
        )}
      </main>
      
      <footer className="app-footer">
        <p>© 2025 Ugandan High School Physics Curriculum</p>
      </footer>
    </div>
  )
}

export default App