import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Navigation from './Navigation';
import { navItems } from '../../shared/constants';

describe('Navigation', () => {
  it('renders', () => {
    const { getByTestId } = render(<Navigation />);
    expect(getByTestId('Navigation-container')).toBeDefined();
  });

  it('matches snapshot', () => {
    const { container } = render(<Navigation />);
    expect(container).toMatchSnapshot();
  });

  it('contains the correct number of navigation items', () => {
    const { getAllByTestId } = render(<Navigation />);
    expect(getAllByTestId('Navigation-item')).toHaveLength(navItems.length);
  });

  it('can toggle menu navigation', () => {
    const { getByTestId } = render(<Navigation />);
    
    fireEvent.click(getByTestId('Navigation-toggle'));
    expect(getByTestId('Navigation-collapse')).toHaveClass('collapsing');

    fireEvent.click(getByTestId('Navigation-toggle'));
    waitFor(() => 
      {
        debug();
        expect(getByTestId('Navigation-collapse')).not.toHaveClass('collapsing');
      },
      {
        timeout: 1000
      }
    );
  })
});