"use client";

import { useState } from "react";
import { Mail, Check } from "lucide-react";

const EmailButton = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const emailAddress = "contact@spacecapture.ai";
  const subject = "Inquiry regarding your field operations management services";

  const handleClick = () => {
    navigator.clipboard.writeText(emailAddress);
    setIsCopied(true);

    setTimeout(() => {
      window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
    }, 300);

    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };

  return (
    <div className="fixed bottom-36 right-4 z-40 flex items-center justify-end">
      {/* Tooltip / Success message */}
      {isCopied ? (
        <div className="email-tooltip email-tooltip--success">
          Email Copied!
        </div>
      ) : isHovered ? (
        <div className="email-tooltip">
          Copy Email
        </div>
      ) : null}

      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`email-btn ${isCopied ? "email-btn--success" : ""}`}
        title="Copy Email & Contact"
      >
        {isCopied ? <Check className="w-6 h-6" /> : <Mail className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default EmailButton;
