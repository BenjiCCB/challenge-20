import React from 'react';
// import imgVar from "../../images/profile.jpg"

export default function About() {
  return (
    <div class="about-me" id="about-me">
      <h2>About me</h2>
      <div class="about-me-bio"><img src={require("../../images/profile.jpg")} alt="profile image" />
         <p>Entrepreneur.  Investor.  General trouble maker.<br/><br/>

          Most recently, Principal at Bridge Capital, empowering champion businesses of tomorrow through funding and support.  Formerly EIR @Mercer, driving cross-organizational change and innovation for the world’s largest corporations.  Before this, I served as Global Community Director at WeWork, Global Director of WeWork Labs,  founder of the location based social network Kami, and lead on corporate strategy digital initiatives at NBCU.<br/><br/>
        
          I studied new media at Harvard for my undergrad, received a Masters at NYU in open innovation, and am a graduate of General Assembly's web development immersive program.<br/><br/>
        
          I believe in openness, honesty, and passion.  I'm an all around dork for all things digital and community building<br/><br/>
         
          Benji can be reached at:
          <i class="fa-brands fa-linkedin"></i><a href="https://www.linkedin.com/in/benjidecker/">LinkedIn</a>
          <i class="fa-brands fa-github"></i><a href="https://github.com/BenjiCCB">Github</a>
          <i class="fa-brands fa-square-instagram"></i><a href="https://www.instagram.com/benji_decker/">Instagram</a>
        </p>
      </div>
    </div>
  );
}
