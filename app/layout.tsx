import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";
import SpaceCaptureCopilot from "@/components/SpaceCaptureCopilot";
import CopilotKitWrapper from "@/components/CopilotKitWrapper";
import EmailButton from "@/components/EmailButton";






export const metadata: Metadata = {
  title: "Field Operations & Inspection Software | SpaceCapture",
  description: "Manage field operations with precision. A mobile tracking solution for construction, maintenance, and inspections. Stop chaos and see progress in real-time.",
  verification: {
    google: "g7pWi8PWsp7s3Mq6eGjyKfJ1hrgqgfybkPOp-sXsNKY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CopilotKitWrapper>
          <Navbar />
          {children}
          <Footer />
          <EmailButton/>
          <WhatsAppButton />
          <SpaceCaptureCopilot />
        </CopilotKitWrapper>
        
      </body>
    </html>
  );
}


