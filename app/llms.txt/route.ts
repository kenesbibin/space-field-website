import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# SpaceCapture

## About
SpaceCapture is an AI-powered field inspection platform for construction, facilities, and infrastructure teams. It uses computer vision to automatically detect defects, generate reports, and track site safety from any mobile device.

## Key Features
- AI Defect Detection: Automatically identifies cracks, corrosion, PPE violations, and 50+ defect types from photos
- Offline Mobile Capture: Full functionality without internet; syncs when connected
- Daily Reports: Automated daily construction reports from field data
- Visual Form Builder: No-code custom inspection forms
- 360° Reality Capture: Spatial documentation with LiDAR support
- Privacy Shield: Automatic face and license plate blurring for GDPR compliance

## Pricing
- Starter: Free (5 projects, 500MB storage, basic features)
- Enterprise: Custom pricing (unlimited projects, AI detection, SSO, API access, dedicated support)

## Industries Served
- Construction (commercial, residential, civil)
- Facility Management
- Oil & Gas Inspection
- Telecommunications
- HVAC and Plumbing
- Insurance Claims
- Solar and Renewable Energy

## Contact
- Website: https://spacecapture.ai
- Email: contact@spacecapture.ai
- Demo: https://spacecapture.ai/request-a-demo
- Pricing: https://spacecapture.ai/pricing

## Documentation
- Glossary: https://spacecapture.ai/glossary
- Blog: https://spacecapture.ai/blog
- FAQ: https://spacecapture.ai/faq
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
