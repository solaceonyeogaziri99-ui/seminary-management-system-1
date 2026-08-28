import './NotificationCard.css';

/**
 * NotificationCard
 * `onMarkRead` is a callback passed down from the page that owns the
 * notifications state (StudentNotifications / StudentDashboard).
 * This component never mutates data itself — it just tells its
 * parent "the student read this one" and lets the parent update
 * state. Keeping state ownership at the page level (not inside this
 * card) is what makes the same card work in a read-only context
 * (Dashboard preview) and an interactive one (Notifications page).
 */
function NotificationCard({ notification, onMarkRead }) {
  return (
    <div className={`notification-card ${notification.read ? '' : 'notification-card--unread'}`}>
      <div className="notification-card__body">
        <div className="notification-card__top">
          <h3>{notification.title}</h3>
          {!notification.read && <span className="notification-card__dot" aria-hidden="true" />}
        </div>
        <p>{notification.message}</p>
        <span className="notification-card__date">{notification.date}</span>
      </div>

      {onMarkRead && !notification.read && (
        <button className="notification-card__action" onClick={() => onMarkRead(notification.id)}>
          Mark as read
        </button>
      )}
    </div>
  );
}

export default NotificationCard;
