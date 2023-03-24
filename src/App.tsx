import 'App.css';
import About from 'components/About';
import Contact from 'components/Contact';
import Resume from 'components/Resume';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main className="App-main">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          <Contact />
        </main>
      </div>
    </BrowserRouter>
  );
}
