import PageHeader from '../components/PageHeader';
import './About.css';

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Nearly a century of theological education"
        description="Learn about our history, our convictions, and the people who lead our community."
      />

      <section className="section">
        <div className="container about-block">
          <h2>Our History</h2>
          <p>
            Aldergate Theological Seminary was founded in 1928 by a small
            group of pastors who believed the region needed a school
            committed equally to academic rigor and practical ministry. What
            began as a single classroom above a parish hall has grown into a
            campus serving several hundred students from around the world,
            while holding fast to that founding conviction.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container grid grid--2">
          <div className="about-block">
            <h2>Mission</h2>
            <p>
              To prepare servant leaders through rigorous theological
              education grounded in Scripture, tradition, and reasoned
              reflection.
            </p>
          </div>
          <div className="about-block">
            <h2>Vision</h2>
            <p>
              A world in which faithful, well-formed leaders bring wisdom,
              justice, and hope to every community they serve.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">What We Value</span>
            <h2>Core Values</h2>
          </div>
          <div className="grid grid--3">
            <div className="about-block">
              <h3>Scriptural Fidelity</h3>
              <p>We take the study of Scripture seriously, in its original languages and historical context.</p>
            </div>
            <div className="about-block">
              <h3>Intellectual Honesty</h3>
              <p>We welcome hard questions and equip students to think, not merely repeat.</p>
            </div>
            <div className="about-block">
              <h3>Formation in Community</h3>
              <p>Character is shaped alongside others, not in isolation — so community life matters as much as coursework.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Leadership</span>
            <h2>Meet our leadership</h2>
            <p>A brief introduction to the people guiding the seminary's mission. Full profiles are available on the Faculty page.</p>
          </div>
          <div className="grid grid--3">
            <div className="about-block">
              <h3>Dr. Eleanor Marsh</h3>
              <p>Dean of Faculty, overseeing academic programs and curriculum.</p>
            </div>
            <div className="about-block">
              <h3>Rev. Dr. Thomas Reyes</h3>
              <p>President, responsible for institutional direction and community life.</p>
            </div>
            <div className="about-block">
              <h3>Rev. Daniel Whitfield</h3>
              <p>Director of Pastoral Formation, overseeing student ministry placements.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
