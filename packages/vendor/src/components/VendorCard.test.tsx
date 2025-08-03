import React from 'react';
import { render, screen } from '@testing-library/react';
import { VendorCard } from './VendorCard';
import { Vendor } from '../types/vendor';

const mockVendor: Vendor = {
  id: '1',
  name: 'Test Vendor',
  email: 'test@vendor.com',
  phone: '+1 (555) 123-4567',
  address: '123 Test St, Test City, TC 12345',
  status: 'active',
  category: 'technology',
  rating: 4.5,
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-01'),
};

describe('VendorCard', () => {
  it('renders vendor information correctly', () => {
    render(<VendorCard vendor={mockVendor} />);
    
    expect(screen.getByText('Test Vendor')).toBeInTheDocument();
    expect(screen.getByText('test@vendor.com')).toBeInTheDocument();
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument();
    expect(screen.getByText('technology')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('renders edit and delete buttons when handlers are provided', () => {
    const mockEdit = jest.fn();
    const mockDelete = jest.fn();
    
    render(
      <VendorCard 
        vendor={mockVendor} 
        onEdit={mockEdit}
        onDelete={mockDelete}
      />
    );
    
    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  it('does not render edit and delete buttons when handlers are not provided', () => {
    render(<VendorCard vendor={mockVendor} />);
    
    expect(screen.queryByText('Edit')).not.toBeInTheDocument();
    expect(screen.queryByText('Delete')).not.toBeInTheDocument();
  });
}); 