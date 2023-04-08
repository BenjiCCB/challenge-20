import React from 'react';

export default function Contact() {
  return (
    <div>
        <h1 class="title">Contact Page</h1>
        <div class="container" id="contact-form">
            <form>
        
            {/* <h2>Contact Benji</h2> */}

            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your first name..."></input>
        
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name..."></input>
        
        
            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write your message here..."></textarea>
        
            <input class="submit-btn" type="submit" value="Submit"></input>
        
            </form>
         </div>
      </div>
  );
}
