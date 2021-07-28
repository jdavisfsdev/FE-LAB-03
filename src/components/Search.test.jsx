import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search';

describe('Article component', () => {
  it('renders Article', () => {
    const { asFragment } = render (
      <Search />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
