import { plans } from "@/lib/userPlans";
export default function PricingTable() {
  return (
    <div className="grid md:grid-cols-3 gap-8 mt-10">
      {plans.map((p) => (
        <div key={p.id} className="border p-8 rounded-2xl shadow hover:shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-primary">{p.name}</h3>
          <p className="text-4xl my-4 font-bold">${p.price}</p>
          <p className="text-gray-600 mb-6">{p.reports === Infinity ? "Unlimited reports" : `${p.reports} reports`}</p>
          <a href="/signup" className="bg-primary text-white px-6 py-2 rounded-lg">Choose Plan</a>
        </div>
      ))}
    </div>
  );
}

