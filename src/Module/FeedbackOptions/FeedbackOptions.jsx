const FeedbackOptions = ({ onLeaveFeedback }) => (
  <>
    <button type="button" onClick={() => onLeaveFeedback('good')}>
      Good
    </button>
    <button type="button" onClick={() => onLeaveFeedback('neutral')}>
      Neutral
    </button>
    <button type="button" onClick={() => onLeaveFeedback('bad')}>
      Bad
    </button>
  </>
);

export default FeedbackOptions;
