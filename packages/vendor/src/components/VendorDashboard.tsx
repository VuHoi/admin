import React, { useState } from 'react';
import { Vendor } from '../types/vendor';
import { calculateVendorAnalytics } from '../utils/vendorUtils';
import { VendorCard } from './VendorCard';
import { VendorAnalytics } from './VendorAnalytics';

// Sample data for demonstration
const sampleVendors: Vendor[] = [
  {
    id: '1',
    name: 'Tech Solutions Inc.',
    email: 'contact@techsolutions.com',
    phone: '+1 (555) 123-4567',
    address: '123 Tech Street, Silicon Valley, CA 94025',
    status: 'active',
    category: 'technology',
    rating: 4.5,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-03-20'),
  },
  {
    id: '2',
    name: 'Green Foods Market',
    email: 'info@greenfoods.com',
    phone: '+1 (555) 234-5678',
    address: '456 Organic Ave, Portland, OR 97201',
    status: 'active',
    category: 'food',
    rating: 4.8,
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-03-18'),
  },
  {
    id: '3',
    name: 'Creative Design Studio',
    email: 'hello@creativedesign.com',
    phone: '+1 (555) 345-6789',
    address: '789 Design Blvd, Austin, TX 73301',
    status: 'pending',
    category: 'design',
    rating: 4.2,
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-03-15'),
  },
  {
    id: '4',
    name: 'Fitness Equipment Co.',
    email: 'sales@fitnessequipment.com',
    phone: '+1 (555) 456-7890',
    address: '321 Fitness Way, Miami, FL 33101',
    status: 'inactive',
    category: 'fitness',
    rating: 3.9,
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-03-10'),
  },
  {
    id: '5',
    name: 'Digital Marketing Pro',
    email: 'team@digitalmarketingpro.com',
    phone: '+1 (555) 567-8901',
    address: '654 Marketing St, Seattle, WA 98101',
    status: 'active',
    category: 'marketing',
    rating: 4.7,
    createdAt: new Date('2024-02-05'),
    updatedAt: new Date('2024-03-22'),
  },
  {
    id: '6',
    name: 'Home Improvement Plus',
    email: 'service@homeimprovement.com',
    phone: '+1 (555) 678-9012',
    address: '987 Home Ave, Denver, CO 80201',
    status: 'active',
    category: 'home-improvement',
    rating: 4.3,
    createdAt: new Date('2024-01-30'),
    updatedAt: new Date('2024-03-19'),
  },
];

export const VendorDashboard: React.FC = () => {
  const [vendors, setVendors] = useState<Vendor[]>(sampleVendors);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const analytics = calculateVendorAnalytics(vendors);

  const categories = ['all', ...Array.from(new Set(vendors.map(v => v.category)))];
  const statuses = ['all', 'active', 'inactive', 'pending'];

  const filteredVendors = vendors.filter(vendor => {
    const categoryMatch = selectedCategory === 'all' || vendor.category === selectedCategory;
    const statusMatch = selectedStatus === 'all' || vendor.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  const handleEditVendor = (vendor: Vendor) => {
    alert(`Edit vendor: ${vendor.name}`);
    // In a real application, this would open an edit modal or navigate to an edit page
  };

  const handleDeleteVendor = (vendorId: string) => {
    if (confirm('Are you sure you want to delete this vendor?')) {
      setVendors(vendors.filter(v => v.id !== vendorId));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Vendor Management</h1>
          <p className="text-gray-600">Manage your vendor relationships and track performance</p>
        </div>

        {/* Analytics Section */}
        <div className="mb-8">
          <VendorAnalytics analytics={analytics} />
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {statuses.map(status => (
                  <option key={status} value={status}>
                    {status === 'all' ? 'All Statuses' : status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Vendors Grid */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Vendors ({filteredVendors.length})
            </h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Add New Vendor
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVendors.map(vendor => (
              <VendorCard
                key={vendor.id}
                vendor={vendor}
                onEdit={handleEditVendor}
                onDelete={handleDeleteVendor}
              />
            ))}
          </div>
          
          {filteredVendors.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No vendors found</h3>
              <p className="text-gray-600">Try adjusting your filters or add a new vendor.</p>
            </div>
          )}
        </div>

        {/* Features Demo */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Vendor Package Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Type Safety</h3>
              <p className="text-sm text-gray-600">Full TypeScript support with comprehensive type definitions for vendors, services, and analytics.</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Utility Functions</h3>
              <p className="text-sm text-gray-600">Helper functions for formatting, calculations, and data processing.</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">React Components</h3>
              <p className="text-sm text-gray-600">Reusable UI components for displaying vendor information and analytics.</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Analytics</h3>
              <p className="text-sm text-gray-600">Built-in analytics calculations for vendor performance and insights.</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Filtering</h3>
              <p className="text-sm text-gray-600">Advanced filtering capabilities by category, status, and other criteria.</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Responsive Design</h3>
              <p className="text-sm text-gray-600">Mobile-first responsive design with Tailwind CSS styling.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 