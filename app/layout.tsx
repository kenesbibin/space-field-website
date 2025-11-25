import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";
import SpaceCaptureCopilot from "@/components/SpaceCaptureCopilot";
import CopilotKitWrapper from "@/components/CopilotKitWrapper";
import EmailButton from "@/components/EmailButton";






export const metadata: Metadata = {
  title: "SPACE CAPTURE",
  description: "Streamline your field operations with SPACE CAPTURE. The ultimate mobile solution for field workers in construction, maintenance, and inspection sectors to manage tasks, report issues, and track progress in real-time.",
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


