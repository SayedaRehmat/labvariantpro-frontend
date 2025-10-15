export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-8">
          Last updated: October 2025
        </p>

        <section className="space-y-6 text-lg leading-relaxed">
          <p>
            At <strong>LabVariant Pro</strong>, we respect your privacy and are
            committed to protecting your personal data. This policy explains how
            we collect, use, and safeguard information when you use our services.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700">1. Information We Collect</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Account details (name, email, institution, password)</li>
            <li>Uploaded genomic or variant files (e.g., VCF files)</li>
            <li>Usage metrics for improving system performance</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-700">2. How We Use Your Data</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>To process variant annotation and generate clinical reports</li>
            <li>To manage your subscription and provide technical support</li>
            <li>To improve accuracy and user experience through aggregated analytics</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-700">3. Data Security</h2>
          <p>
            All uploaded files are encrypted in transit and at rest. We do not
            share, sell, or publish your genetic data. Reports and files are
            automatically deleted after processing unless explicitly saved by
            the user.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700">4. Third-Party Services</h2>
          <p>
            LabVariant Pro may use trusted third-party providers (such as AWS or
            Supabase) for secure hosting and authentication. These services are
            compliant with GDPR and HIPAA standards.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700">5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your data at any
            time by contacting us at{" "}
            <a
              href="mailto:contact@labvariantpro.com"
              className="text-blue-600 underline"
            >
              contact@labvariantpro.com
            </a>.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700">6. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. The latest version will
            always be available on this page.
          </p>

          <p className="mt-8">
            Thank you for trusting <strong>LabVariant Pro</strong> with your
            research and clinical data.
          </p>
        </section>
      </div>
    </main>
  );
}
