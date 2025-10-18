// pages/terms.tsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow max-w-5xl mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4">
          Welcome to <strong>LabVariant Pro</strong>. By accessing or using our platform, 
          you agree to comply with and be bound by the following Terms of Service. 
          Please read them carefully before using our website or services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Use of Our Platform</h2>
        <p className="mb-4">
          You agree to use this tool only for lawful research and clinical support purposes. 
          Misuse, reverse engineering, or reselling our service without permission is strictly prohibited.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">2. Accounts & Access</h2>
        <p className="mb-4">
          You must create an account to use premium features. You are responsible for 
          maintaining the confidentiality of your login credentials and for all activities 
          that occur under your account.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Payments & Subscriptions</h2>
        <p className="mb-4">
          All payments are handled securely through our third-party payment provider. 
          Subscription plans renew automatically unless canceled before the renewal date.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Intellectual Property</h2>
        <p className="mb-4">
          All content, algorithms, and materials on this website are the intellectual property 
          of LabVariant Pro and are protected under applicable copyright laws.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Limitation of Liability</h2>
        <p className="mb-4">
          While we strive for clinical-grade accuracy, LabVariant Pro is intended 
          for research support only and should not replace professional medical judgment.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Contact</h2>
        <p>
          For questions about these terms, contact us at{" "}
          <a href="mailto:sayedarehmat6@gmail.com" className="text-blue-600">
            sayedarehmat6@gmail.com
          </a>.
        </p>
      </main>
      <Footer />
    </div>
  );
}
