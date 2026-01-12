import React from "react";
import type { Metadata } from "next";
import ConstructionPageContent from "@/components/ConstructionPageContent";

export const metadata: Metadata = {
  title: "Automated Construction Punch Lists | SpaceCapture",
  description: "Close out projects faster. Turn site walks into automated punch lists using video capture. Reduce rework and subcontractor disputes.",
};

const ConstructionPage = () => {
  return <ConstructionPageContent />;
};

export default ConstructionPage;