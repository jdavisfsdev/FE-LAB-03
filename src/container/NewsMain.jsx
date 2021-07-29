/* eslint-disable max-len */
import React, { Component } from 'react';
import Search from '../components/Search';
import ArticleList from '../components/ArticleList';
import './NewsMain.css';

const getArticles = async (search) => {
  const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.KEY}`);
  const json = await res.json();
  return json.articles;
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

    handleSubmit = async (e) => {
      e.preventDefault();
      const articles = await getArticles(this.state.search);
      this.setState({ articles });
    }

    async componentDidMount() {
      this.setState({ loading: false });
    }

    render() {
      const { search, articles, loading } = this.state;
      if(loading) return <h1>Loading</h1>;

      return (
        <div className="NewsMain">
          <Search search={search} onSubmit={this.handleSubmit} onChange={this.handleChange}/>
          <ArticleList  articles={articles}/>
        </div>
      );
    }
}
