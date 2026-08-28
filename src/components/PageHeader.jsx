import './PageHeader.css';

/**
 * PageHeader
 * The small title banner at the top of every inner page (About,
 * Programs, Faculty, etc). Pulled into one component instead of
 * copy-pasted markup on every page.
 */
function PageHeader({ eyebrow, title, description }) {
  return (
    <div className="page-header">
      <div className="container">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

export default PageHeader;
