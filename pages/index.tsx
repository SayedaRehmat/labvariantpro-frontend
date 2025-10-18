import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 space-y-6">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Revolutionizing <span className="text-blue-400">Genetic Analysis</span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            LabVariant Pro delivers **clinical-grade** variant annotation and
            report generation powered by AI — trusted by labs, hospitals, and
            researchers worldwide.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              href="/signup"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold"
            >
              Get Started Free
            </Link>
            <Link
              href="/pricing"
              className="border border-gray-700 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-6 py-3 rounded-md font-semibold"
            >
              View Pricing
            </Link>
          </motion.div>
        </div>

        {/* Demo Video Section */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <video
            src="/demo.mp4"
            controls
            className="w-full rounded-xl shadow-lg border border-gray-800"
          />
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-900 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "1. Upload VCF File",
                desc: "Simply upload your variant file securely using our encrypted uploader.",
              },
              {
                title: "2. AI-Powered Annotation",
                desc: "Our system automatically analyzes and annotates using multiple genomic databases.",
              },
              {
                title: "3. Download Clinical Report",
                desc: "Receive a detailed, clinic-ready report within minutes — ready for decision making.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="bg-gray-800 p-8 rounded-xl shadow hover:shadow-lg transition"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">Why Choose LabVariant Pro?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Clinical-Grade Reports",
              desc: "Each report follows ACMG guidelines ensuring high-quality interpretation.",
            },
            {
              title: "Cloud Scalability",
              desc: "Run hundreds of analyses simultaneously with our AWS-powered backend.",
            },
            {
              title: "Data Security",
              desc: "HIPAA-ready infrastructure keeps all your files encrypted and private.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-8 rounded-xl shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-3">
                {f.title}
              </h3>
              <p className="text-gray-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to transform your lab workflow?</h2>
        <p className="text-lg mb-8">
          Join professionals using LabVariant Pro for faster, accurate, and reliable genetic analysis.
        </p>
        <Link
          href="/signup"
          className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Start Free Trial
        </Link>
      </section>
    </div>
  );
}
