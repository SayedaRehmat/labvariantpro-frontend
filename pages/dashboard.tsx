import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/router";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data?.user) router.push("/login");
      else setUser(data.user);
    });
  }, [router]);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      {user ? (
        <div className="bg-white shadow-xl p-10 rounded-2xl text-center max-w-lg">
          <h1 className="text-3xl font-semibold text-blue-700 mb-3">
            Welcome, {user.email}
          </h1>
          <p className="text-gray-600 mb-6">
            You are now logged in to <strong>LabVariant Pro</strong>.
          </p>
          <button
            onClick={async () => {
              await supabase.auth.signOut();
              router.push("/login");
            }}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}
    </main>
  );
}
