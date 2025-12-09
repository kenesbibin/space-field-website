import React from 'react';
import type { Metadata } from 'next';
import TimeTrackingSection from '@/components/TimeTrackingSection';

export const metadata: Metadata = {
  title: 'Time Tracking, Time Clock & Timesheet Apps | SpaceCapture',
  description:
    'Deploy time clock apps, timesheet software, time tracking software for employees, construction management apps, and payroll-ready scheduling in one stack.',
  keywords: [
    'time clock app',
    'time clock',
    'clock in and out app',
    'employee time tracking app',
    'time tracking app',
    'time tracking software',
    'timekeeping software',
    'timesheet app',
    'timesheet software',
    'time sheet app',
    'free time clock app',
    'best time clock app',
    'best timesheet app',
    'time tracking software for employees',
    'construction management software',
    'construction management software for small business',
    'construction scheduling app',
    'contractor software',
    'procore construction software',
    'toolbox talks',
    'safety meeting topics'
  ],
  alternates: {
    canonical: '/solutions/time-tracking',
  },
};

export default function TimeTrackingPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <TimeTrackingSection />
    </main>
  );
}
