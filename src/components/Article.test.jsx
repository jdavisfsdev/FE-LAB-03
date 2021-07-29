import React from 'react';
import { render } from '@testing-library/react';
import Article from './Article';

describe('Article component', () => {
  it('renders Article', async () => {
    const { asFragment } = await render (
      <Article
        title="Mama the dog"
        author="Me"
        description="need i say more?" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
