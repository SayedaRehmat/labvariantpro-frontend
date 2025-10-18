import { plans } from "../lib/userPlans";
import Link from "next/link";

export default function PricingTable() {
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
      {plans.map((p) => (
        <div key={p.id} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-primary">{p.name}</h3>
          <p className="text-3xl font-bold my-4">${p.price}{p.reports !== 1 && p.price !== 0 && <span className="text-sm text-gray-500">/month</span>}</p>
          <p className="text-gray-600 mb-4">{p.reports === Infinity ? "Unlimited reports" : `${p.reports} reports`}</p>
          <ul className="text-sm text-gray-600 mb-6 space-y-2">
            <li>AI annotation & clinical summary</li>
            <li>Downloadable PDF reports</li>
            <li>Secure processing and storage</li>
          </ul>
          <Link href="/signup">
            <a className="block text-center bg-primary text-white py-2 rounded-lg">Choose</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
