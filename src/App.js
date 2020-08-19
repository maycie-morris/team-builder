import React, { useState } from 'react';
import './App.css';

// Import Components

import Form from "./components/Form"
import Team from "./components/TeamForm"

function App() {

  const [teamMember, setTeamMember] = useState([
    {
    id: '1',
    Name: 'Maycie Morris',
    Email: 'maycie.morris@gmail.com',
    Role: 'Front End Engineer'
    }
])

const addTeamMember = member => {
  const newMember = {
    id: Date.now(),
    Name: member.name,
    Email: member.email,
    Role: member.role
  }
  setTeamMember([...teamMember, newMember])
}

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form addTeamMember={addTeamMember} />
      <Team teamMember={teamMember} />
    </div>
  );
}

export default App;
