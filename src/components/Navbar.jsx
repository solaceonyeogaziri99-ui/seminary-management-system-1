import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';

// Centralizing nav links in one array means adding/removing a page
// later is a one-line change, not an edit in three different places.
const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Faculty', path: '/faculty' },
  { label: 'News', path: '/news' },
  { label: 'Contact', path: '/contact' },
];

function Navbar() {
  // React concept: useState holds UI state that changes over time.
  // Here it tracks whether the mobile menu is open. React re-renders
  // the component automatically whenever setIsOpen is called.
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__brand" onClick={closeMenu}>
          <span className="navbar__brand-mark">✝</span>
          <span>
            Aldergate
            <br />
            <small>Theological Seminary</small>
          </span>
        </NavLink>

        {/* NavLink (vs. plain Link) automatically adds an "active"
            class to whichever link matches the current URL, which
            is why it's used here instead of Link. */}
        <nav className={`navbar__links ${isOpen ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="navbar__portal-btn">
            <Button to="/login" variant="secondary">
              Student Portal
            </Button>
          </div>
        </nav>

        <button
          className="navbar__toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
