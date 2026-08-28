import { useState } from 'react';
import usePageTitle from '../../hooks/usePageTitle';
import ResultTable from '../../components/student/ResultTable';
import { results, resultSummary } from '../../data/mockStudentData';
import './StudentResults.css';

// In Phase 1/2 there's only one mock result set, so the selectors
// below are visual/interactive but don't yet filter real data across
// multiple sessions. Once a backend exists, changing these selectors
// would trigger a new fetch for that session/semester's results.
const SESSIONS = ['2025/2026', '2024/2025'];
const SEMESTERS = ['First Semester', 'Second Semester'];

function StudentResults() {
  usePageTitle('Results');

  const [session, setSession] = useState(SESSIONS[0]);
  const [semester, setSemester] = useState(SEMESTERS[1]);

  const handlePrint = () => window.print();

  return (
    <div className="student-results">
      <div className="results-toolbar">
        <div className="results-selectors">
          <div>
            <label htmlFor="session-select">Academic Session</label>
            <select id="session-select" value={session} onChange={(e) => setSession(e.target.value)}>
              {SESSIONS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="semester-select">Semester</label>
            <select id="semester-select" value={semester} onChange={(e) => setSemester(e.target.value)}>
              {SEMESTERS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
        <button className="btn btn--outline" onClick={handlePrint}>
          Print Result
        </button>
      </div>

      <ResultTable rows={results} />

      <div className="results-summary">
        <div>
          <span>Semester GPA</span>
          <strong>{resultSummary.semesterGPA.toFixed(2)}</strong>
        </div>
        <div>
          <span>CGPA</span>
          <strong>{resultSummary.cgpa.toFixed(2)}</strong>
        </div>
        <div>
          <span>Total Units</span>
          <strong>{resultSummary.totalUnits}</strong>
        </div>
      </div>
    </div>
  );
}

export default StudentResults;
