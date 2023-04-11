import React from 'react';
import { useState } from 'react';
import {validateEmail} from '../../utils/helpers';

export default function Contact() {
  
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);  
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  
// -----------

const handleOnBlur = (e) => {
  const { target } = e;
  const inputType = target.name;

  if (inputType === 'email') {
      if (!validateEmail(email)){
        document.getElementById("email").setAttribute("style", "border: solid red;");
        setErrorMessage("Valid email required")
      } else {
        document.getElementById("email").setAttribute("style", "border: none;");
        setErrorMessage("")
      }
  } else if (inputType === 'userName') {
      if (!userName){
        document.getElementById("userName").setAttribute("style", "border: solid red;");
        setErrorMessage("Name field required")
      } else{
        document.getElementById("userName").setAttribute("style", "border: none;");
        setErrorMessage("")
      }
  } else {
  }
};

// -----------

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
    setErrorMessage('');
  };

  return (
    <div>
        <h1 class="title">Contact Page</h1>
        <div class="container" id="contact-form">
            <form className = "form">
        
            {/* <h2>Contact Benji</h2> */}

            <label for="userName">Name</label>
            <input value={userName} onBlur={handleOnBlur} onChange={handleInputChange} type="text" id="userName" name="userName" placeholder="Your name..."></input>
        
            <label for="email">Email</label>
            <input value={email} onBlur={handleOnBlur} onChange={handleInputChange} type="text" id="email" name="email" placeholder="Your email..."></input>
        
            <label for="message">Message</label>
            <textarea value={message} onChange={handleInputChange} id="message" name="message" placeholder="Write your message here..."></textarea>
        
            <input class="submit-btn" type="submit" value="Submit" onClick={handleFormSubmit}></input>
            {/* <button type="button" onClick={handleFormSubmit}>Submit</button> */}
        
            </form>
            {errorMessage && (
              <div><p className="error-text">{errorMessage}</p></div>
            )}

         </div>
      </div>
  );
}
