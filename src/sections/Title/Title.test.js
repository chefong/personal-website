import React from 'react';
import { render } from '@testing-library/react';
import Title from './Title';

describe('Title', () => {
  it('renders', () => {
    const { getByTestId } = render(<Title />);
    expect(getByTestId('Title-container')).toBeDefined();
  });

  it('matches snapshot', () => {
    const { container } = render(<Title />);
    expect(container).toMatchSnapshot();
  });
});
