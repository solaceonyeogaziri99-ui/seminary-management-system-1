import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ArchMotif from '../components/ArchMotif';
import './Login.css';

/**
 * Login
 * Visual-only login screen. Deliberately NOT wrapped in MainLayout —
 * a login screen typically doesn't need the full public nav/footer.
 *
 * There is still no real authentication: nothing is verified, no
 * token is issued, and no protected-route logic exists yet. Submitting
 * simply navigates to /student/dashboard so Phase 2's portal is
 * reachable end-to-end. Wiring this up to a real backend (checking
 * credentials, storing a session, guarding routes so someone can't
 * just type the URL) is explicitly future work.
 */
function Login() {
  const [formData, setFormData] = useState({ identifier: '', password: '', remember: false });
  const [showForgotNotice, setShowForgotNotice] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/student/dashboard');
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-card__brand">
          <ArchMotif className="login-card__motif" />
          <h1>Aldergate</h1>
          <p>Student &amp; Faculty Portal</p>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="identifier">Student ID or Email</label>
          <input
            id="identifier"
            name="identifier"
            type="text"
            value={formData.identifier}
            onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />

          <div className="login-card__row">
            <label className="login-card__checkbox">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />
              Remember me
            </label>
            <button
              type="button"
              className="login-card__link-btn"
              onClick={() => setShowForgotNotice(true)}
            >
              Forgot password?
            </button>
          </div>

          {showForgotNotice && (
            <p className="login-card__notice">
              Password reset isn't available yet — this will be connected to a real account system in a later phase.
            </p>
          )}

          <button type="submit" className="btn btn--primary login-card__submit">
            Log In
          </button>
        </form>

        <Link to="/" className="login-card__back">&larr; Return to website</Link>
      </div>
    </div>
  );
}

export default Login;
