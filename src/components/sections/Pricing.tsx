"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Starter",
        price: "$0",
        description: "Perfect for side projects",
        features: ["1 User", "5 Projects", "Community Support"],
        highlight: false,
    },
    {
        name: "Pro",
        price: "$29",
        description: "For serious builders",
        features: ["Unlimited Users", "Unlimited Projects", "Priority Support", "Analytics"],
        highlight: true, // Esta es la tarjeta destacada
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For large teams",
        features: ["SSO", "Dedicated Manager", "SLA", "Custom Integrations"],
        highlight: false,
    },
];

export default function Pricing() {
    return (
        <section className="py-24 bg-slate-950 relative">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
                        Simple Pricing.
                    </h2>
                    <p className="text-slate-400">No hidden fees. Cancel anytime.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-8 rounded-2xl border ${plan.highlight
                                    ? "border-indigo-500 bg-indigo-500/10 shadow-[0_0_30px_-10px_rgba(99,102,241,0.3)]"
                                    : "border-white/10 bg-slate-900/50"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                            <div className="text-4xl font-bold text-white mb-4">{plan.price}</div>
                            <p className="text-slate-400 mb-6">{plan.description}</p>

                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-slate-300 text-sm">
                                        <Check className="w-4 h-4 text-indigo-400 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-3 rounded-lg font-medium transition-all ${plan.highlight
                                        ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg hover:shadow-indigo-500/25"
                                        : "bg-white/10 hover:bg-white/20 text-white"
                                    }`}
                            >
                                Choose {plan.name}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}