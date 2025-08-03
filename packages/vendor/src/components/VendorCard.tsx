import React from 'react';
import { Vendor } from '../types/vendor';
import { formatVendorStatus, getStatusColor, formatDate } from '../utils/vendorUtils';

interface VendorCardProps {
  vendor: Vendor;
  onEdit?: (vendor: Vendor) => void;
  onDelete?: (vendorId: string) => void;
}

export const VendorCard: React.FC<VendorCardProps> = ({ 
  vendor, 
  onEdit, 
  onDelete 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{vendor.name}</h3>
          <p className="text-sm text-gray-600">{vendor.email}</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(vendor.status)}`}>
          {formatVendorStatus(vendor.status)}
        </span>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <span className="font-medium w-20">Phone:</span>
          <span>{vendor.phone}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <span className="font-medium w-20">Category:</span>
          <span className="capitalize">{vendor.category}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <span className="font-medium w-20">Rating:</span>
          <div className="flex items-center">
            <span className="mr-1">{vendor.rating}</span>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(vendor.rating) ? 'fill-current' : 'fill-gray-300'}`}
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <span className="font-medium w-20">Created:</span>
          <span>{formatDate(vendor.createdAt)}</span>
        </div>
      </div>
      
      <div className="border-t pt-4">
        <p className="text-sm text-gray-600 mb-3">{vendor.address}</p>
        
        <div className="flex space-x-2">
          {onEdit && (
            <button
              onClick={() => onEdit(vendor)}
              className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Edit
            </button>
          )}
          {onDelete && (
            <button
              onClick={() => onDelete(vendor.id)}
              className="flex-1 bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}; 