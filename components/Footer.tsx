import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* --- Column 1: Logo + About --- */}
        <div>
          <h2 className="text-xl font-semibold text-white">LabVariant Pro</h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            AI-powered clinical-grade genetic analysis and reporting platform.  
            Trusted by researchers and labs worldwide for precision and reliability.
          </p>
        </div>

        {/* --- Column 2: Quick Links --- */}
        <div className="flex flex-col space-y-2 text-sm">
          <h3 className="text-white font-medium mb-2">Quick Links</h3>
          <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          <Link href="/pricing" className="hover:text-blue-400 transition">Pricing</Link>
          <Link href="/terms" className="hover:text-blue-400 transition">Terms of Service</Link>
          <Link href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</Link>
          <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>

        {/* --- Column 3: Contact Info --- */}
        <div className="text-sm">
          <h3 className="text-white font-medium mb-2">Contact</h3>
          <p className="text-gray-400">
            📧 Email:{" "}
            <a
              href="mailto:sayedarehmat6@gmail.com"
              className="text-blue-400 hover:underline"
            >
              sayedarehmat6@gmail.com
            </a>
          </p>
          <p className="text-gray-400 mt-2">
            ⏰ Response Time: Within 24–48 hours
          </p>
          <p className="text-gray-400 mt-2">
            🌍 Based in: Pakistan
          </p>
        </div>
      </div>

      {/* --- Bottom Section --- */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">LabVariant Pro</span>. All rights reserved.
        </p>
        <p className="mt-1">
          Built with ❤️ by <span className="text-blue-400">Sayeda Rehmat</span>
        </p>
      </div>
    </footer>
  );
}
