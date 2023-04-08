import React from 'react';

export default function Resume() {
  return (
    <div>
      <h1 class="title">Resume</h1>
      <h4 class="download-link"><a href="https://bit.ly/3Guc4oa">(download here)</a></h4>
      <img class="resume-page" src={require("../../images/resume1.png")} alt="resume1" />
      <img class="resume-page" src={require("../../images/resume2.png")} alt="resume2" />
    </div>
  );
}
