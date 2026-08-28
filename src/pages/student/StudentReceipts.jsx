import { useState } from 'react';
import usePageTitle from '../../hooks/usePageTitle';
import { currentStudent, receipts } from '../../data/mockStudentData';
import './StudentReceipts.css';

function StudentReceipts() {
  usePageTitle('Receipts');

  // Tracks which receipt (if any) is currently open in the detail
  // view/modal. null means the list view is showing.
  const [activeReceipt, setActiveReceipt] = useState(null);

  const handlePrint = () => {
    // window.print() uses the browser's native print dialog — no
    // backend PDF generation needed for this phase.
    window.print();
  };

  return (
    <div className="student-receipts">
      <div className="receipts-list">
        {receipts.map((receipt) => (
          <div className="receipt-row" key={receipt.id}>
            <div>
              <p className="receipt-row__number">{receipt.receiptNumber}</p>
              <p className="receipt-row__desc">{receipt.description}</p>
            </div>
            <p className="receipt-row__amount">${receipt.amount.toLocaleString()}</p>
            <p className="receipt-row__date">{receipt.date}</p>
            <span className="status-badge status-badge--paid">{receipt.status}</span>
            <button className="btn btn--outline" onClick={() => setActiveReceipt(receipt)}>
              View Receipt
            </button>
          </div>
        ))}
      </div>

      {activeReceipt && (
        <div className="modal-backdrop" onClick={() => setActiveReceipt(null)}>
          <div
            className="modal receipt-detail"
            role="dialog"
            aria-modal="true"
            aria-labelledby="receipt-title"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id="receipt-title">Payment Receipt</h3>
            <dl className="receipt-detail__grid">
              <div><dt>Receipt Number</dt><dd>{activeReceipt.receiptNumber}</dd></div>
              <div><dt>Student Name</dt><dd>{currentStudent.fullName}</dd></div>
              <div><dt>Student ID</dt><dd>{currentStudent.id}</dd></div>
              <div><dt>Description</dt><dd>{activeReceipt.description}</dd></div>
              <div><dt>Amount</dt><dd>${activeReceipt.amount.toLocaleString()}</dd></div>
              <div><dt>Payment Date</dt><dd>{activeReceipt.date}</dd></div>
              <div><dt>Status</dt><dd>{activeReceipt.status}</dd></div>
            </dl>
            <div className="receipt-detail__actions">
              <button className="btn btn--primary" onClick={handlePrint}>
                Print Receipt
              </button>
              <button className="btn btn--outline" onClick={() => setActiveReceipt(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentReceipts;
