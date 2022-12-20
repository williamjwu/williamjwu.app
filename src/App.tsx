import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="App-div">
        <header className="App-header">About me</header>
        <p className="App-p">
          👋 Hi, I am a Software Engineer working at Bloomberg.
        </p>
      </div>

      <div className="App-div">
        <header className="App-header">Education</header>
        <h3 className="App-h3">University of Illinois at Urbana-Champaign</h3>
        <p className="App-p">B.S. in Mathematics and Computer Science</p>
      </div>

      <div className="App-div">
        <header className="App-header">Work Experience</header>

        <div>
          <h3 className="App-h3">Google - Software Engineer Intern</h3>
          <p className="App-p">
            👉 Rewrote a database emulator's transaction logic with a
            finite-state machine implementation
          </p>
          <p className="App-p">
            👉 Implemented a wound-wait algorithm to perform aggressive deadlock
            prevention
          </p>
        </div>

        <div>
          <h3 className="App-h3">Indeed - Software Engineer Intern</h3>
          <p className="App-p">👉 Migrated sign-in service to asynchronous</p>
          <p className="App-p">
            👉 Led engineering design review to discuss research findings and
            collected performance metrics
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
