import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getUser();
      if (!data?.user) {
        window.location.href = "/login";
        return;
      }
      setUser(data.user);
      setLoading(false);
    })();
  }, []);

  if (loading) return <div className="min-h-[60vh] flex items-center justify-center">Loading…</div>;

  // Build a secure Streamlit URL token exchange later. For now we include a placeholder.
  const streamlitUrl = `${process.env.NEXT_PUBLIC_STREAMLIT_URL}?token=REPLACE_ME_TOKEN_EXCHANGE`;

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold text-primary mb-2">Dashboard</h1>
        <p className="text-gray-600 mb-6">Welcome, <strong>{user.email}</strong></p>

        <section className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">Launch LabVariant Pro tool</h2>
          <p className="text-sm text-gray-600 mb-4">Tool runs on a secured server. Click to open the interactive analysis interface.</p>
          <div style={{ height: "72vh" }}>
            <iframe src={streamlitUrl} className="w-full h-full border-0 rounded-lg shadow" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
