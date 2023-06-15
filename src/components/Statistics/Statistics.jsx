import propTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul className={css.statistics}>
    <li className={css.good}>Good: {good}</li>
    <li className={css.neutral}>Neutral: {neutral}</li>
    <li className={css.bad}>Bad: {bad}</li>
    <li className={css.total}>Total: {total}</li>
    <li className={css.positive}>Positive feedback: {positivePercentage} %</li>
  </ul>
);

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};
