import css from'../App.module.css';

const Notification = ({message}) => {
	return <p className={css.statisticValue}>{message}</p> 	
}

export default Notification;