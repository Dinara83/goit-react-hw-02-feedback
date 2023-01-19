import css from '../App.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.btnBlock}>
      {options.map(name => <p key={name}>
		<button 
            className={css.btn}
            type="button"
            onClick={() => onLeaveFeedback(name)}
          >
            {name}
          </button>

	  </p>
    
      )}
    </div>
  );
};
export default FeedbackOptions;
