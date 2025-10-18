// pages/dashboard.tsx
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabaseClient";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-hot-toast";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [reports, setReports] = useState<any[]>([]);
  const [plan, setPlan] = useState("Free Trial");

  // Load user session
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) router.push("/login");
      else setUser(data.user);
    };
    getUser();
  }, [router]);

  // Handle upload
  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return toast.error("Please select a file");

    setUploading(true);
    try {
      // Example: Upload to your API backend or S3 bucket
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("https://api.labvariantpro.com/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        toast.success("Report generated successfully!");
        setReports([
          ...reports,
          { name: file.name, date: new Date().toLocaleString(), status: "Ready" },
        ]);
        setFile(null);
      } else {
        toast.error("Upload failed.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error uploading file.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        {user && (
          <div className="bg-white shadow-md rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-semibold mb-2">
              Welcome, {user.email}
            </h2>
            <p className="text-gray-600">
              Current Plan: <span className="font-medium text-blue-600">{plan}</span>
            </p>
          </div>
        )}

        <section className="bg-white shadow-md rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Upload New File</h2>
          <form onSubmit={handleUpload} className="space-y-4">
            <input
              type="file"
              accept=".vcf,.csv"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="w-full border rounded-md px-3 py-2"
            />
            <button
              type="submit"
              disabled={uploading}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              {uploading ? "Processing..." : "Upload & Generate Report"}
            </button>
          </form>
        </section>

        <section className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Report History</h2>
          {reports.length === 0 ? (
            <p className="text-gray-600">No reports generated yet.</p>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b bg-gray-100">
                  <th className="p-2">File Name</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((r, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="p-2">{r.name}</td>
                    <td className="p-2">{r.date}</td>
                    <td className="p-2 text-green-600">{r.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
