import './ResultTable.css';

/**
 * ResultTable
 * Same responsive pattern as PaymentTable: a CSS grid on desktop,
 * stacked labeled rows on mobile. Kept as a separate component
 * (rather than reusing PaymentTable) because the columns are
 * genuinely different data — forcing one generic "DataTable" to
 * handle both would need a lot of prop plumbing for little benefit
 * at this scale.
 */
function ResultTable({ rows }) {
  return (
    <div className="result-table" role="table">
      <div className="result-table__header" role="row">
        <span role="columnheader">Course Code</span>
        <span role="columnheader">Course Title</span>
        <span role="columnheader">Units</span>
        <span role="columnheader">Score</span>
        <span role="columnheader">Grade</span>
        <span role="columnheader">Grade Point</span>
      </div>

      {rows.map((row) => (
        <div className="result-table__row" role="row" key={row.id}>
          <span data-label="Course Code" role="cell">{row.code}</span>
          <span data-label="Course Title" role="cell">{row.title}</span>
          <span data-label="Units" role="cell">{row.units}</span>
          <span data-label="Score" role="cell">{row.score}</span>
          <span data-label="Grade" role="cell">
            <span className="grade-badge">{row.grade}</span>
          </span>
          <span data-label="Grade Point" role="cell">{row.gradePoint.toFixed(1)}</span>
        </div>
      ))}
    </div>
  );
}

export default ResultTable;
