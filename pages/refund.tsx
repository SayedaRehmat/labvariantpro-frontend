import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Refund() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6 text-blue-700">Refund Policy</h1>
        <p className="mb-6">
          At <strong>LabVariant Pro</strong>, we aim to provide transparent and fair
          refund practices for all users.
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-8">1. Free Trial</h2>
        <p>
          New users can analyze up to two reports for free before purchasing any paid
          plan. This helps you evaluate the platform before committing.
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-8">2. Paid Reports</h2>
        <p>
          Because our analyses produce digital, non-reversible results, completed
          reports are not eligible for refunds. However, if a technical error prevents
          proper report generation, please contact us within 7 days for a full refund
          or report credit.
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-8">3. Subscriptions</h2>
        <p>
          You may cancel your subscription anytime before the next billing cycle.
          Canceled plans remain active until the end of the current paid period.
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-8">4. Contact</h2>
        <p>
          For refund assistance, contact{" "}
          <a href="mailto:support@labvariantpro.com" className="text-blue-700 underline">
            support@labvariantpro.com
          </a>.
        </p>

        <p className="mt-8 text-gray-500">Last Updated: October 2025</p>
      </main>
      <Footer />
    </div>
  );
}
