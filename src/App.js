import React from "react";

function App() {
  return (
    <div>
      <div class="container">
        <div class="hero">
          <h1 class="name">
            <strong>Özgür</strong> SARIOĞLAN
          </h1>
          <span class="job-title">Software Developer</span>

          <span class="email">
            {" "}
            <a target="_blank" href="mailto:ozgursarioglan@hotmail.com">
              ✉️ E-Mail
            </a>{" "}
            —{" "}
            <a target="_blank" href="https://github.com/ozgursarioglan/">
              Github
            </a>{" "}
            —{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ozgursarioglan/"
            >
              Linkedin
            </a>{" "}
          </span>

          <h2 class="lead">
            Software Developer, Linux 🐧 User, Bad Cook, Marvel Hero, TEMA 🌳
            Member, Activist 🦍
          </h2>
        </div>
      </div>

      <div class="container">
        <div class="sections">
          <h2 class="section-title">Skills</h2>

          <div class="list-card">
            <span class="exp">+ 4 years</span>
            <div>
              <h3>Database Development</h3>
              <span>Postgresql, NoSQL, T-SQL, DB2</span>
            </div>
          </div>

          <div class="list-card">
            <span class="exp">+ 4 years</span>
            <div>
              <h3>Software Development</h3>
              <span>Ruby, Javascipt, Python</span>
            </div>
          </div>

          <div class="list-card">
            <span class="exp">+ 4 years</span>
            <div>
              <h3>Business Intelligence</h3>
              <span>Microsoft Integration Services, SSRS, Oracle BI</span>
            </div>
          </div>

          <div class="list-card">
            <span class="exp">+ 2 years</span>
            <div>
              <h3>Industry 4</h3>
              <span>Automation, Energy Efficiency</span>
            </div>
          </div>
        </div>
        <div class="sections">
          <h2 class="section-title">Professional</h2>

          <div class="list-card">
            <div>
              <h3>SQL Developer</h3>
              <span>Database Design, Performance Query, Reporting</span>
            </div>
          </div>

          <div class="list-card">
            <div>
              <h3>Javascipt Developer</h3>
              <span>Node.Js, Express, React, Rest, GraphQL</span>
            </div>
          </div>

          <div class="list-card">
            <div>
              <h3>Business Development</h3>
              <span>Project Management, Process Development</span>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div class="container cards">
        <div class="card">
          <div class="skill-level">
            <span>+</span>
            <h2>5</h2>
          </div>

          <div class="skill-meta">
            <h3>ERP Projects</h3>
            <span>Microsoft Dynamics AX (Axapta), IBM AS400, Leo Textile</span>
          </div>
        </div>

        <div class="card">
          <div class="skill-level">
            <span>+</span>
            <h2>10</h2>
          </div>

          <div class="skill-meta">
            <h3>Web Projects</h3>
            <span>Entegrasyon, Web Uygulamaları, API Projeleri</span>
          </div>
        </div>
      </div>

      <div class="container">
        <ol class="timeline">
          <li>
            <p class="line">Experiences</p>
            <span class="point"></span>
            <p class="description">
              Senior Software Developer - Sirikcioglu Group
            </p>
            <span class="date">Today - January 2018</span>
          </li>

          <li>
            <span class="point"></span>
            <p class="description">
              Software Consulting - Turizmin Geleceği Platformu
            </p>
            <span class="date">June 2017 - June 2018</span>
          </li>

          <li>
            <span class="point"></span>
            <p class="description">Software Developer - Markadabra Dijital</p>
            <span class="date">December 2017 - May 2018</span>
          </li>

          <li>
            <span class="point"></span>
            <p class="description">
              Business Intelligence Developr - Kipas Group
            </p>
            <span class="date">August 2016 - December 2017</span>
          </li>
        </ol>
      </div>

      <br />
      <br />

      <div class="container">
        <ol class="timeline">
          <li>
            <p class="line">Education</p>
            <span class="point"></span>
            <p class="description">
              Management Information Systems - Anadolu University
            </p>
            <span class="date">September 2017 - June 2019</span>
          </li>

          <li>
            <span class="point"></span>
            <p class="description">Computer Programming - KSU</p>
            <span class="date">September 2014 - June 2018</span>
          </li>
        </ol>
      </div>

      <br />
      <br />

      <footer class="container">
        <span>
          <a href="https://github.com/ozgursarioglan/resume-react">
            {" "}
            developed using react.js 💻
          </a>{" "}
          to be or not to be{" "}
        </span>
      </footer>
    </div>
  );
}

export default App;
