import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  const handleClick = async (team) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/click/${team}`);
      if (team === 'team_a') setTeamAScore(teamAScore + 1);
      if (team === 'team_b') setTeamBScore(teamBScore + 1);
    } catch (error) {
      console.error('Error incrementing score', error);
    }
  };

  return (
    <div className="App">
      <h1>Click Battle App</h1>
      <div className="scoreboard">
        <div className="team">
          <h2>Team A</h2>
          <p>Score: {teamAScore}</p>
          <button onClick={() => handleClick('team_a')}>Click Team A</button>
        </div>
        <div className="team">
          <h2>Team B</h2>
          <p>Score: {teamBScore}</p>
          <button onClick={() => handleClick('team_b')}>Click Team B</button>
        </div>
      </div>
    </div>
  );
}

export default App;
