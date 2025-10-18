// pages/privacy.tsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow max-w-5xl mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          At <strong>LabVariant Pro</strong>, we take your privacy seriously. 
          This Privacy Policy describes how we collect, use, and protect your personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Information We Collect</h2>
        <p className="mb-4">
          We collect only essential information such as name, email address, and uploaded files 
          necessary for report generation. No genetic data is shared or sold to third parties.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">2. Data Usage</h2>
        <p className="mb-4">
          Uploaded files are processed securely and deleted automatically after generating your report. 
          We may store metadata (like job ID or timestamp) for analytics and debugging.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Cookies</h2>
        <p className="mb-4">
          We use cookies to improve your login experience and remember your preferences. 
          You can disable cookies in your browser settings if desired.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Security</h2>
        <p className="mb-4">
          We use encryption (SSL) and secure servers to protect your information. 
          Access is restricted to authorized personnel only.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Your Rights</h2>
        <p className="mb-4">
          You can request deletion of your account or data at any time by emailing us at{" "}
          <a href="mailto:sayedarehmat6@gmail.com" className="text-blue-600">
            sayedarehmat6@gmail.com
          </a>.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Updates</h2>
        <p className="mb-4">
          We may update this policy periodically. Continued use of the platform 
          constitutes acceptance of the updated terms.
        </p>
      </main>
      <Footer />
    </div>
  );
}
