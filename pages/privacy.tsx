import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-primary mb-4">Privacy Policy</h1>
        <p className="text-gray-700">Last updated: October 2025</p>
        <section className="mt-6 text-gray-600 space-y-4">
          <p>LabVariant Pro cares about your privacy. We do not sell or share genomic data. Data uploaded for analysis is stored securely and processed to generate reports. For detailed policy, contact contact@labvariantpro.com.</p>
          <p>Third-party services: Supabase (auth/storage), AWS (compute/storage). They operate under their own privacy policies.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
