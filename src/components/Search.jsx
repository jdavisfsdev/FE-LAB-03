/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

export default function Search({ search, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input data-testid="search" placeholder="Search" id="search" type="text" value={search} name="search" onChange={onChange}  /> 
      <button>Search</button> 
    </form>
  );
}

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};
