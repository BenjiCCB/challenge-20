import React from 'react';

export default function Contact() {
  return (
    <div>
        <h1>Contact Page</h1>
        <div class="container" id="contact-form">
            <form action="action_page.php">
        
            <h2>Contact Benji</h2>

            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name..">
        
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name..">
        
        
            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
        
            <input type="submit" value="Submit">
        
            </form>
         </div>
      </div>
  );
}
