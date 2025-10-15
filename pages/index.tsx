import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-6">
          LabVariant Pro
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Clinical-grade variant annotation & reporting — powered by AI and
          trusted by precision-medicine labs worldwide.
        </p>

        <div className="flex justify-center gap-4 mt-10">
          <Link href="/signup">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-xl">
              Try Free <ArrowRight className="inline ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/pricing">
            <Button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 text-lg rounded-xl">
              View Pricing
            </Button>
          </Link>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">
            See LabVariant Pro in Action
          </h2>
          <p className="text-gray-600 mb-10">
            Upload a VCF file → Annotate → Download a clinical report in minutes.
          </p>
          {/* Replace with your video file */}
          <video
            src="/demo.mp4"
            controls
            className="w-full rounded-2xl shadow-lg border border-gray-200"
          />
          <p className="text-sm text-gray-500 mt-4">
            *Demo video shows full workflow from upload to report generation.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {[
            {
              title: "AI-Powered Annotation",
              desc: "Integrates VEP, ClinVar & gene-disease data for instant clinical insight.",
            },
            {
              title: "PDF Reports in Seconds",
              desc: "Automatically formatted, lab-ready reports with variant summaries.",
            },
            {
              title: "Secure & Scalable",
              desc: "Designed for research labs & clinical use — GDPR & HIPAA friendly.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="bg-white shadow-lg rounded-2xl p-8 text-center"
            >
              <CheckCircle className="text-teal-500 w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                {f.title}
              </h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center bg-gradient-to-r from-blue-600 to-teal-500 text-white">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Generate Your First Clinical Report?
        </h2>
        <p className="text-lg mb-8">
          Start your free trial and see how AI transforms variant annotation.
        </p>
        <Link href="/signup">
          <Button className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-xl">
            Get Started Free
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center">
        <p>
          © 2025 LabVariant Pro |{" "}
          <Link href="/privacy" className="underline">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="/terms" className="underline">
            Terms of Service
          </Link>
        </p>
      </footer>
    </main>
  );
}
