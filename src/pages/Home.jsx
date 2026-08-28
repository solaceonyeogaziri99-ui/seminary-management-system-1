import Button from '../components/Button';
import Card from '../components/Card';
import ArchMotif from '../components/ArchMotif';
import { programs } from '../data/programs';
import { news } from '../data/news';
import { events } from '../data/events';
import './Home.css';

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <span className="eyebrow">Est. 1928</span>
            <h1>Forming faithful minds for a life of service.</h1>
            <p className="hero__lede">
              Aldergate Theological Seminary equips pastors, scholars, and lay
              leaders through rigorous biblical education, formative
              community, and hands-on ministry practice.
            </p>
            <div className="hero__actions">
              <Button to="/admissions" variant="primary">Apply Now</Button>
              <Button to="/programs" variant="outline">Explore Programs</Button>
            </div>
          </div>
          <div className="hero__motif" aria-hidden="true">
            <ArchMotif />
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section">
        <div className="container intro">
          <div className="section-heading">
            <span className="eyebrow">Who We Are</span>
            <h2>A community shaped by Scripture and scholarship</h2>
            <p>
              For nearly a century, Aldergate has trained men and women to
              serve the church and the world with theological depth,
              pastoral wisdom, and intellectual honesty. Our graduates lead
              congregations, teach in classrooms, and serve communities
              across six continents.
            </p>
          </div>

          <div className="grid grid--2 mission-vision">
            <div className="mission-vision__item">
              <h3>Our Mission</h3>
              <p>
                To prepare servant leaders through rigorous theological
                education grounded in Scripture, tradition, and reasoned
                reflection.
              </p>
            </div>
            <div className="mission-vision__item">
              <h3>Our Vision</h3>
              <p>
                A world in which faithful, well-formed leaders bring wisdom,
                justice, and hope to every community they serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS PREVIEW */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Academic Programs</span>
            <h2>Degrees for every calling</h2>
            <p>From pastoral ministry to academic theology, find the path that fits your vocation.</p>
          </div>

          <div className="grid grid--3">
            {programs.slice(0, 3).map((program) => (
              <Card
                key={program.id}
                eyebrow={program.duration}
                title={program.name}
                description={program.description}
                footer={<Button to="/programs" variant="outline">Learn More</Button>}
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Why Aldergate</span>
            <h2>What sets our seminary apart</h2>
          </div>

          <div className="grid grid--3 why-grid">
            <div className="why-item">
              <h3>Rigorous Scholarship</h3>
              <p>Small classes taught by faculty who are active scholars and practicing ministers.</p>
            </div>
            <div className="why-item">
              <h3>Formation, Not Just Instruction</h3>
              <p>Mentored ministry placements alongside coursework, from year one.</p>
            </div>
            <div className="why-item">
              <h3>A Global Community</h3>
              <p>Students from over thirty countries, learning alongside one another.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS & EVENTS PREVIEW */}
      <section className="section section--alt">
        <div className="container grid grid--2 news-events">
          <div>
            <div className="section-heading">
              <span className="eyebrow">Latest News</span>
              <h2>From the seminary</h2>
            </div>
            <ul className="preview-list">
              {news.slice(0, 3).map((item) => (
                <li key={item.id}>
                  <span className="preview-list__date">{item.date}</span>
                  <p className="preview-list__title">{item.title}</p>
                </li>
              ))}
            </ul>
            <Button to="/news" variant="outline">View All News</Button>
          </div>

          <div>
            <div className="section-heading">
              <span className="eyebrow">Upcoming Events</span>
              <h2>Join us on campus</h2>
            </div>
            <ul className="preview-list">
              {events.slice(0, 3).map((item) => (
                <li key={item.id}>
                  <span className="preview-list__date">{item.date}</span>
                  <p className="preview-list__title">{item.name}</p>
                </li>
              ))}
            </ul>
            <Button to="/events" variant="outline">View All Events</Button>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta">
        <div className="container cta__inner">
          <h2>Your calling deserves careful preparation.</h2>
          <p>Applications for the Spring term are now open.</p>
          <Button to="/admissions" variant="primary">Begin Your Application</Button>
        </div>
      </section>
    </>
  );
}

export default Home;
