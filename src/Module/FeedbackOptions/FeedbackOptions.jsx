import css from '../App.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className={css.btnBlock}>
    <button className={css.btn} type="button" onClick={() => onLeaveFeedback('good')}>
      Good
    </button>
    <button className={css.btn} type="button" onClick={() => onLeaveFeedback('neutral')}>
      Neutral
    </button>
    <button className={css.btn} type="button" onClick={() => onLeaveFeedback('bad')}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
