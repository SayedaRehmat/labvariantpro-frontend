import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data } = await supabase.auth.getUser();
      if (!mounted) return;
      setUser(data.user ?? null);
      supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
      });
    })();
    return () => { mounted = false; };
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="LabVariant Pro" className="h-8 w-8" />
          <div className="text-xl font-semibold text-primary">LabVariant Pro</div>
          <div className="text-xs text-gray-400 hidden md:inline">powered by AutoBio-X</div>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/pricing" className="text-sm text-gray-700 hover:text-primary">Pricing</Link>
          <Link href="/contact" className="text-sm text-gray-700 hover:text-primary">Contact</Link>

          {user ? (
            <>
              <Link href="/dashboard" className="px-4 py-2 rounded-2xl bg-primary text-white text-sm">Dashboard</Link>
              <button onClick={logout} className="text-sm text-gray-600">Sign out</button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm px-4 py-2 rounded-2xl border border-primary text-primary">Log in</Link>
              <Link href="/signup" className="text-sm px-4 py-2 rounded-2xl bg-primary text-white">Get started</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
