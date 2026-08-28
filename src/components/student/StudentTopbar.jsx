import { useState } from 'react';
import { Link } from 'react-router-dom';
import { currentStudent, notifications } from '../../data/mockStudentData';
import './StudentTopbar.css';

/**
 * StudentTopbar
 * `pageTitle` is passed in by each page so the topbar always reflects
 * where the student currently is, without the topbar needing to know
 * about routing itself.
 * `onMenuClick` opens the mobile sidebar drawer (only shown < 960px).
 */
function StudentTopbar({ pageTitle, onMenuClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <header className="student-topbar">
      <div className="student-topbar__left">
        <button
          className="student-topbar__menu-btn"
          onClick={onMenuClick}
          aria-label="Open navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
        <h1>{pageTitle}</h1>
      </div>

      <div className="student-topbar__right">
        <Link to="/student/notifications" className="student-topbar__bell" aria-label={`Notifications, ${unreadCount} unread`}>
          <span aria-hidden="true">{'\u2709'}</span>
          {unreadCount > 0 && <span className="student-topbar__badge">{unreadCount}</span>}
        </Link>

        <div className="student-topbar__profile">
          <button
            className="student-topbar__profile-btn"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-haspopup="true"
            aria-expanded={menuOpen}
          >
            <img src={currentStudent.avatarUrl} alt="" className="student-topbar__avatar" />
            <span className="student-topbar__name-block">
              <strong>{currentStudent.fullName}</strong>
              <small>Student ID: {currentStudent.id}</small>
            </span>
          </button>

          {menuOpen && (
            <div className="student-topbar__dropdown" role="menu">
              <Link to="/student/profile" role="menuitem" onClick={() => setMenuOpen(false)}>
                My Profile
              </Link>
              <Link to="/login" role="menuitem" onClick={() => setMenuOpen(false)}>
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default StudentTopbar;
