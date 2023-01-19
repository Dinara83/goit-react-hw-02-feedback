const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <p className="statistic-value">Good: {good}</p>
    <p className="statistic-value">Neutral: {neutral}</p>
    <p className="statistic-value">Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}</p>
  </>
);

export default Statistics;
