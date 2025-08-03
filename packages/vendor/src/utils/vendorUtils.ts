import { Vendor, VendorAnalytics } from '../types/vendor';

export const calculateVendorAnalytics = (vendors: Vendor[]): VendorAnalytics => {
  const activeVendors = vendors.filter(v => v.status === 'active');
  const totalRevenue = vendors.reduce((sum, vendor) => sum + (vendor.rating * 100), 0);
  const averageRating = vendors.length > 0 
    ? vendors.reduce((sum, vendor) => sum + vendor.rating, 0) / vendors.length 
    : 0;

  // Calculate top categories
  const categoryCounts = vendors.reduce((acc, vendor) => {
    acc[vendor.category] = (acc[vendor.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topCategories = Object.entries(categoryCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return {
    totalVendors: vendors.length,
    activeVendors: activeVendors.length,
    totalRevenue,
    averageRating: Math.round(averageRating * 100) / 100,
    topCategories,
  };
};

export const formatVendorStatus = (status: Vendor['status']): string => {
  const statusMap = {
    active: 'Active',
    inactive: 'Inactive',
    pending: 'Pending Review',
  };
  return statusMap[status];
};

export const getStatusColor = (status: Vendor['status']): string => {
  const colorMap = {
    active: 'text-green-600 bg-green-100',
    inactive: 'text-red-600 bg-red-100',
    pending: 'text-yellow-600 bg-yellow-100',
  };
  return colorMap[status];
};

export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}; 