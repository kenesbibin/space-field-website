import { permanentRedirect } from 'next/navigation';

export default function TrustCenterRedirect() {
  permanentRedirect('/security');
}
