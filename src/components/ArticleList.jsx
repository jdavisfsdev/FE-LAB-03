import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

export default function ArticleList({ articles }) {
  const articleEl = articles.map((article) => (
    <li key={article.description}>
      <Article 
        author={article.author}
        title={article.title}
        description={article.description}
      />
    </li>
  ));
  return (
    <div>
      <ul>{articleEl}</ul> 
    </div>
  );
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }))
};
