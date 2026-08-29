"use client";

import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "+17652713686";
  const queryMessage =
    "Hello! I am interested in your field operations management services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    queryMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-4 z-40 whatsapp-btn-wrapper" style={{ bottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
