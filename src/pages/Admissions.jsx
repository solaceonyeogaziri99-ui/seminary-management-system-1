import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import { programs } from '../data/programs';
import './Admissions.css';

const STEPS = [
  { title: 'Submit Your Application', detail: 'Complete the online application and pay the application fee.' },
  { title: 'Provide Supporting Documents', detail: 'Transcripts, a personal statement, and two letters of recommendation.' },
  { title: 'Interview', detail: 'Meet with our admissions committee, in person or by video call.' },
  { title: 'Decision & Enrollment', detail: 'Receive your decision and, if accepted, complete enrollment steps.' },
];

function Admissions() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Begin your journey at Aldergate"
        description="Everything you need to know about applying, from requirements to next steps."
      />

      <section className="section">
        <div className="container grid grid--2">
          <div>
            <h2>Admission Requirements</h2>
            <ul className="admissions-list">
              <li>Bachelor's degree from an accredited institution</li>
              <li>Minimum 3.0 cumulative GPA</li>
              <li>Personal statement of calling</li>
              <li>Two letters of recommendation</li>
              <li>Official academic transcripts</li>
            </ul>
          </div>
          <div>
            <h2>Important Information</h2>
            <ul className="admissions-list">
              <li>Fall term application deadline: June 1</li>
              <li>Spring term application deadline: November 1</li>
              <li>Application fee: $50 (waivers available)</li>
              <li>Financial aid and scholarships available</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">How It Works</span>
            <h2>Application Process</h2>
          </div>
          <div className="steps">
            {STEPS.map((step, index) => (
              <div className="step" key={step.title}>
                <span className="step__number">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Programs</span>
            <h2>Available Programs</h2>
          </div>
          <ul className="admissions-programs">
            {programs.map((program) => (
              <li key={program.id}>{program.name}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner">
          <h2>Ready to take the next step?</h2>
          <p>Our admissions team is here to help you every step of the way.</p>
          {/* Application functionality intentionally not implemented yet. */}
          <Button variant="primary">Apply Now</Button>
        </div>
      </section>
    </>
  );
}

export default Admissions;
