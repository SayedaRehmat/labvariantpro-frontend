import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow">
      <Link href="/" className="text-2xl font-bold text-primary">LabVariant Pro</Link>
      <div className="space-x-6">
        <Link href="/pricing" className="hover:text-primary">Pricing</Link>
        <Link href="/login" className="hover:text-primary">Login</Link>
        <Link href="/signup" className="bg-primary text-white px-4 py-2 rounded-lg">Get Started</Link>
      </div>
    </nav>
  );
}

