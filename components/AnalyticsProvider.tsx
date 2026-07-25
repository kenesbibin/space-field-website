'use client';

import { useEffect } from 'react';
import { reportWebVitals } from '@/lib/analytics';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    reportWebVitals();
  }, []);

  return <>{children}</>;
}
