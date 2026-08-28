import PageHeader from '../components/PageHeader';
import { events } from '../data/events';
import './Events.css';

function Events() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Upcoming Events"
        description="Join us on campus for lectures, ceremonies, and community gatherings."
      />

      <section className="section">
        <div className="container">
          <div className="event-list">
            {events.map((event) => (
              <div className="event-item" key={event.id}>
                <div className="event-item__date">
                  <span>{event.date}</span>
                </div>
                <div className="event-item__body">
                  <h3>{event.name}</h3>
                  <p className="event-item__meta">
                    {event.time} &middot; {event.location}
                  </p>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Events;
