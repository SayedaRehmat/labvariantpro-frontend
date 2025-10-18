import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-primary mb-4">Terms of Service</h1>
        <p className="text-gray-700">Last updated: October 2025</p>
        <section className="mt-6 text-gray-600 space-y-4">
          <p>By using LabVariant Pro you agree to our terms. LabVariant Pro is a software tool for variant annotation and reporting. Reports are for support and research — not a substitute for clinical judgment. See our Privacy Policy for data handling details. For full terms contact contact@labvariantpro.com.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
