import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useQuery } from '@tanstack/react-query';
import Home from '@/app/page';

// Mocking react-query and ProductCard
jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}));

jest.mock('@/components/Product/ProductCard', () => jest.fn(() => (<div></div>)));

describe('Home Page', () => {
  test('displays loading state', () => {
    (useQuery as jest.Mock).mockReturnValue({ isLoading: true });
    render(<Home />);
    expect(screen.getByText(/Loading products.../i)).toBeInTheDocument();
  });

  test('displays error state', () => {
    (useQuery as jest.Mock).mockReturnValue({ isLoading: false, error: true });
    render(<Home />);
    expect(screen.getByText(/Failed to load products/i)).toBeInTheDocument();
  });

  test('renders products when data is available', () => {
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      data: [
        { id: 1, title: 'Product 1', price: 100, images: ['image1.jpg'] },
        { id: 2, title: 'Product 2', price: 200, images: ['image2.jpg'] },
      ],
    });
    render(<Home />);
    expect(screen.getAllByText('ProductCard')).toHaveLength(2);
  });
});
