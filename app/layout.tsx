import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";
import SpaceCaptureCopilot from "@/components/SpaceCaptureCopilot";
import CopilotKitWrapper from "@/components/CopilotKitWrapper";
import EmailButton from "@/components/EmailButton";
import { LanguageProvider } from "@/context/LanguageContext";






export const metadata: Metadata = {
  title: "AI-Powered Field Inspection Software | SpaceCapture",
  description: "The #1 AI Field Inspection Software for construction & maintenance. Automate defect detection, daily reports, and safety compliance with our free mobile app.",
  verification: {
    google: "g7pWi8PWsp7s3Mq6eGjyKfJ1hrgqgfybkPOp-sXsNKY",
  },
  metadataBase: new URL("https://spacecapture.ai"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <CopilotKitWrapper>
            <Navbar />
            {children}
            <Footer />
            <EmailButton />
            <WhatsAppButton />
            <SpaceCaptureCopilot />
          </CopilotKitWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}


