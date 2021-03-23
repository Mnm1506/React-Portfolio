import React from 'react'

function Projects() {
    return (
        <div className="main-container">
            <h3> Some of my projects </h3>
            <div className="post-wrapper">
                <div className="post" id= "1">
                    <img className="thumbnail" src="assets\images\MyApp.png" alt="App imag"></img>
                    <div className="post-preview">
                        <h6 className="post-title">Better Weather</h6>
                        <div className="project-links">
                            <a rel="noopener" href="https://mnm1506.github.io/BETTER-WEATHER/">View Source Code</a>
                        </div>
                    </div>
                </div>
                <div className="post" id= "2">
                    <img className="thumbnail" src="assets\images\Capture.png" alt="App imag" ></img>
                    <div className="post-preview">
                        <h6 className="post-title">Password Generator</h6>
                        <div className="project-links">
                            <a rel="noopener" href="https://mnm1506.github.io/03-Password-Generator/">View Source
                Code</a>
                        </div>
                    </div>
                </div>
                <div className="post" id= "3">
                    <img className="thumbnail" src="assets\images\media.jpg" alt="App imag" ></img>
                    <div className="post-preview">
                        <h6 className="post-title">Work Day Scheduler</h6>
                        <div className="project-links">
                            <a rel="noopener" href="https://mnm1506.github.io/05-Work-Day-Scheduler/">View Source
                Code</a>
                        </div>
                    </div>
                </div>
                <div className="post" id= "4">
                    <img className="thumbnail" src="assets\images\sign-up-layout.jpg" alt="App imag" ></img>
                    <div className="post-preview">
                        <h6 className="post-title">Auto Mind</h6>
                        <div className="project-links">
                            <a rel="noopener" href="https://github.com/Mnm1506/AutoMind">View Source
                Code</a>
                        </div>
                    </div>
                </div>
                <div className="post" id= "5">
                    <img className="thumbnail" src="assets\images\burger.PNG" alt="App imag" ></img>
                    <div className="post-preview">
                        <h6 className="post-title">Eat Da Burger</h6>
                        <div className="project-links">
                            <a rel="noopener" href="https://github.com/Mnm1506/burger">View Source
                Code</a>
                        </div>
                    </div>
                </div>
                <div className="post" id= "6">
                    <img className="thumbnail" src="assets\images\portf.PNG" alt="App imag" ></img>
                    <div className="post-preview">
                        <h6 className="post-title">Updated Portfolio</h6>
                        <div className="project-links">
                            <a rel="noopener" href="https://github.com/Mnm1506/Updated-Portfolio">View Source
                Code</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Projects
