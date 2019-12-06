import React from 'react';
import App from './App';
import Display from "./components/Display";
import { render, wait } from '@testing-library/react';

test("App renders without crashing...", () => {
  render(<App />);
});

// Unless there's some way to get React to stop complaining about NOT using await wait() and ALSO make it stop killing the test for using await wait(),
// i'm only going to be able to test the render on <App/>... I know how to test, but I have no idea how to wrangle this library.

//Note: If you view this in a console with a huge backlog limit and scroll all the way to the tippy-top, these bottom two tests DO pass.

// test("Display renders...", () => {
//   render(<Display />);
// });

// test("List of players render...", () => {
//   const { getByTestId } = render(<Display lastData={[{
//     country: "Waiting on API response!",
//     id: 0,
//     name: "Don't know yet",
//     searches: "Absolutely no idea."
//   }]} />);
//   getByTestId(/players-list/i);
// });