import React from 'react';
import { render } from '@testing-library/react';
import About from './About';
import { likes, dislikes } from '../../shared/constants';

describe('About', () => {
  it('renders', () => {
    const { getByTestId } = render(<About />);
    expect(getByTestId('About-container')).toBeDefined();
  });

  it('matches snapshot', () => {
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();
  });

  it('contains correct number of likes', () => {
    const { getAllByTestId } = render(<About />);
    expect(getAllByTestId('About-like')).toHaveLength(likes.length);
  });

  it('contains correct number of dislikes', () => {
    const { getAllByTestId } = render(<About />);
    expect(getAllByTestId('About-dislike')).toHaveLength(dislikes.length);
  });
});