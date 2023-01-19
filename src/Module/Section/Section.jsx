import css from '../App.module.css';


function Section({ children, title }) {
  return (
    <div className={css.block}>
      <h1 className={css.title}>{title}</h1>
      {children}
    </div>
  );
}

export default Section;
