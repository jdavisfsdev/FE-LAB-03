import React from 'react';
import PropTypes from 'prop-types';

export default function Article({ title, author, description }) {
  return (
    <>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{description}</p>
            
    </>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
