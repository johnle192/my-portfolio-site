import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Contact from './Contact';

const Nav: FC = () => {
  const [activeNavItem, setActiveNavItem] = useState<string>('about');

  return (
    <div className="nav-container p-12 shadow-xl primary-container">
      <h1 className="nav-header headline-large">
        <NavLink
          to="/"
          className={(isActive): string => (isActive ? 'secondary-text' : '')}
        >
          John Le
        </NavLink>
      </h1>
      <ul className="nav-links label-large">
        {/*TODO: figure out what else you want to do when active*/}
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
