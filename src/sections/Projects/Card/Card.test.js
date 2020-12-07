import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders', () => {
    const { getByTestId } = render(<Card />);
    expect(getByTestId('Card-container')).toBeDefined();
  });

  it('matches snapshot', () => {
    const { container } = render(<Card />);
    expect(container).toMatchSnapshot();
  });
});