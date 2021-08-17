import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './Form.js';

const testTeam = [
  {name:'Steven', email:'sexysteve@hotmail.com', role:'Food Critic', newsletter:false},
  {name:'Allison', email:'allie_the_baker@aol.com', role:'Pastry Chef', newsletter:true}
];

function App() {
  const [ teamMembers, setTeamMembers ] = useState([]);

  useEffect(() => {
    setTeamMembers(testTeam);
  },[])

  return (
    <div className="App">
      <div className="App-header">
        <h1> ~ The Culinary Society ~ </h1>
      </div>

      <div className='body-container'>
        <div className='Team-list'>
          <h2>Current Members</h2>
          {teamMembers.map(member => 
          <h3>{member.name} is a {member.role}</h3>)}
        </div>
     
        <Form teamMembers={teamMembers} setTeamMembers={setTeamMembers}/>
      </div> 
    </div>
  );
}

export default App;
