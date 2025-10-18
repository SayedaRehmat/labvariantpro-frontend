import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import PricingTable from "../components/PricingTable";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">LabVariant Pro</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Clinical-grade variant annotation and reporting — upload VCF, get validated clinical PDF reports in minutes.</p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link href="/signup"><a className="bg-primary text-white px-6 py-3 rounded-lg">Try Free</a></Link>
            <Link href="/pricing"><a className="border px-6 py-3 rounded-lg">See Pricing</a></Link>
          </div>
        </section>

        <section className="py-8">
          <h2 className="text-2xl font-semibold text-primary mb-4 text-center">Preview: How it works</h2>
          <div className="max-w-4xl mx-auto">
            <video src="/demo.mp4" controls className="rounded-2xl w-full shadow-lg" />
            <p className="text-sm text-gray-500 mt-2 text-center">Demo: upload → annotate → download a clinic-ready report.</p>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">Plans</h2>
          <PricingTable />
        </section>

      </main>
      <Footer />
    </>
  );
}
