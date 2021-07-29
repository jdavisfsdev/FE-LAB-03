import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search';

const handlechange = () => {
  return;
};
describe('Search component', () => {
  it('renders Search', () => {
    const { asFragment } = render (
      <Search 
        search="defaultValue"
        onSubmit={handlechange}
        onChange={handlechange}
        
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
