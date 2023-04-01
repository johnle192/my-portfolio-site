import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Contact from './Contact';

const Nav: FC = () => {
  return (
    <div className="nav-container m-12">
      <h1 className="nav-header headline-large">
        <NavLink to="/">John Le</NavLink>
      </h1>
      <ul className="nav-links label-large">
        <li>
          <NavLink to="/">About</NavLink>
        </li>
        <li>
          <NavLink to="/resume">Resume</NavLink>
        </li>
      </ul>
      <Contact />
    </div>
  );
};

export default Nav;
