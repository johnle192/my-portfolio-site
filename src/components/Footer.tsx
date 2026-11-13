import { NavLink } from 'react-router-dom';
import Contact from './Contact';
import { navItems, navLinkClass } from './Nav';

export default function Footer() {
  const lastModified = new Date(document.lastModified).toLocaleString('en-US', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'UTC',
    timeZoneName: 'short'
  });

  return (
    <footer className="border-t border-outline-variant">
      <div className="max-w-2xl mx-auto px-6 py-8 flex flex-col items-center gap-4">
        <ul className="flex gap-8 list-none p-0 m-0 font-title-small text-title-small">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} end className={navLinkClass}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Contact />
        <div className="text-on-surface-variant font-body-small text-body-small">
          Last updated: {lastModified}
        </div>
      </div>
    </footer>
  );
}
