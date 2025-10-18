import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { PlayCircle } from "lucide-react";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="bg-white text-gray-800">
      {/* ===== HERO ===== */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
          src="/demo.mp4"
        />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-700 mb-4">
            AI-Powered Clinical Variant Interpretation
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Upload your genomic file and receive a clinical-grade report in
            minutes — automated, accurate, and secure.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg text-lg"
              onClick={() => router.push("/signup")}
            >
              Try Free Demo
            </Button>
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg text-lg"
              onClick={() => router.push("/pricing")}
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            About LabVariant Pro
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            LabVariant Pro is an advanced genomic analysis platform that
            automates clinical variant interpretation using trusted
            bioinformatics pipelines and AI models. Designed for labs,
            researchers, and clinicians who need fast, reproducible, and
            reliable variant insights.
          </p>
          <p className="text-blue-600 mt-4 font-medium">
            Empowering precision medicine through automation and intelligence.
          </p>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 px-6 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              step: "1. Upload",
              desc: "Securely upload your VCF or genomic file.",
            },
            {
              step: "2. Analyze",
              desc: "Our AI pipeline interprets variants using ClinVar, OMIM & ACMG guidelines.",
            },
            {
              step: "3. Report",
              desc: "Download a ready-to-use, clinic-grade report in PDF format.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl p-8 border border-blue-100"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                {item.step}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Clinical-Grade Annotation (ACMG compliant)",
            "Fast Cloud-Based Analysis",
            "Secure & Encrypted Storage",
            "Interactive PDF Reports",
            "Multi-Gene & Panel Support",
            "Scalable for Labs & Hospitals",
          ].map((f, i) => (
            <div
              key={i}
              className="bg-blue-50 rounded-xl p-6 shadow-sm border border-blue-100"
            >
              <p className="text-gray-700 font-medium">{f}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PRICING PREVIEW ===== */}
      <section className="py-20 px-6 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          Choose Your Plan
        </h2>
        <p className="text-gray-600 mb-10">
          Start free, then upgrade when you’re ready.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { title: "Free Trial", price: "2 Reports" },
            { title: "Basic", price: "$5 / Report" },
            { title: "Standard", price: "$99 / 25 Reports" },
            { title: "Pro", price: "$299 / 50 Reports" },
            { title: "Enterprise", price: "$999 / Unlimited" },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl p-6 w-64 border border-blue-100"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {p.title}
              </h3>
              <p className="text-gray-700 mb-4">{p.price}</p>
              <Button
                className="bg-blue-600 text-white hover:bg-blue-700 w-full"
                onClick={() => router.push("/pricing")}
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* ===== DEMO VIDEO ===== */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          Watch the Demo
        </h2>
        <p className="text-gray-600 mb-8">
          See how LabVariant Pro turns raw variant files into clinical insights.
        </p>
        <div className="max-w-3xl mx-auto relative rounded-2xl overflow-hidden shadow-lg">
          <video
            controls
            poster="/thumbnail.jpg"
            className="w-full rounded-2xl border border-blue-100"
          >
            <source src="/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <PlayCircle className="w-16 h-16 text-blue-600 opacity-80" />
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 px-6 bg-blue-600 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Experience Automated Variant Interpretation?
        </h2>
        <p className="text-lg mb-8">
          Sign up today and start analyzing with confidence.
        </p>
        <Button
          className="bg-white text-blue-700 hover:bg-blue-100 px-8 py-3 text-lg rounded-lg"
          onClick={() => router.push("/signup")}
        >
          Get Started Free
        </Button>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-8 px-6 bg-gray-50 text-center text-gray-600 text-sm">
        <div className="flex flex-wrap justify-center gap-4 mb-3">
          <a href="/privacy" className="hover:text-blue-600">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-blue-600">
            Terms of Service
          </a>
          <a href="/contact" className="hover:text-blue-600">
            Contact
          </a>
        </div>
        <p>© 2025 LabVariant Pro — All Rights Reserved</p>
      </footer>
    </main>
  );
}
