import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import Button from '../components/Button';
import { programs } from '../data/programs';

function Programs() {
  return (
    <>
      <PageHeader
        eyebrow="Academic Programs"
        title="Degrees and certificates for every calling"
        description="From foundational certificates to advanced doctoral study, explore the program that fits your vocation."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {programs.map((program) => (
              <Card
                key={program.id}
                eyebrow={program.duration}
                title={program.name}
                description={program.description}
                footer={
                  <Button to="/admissions" variant="outline">
                    Learn More
                  </Button>
                }
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Programs;
