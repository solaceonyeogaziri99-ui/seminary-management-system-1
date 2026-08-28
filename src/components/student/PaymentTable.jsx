import './PaymentTable.css';

/**
 * PaymentTable
 * Renders a list of payment-like records (reference, description,
 * amount, date, status). Reused on the Dashboard (recent payments),
 * Payments page (full history), so the row markup and status-badge
 * logic only exists once.
 *
 * On narrow screens this becomes a stacked card layout via CSS
 * (see PaymentTable.css) rather than a horizontally scrolling table,
 * which is easier to read on a phone.
 */
function PaymentTable({ rows }) {
  return (
    <div className="payment-table" role="table">
      <div className="payment-table__header" role="row">
        <span role="columnheader">Reference</span>
        <span role="columnheader">Description</span>
        <span role="columnheader">Amount</span>
        <span role="columnheader">Date</span>
        <span role="columnheader">Status</span>
      </div>

      {rows.map((row) => (
        <div className="payment-table__row" role="row" key={row.id}>
          <span data-label="Reference" role="cell">{row.reference}</span>
          <span data-label="Description" role="cell">{row.description || row.feeType}</span>
          <span data-label="Amount" role="cell">${row.amount.toLocaleString()}</span>
          <span data-label="Date" role="cell">{row.date}</span>
          <span data-label="Status" role="cell">
            <span className={`status-badge status-badge--${row.status.toLowerCase()}`}>
              {row.status}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default PaymentTable;
