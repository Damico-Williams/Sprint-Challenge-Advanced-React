import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "@testing-library/react";
import NavBar from './components/NavBar.js'
import 'mutationobserver-shim';

it('renders without crashing', () => {
  render(<App />);
});

it('renders without crashing', () => {
  render(<NavBar />);
});

test("firstname and lastname text is interactable", () => {
  const { getByText } = render(<App />);
  getByText(/women's world cup/i);
})
