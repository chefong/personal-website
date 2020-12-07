import React from 'react';
import { render } from '@testing-library/react';
import Projects from './Projects';
import { projects } from '../../shared/constants';

describe('Projects', () => {
  it('renders', () => {
    const { getByTestId } = render(<Projects />);
    expect(getByTestId('Projects-container')).toBeDefined();
  });

  it('matches snapshot', () => {
    const { container } = render(<Projects />);
    expect(container).toMatchSnapshot();
  });

  it('contains correct number of project cards', () => {
    const { getAllByTestId } = render(<Projects />);
    expect(getAllByTestId('Card-container')).toHaveLength(projects.length);
  });
});
