import { useState } from 'react';
import usePageTitle from '../../hooks/usePageTitle';
import PaymentTable from '../../components/student/PaymentTable';
import { feeSummary, payments } from '../../data/mockStudentData';
import './StudentPayments.css';

function StudentPayments() {
  usePageTitle('Payments');

  // Controls whether the "payment integration coming soon" modal is
  // visible. This is the entire extent of what the "Pay School Fees"
  // button does in Phase 2 — no charge is ever processed.
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="student-payments">
      <section className="fee-summary">
        <div>
          <span>Total Fees</span>
          <strong>${feeSummary.totalFees.toLocaleString()}</strong>
        </div>
        <div>
          <span>Amount Paid</span>
          <strong>${feeSummary.amountPaid.toLocaleString()}</strong>
        </div>
        <div className="fee-summary__outstanding">
          <span>Outstanding Balance</span>
          <strong>${feeSummary.outstandingBalance.toLocaleString()}</strong>
        </div>
      </section>

      <div className="page-toolbar">
        <h3>Payment History</h3>
        <button className="btn btn--primary" onClick={() => setShowModal(true)}>
          Pay School Fees
        </button>
      </div>

      <PaymentTable rows={payments} />

      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="payment-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id="payment-modal-title">Payment Integration Coming Soon</h3>
            <p>
              Online fee payment is not yet available. This feature will be connected to a
              secure payment provider in a future development phase. No charges have been made.
            </p>
            <button className="btn btn--secondary" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentPayments;
