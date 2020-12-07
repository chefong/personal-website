import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';
import { handles } from '../../shared/constants';

describe('Footer', () => {
  it('renders', () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId('Footer-container')).toBeDefined();
  });

  it('matches snapshot', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });

  it('contains the correct number of footer icon links', () => {
    const { getAllByTestId } = render(<Footer />);
    expect(getAllByTestId('Footer-icon-link')).toHaveLength(handles.length);
  });
});