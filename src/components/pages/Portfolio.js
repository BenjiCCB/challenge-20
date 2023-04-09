import React from 'react';

export default function Portfolio() {
  return (
    <div>
      <h1 class="title">Portfolio</h1>
      
      {/* <!-- Role Cards --> */}
        <div class="roles">
          <section class="card">
            <header><a href="https://ccb-share-a-byte.herokuapp.com/">Share-Byte</a></header>
            <img src={require("../../images/SAB.png")} alt="sab-image" />
            <p class="git-link"><a href="https://github.com/fannychen623/Project-02-Recipe-Book">Github Link</a></p>
          </section>
          <section class="card">
            <header><a href="https://ccb14-blogapp.herokuapp.com/">Blog App</a></header>
            <img src={require("../../images/blog.png")} alt="mercer image" />
            <p class="git-link"><a href="https://github.com/BenjiCCB/challenge-14">Github Link</a></p>
          </section>
          <section class="card">
            <header><a href="https://ccb19-jate.herokuapp.com/">Text Editor</a></header>
            <img src={require("../../images/text.png")} alt="nbcu image"/>
            <p class="git-link"><a href="https://github.com/BenjiCCB/challenge-19">Github Link</a></p>
          </section>
          <section class="card">
            <header><a href="https://notes-app-ccb.herokuapp.com">Notes App</a></header>
            <img src={require("../../images/notes.png")} alt="4 NYU image"/>
            <p class="git-link"><a href="https://github.com/BenjiCCB/challenge-19">Github Link</a></p>
          </section>
          <section class="card">
            <header><a href="https://benjiccb.github.io/challenge-02">Flat Portfolio</a></header>
            <img src={require("../../images/flat.png")}alt="4 NYU image"/>
            <p class="git-link"><a href="https://github.com/BenjiCCB/challenge-02">Github Link</a></p>
          </section>
          <section class="card">
            <header><a href="https://benjiccb.github.io/challenge-04/">Coding Quiz</a></header>
            <img src={require("../../images/quiz.png")} alt="4 NYU image"/>
            <p class="git-link"><a href="https://github.com/BenjiCCB/challenge-04">Github Link</a></p>
          </section>
        </div>
      
    </div>
  );
}
