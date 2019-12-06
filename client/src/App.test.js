import React from 'react';
import App from './App';
import Display from "./components/Display";
import { render } from '..node_modules/@testing-library/react';

test("App renders without crashing...", () => {
  render(<App />);
});

test("Display renders...", () => {
  render(<Display />);
});

test("List of players render...", () => {
  const { getByTestId } = render(<Display />);
  getByTestId(/players-list/i);
});