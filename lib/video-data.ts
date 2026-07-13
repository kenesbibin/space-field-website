export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  category?: string;
}

export const VIDEOS: Video[] = [
  {
    id: '1',
    youtubeId: 'zrLV-rVlh5w',
    title: 'AI-Powered Defect Detection: From Site Photo to Task in Seconds | SPACE CAPTURE',
    description: 'See how SpaceCapture transforms site photos into actionable tasks using AI-powered defect detection in seconds.',
    category: 'AI Detection',
  },
];
