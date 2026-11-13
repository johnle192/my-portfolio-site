import About from 'components/About';
import Resume from 'components/Resume';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App min-h-screen flex flex-col text-on-surface">
        <Nav />
        <main className="App-main flex-1 w-full max-w-2xl mx-auto px-6 py-10 md:py-16">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
