import './DashboardCard.css';

/**
 * DashboardCard
 * One small reusable card used 4x on the dashboard (GPA, registered
 * courses, outstanding fees, completed courses). `tone` lets a card
 * be visually flagged (e.g. outstanding fees in oxblood) without
 * duplicating the whole component.
 */
function DashboardCard({ label, value, icon, tone = 'default' }) {
  return (
    <div className={`dashboard-card dashboard-card--${tone}`}>
      <span className="dashboard-card__icon" aria-hidden="true">{icon}</span>
      <div>
        <p className="dashboard-card__value">{value}</p>
        <p className="dashboard-card__label">{label}</p>
      </div>
    </div>
  );
}

export default DashboardCard;
