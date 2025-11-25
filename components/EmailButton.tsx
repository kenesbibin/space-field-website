"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Check } from "lucide-react";

const EmailButton = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const emailAddress = "contact@spacecapture.ai";
  const subject = "Inquiry regarding your field operations management services";

  const handleClick = () => {
    navigator.clipboard.writeText(emailAddress);
    setIsCopied(true);

    // Open mail client after a brief delay
    setTimeout(() => {
      window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
    }, 300);

    // Reset copied state after 2.5 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };

  return (
    <div className="fixed bottom-36 right-4 z-40 flex items-center justify-end">
      <AnimatePresence mode="wait">
        {/* State 1: Success Message (Highest Priority) */}
        {isCopied ? (
          <motion.div
            key="copied"
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: -10, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-green-600 text-white text-xs font-medium py-1.5 px-3 rounded-lg shadow-xl mr-2 whitespace-nowrap"
          >
            Email Copied!
          </motion.div>
        ) : isHovered ? (
          /* State 2: Hover Tooltip (Only shows if not copied) */
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: -10, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gray-800 text-white text-xs font-medium py-1.5 px-3 rounded-lg shadow-xl mr-2 whitespace-nowrap"
          >
            Copy Email
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className={`${
          isCopied ? "bg-green-500" : "bg-blue-600 hover:bg-blue-700"
        } text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 relative cursor-pointer`}
        title="Copy Email & Contact"
      >
        {isCopied ? <Check className="w-6 h-6" /> : <Mail className="w-6 h-6" />}
      </motion.button>
    </div>
  );
};

export default EmailButton;