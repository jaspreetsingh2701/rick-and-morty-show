import React from 'react';
import { render } from '@testing-library/react';
import App from '../containers/App';

test('renders without crashing', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Ricky Morty Show/i);
  expect(linkElement).toBeInTheDocument();
});
