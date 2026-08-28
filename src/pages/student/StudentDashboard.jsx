import { Link } from 'react-router-dom';
import usePageTitle from '../../hooks/usePageTitle';
import DashboardCard from '../../components/student/DashboardCard';
import PaymentTable from '../../components/student/PaymentTable';
import ResultTable from '../../components/student/ResultTable';
import NotificationCard from '../../components/student/NotificationCard';
import {
  currentStudent,
  dashboardStats,
  payments,
  results,
  notifications,
} from '../../data/mockStudentData';
import './StudentDashboard.css';

function StudentDashboard() {
  usePageTitle('Dashboard');

  return (
    <div className="student-dashboard">
      {/* WELCOME */}
      <section className="welcome-banner">
        <div>
          <h2>Welcome back, {currentStudent.firstName}!</h2>
          <p>
            {currentStudent.program} &middot; {currentStudent.department} &middot;{' '}
            {currentStudent.academicSession}
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="dashboard-stats">
        <DashboardCard label="Current GPA" value={dashboardStats.currentGPA.toFixed(2)} icon={'\u2606'} />
        <DashboardCard label="Registered Courses" value={dashboardStats.registeredCourses} icon={'\u2317'} />
        <DashboardCard
          label="Outstanding Fees"
          value={`$${dashboardStats.outstandingFees}`}
          icon={'\u26A0'}
          tone="warning"
        />
        <DashboardCard label="Completed Courses" value={dashboardStats.completedCourses} icon={'\u2713'} />
      </section>

      {/* ACADEMIC SUMMARY */}
      <section className="dashboard-panel">
        <h3>Academic Summary</h3>
        <div className="summary-grid">
          <div><span>Current Semester</span><strong>{currentStudent.currentSemester}</strong></div>
          <div><span>Academic Session</span><strong>{currentStudent.academicSession}</strong></div>
          <div><span>Level</span><strong>{currentStudent.level}</strong></div>
          <div><span>Program</span><strong>{currentStudent.program}</strong></div>
          <div><span>Department</span><strong>{currentStudent.department}</strong></div>
        </div>
      </section>

      <div className="dashboard-columns">
        {/* RECENT PAYMENTS */}
        <section className="dashboard-panel">
          <div className="dashboard-panel__header">
            <h3>Recent Payments</h3>
            <Link to="/student/payments">View all</Link>
          </div>
          <PaymentTable rows={payments.slice(0, 3)} />
        </section>

        {/* RECENT RESULTS */}
        <section className="dashboard-panel">
          <div className="dashboard-panel__header">
            <h3>Recent Results</h3>
            <Link to="/student/results">View all</Link>
          </div>
          <ResultTable rows={results.slice(0, 3)} />
        </section>
      </div>

      {/* NOTIFICATIONS */}
      <section className="dashboard-panel">
        <div className="dashboard-panel__header">
          <h3>Notifications</h3>
          <Link to="/student/notifications">View all</Link>
        </div>
        <div className="dashboard-notifications">
          {notifications.slice(0, 3).map((n) => (
            <NotificationCard key={n.id} notification={n} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default StudentDashboard;
