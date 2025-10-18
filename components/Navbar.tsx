"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons for mobile menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-gray-200 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* --- Logo / Brand --- */}
        <Link href="/" className="text-2xl font-bold text-white tracking-tight">
          LabVariant<span className="text-blue-400">Pro</span>
        </Link>

        {/* --- Desktop Menu --- */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          <Link href="/pricing" className="hover:text-blue-400 transition">Pricing</Link>
          <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
          <Link href="/terms" className="hover:text-blue-400 transition">Terms</Link>
          <Link href="/privacy" className="hover:text-blue-400 transition">Privacy</Link>

          {/* Auth Buttons */}
          <div className="ml-6 flex items-center space-x-3">
            <Link
              href="/login"
              className="text-sm font-medium px-4 py-2 border border-gray-600 rounded-md hover:bg-gray-800 transition"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="text-sm font-medium px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Sign up
            </Link>
          </div>
        </div>

        {/* --- Mobile Menu Button --- */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- Mobile Menu Dropdown --- */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="flex flex-col space-y-3 px-6 py-4 text-sm">
            <Link href="/" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/pricing" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link href="/contact" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link href="/terms" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Terms</Link>
            <Link href="/privacy" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Privacy</Link>

            <div className="flex flex-col space-y-2 mt-3">
              <Link
                href="/login"
                className="border border-gray-600 px-4 py-2 rounded-md text-center hover:bg-gray-700 transition"
                onClick={() => setIsOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="bg-blue-500 px-4 py-2 rounded-md text-center text-white hover:bg-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
