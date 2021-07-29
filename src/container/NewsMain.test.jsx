import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import NewsMain from './NewsMain';

describe('NewsMain container', () => {
  it('renders NewsMain and searches for news', async () => {
    render(<NewsMain />);

    const search = screen.getByTestId('search');
    const list = screen.getByTestId('list');
    fireEvent.change(search, { target: { value:'virus' } });
    expect(list).not.toBeEmptyDOMElement;
  });
});
