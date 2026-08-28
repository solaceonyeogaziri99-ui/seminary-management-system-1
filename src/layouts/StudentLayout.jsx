import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import StudentSidebar from '../components/student/StudentSidebar';
import StudentTopbar from '../components/student/StudentTopbar';
import '../styles/studentShared.css';
import './StudentLayout.css';

/**
 * StudentLayout
 * This is the "shell" every student portal page renders inside —
 * exactly the pattern MainLayout established in Phase 1, just with a
 * sidebar instead of a top navbar (that's *why* Phase 1 built layouts
 * as a swappable concept instead of hardcoding one navbar everywhere).
 *
 * Uses React Router's <Outlet /> (nested routing) instead of the
 * children-prop pattern MainLayout used. Outlet is the more idiomatic
 * approach once you have several pages sharing one parent layout,
 * because the route config in AppRoutes.jsx can nest child routes
 * under one parent <Route> instead of repeating <StudentLayout> on
 * every single route.
 *
 * `pageTitle` isn't known here — each page passes its own title up
 * via a bit of context-free prop drilling isn't possible with Outlet,
 * so instead we use Outlet's `context` feature: each child page calls
 * useOutletContext() to read the setter and updates the title itself.
 */
function StudentLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState('Dashboard');

  return (
    <div className="student-layout">
      <StudentSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="student-layout__main">
        <StudentTopbar pageTitle={pageTitle} onMenuClick={() => setSidebarOpen(true)} />
        <div className="student-layout__content">
          <Outlet context={{ setPageTitle }} />
        </div>
      </div>
    </div>
  );
}

export default StudentLayout;
