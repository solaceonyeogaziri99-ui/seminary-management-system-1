import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import Button from '../components/Button';
import { news } from '../data/news';

function News() {
  return (
    <>
      <PageHeader
        eyebrow="News"
        title="Seminary News"
        description="Updates, announcements, and stories from the Aldergate community."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {news.map((item) => (
              <Card
                key={item.id}
                eyebrow={item.date}
                title={item.title}
                description={item.summary}
                footer={<Button variant="outline">Read More</Button>}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default News;
