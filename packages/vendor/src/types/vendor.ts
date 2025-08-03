export interface Vendor {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  status: 'active' | 'inactive' | 'pending';
  category: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface VendorService {
  id: string;
  vendorId: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  isActive: boolean;
}

export interface PaymentGateway {
  id: string;
  name: string;
  type: 'stripe' | 'paypal' | 'square' | 'custom';
  isActive: boolean;
  config: Record<string, any>;
}

export interface VendorAnalytics {
  totalVendors: number;
  activeVendors: number;
  totalRevenue: number;
  averageRating: number;
  topCategories: Array<{
    name: string;
    count: number;
  }>;
} 