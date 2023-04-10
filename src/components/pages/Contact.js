import React from 'react';
import { useState } from 'react';
import {validateEmail} from '../../utils/helpers';

export default function Contact() {
  
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or name is invalid');
      return;
    }

    alert(`Hello ${userName}`);

    setUserName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
        <h1 class="title">Contact Page</h1>
        <div class="container" id="contact-form">
            <form className = "form">
        
            {/* <h2>Contact Benji</h2> */}

            <label for="userName">Name</label>
            <input value={userName} onChange={handleInputChange} type="text" id="userName" name="userName" placeholder="Your name..."></input>
        
            <label for="email">Email</label>
            <input value={email} onChange={handleInputChange} type="text" id="email" name="email" placeholder="Your email..."></input>
        
        
            <label for="message">Message</label>
            <textarea value={message} onChange={handleInputChange} id="message" name="message" placeholder="Write your message here..."></textarea>
        
            {/* <input class="submit-btn" type="submit" value="Submit"></input> */}
            <button type="button" onClick={handleFormSubmit}>Submit</button>
        
            </form>
            {errorMessage && (
              <div><p className="error-text">{errorMessage}</p></div>
            )}

         </div>
      </div>
  );
}
