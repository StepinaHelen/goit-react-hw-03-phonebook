import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
const Filter = ({ filter, onHandleInputSearch }) => {
  return (
    <div className={styles.findContact}>
      <h2>Contacts</h2>
      <label className={styles.findContactLabel}>
        Find contacts by name
        <input
          className={styles.findContactInput}
          name="filter"
          type="text"
          value={filter}
          onChange={onHandleInputSearch}
        />
      </label>
    </div>
  );
};
Filter.propTypes = {
  onHandleInputSearch: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
export default Filter;
