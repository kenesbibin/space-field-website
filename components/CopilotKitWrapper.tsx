'use client';

import { CopilotKit } from '@copilotkit/react-core';

export default function CopilotKitWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CopilotKit publicApiKey={process.env.NEXT_PUBLIC_COPILOTKIT_PUBLIC_API_KEY || ''}>{children}</CopilotKit>;
}