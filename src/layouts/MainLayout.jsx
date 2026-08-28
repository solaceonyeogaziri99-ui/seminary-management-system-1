import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * MainLayout
 * Wraps every public-facing page with the shared Navbar and Footer.
 * `children` is whatever page component gets passed in via routing.
 *
 * Why this matters for later phases: when we build the Student
 * Portal / Admin Dashboard, they'll want a *different* shell (e.g. a
 * sidebar instead of a top navbar). Because pages are never rendered
 * directly by the router — they're always wrapped in a layout —
 * swapping layouts per route later is trivial and doesn't touch any
 * page component.
 */
function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
