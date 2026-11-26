import { permanentRedirect } from 'next/navigation';

export default function DuplicateArticleRedirect() {
  permanentRedirect('/blog/real-time-progress-tracking');
}
