import React from 'react';
import logo from 'logo.svg';
import 'App.css';
import About from 'components/About'
import Contact from 'components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="default-container">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </div>
        <About />
        <Contact />
      </header>
    </div>
  );
}

export default App;
