import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# SpaceCapture Pricing

## Starter Plan (Free)
- Price: $0/month
- Projects: 5 active
- Storage: 500MB
- Features:
  - Visual Form Builder (Basic)
  - Standard Community Support
  - Web & Mobile Access
- URL: https://spacecapture.ai/pricing

## Enterprise Plan (Custom)
- Price: Custom (contact sales)
- Projects: Unlimited
- Storage: Unlimited
- Features:
  - Mobile App Access (iOS/Android)
  - Offline Mode Sync
  - Unlimited Photos & Videos
  - Custom Visual Form Builder
  - Unlimited AI Defect Detection
  - Voice-to-Text Logs
  - Privacy Shield (Faces/Plates)
  - AI Risk Scoring
  - Granular Roles & Permissions
  - SSO (Okta, Azure AD)
  - Full API Access
  - Unlimited Audit Logs
  - Dedicated 24/7 Support
  - Onboarding Training
- URL: https://spacecapture.ai/pricing

## Free Trial
- No credit card required
- Full platform access
- Start at: https://spacecapture.ai/pricing
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
