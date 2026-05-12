"use client";

import { motion } from "framer-motion";
import { 
  CreditCard, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Lock,
  Download,
  MoreHorizontal
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function BillingPage() {
  const [selectedPlan, setSelectedPlan] = useState("Pro");

  const plans = [
    { name: "Starter", price: "$499", desc: "For independent owner-operators.", features: ["3 Active Trucks", "AI Load Hunter", "Smart Messaging"] },
    { name: "Pro", price: "$1,299", desc: "For growing fleets and carriers.", features: ["15 Active Trucks", "AI Voice Broker Calls", "Automation Builder", "Priority Support"] },
    { name: "Enterprise", price: "$4,999", desc: "Customized for large operations.", features: ["Unlimited Trucks", "Custom AI Models", "Full API Access", "Dedicated Analyst"] },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-10 pb-10">
      {/* Header */}
      <div className="text-center">
         <h1 className="text-3xl font-serif font-bold text-brand-900 mb-2">Subscription & Billing</h1>
         <p className="text-sm text-brand-500 font-medium">Manage your plan, payment methods, and billing history.</p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {plans.map((plan) => (
           <motion.div
             key={plan.name}
             onClick={() => setSelectedPlan(plan.name)}
             whileHover={{ y: -10 }}
             className={cn(
               "p-8 rounded-[32px] border transition-all duration-500 cursor-pointer relative overflow-hidden flex flex-col",
               selectedPlan === plan.name ? "bg-white border-brand-900 shadow-2xl ring-1 ring-brand-900/5" : "bg-white border-brand-100 shadow-sm hover:shadow-lg"
             )}
           >
              {plan.name === "Pro" && (
                <div className="absolute top-0 right-0 p-4">
                   <div className="px-3 py-1 bg-brand-900 text-white text-[10px] font-bold rounded-full uppercase tracking-widest">POPULAR</div>
                </div>
              )}
              
              <div className="mb-8">
                 <h3 className="text-xl font-serif font-bold text-brand-900 mb-2">{plan.name}</h3>
                 <p className="text-xs text-brand-500 font-medium">{plan.desc}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                 <span className="text-4xl font-serif font-bold text-brand-900">{plan.price}</span>
                 <span className="text-xs font-bold text-brand-400 uppercase tracking-widest">/ Month</span>
              </div>

              <div className="flex-1 space-y-4 mb-10">
                 {plan.features.map((feat, i) => (
                   <div key={i} className="flex items-center gap-3 text-sm font-medium text-brand-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {feat}
                   </div>
                 ))}
              </div>

              <button className={cn(
                "w-full py-4 rounded-2xl text-sm font-bold transition-all flex items-center justify-center gap-2",
                selectedPlan === plan.name ? "bg-brand-900 text-white shadow-premium" : "bg-brand-50 text-brand-600 hover:bg-brand-100"
              )}>
                 {selectedPlan === plan.name ? "Current Plan" : "Switch Plan"}
                 {selectedPlan !== plan.name && <ArrowRight className="w-4 h-4" />}
              </button>
           </motion.div>
         ))}
      </div>

      {/* Billing Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         {/* Payment Methods */}
         <div className="lg:col-span-7 bg-white border border-brand-100 rounded-[32px] shadow-sm p-8">
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-xl font-serif font-bold text-brand-900">Payment Methods</h3>
               <button className="text-xs font-bold text-brand-900 hover:underline">Add New</button>
            </div>
            
            <div className="space-y-4">
               <div className="p-6 rounded-2xl bg-brand-50/50 border border-brand-900 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-xl bg-white border border-brand-100 flex items-center justify-center">
                        <CreditCard className="w-6 h-6 text-brand-900" />
                     </div>
                     <div>
                        <div className="text-sm font-bold text-brand-900">Visa ending in 8841</div>
                        <div className="text-[10px] text-brand-500 font-medium uppercase mt-0.5">Expires 08/28 • PRIMARY</div>
                     </div>
                  </div>
                  <div className="flex items-center gap-3 text-brand-400">
                     <Lock className="w-4 h-4" />
                     <MoreHorizontal className="w-4 h-4 cursor-pointer" />
                  </div>
               </div>

               <div className="p-6 rounded-2xl bg-white border border-brand-100 flex items-center justify-between opacity-60">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-xl bg-white border border-brand-100 flex items-center justify-center">
                        <CreditCard className="w-6 h-6 text-brand-400" />
                     </div>
                     <div>
                        <div className="text-sm font-bold text-brand-900">Mastercard ending in 2102</div>
                        <div className="text-[10px] text-brand-500 font-medium uppercase mt-0.5">Expires 12/26</div>
                     </div>
                  </div>
                  <MoreHorizontal className="w-4 h-4 cursor-pointer" />
               </div>
            </div>

            <div className="mt-12 flex items-center gap-6 p-6 rounded-2xl bg-brand-900/5 border border-brand-100">
               <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-900">
                  <ShieldCheck className="w-6 h-6" />
               </div>
               <div className="flex-1">
                  <div className="text-xs font-bold text-brand-900 mb-1">Enterprise Security Enabled</div>
                  <p className="text-[10px] text-brand-500 font-medium leading-relaxed">Your payment information is encrypted using 256-bit AES technology and is PCI-DSS compliant.</p>
               </div>
            </div>
         </div>

         {/* Billing History */}
         <div className="lg:col-span-5 bg-white border border-brand-100 rounded-[32px] shadow-sm p-8">
            <h3 className="text-xl font-serif font-bold text-brand-900 mb-8">Recent Invoices</h3>
            <div className="space-y-6">
               {[
                 { id: "INV-2026-004", date: "May 1, 2026", amount: "$1,299.00", status: "Paid" },
                 { id: "INV-2026-003", date: "Apr 1, 2026", amount: "$1,299.00", status: "Paid" },
                 { id: "INV-2026-002", date: "Mar 1, 2026", amount: "$1,299.00", status: "Paid" },
                 { id: "INV-2026-001", date: "Feb 1, 2026", amount: "$1,299.00", status: "Paid" },
               ].map((inv) => (
                 <div key={inv.id} className="flex items-center justify-between group">
                    <div>
                       <div className="text-sm font-bold text-brand-900">{inv.id}</div>
                       <div className="text-[10px] text-brand-400 font-medium uppercase mt-0.5">{inv.date}</div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="text-right">
                          <div className="text-sm font-bold text-brand-900">{inv.amount}</div>
                          <div className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">{inv.status}</div>
                       </div>
                       <button className="p-2 rounded-lg bg-brand-50 text-brand-400 hover:text-brand-900 transition-colors">
                          <Download className="w-4 h-4" />
                       </button>
                    </div>
                 </div>
               ))}
            </div>
            <button className="w-full mt-10 py-4 rounded-2xl bg-brand-50 text-brand-600 text-xs font-bold hover:bg-brand-100 transition-all">
               View Full History
            </button>
         </div>
      </div>
    </div>
  );
}
