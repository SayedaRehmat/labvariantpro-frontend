import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Contact LabVariant Pro
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Have a question, feedback, or business inquiry?  
          We’d love to hear from you.
        </p>

        <div className="space-y-4 text-center">
          <p className="text-lg">
            📧 <strong>Email:</strong>{" "}
            <a
              href="mailto:sayedarehmat6@gmail.com"
              className="text-blue-600 hover:underline"
            >
              sayedarehmat6@gmail.com
            </a>
          </p>

          <p className="text-gray-600">
            We typically respond within 24–48 hours.
          </p>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          <p>
            For partnership or collaboration opportunities, please include
            “Collaboration” in your email subject line.
          </p>
        </div>
      </div>
    </div>
  );
}
