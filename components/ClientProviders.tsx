'use client';

import ChatButton from './ChatButton';

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ChatButton />
    </>
  );
}
