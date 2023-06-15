import propTypes from 'prop-types';
import css from './SectionTitle.module.css';

export const SectionTitle = ({ title, children }) => (
  <div>
    {title && <h2 className={css.title}>{title}</h2>}
    {children}
  </div>
);

SectionTitle.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};
