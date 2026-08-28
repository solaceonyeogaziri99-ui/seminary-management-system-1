import PageHeader from '../components/PageHeader';
import './Gallery.css';

// Placeholder gallery images. Swap for real campus photography later —
// the grid layout doesn't need to change.
const galleryImages = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/seed/aldergate-${i + 1}/600/450`,
  alt: `Campus placeholder photo ${i + 1}`,
}));

function Gallery() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Campus Life"
        description="A glimpse of student life, chapel services, and campus grounds."
      />

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div className="gallery-grid__item" key={image.id}>
                <img src={image.src} alt={image.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
