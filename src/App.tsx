import 'App.css';
import About from 'components/About';
import Contact from 'components/Contact';
import Resume from 'components/Resume';

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <About />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;
