import React, { useState } from 'react';


function Form(props){
    const { teamMembers, setTeamMembers } = props;
    const [ formValues, setFormValues ] = useState({name:'',email:'',role:'',newsletter:false});
    
    const updateForm = (event) => {
        setFormValues({...formValues, [event.target.name]: event.target.value});
    };
    
    const submitForm = (event) => {
        event.preventDefault();
        const newTeamMember = {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            role: formValues.role,
            newsletter: formValues.newsletter
        };
        if(!newTeamMember.name || !newTeamMember.email || !newTeamMember.role){
            alert `Please fill out all fields of the form :)`;
        };

        setTeamMembers(teamMembers.concat(newTeamMember));
        setFormValues({name:'',email:'',role:'',newsletter:false});
    }

    return(
        <div className='Form'>
            <h2>Become a Member:</h2>

            <form onSubmit={submitForm}>
              <label>
                Name: 
                <input type='text'
                       name='name'
                       value={formValues.name}
                       onChange={updateForm}
                />
              </label>

              <label>
                Email: 
                <input type='text'
                       name='email'
                       value={formValues.email}
                       onChange={updateForm}
                />
              </label>

              <label>
                  Role: 
                  <select value={formValues.role}
                          name='role'
                          onChange={updateForm}>
                      <option> - Select your preferred role - </option>
                      <option>Head Chef</option>
                      <option>Sous Chef</option>
                      <option>Pastry Chef</option>
                      <option>Food Critic</option>
                  </select>
              </label>

              <label>
                  Wish to subscribe to our Newsletter?
                  <input type='checkbox'
                         name='newsletter'
                         value={formValues.newsletter}
                         onChange={updateForm}
                  />
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