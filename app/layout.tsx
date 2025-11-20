import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";
import SpaceFieldCopilot from "@/components/SpaceFieldCopilot";
import CopilotKitWrapper from "@/components/CopilotKitWrapper";






export const metadata: Metadata = {
  title: "SPACE FIELD",
  description: "Streamline your field operations with SPACE FIELD. The ultimate mobile solution for field workers in construction, maintenance, and inspection sectors to manage tasks, report issues, and track progress in real-time.",
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
          <WhatsAppButton />
          <SpaceFieldCopilot />
        </CopilotKitWrapper>
        
      </body>
    </html>
  );
}