import React from 'react';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      
      {/* <!-- Role Cards --> */}
        <div class="roles">
          <section class="card">
            <header><a href="https://www.wework.com/">WeWork</a></header>
            <img src={require("../../images/computer.jpg")} alt="wework image" />
            <p>Global Community Director</p>
          </section>
          <section class="card">
            <header><a href="https://www.mercer.com/">Mercer</a></header>
            <img src={require("../../images/notepad.jpg")} alt="mercer image" />
            <p>Price: Entrepreneur in Residence</p>
          </section>
          <section class="card">
            <header><a href="https://www.nbcuniversal.com/">NBCUniversal</a></header>
            <img
              src={require("../../images/conference.jpg")}
              alt="nbcu image"
            />
            <p>Digital Strategy</p>
          </section>
          <section class="card">
            <header><a href="https://www.nyu.edu/">NYU</a></header>
            <img
              src={require("../../images/desk.jpg")}
              alt="4 NYU image"
            />
            <p>Masters Degree</p>
          </section>
          <section class="card">
            <header><a href="https://www.nyu.edu/">NYU</a></header>
            <img
              src={require("../../images/desk.jpg")}
              alt="4 NYU image"
            />
            <p>Masters Degree</p>
          </section>
          <section class="card">
            <header><a href="https://www.nyu.edu/">NYU</a></header>
            <img
              src={require("../../images/desk.jpg")}
              alt="4 NYU image"
            />
            <p>Masters Degree</p>
          </section>
        </div>
      
    </div>
  );
}
