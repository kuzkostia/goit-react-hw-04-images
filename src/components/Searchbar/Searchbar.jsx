import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit, onChange, onClickClear, inputValue }) => (
  <header className={css.searchBar}>
    <form className={css.searchForm} onSubmit={onSubmit}>
      <button type="submit" className={css.searchFormButton}>
        <span className={css.searchFormButtonLabel}>Search</span>
      </button>
      <input
        className={css.searchFormInput}
        type="text"
        name="query"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={onChange}
        value={inputValue}
      />
      {inputValue}
    </form>
  </header>
);

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  onClickClear: PropTypes.func,
  query: PropTypes.string,
};

export default Searchbar;