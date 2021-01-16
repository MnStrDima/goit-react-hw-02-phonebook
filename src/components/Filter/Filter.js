import PropTypes from 'prop-types';
import styles from './Filter.module.css';

export default function Filter({ initialValue, onFilterChange }) {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          name="name"
          value={initialValue}
          onChange={e => {
            onFilterChange(e.target.value);
          }}
        />
      </label>
    </div>
  );
}

Filter.defaultProps = {
  initialValue: '',
};
Filter.propTypes = PropTypes.shape({
  initialValue: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
}).isRequired;
