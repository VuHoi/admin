'use client';

import React from 'react';
import { VendorDashboard } from '../components';

// Force dynamic rendering to prevent static generation issues
export const dynamic = 'force-dynamic';

export default function VendorDemoPage() {
  return (
    <div>
      <VendorDashboard />
    </div>
  );
} 