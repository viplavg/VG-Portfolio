import "./SectionHeading.css";

const SectionHeading = ({
  eyebrow,
  title,
  description,
}) => {
  return (
    <div className="section-heading">
      <span className="section-heading__eyebrow">
        {eyebrow}
      </span>

      <h2 className="section-heading__title">
        {title}
      </h2>

      {description && (
        <p className="section-heading__description">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;