import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import { faculty } from '../data/faculty';

// Simple placeholder avatar generator using ui-avatars — replace with
// real faculty photos when they're available.
const placeholderImage = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=1B2A4A&color=FAF6EC&size=256`;

function Faculty() {
  return (
    <>
      <PageHeader
        eyebrow="Faculty & Staff"
        title="Scholars and practitioners, teaching together"
        description="Our faculty combine academic credentials with real ministry experience."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {faculty.map((person) => (
              <Card
                key={person.id}
                image={placeholderImage(person.name)}
                imageAlt={`Portrait placeholder for ${person.name}`}
                title={person.name}
                meta={`${person.position} \u2014 ${person.department}`}
                description={person.bio}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Faculty;
