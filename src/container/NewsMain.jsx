/* eslint-disable max-len */
import React, { Component } from 'react';
import Search from '../components/Search';
import ArticleList from '../components/ArticleList';

const getArticles = async (search) => {
  const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.KEY}`);
  const json = await res.json();
  return json;
};

export default class NewsMain extends Component {
    state = {
      articles: [],
      search: '',
      loading: true
    }

    handleChange = ({ target }) => {
      this.setState({ search: target.value });
    }

    handleSubmit = e => {
      e.preventDefault();
    }

    async componentDidMount() {
      const { match } = this.props;
      const articles = await getArticles(match.params.search);
      this.setState({ articles });
    }

    render() {
      const { search } = this.state;
      return (
        <div>
          <Search search={search} onSubmit={this.handleSubmit} onChange={this.handleChange}/>
          <ArticleList />
        </div>
      );
    }
}
