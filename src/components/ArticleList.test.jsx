import React from 'react';
import { render } from '@testing-library/react';
import ArticleList from './ArticleList';

describe('Article component', () => {
  it('renders Article', () => {
    const { asFragment } = render (
      <ArticleList />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
