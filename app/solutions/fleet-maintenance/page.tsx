import React from 'react';
import type { Metadata } from 'next';
import FleetMaintenanceSection from '@/components/FleetMaintenanceSection';

export const metadata: Metadata = {
  title: 'Fleet Maintenance & Equipment Tracking App | SpaceCapture',
  description:
    'Manage fleet maintenance apps, fleet inspection apps, heavy equipment maintenance apps, equipment tracking apps, and fleet mileage trackers from one dashboard.',
  keywords: [
    'fleet maintenance app',
    'fleet vehicle maintenance app',
    'fleet inspection app',
    'truck inspection app',
    'heavy equipment maintenance app',
    'vehicle inspection app',
    'car inspection app',
    'driver vehicle inspection report app',
    'fleet mileage tracker',
    'equipment tracking app',
    'equipment inventory app',
    'equipment inspection app',
    'equipment inspection software',
    'qr code equipment maintenance'
  ],
  alternates: {
    canonical: '/solutions/fleet-maintenance',
  },
};

export default function FleetMaintenancePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <FleetMaintenanceSection />
    </main>
  );
}
