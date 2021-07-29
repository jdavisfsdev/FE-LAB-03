import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';

export default function Article({ title, author, description }) {
  return (
    <article>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{description}</p>    
    </article>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string.isRequired
};
