import React, { FC, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Contact from './Contact';

const Nav: FC = () => {
  const [activeNavItem, setActiveNavItem] = useState<string>('about');
  const location = useLocation();
  const lastModified = new Date(document.lastModified).toLocaleString('en-US', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'UTC',
    timeZoneName: 'short'
  });

  useEffect(() => {
    const pathname = location.pathname;
    setActiveNavItem(pathname === '/' ? 'about' : pathname.substring(1));
  }, [location]);

  return (
    <div className="nav-container p-12 shadow-xl primary-container relative">
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
      <div className={`text-secondary body-small absolute bottom-0 m-4`}>
        <div>Last updated:</div>
        <div>{lastModified}</div>
      </div>
    </div>
  );
};

export default Nav;
