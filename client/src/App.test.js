import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  render(<App />);
});

test("firstname and lastname text is interactable", () => {
  const { getByText } = render(<App />);
  getByText(/women's world cup/i);
})
