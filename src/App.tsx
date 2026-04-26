import About from 'components/About';
import Resume from 'components/Resume';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <BrowserRouter>
      <div className="App primary-text flex md:flex-row flex-col overflow-auto">
        <Nav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        {/*<main className={`App-main ${isMenuOpen ? 'mt-24' : 'mt-0'}`}>*/}
        <main className={`App-main`}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
