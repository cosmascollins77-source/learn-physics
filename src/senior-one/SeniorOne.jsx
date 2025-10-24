import React from 'react';
import './SeniorOne.css';

const SeniorOne = () => {
  const topics = [
    {
      id: 1,
      title: 'Introduction to Physics',
      description: 'Understanding what physics is and its branches.'
    },
    {
      id: 2,
      title: 'Measurements',
      description: 'Units, dimensions, and measurement techniques.'
    },
    {
      id: 3,
      title: 'Motion',
      description: 'Study of motion in one dimension.'
    }
  ];

  return (
    <div className="senior-one">
      <h1>Senior One Physics</h1>
      <p className="subtitle">Introduction to the fundamentals of physics</p>
      
      <div className="topics-container">
        {topics.map(topic => (
          <div key={topic.id} className="topic-card">
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
            <button className="learn-button">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeniorOne;