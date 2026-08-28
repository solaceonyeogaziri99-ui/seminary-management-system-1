import { NavLink, useNavigate } from 'react-router-dom';
import './StudentSidebar.css';

// One array driving the nav means adding a portal page later (e.g.
// "Timetable") is a one-line change here, not a hunt through JSX.
const NAV_ITEMS = [
  { label: 'Dashboard', path: '/student/dashboard', icon: '\u2302' },
  { label: 'My Profile', path: '/student/profile', icon: '\u263A' },
  { label: 'Courses', path: '/student/courses', icon: '\u2317' },
  { label: 'Payments', path: '/student/payments', icon: '\u25A3' },
  { label: 'Receipts', path: '/student/receipts', icon: '\u2637' },
  { label: 'Results', path: '/student/results', icon: '\u2611' },
  { label: 'Notifications', path: '/student/notifications', icon: '\u2709' },
];

/**
 * StudentSidebar
 * `isOpen` / `onClose` control the mobile drawer behavior — on
 * desktop the sidebar is always visible (CSS handles that), on
 * mobile it slides in/out based on this prop, controlled by
 * StudentLayout (the single source of truth for "is the drawer open").
 */
function StudentSidebar({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // No real auth exists yet, so "logging out" just means sending
    // the student back to the login screen. If we introduce an auth
    // Context in a later phase, this is where we'd clear it.
    onClose?.();
    navigate('/login');
  };

  return (
    <>
      {/* Backdrop only renders (and is only clickable) on mobile when open */}
      {isOpen && <div className="sidebar-backdrop" onClick={onClose} aria-hidden="true" />}

      <aside className={`student-sidebar ${isOpen ? 'is-open' : ''}`}>
        <div className="student-sidebar__brand">
          <span className="student-sidebar__mark">{'\u271D'}</span>
          <div>
            <strong>Aldergate</strong>
            <span>Student Portal</span>
          </div>
        </div>

        <nav className="student-sidebar__nav">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `student-sidebar__link ${isActive ? 'student-sidebar__link--active' : ''}`
              }
              onClick={onClose}
            >
              <span className="student-sidebar__icon" aria-hidden="true">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button className="student-sidebar__logout" onClick={handleLogout}>
          <span aria-hidden="true">{'\u2192'}</span> Logout
        </button>
      </aside>
    </>
  );
}

export default StudentSidebar;
