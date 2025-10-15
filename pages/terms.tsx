export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-8">Last updated: October 2025</p>

        <section className="space-y-6 text-lg leading-relaxed">
          <p>
            Welcome to <strong>LabVariant Pro</strong>. By accessing or using
            our platform, you agree to the following terms and conditions.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700">1. Use of the Service</h2>
          <p>
            LabVariant Pro is provided for research and clinical data analysis.
            Users must not misuse the service, attempt unauthorized access, or
            upload malicious content.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700">2. Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials and all activities under your account.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700">3. Data Ownership</h2>
          <p>
            You retain full ownership of your uploaded data. LabVariant Pro acts
            only as a data processor to generate reports and does not claim any
            rights to your genomic information.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700">4. Subscriptions & Payments</h2>
          <p>
            Paid plans are billed monthly or annually as selected. Refunds are
            not provided for partially used subscription periods. Pricing may
            change with prior notice.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700">5. Limitation of Liability</h2>
          <p>
            While we strive for accuracy, LabVariant Pro is not liable for any
            damages arising from the use or inability to use the platform. The
            tool is for research and diagnostic support, not a substitute for
            clinical judgment.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700">6. Termination</h2>
          <p>
            We may suspend or terminate accounts that violate these terms or
            engage in misuse of the platform.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700">7. Contact Us</h2>
          <p>
            For any questions, please contact us at{" "}
            <a
              href="mailto:contact@labvariantpro.com"
              className="text-blue-600 underline"
            >
              contact@labvariantpro.com
            </a>.
          </p>

          <p className="mt-8">
            By using <strong>LabVariant Pro</strong>, you acknowledge that you
            have read and agree to these Terms of Service.
          </p>
        </section>
      </div>
    </main>
  );
}
