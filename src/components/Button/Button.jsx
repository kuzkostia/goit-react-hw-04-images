import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ label, handleLoadMore }) => (
  <button type="button" className={css.Button} onClick={handleLoadMore}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string,
  handleLoadMore: PropTypes.func,
};

export default Button;
