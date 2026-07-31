'use client';

import dynamic from 'next/dynamic';

const CopilotKitWrapper = dynamic(
  () => import('@/components/CopilotKitWrapper'),
  { ssr: false }
);

const SpaceCaptureCopilot = dynamic(
  () => import('@/components/SpaceCaptureCopilot'),
  { ssr: false }
);

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CopilotKitWrapper>
      {children}
      <SpaceCaptureCopilot />
    </CopilotKitWrapper>
  );
}
