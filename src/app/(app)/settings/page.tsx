"use client";

import { motion } from "framer-motion";
import { 
  User, 
  Shield, 
  Bell, 
  CreditCard, 
  Cpu, 
  Globe, 
  Lock,
  ChevronRight,
  Eye,
  LogOut,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
  const sections = [
    { id: "profile", label: "Profile Settings", icon: User, desc: "Manage your personal information and preferences." },
    { id: "ai", label: "AI & Automation", icon: Cpu, desc: "Configure AI agent behavior, tone, and decision thresholds." },
    { id: "billing", label: "Billing & Plans", icon: CreditCard, desc: "Manage your subscription, invoices, and payment methods." },
    { id: "security", label: "Security & Privacy", icon: Shield, desc: "Two-factor authentication and data access controls." },
    { id: "notifications", label: "Notifications", icon: Bell, desc: "Choose how and when you want to be alerted." },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-10 pb-10">
      {/* Header */}
      <div>
         <h1 className="text-3xl font-serif font-bold text-brand-900 mb-2">Account Settings</h1>
         <p className="text-sm text-brand-500 font-medium">Manage your enterprise configuration and AI preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
         {/* Navigation Sidebar */}
         <div className="lg:col-span-4 space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                className={cn(
                  "w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 text-left group",
                  section.id === "ai" ? "bg-white shadow-md border border-brand-100" : "hover:bg-brand-50"
                )}
              >
                 <div className={cn(
                   "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                   section.id === "ai" ? "bg-brand-900 text-white" : "bg-white border border-brand-100 text-brand-400 group-hover:text-brand-900"
                 )}>
                    <section.icon className="w-5 h-5" />
                 </div>
                 <div className="flex-1">
                    <div className="text-sm font-bold text-brand-900">{section.label}</div>
                    <div className="text-[10px] text-brand-500 font-medium uppercase mt-0.5">{section.id} settings</div>
                 </div>
                 <ChevronRight className="w-4 h-4 text-brand-300" />
              </button>
            ))}
            
            <div className="pt-8 mt-8 border-t border-brand-100">
               <button className="w-full flex items-center gap-4 p-4 rounded-2xl text-red-500 hover:bg-red-50 transition-all text-left group">
                  <div className="w-10 h-10 rounded-xl bg-white border border-red-100 flex items-center justify-center">
                     <LogOut className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                     <div className="text-sm font-bold">Sign Out</div>
                     <div className="text-[10px] font-medium uppercase mt-0.5">End Session</div>
                  </div>
               </button>
            </div>
         </div>

         {/* Content Area */}
         <div className="lg:col-span-8 space-y-8">
            {/* AI Configuration Section */}
            <div className="bg-white border border-brand-100 rounded-[32px] shadow-sm overflow-hidden">
               <div className="p-8 border-b border-brand-50">
                  <div className="flex items-center gap-3 mb-2">
                     <Cpu className="w-5 h-5 text-brand-900" />
                     <h3 className="text-xl font-serif font-bold text-brand-900">AI Intelligence Core</h3>
                  </div>
                  <p className="text-xs text-brand-500 font-medium">Fine-tune how our AI models interact with brokers and drivers.</p>
               </div>

               <div className="p-8 space-y-8">
                  {/* AI Agent Toggles */}
                  <div className="space-y-6">
                     {[
                       { label: "Autonomous Load Booking", desc: "Allow AI to book loads automatically if the score is above 95.", enabled: true },
                       { label: "Voice Negotiation", desc: "Enable AI to speak with brokers via simulated voice calls.", enabled: true },
                       { label: "Predictive Fuel Routing", desc: "Automatically optimize routes based on real-time gas prices.", enabled: false }
                     ].map((item, i) => (
                       <div key={i} className="flex items-start justify-between gap-8">
                          <div className="flex-1">
                             <div className="text-sm font-bold text-brand-900 mb-1">{item.label}</div>
                             <p className="text-xs text-brand-500 leading-relaxed">{item.desc}</p>
                          </div>
                          <button className={cn(
                            "w-12 h-6 rounded-full relative transition-all duration-500 flex-shrink-0",
                            item.enabled ? "bg-brand-900" : "bg-brand-100"
                          )}>
                             <div className={cn(
                               "absolute top-1 w-4 h-4 rounded-full bg-white transition-all shadow-sm",
                               item.enabled ? "left-7" : "left-1"
                             )} />
                          </button>
                       </div>
                     ))}
                  </div>

                  <div className="h-[1px] w-full bg-brand-50" />

                  {/* Negotiation Strategy */}
                  <div className="space-y-4">
                     <h4 className="text-xs font-bold text-brand-400 uppercase tracking-widest">Negotiation Persona</h4>
                     <div className="grid grid-cols-2 gap-4">
                        {["Professional", "Aggressive", "Data-Driven", "Friendly"].map((persona) => (
                          <button 
                            key={persona}
                            className={cn(
                              "p-4 rounded-2xl border text-sm font-bold transition-all",
                              persona === "Professional" ? "bg-brand-50 border-brand-900 text-brand-900" : "border-brand-100 text-brand-500 hover:bg-brand-50"
                            )}
                          >
                             {persona}
                          </button>
                        ))}
                     </div>
                  </div>

                  <div className="h-[1px] w-full bg-brand-50" />

                  {/* Confidence Threshold */}
                  <div className="space-y-4">
                     <div className="flex justify-between items-center">
                        <h4 className="text-xs font-bold text-brand-400 uppercase tracking-widest">Confidence Threshold</h4>
                        <span className="text-sm font-bold text-brand-900">85%</span>
                     </div>
                     <div className="relative h-2 bg-brand-50 rounded-full overflow-hidden">
                        <div className="absolute inset-y-0 left-0 bg-brand-900 w-[85%] rounded-full" />
                        <div className="absolute top-1/2 left-[85%] -translate-y-1/2 w-4 h-4 bg-white border-2 border-brand-900 rounded-full shadow-lg cursor-pointer" />
                     </div>
                     <p className="text-[10px] text-brand-400 leading-relaxed italic">
                        Lowering this will increase booking volume but may reduce overall profit per load.
                     </p>
                  </div>
               </div>

               <div className="p-8 bg-brand-50/50 border-t border-brand-50 flex justify-end gap-3">
                  <button className="px-6 py-2.5 text-xs font-bold text-brand-500 hover:text-brand-900 transition-colors">Discard</button>
                  <button className="px-8 py-2.5 bg-brand-900 text-white rounded-xl text-xs font-bold shadow-premium transition-all hover:scale-105">
                     Save Preferences
                  </button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
