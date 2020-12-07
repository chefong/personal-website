import React from 'react';
import { render } from '@testing-library/react';
import Experience from './Experience';
import { experiences } from '../../shared/constants';

describe('Experience', () => {
  it('renders', () => {
    const { getByTestId } = render(<Experience />);
    expect(getByTestId('Experience-container')).toBeDefined();
  });

  it('matches snapshot', () => {
    const { container } = render(<Experience />);
    expect(container).toMatchSnapshot();
  });

  it('contains correct number of experiences', () => {
    const { getAllByTestId } = render(<Experience />);
    expect(getAllByTestId('Experience-item')).toHaveLength(experiences.length);
  });
});