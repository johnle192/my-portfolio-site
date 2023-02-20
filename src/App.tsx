import React from 'react';
import logo from 'logo.svg';
import 'App.css';
import About from 'components/About';
import Contact from 'components/Contact';
import Resume from 'components/Resume';

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
      </header>

      <main className="App-main">
        <About />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;
