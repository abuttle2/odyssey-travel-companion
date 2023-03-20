import React from 'react';
import { useState } from 'react';


function ContactUs () {
        const [inputs, setInputs] = useState({});

        const handleChange = (event) => {
          const name = event.target.name;
          const value = event.target.value;
          setInputs(values => ({...values, [name]: value}))
        }
      
        const handleSubmit = (event) => {
          event.preventDefault();
          console.log(inputs);
        }
      
        return (
          <form onSubmit={handleSubmit}>
            <label>Enter your name:
            <input 
              type="text" 
              name="username" 
              value={inputs.username || ""} 
              onChange={handleChange}
            />
            </label>
            <label>Enter your e-mail:
              <input 
                type="text" 
                name="email" 
                value={inputs.email || ""} 
                onChange={handleChange}
              />
              </label>
              <input type="submit" />
          </form>
        
        
        
    )
}

export default ContactUs;