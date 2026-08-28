import { useState } from 'react';
import usePageTitle from '../../hooks/usePageTitle';
import NotificationCard from '../../components/student/NotificationCard';
import { notifications as initialNotifications } from '../../data/mockStudentData';

function StudentNotifications() {
  usePageTitle('Notifications');

  // Local copy so marking as read updates the UI immediately. In a
  // later phase, markAsRead would also send a request to the backend
  // to persist the change.
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="student-notifications">
      <div className="page-toolbar">
        <p className="page-meta">
          {unreadCount > 0
            ? `You have ${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}.`
            : 'You\u2019re all caught up.'}
        </p>
      </div>

      <div className="dashboard-notifications">
        {notifications.map((n) => (
          <NotificationCard key={n.id} notification={n} onMarkRead={markAsRead} />
        ))}
      </div>
    </div>
  );
}

export default StudentNotifications;
