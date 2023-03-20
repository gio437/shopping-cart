// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ShopPage from './ShopPage';

test('renders ShopPage component', () => {
  render(<ShopPage />);
  const catalogHeader = screen.getByText(/Catalog/i);
  expect(catalogHeader).toBeInTheDocument();
});

test('adds items to cart and updates cart item count', () => {
  render(<ShopPage />);

  const watermelonInput = screen.getByLabelText(/Number of Watermelons/i);
  const appleInput = screen.getByLabelText(/Number of Apples/i);
  const addButton = screen.getByText(/Add To Cart/i);

  fireEvent.change(watermelonInput, { target: { value: '2' } });
  fireEvent.change(appleInput, { target: { value: '3' } });
  fireEvent.click(addButton);

  const counterDiv = screen.getByText(/Total Items: 5/i);
  expect(counterDiv).toBeInTheDocument();
});

test('toggles cart and checkout visibility', () => {
  render(<ShopPage />);

  const checkoutBtn = screen.getByText(/Checkout/i);
  fireEvent.click(checkoutBtn);

  const cartDiv = screen.getByText(/Cart/i);
  expect(cartDiv).toHaveStyle('display: flex');

  fireEvent.click(checkoutBtn);
  expect(cartDiv).toHaveStyle('display: none');
});
