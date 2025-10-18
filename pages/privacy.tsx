import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6 text-blue-700">Privacy Policy</h1>
        <p className="mb-6">
          At <strong>LabVariant Pro</strong>, your privacy and data protection are our
          top priorities. This Privacy Policy explains how we collect, use, and
          safeguard your information when you use our platform.
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-8">1. Information We Collect</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Account information (name, email address).</li>
          <li>Uploaded files (e.g., VCF or gene files) for analysis.</li>
          <li>Payment details handled securely via our billing provider.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 mt-8">2. How We Use Information</h2>
        <p>
          We use your data to deliver and improve our services — generating reports,
          maintaining user accounts, and ensuring platform reliability. We never sell
          or rent your data.
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-8">3. Data Security</h2>
        <p>
          All uploaded files are processed through secure servers and deleted within
          24 hours of analysis completion. Supabase authentication and AWS hosting
          ensure encrypted and compliant data handling.
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-8">4. Your Rights</h2>
        <p>
          You may request deletion or export of your data anytime by emailing us at{" "}
          <a href="mailto:support@labvariantpro.com" className="text-blue-700 underline">
            support@labvariantpro.com
          </a>.
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-8">5. Updates</h2>
        <p>
          We may update this Privacy Policy as our services evolve. Changes will be
          posted on this page with a new “Last Updated” date.
        </p>

        <p className="mt-8 text-gray-500">Last Updated: October 2025</p>
      </main>
      <Footer />
    </div>
  );
}
