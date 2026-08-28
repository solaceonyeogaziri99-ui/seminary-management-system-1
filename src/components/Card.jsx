import './Card.css';

/**
 * Card
 * A generic content card. Rather than building a separate
 * "ProgramCard", "FacultyCard", "NewsCard" from scratch, each page
 * passes in the pieces it needs (image, eyebrow, title, meta,
 * description, footer). This keeps one styling source of truth.
 */
function Card({ image, imageAlt, eyebrow, title, meta, description, footer }) {
  return (
    <article className="card">
      {image && (
        <div className="card__image-wrap">
          <img src={image} alt={imageAlt || ''} className="card__image" />
        </div>
      )}
      <div className="card__body">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        {title && <h3 className="card__title">{title}</h3>}
        {meta && <p className="card__meta">{meta}</p>}
        {description && <p className="card__description">{description}</p>}
        {footer && <div className="card__footer">{footer}</div>}
      </div>
    </article>
  );
}

export default Card;
