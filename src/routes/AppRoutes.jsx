import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import StudentLayout from '../layouts/StudentLayout';

import Home from '../pages/Home';
import About from '../pages/About';
import Programs from '../pages/Programs';
import Admissions from '../pages/Admissions';
import Faculty from '../pages/Faculty';
import News from '../pages/News';
import Events from '../pages/Events';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

import StudentDashboard from '../pages/student/StudentDashboard';
import StudentProfile from '../pages/student/StudentProfile';
import StudentCourses from '../pages/student/StudentCourses';
import StudentPayments from '../pages/student/StudentPayments';
import StudentReceipts from '../pages/student/StudentReceipts';
import StudentResults from '../pages/student/StudentResults';
import StudentNotifications from '../pages/student/StudentNotifications';

/**
 * AppRoutes
 * Every public page is wrapped in MainLayout individually (rather
 * than wrapping <Routes> as a whole) so that later, when a Login-
 * protected route needs a different layout (e.g. a dashboard shell
 * with no public navbar), it's a one-line change on just that route.
 *
 * The Login page is included here too, but note it renders WITHOUT
 * MainLayout — a login screen typically shouldn't show the full
 * public site navigation.
 */
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/about" element={<MainLayout><About /></MainLayout>} />
      <Route path="/programs" element={<MainLayout><Programs /></MainLayout>} />
      <Route path="/admissions" element={<MainLayout><Admissions /></MainLayout>} />
      <Route path="/faculty" element={<MainLayout><Faculty /></MainLayout>} />
      <Route path="/news" element={<MainLayout><News /></MainLayout>} />
      <Route path="/events" element={<MainLayout><Events /></MainLayout>} />
      <Route path="/gallery" element={<MainLayout><Gallery /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
      <Route path="/login" element={<Login />} />

      {/*
        Nested routing: one parent <Route> renders StudentLayout, and
        every child route below renders inside StudentLayout's
        <Outlet /> instead of each needing "<StudentLayout><Page /></StudentLayout>"
        repeated seven times. This is the payoff of the layout pattern
        set up in Phase 1 — swapping HOW pages are wrapped doesn't
        require touching the page components themselves.

        The index route redirects bare "/student" to the dashboard,
        since there's no meaningful page to show at "/student" itself.
      */}
      <Route path="/student" element={<StudentLayout />}>
        <Route index element={<Navigate to="/student/dashboard" replace />} />
        <Route path="dashboard" element={<StudentDashboard />} />
        <Route path="profile" element={<StudentProfile />} />
        <Route path="courses" element={<StudentCourses />} />
        <Route path="payments" element={<StudentPayments />} />
        <Route path="receipts" element={<StudentReceipts />} />
        <Route path="results" element={<StudentResults />} />
        <Route path="notifications" element={<StudentNotifications />} />
      </Route>

      <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
    </Routes>
  );
}

export default AppRoutes;
