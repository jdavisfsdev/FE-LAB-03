import React from 'react';
import { render } from '@testing-library/react';
import ArticleList from './ArticleList';

describe('Article component', () => {
  it('renders Article', async () => {
    const { asFragment } = await render (
      <ArticleList />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
