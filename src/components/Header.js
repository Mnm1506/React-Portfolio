import React from 'react';

function Header() {
    return (
        <div>
            <section className="s1">
      <div className="main-container">
        <div className="greeting-wrapper">
          <h1>Hello! I'm Moussa.</h1>
          <h6>Email : moussanm2017@outlook.com</h6>
          <h6>Phone : 210-291-1303</h6>
        </div>
        <div className="intro-wrapper">
        </div>
        <div className="left-column">
          <img id="profile_pic" src="assets\images\profile.png" alt="profile" />
        </div>
        <div className="right-column">
          <div id="preview-shadow">
            <div id="preview">
              <div id="corner-tl" className="corner"></div>
              <div id="corner-tr" className="corner"></div>
              <h3>What I Do</h3>
              <p>
                I'm studying full stack web developement and i love to learn new technologies.
                <a href="assets/My-Resume/Moussa-Nait-Merabet.pdf" >View My Resume</a>
              </p>
              <div id="corner-br" className="corner"></div>
              <div id="corner-bl" className="corner"></div>
            </div>
          </div>
        </div>
      </div>
  </section>
  <section className="s2">
    <div className="main-container">
      <div className="about-wrapper">
        <div className="about-me">
          <h4>More About Me</h4>
          <p>
            My name is MOUSSA, I am currently a student at UTSA coding bootcamp,
            doing my best to learn and assimilate as much as i possibly can so that one day i can become a decent
            fullstack web developer.
            After working in the manufacturing industry for the past 6 years, i have decided to make a career change and
            invest my time and efforts in learning new and more challenging skills in web development, in which i always
            had more interest.
            I'm passionate about software development, and I love to explore
            and apply new technologies to personal projects.
            I spend most of my free time learning new concepts, practices,
            frameworks, etc.
          </p>
        </div>
        <div className="skills">
          <h4>Skills</h4>
          <p>
            Fullstack web developer
          </p>
          <div id="skills">
            <ul>
              <li>HTML/CSS</li>
              <li>Bootstrap</li>
              <li>Javascript</li>
              <li>jQuery</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
            <ul>
              <li>Git</li>
              <li>Heroku</li>
              <li>React</li>
            </ul>
          </div>
        </div>
        <div className="social-links">
          <a rel="noopener" href="https://github.com/Mnm1506" >
            <img id="img" src="assets\images\github.png" alt="github" /><br></br>My Github
          </a>
          <a rel="noopener" href="https://www.linkedin.com/in/moussa-nait-merabet/" >
            <img id="img" src="assets\images\linkedin.png" alt="linkedIn" /><br></br>My LinkedIn
          </a>
          <a href="assets\My-Resume\Moussa-Nait-Merabet.pdf" >
            <img id="img" rel="noopener" src="assets/images/Resume.jpg" alt="Resume"></img><br></br>My Resume</a>
        </div>
      </div>
    </div>
  </section>
  </div>
        
    )
}

export default Header;