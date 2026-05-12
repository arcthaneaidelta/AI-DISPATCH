"use client";

import { motion } from "framer-motion";
import { 
  Plus, 
  Zap, 
  Play, 
  Settings, 
  ChevronRight, 
  Mail, 
  PhoneCall, 
  Database,
  ShieldCheck,
  MousePointer2,
  Cpu
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function AutomationPage() {
  const workflows = [
    { name: "Auto Load Hunter", status: "Active", runs: "1,242", trigger: "DAT Scan" },
    { name: "Broker Voice Response", status: "Active", runs: "412", trigger: "Inbound Call" },
    { name: "Driver Dispatch Bot", status: "Paused", runs: "89", trigger: "Manual Approval" },
    { name: "Invoice Auto-Gen", status: "Active", runs: "2,105", trigger: "POD Upload" },
  ];

  return (
    <div className="space-y-10 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
           <h1 className="text-3xl font-serif font-bold text-brand-900 mb-2">Automation Orchestrator</h1>
           <p className="text-sm text-brand-500 font-medium">12 active workflows • <span className="text-emerald-600">4,281 tasks automated today</span></p>
        </div>
        <button className="flex items-center gap-2 px-8 py-3 bg-brand-900 text-white rounded-2xl text-sm font-bold shadow-premium hover:scale-[1.02] transition-all">
           <Plus className="w-4 h-4" />
           Create Workflow
        </button>
      </div>

      {/* Main Workflow Builder Simulation */}
      <div className="bg-white border border-brand-100 rounded-[40px] shadow-sm overflow-hidden min-h-[700px] flex flex-col">
         {/* Builder Header */}
         <div className="p-6 border-b border-brand-50 flex items-center justify-between bg-brand-50/30">
            <div className="flex items-center gap-4">
               <div className="px-4 py-1.5 bg-white border border-brand-100 rounded-full text-xs font-bold text-brand-900 shadow-sm">
                  Workflow: <span className="text-brand-500 font-medium">Smart Negotiation v2.4</span>
               </div>
               <div className="h-4 w-[1px] bg-brand-200" />
               <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  LIVE
               </div>
            </div>
            <div className="flex items-center gap-2">
               <button className="p-2.5 rounded-xl bg-white border border-brand-100 text-brand-500 hover:text-brand-900 transition-all shadow-sm">
                  <Settings className="w-5 h-5" />
               </button>
               <button className="flex items-center gap-2 px-6 py-2.5 bg-brand-900 text-white rounded-xl text-xs font-bold shadow-md">
                  <Play className="w-4 h-4" />
                  Test Flow
               </button>
            </div>
         </div>

         {/* Canvas Area */}
         <div className="flex-1 relative bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] p-12">
            
            {/* Simulated Nodes */}
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-16">
               
               {/* Trigger Node */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="w-72 p-6 rounded-3xl bg-white border-2 border-brand-900 shadow-xl relative z-10"
               >
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-brand-900 text-white text-[10px] font-bold rounded-full uppercase tracking-widest">
                     TRIGGER
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-900 flex items-center justify-center">
                        <Database className="w-6 h-6" />
                     </div>
                     <div>
                        <div className="text-sm font-bold text-brand-900">Load Detected</div>
                        <div className="text-[10px] text-brand-500 font-medium uppercase">Source: DAT / Truckstop</div>
                     </div>
                  </div>
               </motion.div>

               {/* Connector Line */}
               <div className="h-16 w-0.5 bg-linear-to-b from-brand-900 to-blue-500 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-blue-500 bg-white" />
               </div>

               {/* Action Node: AI Analysis */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 className="w-72 p-6 rounded-3xl bg-white border border-brand-100 shadow-lg relative z-10 group hover:border-blue-500 transition-colors"
               >
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-blue-500 text-white text-[10px] font-bold rounded-full uppercase tracking-widest">
                     ACTION
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Cpu className="w-6 h-6" />
                     </div>
                     <div>
                        <div className="text-sm font-bold text-brand-900">AI Score Load</div>
                        <div className="text-[10px] text-brand-500 font-medium uppercase">Model: Dispatch v4</div>
                     </div>
                  </div>
               </motion.div>

               {/* Branching Logic Visual */}
               <div className="relative w-full flex justify-center">
                  <svg className="w-full h-32 text-brand-200" viewBox="0 0 800 128">
                     <path d="M400,0 C400,64 200,64 200,128" fill="none" stroke="currentColor" strokeWidth="2" />
                     <path d="M400,0 C400,64 600,64 600,128" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
               </div>

               {/* Condition Nodes */}
               <div className="flex gap-24">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="w-64 p-5 rounded-2xl bg-emerald-50 border border-emerald-100 shadow-md relative"
                  >
                     <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-3">IF SCORE {'>'} 90</div>
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-emerald-600">
                           <PhoneCall className="w-5 h-5" />
                        </div>
                        <div className="text-xs font-bold text-brand-900">Initiate AI Call</div>
                     </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="w-64 p-5 rounded-2xl bg-brand-50 border border-brand-100 shadow-md relative"
                  >
                     <div className="text-[10px] font-bold text-brand-400 uppercase tracking-widest mb-3">IF SCORE {'<'} 90</div>
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-400">
                           <Mail className="w-5 h-5" />
                        </div>
                        <div className="text-xs font-bold text-brand-900">Email Notification</div>
                     </div>
                  </motion.div>
               </div>
            </div>

            {/* Sidebar Tools Simulation */}
            <div className="absolute left-8 top-12 bottom-12 w-16 glass rounded-full flex flex-col items-center py-8 gap-6 border border-white/40 shadow-xl">
               {[Database, Cpu, PhoneCall, Mail, ShieldCheck, Settings].map((Icon, i) => (
                 <button key={i} className="p-3 rounded-2xl bg-white text-brand-400 hover:bg-brand-900 hover:text-white transition-all shadow-sm">
                    <Icon className="w-6 h-6" />
                 </button>
               ))}
               <div className="mt-auto">
                  <div className="w-8 h-8 rounded-full bg-brand-100 border-2 border-white flex items-center justify-center text-[8px] font-bold">AD</div>
               </div>
            </div>

            {/* Floating Cursor Simulation */}
            <motion.div
               animate={{ x: [500, 300, 600, 400], y: [400, 500, 300, 450] }}
               transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
               className="absolute z-[100] pointer-events-none"
            >
               <MousePointer2 className="w-6 h-6 text-brand-900 fill-brand-900 shadow-xl" />
            </motion.div>
         </div>
      </div>
    </div>
  );
}
