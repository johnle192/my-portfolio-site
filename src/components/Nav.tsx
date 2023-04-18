import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Contact from './Contact';

const Nav: FC = () => {
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
        <li>
          <NavLink to="/">
            <h3 className="headline-small">About</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume">
            <h3 className="headline-small">Resume</h3>
          </NavLink>
        </li>
      </ul>
      <Contact />
    </div>
  );
};

export default Nav;
