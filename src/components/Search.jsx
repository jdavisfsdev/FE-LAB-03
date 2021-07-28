/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

export default function Search({ search, onChange, onSubmit }) {
  return (
    <form>
      <input placeholder="Search" id="search" type="text" value={search} name="search" onChange={onChange} onSubmit={onSubmit} /> 
      <button>Search</button> 
    </form>
  );
}

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func
};
