import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6 text-blue-700">Terms of Service</h1>
        <p className="mb-6">
          Welcome to <strong>LabVariant Pro</strong>. By accessing or using our website
          and services, you agree to these Terms of Service.
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-8">1. Use of Our Services</h2>
        <p>
          You agree to use LabVariant Pro only for lawful research and educational
          purposes. You must not upload harmful, malicious, or unauthorized data.
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-8">2. Account Responsibilities</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account
          credentials. You must notify us immediately of any unauthorized use.
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-8">3. Payments & Subscriptions</h2>
        <p>
          Payments for reports and subscription plans are handled through secure
          third-party processors. Plans renew automatically unless canceled before the
          renewal date. See our Refund Policy for details.
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-8">4. Intellectual Property</h2>
        <p>
          All site content, software, and designs are owned by LabVariant Pro and
          protected by copyright law. You may not resell or redistribute any part of
          the platform.
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-8">5. Limitation of Liability</h2>
        <p>
          LabVariant Pro provides research support and report generation services.
          Results are not intended for direct clinical diagnosis without professional
          interpretation. We are not liable for indirect, incidental, or consequential
          damages.
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-8">6. Changes</h2>
        <p>
          We may update these Terms periodically. Your continued use of the service
          constitutes acceptance of the latest version.
        </p>

        <p className="mt-8 text-gray-500">Last Updated: October 2025</p>
      </main>
      <Footer />
    </div>
  );
}
