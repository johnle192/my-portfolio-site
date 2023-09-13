import About from 'components/About';
import Resume from 'components/Resume';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App primary-text flex flex-row overflow-auto">
        <Nav />
        <main className="App-main">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
