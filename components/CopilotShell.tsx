'use client';

import CopilotKitWrapper from '@/components/CopilotKitWrapper';
import SpaceCaptureCopilot from '@/components/SpaceCaptureCopilot';

interface CopilotShellProps {
  defaultOpen?: boolean;
}

export default function CopilotShell({ defaultOpen }: CopilotShellProps) {
  return (
    <CopilotKitWrapper>
      <SpaceCaptureCopilot defaultOpen={defaultOpen} />
    </CopilotKitWrapper>
  );
}
