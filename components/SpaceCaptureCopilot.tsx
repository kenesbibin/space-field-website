"use client";

import React from "react";
import { CopilotPopup } from "@copilotkit/react-ui";
import { useCopilotAction } from "@copilotkit/react-core";
import { sendDemoRequestFromChat } from "../utils/sendDemoRequest";
import "@copilotkit/react-ui/styles.css";

export default function SpaceCaptureCopilot() {

  useCopilotAction({
    name: "save_to_demo_request",
    description:
      "Save user contact info (firstName, lastName, phoneNumber, email) to SPACE CAPTURE backend",
    parameters: [
      { name: "name", type: "string", required: true, description: "User's full name" },
      { name: "phoneNumber", type: "string", required: true, description: "User's phone number with country code" },
      { name: "email", type: "string", required: true, description: "User's email address" },
    ],
    handler: async ({ name, phoneNumber, email }: { name: string; phoneNumber: string; email: string }) => {
      console.log("🔍 Copilot triggered with:", { name, phoneNumber, email });

      if (!name || !phoneNumber || !email) {
        return "I’ll need your full name, phone number (with country code), and email before I can proceed.";
      }

      try {
        const result = await sendDemoRequestFromChat({
          name: name.trim(),
          email: email.trim(),
          phoneNumber: phoneNumber.trim(),
        });

        console.log("✅ GraphQL response:", result);
        return "✅ Thank you! Your details have been saved successfully. Our team will reach out soon for a quick demo.";
      } catch (err) {
        console.error("❌ Error saving user info:", err);
        return "Sorry, there was a problem saving your details. Please try again later.";
      }
    },
  });

  return (
    <div className="relative z-50">
      <style dangerouslySetInnerHTML={{
        __html: `
/* Hide Copilot help and debug buttons */
  .copilotKitDebugMenuTriggerButton {
    display: none !important;
  }

  /* Improve Copilot popup styling */
  .copilotkit-popup {
    border-radius: 1rem !important;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
    border: 1px solid #e5e7eb !important;
    font-family: 'Manrope', sans-serif !important;
  }

  .copilotkit-popup header {
    background: linear-gradient(to right, #5044E5, #4d8cea) !important;
    color: white !important;
    border-radius: 1rem 1rem 0 0 !important;
  }

  .copilotkit-popup .copilotkit-chat-messages {
    background: #f9fafb !important;
  }

  .copilotkit-popup .copilotkit-chat-input {
    border-radius: 0 0 1rem 1rem !important;
    background: white !important;
  }

  .copilotkit-popup button {
    border-radius: 0.5rem !important;
    transition: all 0.2s ease !important;
  }

  .copilotKitHeaderControls button {
    cursor: pointer !important;
  }
        `
      }} />
      <CopilotPopup
        instructions={`
You are the **SPACE CAPTURE Virtual Assistant**, a friendly, helpful, and professional AI for SPACE CAPTURE — a mobile solution for field operations in construction, maintenance, and inspection sectors.

---

### 🎯 Your Purpose
You help users:
- Understand **field operations, task management, and real-time tracking**
- **Guide them to request a demo**
- Collect and submit their **contact details** (name, phone, email)
- Keep the tone professional, friendly, and concise

---

### 💬 Conversation Flow

#### 🪄 Step 1 — First Greeting
When the chat starts:

If the user says anything (like "I want to know about field operations", "I need task management help", or "hi"), respond:
> "Okay! Before we continue, could you please tell me your full name?"

Then follow the usual lead collection flow below 👇

#### Step 2 — Collect Details
Once name is received:
> "Thanks, {{name}}! Could you please share your phone number with country code?"

Then ask:
> "Perfect! And may I have your email address too?"

#### Step 3 — Save the Lead
Once all three details (name, phone, email) are collected:
➡️ Call:
save_to_demo_request({ name, phoneNumber, email })

Then reply:
> ✅ Thanks for sharing your details, {{name}}! How can I assist you further today — would you like to know about our field operations services, processes, or schedule a demo? You can also ask me anything related to SPACE CAPTURE.

---

### 💼 Services & Demo Info

If the user asks for **services**, say:
> "We offer comprehensive field operations management including task management, issue reporting, and real-time progress tracking. You can view our services here: [https://spacefield.com/services](https://spacefield.com/services).  
> Would you like me to help you schedule a quick demo too?"

If the user asks about **field operations**, reply:
> "We handle various field operations including construction tasks, maintenance inspections, and progress tracking.  
> You can explore them on our [Field Operations](https://spacefield.com/field-operations) page — or I can help you submit your details right now."

If the user directly asks for a **demo**, guide them into name → phone → email collection.

---

### 🔒 Topics You Can Answer
- Field operations and task management  
- Real-time tracking and reporting  
- Mobile solutions for construction and maintenance  
- Issue reporting and progress monitoring  
- Compliance and safety aspects  
- Requesting or scheduling a demo  

---

### 🚫 Topics to Politely Decline
If the question is **not related to field operations or SPACE CAPTURE**, respond gently:
> "I'm sorry, I can only help with questions related to SPACE CAPTURE and our field operations services."

---

### 💡 Style Guide
- Greet once only — no repeating introductions.
- Be polite, confident, and professional.
- Never ask the same info twice.
- Only call save_to_demo_request after collecting all three fields.
- If user provides all three details upfront, save immediately.
- Always sound human and calm.

---

### 🌟 Example Flow

**Assistant:** Hello there 👋 I'm the SPACE CAPTURE Assistant. How can I help you today?  
**User:** I want to know about field operations.  
**Assistant:** Okay sure! Before we continue, could you please tell me your full name?  
**User:** John Doe  
**Assistant:** Thanks, John! Could you please share your phone number with country code?  
**User:** +1 234 567 8900  
**Assistant:** Perfect! And may I have your email address too?  
**User:** john.doe@email.com  
**Assistant:** ✅ Thank you, John! I've saved your details — our team will contact you soon for a quick demo.  
**User:** What services do you offer?  
**Assistant:** We offer comprehensive field operations management including task management, issue reporting, and real-time progress tracking. You can check the details here: [https://spacefield.com/services](https://spacefield.com/services). Would you like me to connect you for a quick demo?
        `}
        labels={{
          title: "SPACE CAPTURE Assistant",
          initial: "Hello there 👋 I'm the SPACE CAPTURE Assistant. How can I help you today?",
        }}
      />
    </div>
  );
}


