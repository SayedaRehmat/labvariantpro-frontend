import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const plans = [
    {
      name: "Free Trial",
      price: "Free",
      reports: "2 reports",
      features: [
        "Access full LabVariant Pro features",
        "Download demo clinical report",
        "Try without credit card",
      ],
      buttonText: "Try Free",
      highlight: false,
    },
    {
      name: "Starter",
      price: "$5",
      reports: "Per Report",
      features: [
        "Pay as you go",
        "Perfect for small labs",
        "Email delivery of report",
      ],
      buttonText: "Pay Per Use",
      highlight: false,
    },
    {
      name: "Professional",
      price: "$99",
      reports: "25 reports / month",
      features: [
        "Full annotation & AI summary",
        "Priority processing",
        "PDF & Excel report exports",
        "Email + chat support",
      ],
      buttonText: "Subscribe",
      highlight: true,
    },
    {
      name: "Advanced",
      price: "$299",
      reports: "50 reports / month",
      features: [
        "All Professional features",
        "Faster pipelines",
        "Custom lab branding on reports",
        "Early access to new features",
      ],
      buttonText: "Subscribe",
      highlight: false,
    },
    {
      name: "Enterprise",
      price: "$999",
      reports: "Unlimited reports",
      features: [
        "Dedicated server instance",
        "Private API access",
        "Audit logs and team management",
        "24/7 enterprise support",
      ],
      buttonText: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-lg text-gray-600">
          Choose the plan that fits your lab’s workflow. No hidden fees.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`rounded-2xl shadow-xl border ${
              plan.highlight ? "border-blue-500" : "border-gray-200"
            }`}
          >
            <CardHeader>
              <CardTitle className="text-center text-2xl font-semibold text-blue-700">
                {plan.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-4xl font-bold text-gray-900">
                {plan.price}
                <span className="text-base text-gray-500 font-medium">
                  {plan.reports !== "Per Report" ? "/month" : ""}
                </span>
              </p>
              <p className="text-sm text-gray-500 mt-1">{plan.reports}</p>

              <ul className="mt-6 space-y-2 text-left">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="text-green-500 w-5 h-5" /> {f}
                  </li>
                ))}
              </ul>

              <Link href="/signup">
                <Button
                  className={`mt-8 w-full py-3 text-lg font-semibold ${
                    plan.highlight
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-gray-800 hover:bg-gray-900"
                  } text-white rounded-xl`}
                >
                  {plan.buttonText}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-16 text-gray-500">
        <p>
          Need a custom plan?{" "}
          <a href="mailto:contact@labvariantpro.com" className="text-blue-600 underline">
            Contact us
          </a>
        </p>
      </div>
    </div>
  );
}
