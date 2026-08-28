import Button from '../components/Button';

function NotFound() {
  return (
    <section className="section" style={{ textAlign: 'center' }}>
      <div className="container">
        <h1>404</h1>
        <p style={{ marginBottom: '1.5rem', color: '#55524a' }}>
          We couldn't find the page you were looking for.
        </p>
        <Button to="/" variant="primary">Return Home</Button>
      </div>
    </section>
  );
}

export default NotFound;
