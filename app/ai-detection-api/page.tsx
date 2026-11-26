import type { Metadata } from 'next';
import AiDetectionApiPage from '@/app/alternatives/ai-detection-api/page';

export const metadata: Metadata = {
  title: 'Construction AI Detection API',
  description: 'Connect your apps to construction AI for defect, safety, and object recognition through a robust REST API.',
  keywords: ['ai detection api', 'computer vision api', 'construction api', 'image recognition api', 'developer tools'],
  alternates: {
    canonical: 'https://spacecapture.ai/ai-detection-api',
  },
};

export default AiDetectionApiPage;
