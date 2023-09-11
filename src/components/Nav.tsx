import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Contact from './Contact';

const Nav: FC = () => {
  const [activeNavItem, setActiveNavItem] = useState<string>('about');

  return (
    <div className="nav-container p-12 shadow-xl primary-container">
      <div className="h-32 w-32 rounded-full overflow-hidden shadow-xl">
        <img
          src="/images/john.jpg"
          alt="John Le"
          className="h-full-w-full object-cover"
        />
      </div>
      <h1 className="nav-header headline-large">
        <NavLink to="/" onClick={() => setActiveNavItem('about')}>
          John Le
        </NavLink>
      </h1>
      <ul className="nav-links label-large">
        <li>
          <NavLink
            to="/"
            className={`headline-small hover:text-white ${
              activeNavItem === 'about' ? 'text-white' : ''
            }`}
            onClick={() => setActiveNavItem('about')}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resume"
            className={`headline-small hover:text-white ${
              activeNavItem === 'resume' ? 'text-white' : ''
            }`}
            onClick={() => setActiveNavItem('resume')}
          >
            Resume
          </NavLink>
        </li>
      </ul>
      <Contact />
    </div>
  );
};

export default Nav;
