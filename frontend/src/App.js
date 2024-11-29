import React, { useState, useEffect } from "react";

function App() {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/score")
      .then((res) => res.json())
      .then((data) => {
        setTeamAScore(data.team_a);
        setTeamBScore(data.team_b);
      });
  }, []);

  const incrementScore = (team) => {
    fetch(`http://localhost:5000/increment/${team}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then(() => {
        if (team === "team_a") setTeamAScore(teamAScore + 1);
        if (team === "team_b") setTeamBScore(teamBScore + 1);
      });
  };

  return (
    <div className="App">
      <h1>Click Battle</h1>
      <div>
        <h2>Team A: {teamAScore}</h2>
        <button onClick={() => incrementScore("team_a")}>Click for Team A</button>
      </div>
      <div>
        <h2>Team B: {teamBScore}</h2>
        <button onClick={() => incrementScore("team_b")}>Click for Team B</button>
      </div>
    </div>
  );
}

export default App;
