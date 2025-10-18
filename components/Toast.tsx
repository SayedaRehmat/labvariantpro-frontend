import { useEffect, useState } from "react";

export default function Toast({ message, type = "success" }: { message: string; type?: "success" | "error" }) {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 4000);
    return () => clearTimeout(t);
  }, []);
  if (!show) return null;
  return (
    <div className={`fixed top-6 right-6 px-5 py-3 rounded-xl text-white z-50 shadow-lg ${type === "success" ? "bg-green-600" : "bg-red-600"}`}>
      {message}
    </div>
  );
}

