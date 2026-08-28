import { useState } from 'react';
import usePageTitle from '../../hooks/usePageTitle';
import { currentStudent, courses as initialCourses } from '../../data/mockStudentData';
import './StudentCourses.css';

function StudentCourses() {
  usePageTitle('Courses');

  // Local copy of the mock courses so registering/dropping updates
  // the UI. This never touches the original mockStudentData array —
  // in a later phase this state would instead be populated by an API
  // response and updates would POST back to the server.
  const [courses, setCourses] = useState(initialCourses);

  const toggleRegistration = (id) => {
    setCourses((prev) =>
      prev.map((course) =>
        course.id === id
          ? { ...course, status: course.status === 'registered' ? 'available' : 'registered' }
          : course
      )
    );
  };

  const registeredCourses = courses.filter((c) => c.status === 'registered');
  const totalUnits = registeredCourses.reduce((sum, c) => sum + c.units, 0);

  return (
    <div className="student-courses">
      <div className="page-toolbar">
        <div>
          <p className="page-meta">
            Academic Session: <strong>{currentStudent.academicSession}</strong> &middot; Semester:{' '}
            <strong>{currentStudent.currentSemester}</strong>
          </p>
        </div>
      </div>

      <div className="courses-grid">
        {courses.map((course) => {
          const isRegistered = course.status === 'registered';
          return (
            <div className={`course-card ${isRegistered ? 'course-card--registered' : ''}`} key={course.id}>
              <div className="course-card__top">
                <span className="course-card__code">{course.code}</span>
                <span className={`status-badge status-badge--${isRegistered ? 'paid' : 'pending'}`}>
                  {isRegistered ? 'Registered' : 'Available'}
                </span>
              </div>
              <h3>{course.title}</h3>
              <p className="course-card__meta">
                {course.units} Units &middot; {course.lecturer}
              </p>
              <button
                className={`btn ${isRegistered ? 'btn--outline' : 'btn--primary'} course-card__btn`}
                onClick={() => toggleRegistration(course.id)}
              >
                {isRegistered ? 'Drop' : 'Register'}
              </button>
            </div>
          );
        })}
      </div>

      <div className="courses-summary">
        <div>
          <span>Total Registered Courses</span>
          <strong>{registeredCourses.length}</strong>
        </div>
        <div>
          <span>Total Credit Units</span>
          <strong>{totalUnits}</strong>
        </div>
      </div>
    </div>
  );
}

export default StudentCourses;
