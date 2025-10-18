import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!file) { setMessage("Choose a file"); return; }
    setMessage("Uploading...");
    // For production, files should go to S3 or Supabase Storage, then your backend should process them.
    // This is a minimal demonstration using Supabase storage (make sure you enabled it).
    const fileName = `${Date.now()}_${file.name}`;
    const { data, error } = await supabase.storage.from("uploads").upload(fileName, file);
    if (error) { setMessage(error.message); return; }
    setMessage("Uploaded! Processing will start shortly.");
    // Call your backend to enqueue a job, passing the storage path.
    // await fetch('/api/process', { method: 'POST', body: JSON.stringify({ path: data.path }) })
  };

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold text-primary mb-4">Upload a VCF</h1>
        <p className="text-gray-600 mb-6">Upload your VCF file to generate a clinic-ready report.</p>

        <div className="bg-white p-6 rounded-2xl shadow">
          <input type="file" accept=".vcf,.vcf.gz" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
          <div className="mt-4 flex gap-4">
            <button onClick={handleUpload} className="bg-primary text-white px-4 py-2 rounded-lg">Upload & Analyze</button>
            <a href="/pricing" className="text-sm text-gray-600 self-center">Upgrade plan for higher throughput</a>
          </div>
          {message && <div className="mt-4 text-sm text-gray-600">{message}</div>}
        </div>
      </main>
      <Footer />
    </>
  );
}

