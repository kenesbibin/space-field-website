import React from 'react';
import type { Metadata } from 'next';
import { SeoLandingPage } from '@/components/seo/SeoLandingPage';
import { ComparisonTable } from '@/components/seo/ComparisonTable';
import { FaqSection } from '@/components/seo/FaqSection';

export const metadata: Metadata = {
  title: 'AI Detection API | Computer Vision for Construction',
  description: 'Integrate powerful construction AI into your own apps. Our AI Detection API offers robust endpoints for defect recognition, safety monitoring, and automated tagging.',
  keywords: ['ai detection api', 'computer vision api', 'construction api', 'image recognition api', 'developer tools'],
};

export default function Page() {
  const faqs = [
    {
      question: "What is the AI Detection API?",
      answer: "The AI Detection API allows developers to integrate SpaceCapture's construction-specific computer vision models into their own applications via standard REST endpoints."
    },
    {
      question: "What objects can the API identify?",
      answer: "The API can detect construction equipment (excavators, cranes), workers, PPE (helmets, vests), materials, and common defects like cracks, efflorescence, and water damage."
    },
    {
      question: "Is the API documentation public?",
      answer: "Yes, we provide comprehensive API documentation, Swagger/OpenAPI specs, and code examples in Python, JavaScript, and cURL to help you get started quickly."
    },
    {
      question: "What is the pricing model?",
      answer: "We offer a tiered pricing model based on the number of API calls or images processed per month. A free tier is available for testing and development."
    },
    {
      question: "Does it support video processing?",
      answer: "Yes, the API accepts both static images and video streams for frame-by-frame analysis, suitable for security monitoring or continuous progress tracking."
    }
  ];

  return (
    <SeoLandingPage
      title="Powerful AI Detection API for Developers"
      subtitle="Build the next generation of construction tech. Integrate our battle-tested computer vision models directly into your applications with a simple, robust REST API."
    >
      {/* Definition Block */}
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">What is an AI Detection API?</h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          An AI Detection API is a programmable interface that allows software applications to send images or video to a cloud-based AI engine for analysis. It returns structured data identifying objects, defects, or safety violations, enabling developers to build smart features without developing their own machine learning models.
        </p>
      </div>

      {/* Bullet Summary */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">API Features</h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            "Pre-trained on millions of construction images",
            "RESTful architecture with JSON responses",
            "Real-time processing for instant feedback",
            "Scalable infrastructure for high volume"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>How to Integrate Our API</h2>
      <ol className="list-decimal pl-6 space-y-4 mb-12 marker:text-indigo-600 marker:font-bold">
        <li className="pl-2">
          <strong>Get API Key:</strong> Sign up for a developer account to receive your secure API access token.
        </li>
        <li className="pl-2">
          <strong>Send Request:</strong> POST an image or video URL to our analysis endpoint using your preferred language (Python, JS, etc.).
        </li>
        <li className="pl-2">
          <strong>Receive JSON:</strong> The API returns a JSON response containing bounding boxes, class labels, and confidence scores.
        </li>
        <li className="pl-2">
          <strong>Implement Logic:</strong> Use the response data to trigger alerts, tag content, or automate workflows in your app.
        </li>
      </ol>

      <ComparisonTable 
        title="SpaceCapture API vs Building from Scratch"
        features={[
          { feature: "Time manage Market", spaceCapture: "Immediate", competitors: "Measurements / Years" },
          { feature: "Model Accuracy", spaceCapture: "High (Industry Specific)", competitors: "Low (General Purpose)" },
          { feature: "Maintenance Cost", spaceCapture: "Included", competitors: "High (Dev Team)" },
          { feature: "Scalability", spaceCapture: "Enterprise Grade", competitors: "Requires Infra Ops" },
        ]}
      />

      <div className="mb-12">
        <h3>Accelerate Your Development</h3>
         <p>
        Building computer vision models from scratch requires massive datasets and years of R&D. 
        With the <strong>SpaceCapture AI API</strong>, you can access industry-leading detection capabilities instantly. 
        Focus on building your core product while we handle the heavy lifting of image analysis.
      </p>
      </div>

      <FaqSection items={faqs} />
    </SeoLandingPage>
  );
}
