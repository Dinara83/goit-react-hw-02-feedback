import css from'../App.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <p className={css.statisticValue}>Good: {good}</p>
    <p className={css.statisticValue}>Neutral: {neutral}</p>
    <p className={css.statisticValue}>Bad: {bad}</p>
    <p className={css.statisticValue}>Total: {total}</p>
    <p className={css.statisticValue}>Positive feedback: {positivePercentage}%</p>
  </>
);

export default Statistics;
