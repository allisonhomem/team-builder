import React, { useState } from 'react';


function Form(props){
    const { teamMembers } = props;
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ role, setRole ] = useState('');

    const newName = event => {
        setName(event.target.value);
    };

    const newEmail = event => {
        setEmail(event.target.value);
    };

    const newRole = event => {
        setRole(event.target.value);
    };

    const newMember = event => {
        teamMembers.push()
    }

    return(
        <div className='Form'>
            <h2>Become a Team Member:</h2>

            <form>
              <label>
                Name: 
                <input type='text'
                       name='name'
                       onChange={newName}
                />
              </label>

              <label>
                Email: 
                <input type='text'
                       email='email'
                       onChange={newEmail}
                />
              </label>

              <label>
                  Role: 
                  <select >
                      <option value='0'></option>
                      <option value='1'>Head Chef</option>
                      <option value='2'>Sous Chef</option>
                      <option value='3'>Pastry Chef</option>
                      <option value='4'>Food Critic</option>
                  </select>
              </label>

              <label>
                  Join Now! 
                  <input type='submit'
                  />
              </label>
            </form>
        </div>
    );
}

export default Form;