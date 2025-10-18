import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/router";
import Toast from "./Toast";

export default function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setToast(null);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard` }
        });
        if (error) throw error;
        setToast({ msg: "Check your email to confirm. After verification you may log in.", type: "success" });
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        if (data?.user) {
          setToast({ msg: "Login successful", type: "success" });
          setTimeout(() => router.push("/dashboard"), 900);
        }
      }
    } catch (err: any) {
      setToast({ msg: err.message || "Error", type: "error" });
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      {toast && <Toast message={toast.msg} type={toast.type} />}
      <form onSubmit={submit} className="w-full max-w-md bg-white rounded-2xl shadow p-8 border">
        <h2 className="text-2xl font-bold text-primary mb-4">
          {mode === "signup" ? "Create your LabVariant Pro account" : "Sign in to LabVariant Pro"}
        </h2>
        <p className="text-sm text-gray-500 mb-6">{mode === "signup" ? "Start a free trial — no credit card required." : "Welcome back — enter your credentials."}</p>

        <label className="text-sm text-gray-700">Email</label>
        <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="mt-1 mb-4 w-full border rounded-lg p-3" />

        <label className="text-sm text-gray-700">Password</label>
        <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="mt-1 mb-6 w-full border rounded-lg p-3" />

        <button disabled={loading} className="w-full bg-primary text-white py-3 rounded-lg font-semibold">
          {loading ? "Processing..." : (mode === "signup" ? "Create account" : "Sign in")}
        </button>

        <div className="text-center mt-4 text-sm text-gray-600">
          {mode === "signup" ? (
            <>Already have an account? <a href="/login" className="text-primary underline">Log in</a></>
          ) : (
            <>New here? <a href="/signup" className="text-primary underline">Create account</a></>
          )}
        </div>
      </form>
    </div>
  );
}

