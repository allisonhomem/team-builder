import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './Form.js';

const testTeam = [
  {name:'Steven', email:'sexysteve@hotmail.com', role:'Food Critic'},
  {name:'Allison', email:'allie_the_baker@aol.com', role:'Pastry Chef'}
];

function App() {
  const [ teamMembers, setTeamMembers ] = useState([{name:'',email:'',role:''}]);

  useEffect(() => {
    setTeamMembers(testTeam);
    console.log(teamMembers);
  },[])


  return (
    <div className="App">
      <div className="App-header">
        <h1>Team Members Form</h1>
      </div>

      <div className='Team-list'>
        <h2>Team Members</h2>
        {teamMembers.map(member => 
        <h3>{member.name} is a {member.role}</h3>)}
      </div>

      <Form teamsMembers={teamMembers}/>
    </div>
  );
}

export default App;
