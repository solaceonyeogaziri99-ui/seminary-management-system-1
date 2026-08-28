import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <h3 className="footer__brand">Aldergate Theological Seminary</h3>
          <p className="footer__tagline">Forming faithful scholars and servant leaders since 1928.</p>
        </div>

        <div>
          <h4 className="footer__heading">Explore</h4>
          <ul className="footer__links">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/faculty">Faculty</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="footer__heading">Resources</h4>
          <ul className="footer__links">
            <li><Link to="/news">News</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="footer__heading">Visit</h4>
          <address className="footer__address">
            412 Cathedral Row<br />
            Ashcombe, NY 12345<br />
            (555) 013-4477
          </address>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {year} Aldergate Theological Seminary. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
