import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PricingTable from "../components/PricingTable";

export default function Pricing() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-primary mb-2">Pricing</h1>
        <p className="text-gray-600 mb-8">Simple transparent plans for labs and researchers.</p>
        <PricingTable />
      </main>
      <Footer />
    </>
  );
}
