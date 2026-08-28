import { Link } from 'react-router-dom';
import './Button.css';

/**
 * Button
 * One component handles every button/CTA on the site so styling
 * stays consistent. If `to` is given it renders a router <Link>
 * (internal navigation); otherwise a real <button> (for actions
 * like form submits, which don't navigate anywhere yet).
 *
 * variant: 'primary' | 'secondary' | 'outline'
 */
function Button({ to, onClick, type = 'button', variant = 'primary', children }) {
  const className = `btn btn--${variant}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
