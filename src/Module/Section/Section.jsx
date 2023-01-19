function Section({ children, title }) {
  return (
    <div className="feedback">
      <h1 className="feedback__offer">{title}</h1>
      {children}
    </div>
  );
}

export default Section;
