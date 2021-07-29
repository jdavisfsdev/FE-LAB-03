import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import './ArticleList.css';

export default function ArticleList({ articles }) {
  const articleEl = articles.map((article) => (
    <li key={article.publishedAt}>
      <Article 
        author={article.author}
        title={article.title}
        description={article.description}
      />
    </li>
  ));
  return (
    <div>
      <ul data-testid="list">{articleEl}</ul> 
    </div>
  );
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    description: PropTypes.string.isRequired
  }))
};
