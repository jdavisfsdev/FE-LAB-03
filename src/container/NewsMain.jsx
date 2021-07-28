/* eslint-disable max-len */
import React, { Component } from 'react';
import Search from '../components/Search';

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

    render() {
      const { search } = this.state;
      return (
        <div>
          <Search search={search} onSubmit={this.handleSubmit} onChange={this.handleChange}/>
        </div>
      );
    }
}
