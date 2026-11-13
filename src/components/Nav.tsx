import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';

// Single source for the nav links: the desktop bar, the mobile menu and the
// footer all render from this list.
export const navItems = [
  { to: '/', label: 'About' },
  { to: '/resume', label: 'Resume' }
];

// NavLink passes isActive, so the current page is styled without tracking
// it in state.
export const navLinkClass = ({ isActive }: { isActive: boolean }): string =>
  isActive
    ? 'text-primary underline decoration-2 underline-offset-8'
    : 'text-on-surface-variant hover:text-primary';

const Nav: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="border-b border-outline-variant">
      <nav className="max-w-2xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink
          to="/"
          className="font-title-large text-title-large text-on-surface"
          onClick={() => setIsMenuOpen(false)}
        >
          John Le
        </NavLink>
        <ul className="hidden md:flex gap-8 list-none p-0 m-0 font-title-medium text-title-medium">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} end className={navLinkClass}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="md:hidden -mr-3 p-3 text-2xl text-on-surface-variant"
          aria-label="Menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((prevState) => !prevState)}
        >
          <i className="fa-solid fa-bars" />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`mobile-menu md:hidden overflow-hidden ${
          isMenuOpen ? 'max-h-screen visible' : 'max-h-0 invisible'
        }`}
      >
        <ul className="list-none m-0 px-6 pb-4 font-title-medium text-title-medium">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end
                className={(state) => `block py-3 ${navLinkClass(state)}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
