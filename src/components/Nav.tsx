import React, { FC, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Contact from './Contact';

interface NavProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Nav: FC<NavProps> = ({ isMenuOpen, toggleMenu }) => {
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

  const setNavItemAndClose = (menuItem: string): void => {
    setActiveNavItem(menuItem);
    toggleMenu();
  };

  return (
    <>
      <div className="nav-container hidden md:block p-12 shadow-xl primary-container sticky top-0 h-screen">
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
        <ul className="nav-links label-large list-none p-0 m-0">
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
        <div className={`text-secondary body-small absolute bottom-0 my-4`}>
          <div>Last updated:</div>
          <div>{lastModified}</div>
        </div>
      </div>
      <div className="mobile-nav-container md:hidden w-full flex flex-col">
        <div className="mobile-header flex flex-row items-center justify-between primary-container">
          <div className="p-4">
            <h1 className="nav-header headline-large">
              <NavLink to="/" onClick={() => setActiveNavItem('about')}>
                John Le
              </NavLink>
            </h1>
          </div>
          <div role="button" className="mobile-menu-icon" onClick={toggleMenu}>
            <i className="fa-solid fa-bars p-4" />
          </div>
        </div>

        <div
          className={`mobile-menu flex flex-col items-center justify-center primary-container overflow-hidden ${
            isMenuOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <ul className="nav-links label-large list-none p-0 m-0 flex flex-col justify-center">
            <li>
              <NavLink
                to="/"
                className={`headline-small hover:text-white ${
                  activeNavItem === 'about' ? 'text-white' : ''
                }`}
                onClick={() => setNavItemAndClose('about')}
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
                onClick={() => setNavItemAndClose('resume')}
              >
                Resume
              </NavLink>
            </li>
          </ul>
          <Contact />
          <div className={`text-secondary body-small pt-2 pb-4`}>
            <div>Last updated:</div>
            <div>{lastModified}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
