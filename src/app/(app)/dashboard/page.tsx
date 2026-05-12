"use client";

import { motion } from "framer-motion";
import { 
  Truck, 
  MapPin, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  ArrowUpRight,
  Filter,
  MoreVertical
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  const stats = [
    { label: "Active Fleet", value: "142", sub: "+12 this week", icon: Truck, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Revenue (MTD)", value: "$284,500", sub: "+18.4% vs last month", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Avg. RPM", value: "$3.42", sub: "Market avg: $2.85", icon: CheckCircle2, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Active Loads", value: "28", sub: "4 pending optimization", icon: Clock, color: "text-amber-600", bg: "bg-amber-50" },
  ];

  const activeLoads = [
    { id: "LD-8821", origin: "Chicago, IL", dest: "Dallas, TX", driver: "John Doe", status: "In Transit", profit: "+$1,250", progress: 65 },
    { id: "LD-8822", origin: "Atlanta, GA", dest: "Miami, FL", driver: "Sarah Smith", status: "Loading", profit: "+$980", progress: 15 },
    { id: "LD-8823", origin: "Seattle, WA", dest: "Denver, CO", driver: "Mike Ross", status: "Delivered", profit: "+$2,100", progress: 100 },
    { id: "LD-8824", origin: "Phoenix, AZ", dest: "Los Angeles, CA", driver: "Emma Wilson", status: "In Transit", profit: "+$850", progress: 40 },
  ];

  return (
    <div className="space-y-10 pb-10">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
           <h1 className="text-3xl font-serif font-bold text-brand-900 mb-2">Command Center</h1>
           <p className="text-sm text-brand-500 font-medium">System status: <span className="text-emerald-600">Optimal</span> • 142 nodes active</p>
        </div>
        <div className="flex items-center gap-3">
           <button className="flex items-center gap-2 px-4 py-2 bg-white border border-brand-100 rounded-xl text-xs font-bold text-brand-600 hover:bg-brand-50 transition-all shadow-sm">
              <Filter className="w-4 h-4" />
              Filter View
           </button>
           <button className="flex items-center gap-2 px-6 py-2 bg-brand-900 text-white rounded-xl text-xs font-bold shadow-premium hover:shadow-premium-hover hover:scale-[1.02] transition-all">
              New Dispatch
           </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {stats.map((stat, i) => (
           <motion.div
             key={i}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: i * 0.1 }}
             className="p-6 rounded-3xl bg-white border border-brand-100 shadow-sm hover:shadow-premium transition-all duration-500 group"
           >
              <div className="flex items-center justify-between mb-4">
                 <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", stat.bg, stat.color)}>
                    <stat.icon className="w-6 h-6" />
                 </div>
                 <div className="p-1 rounded-lg bg-brand-50 text-brand-400 group-hover:text-brand-900 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                 </div>
              </div>
              <div>
                 <p className="text-xs font-bold text-brand-400 uppercase tracking-wider mb-1">{stat.label}</p>
                 <h3 className="text-2xl font-serif font-bold text-brand-900 mb-1">{stat.value}</h3>
                 <p className="text-[10px] font-bold text-brand-500">{stat.sub}</p>
              </div>
           </motion.div>
         ))}
      </div>

      {/* Main Grid: Live Map & Active Loads */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Live Fleet Map Simulation */}
         <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-3xl bg-white border border-brand-100 shadow-sm overflow-hidden relative min-h-[500px]">
               <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                     <h3 className="text-lg font-serif font-bold text-brand-900">Live Fleet Network</h3>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="px-3 py-1 rounded-full bg-brand-50 text-[10px] font-bold text-brand-500 uppercase tracking-wider">USA_CENTRAL_01</div>
                  </div>
               </div>

               {/* Simulated Map Visual */}
               <div className="absolute inset-0 top-20 bg-brand-50/50 flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full p-12">
                     {/* Decorative Map Lines */}
                     <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 500">
                        <path d="M100,100 Q400,50 700,400" stroke="currentColor" fill="none" strokeWidth="2" />
                        <path d="M50,300 Q200,200 600,100" stroke="currentColor" fill="none" strokeWidth="2" />
                        <path d="M200,400 Q400,300 750,200" stroke="currentColor" fill="none" strokeWidth="2" />
                     </svg>

                     {/* Moving Pings */}
                     {[1,2,3,4,5].map(i => (
                       <motion.div
                         key={i}
                         animate={{ 
                           x: [Math.random() * 600, Math.random() * 600],
                           y: [Math.random() * 300, Math.random() * 300]
                         }}
                         transition={{ duration: 10 + Math.random() * 20, repeat: Infinity, ease: "linear" }}
                         className="absolute w-4 h-4"
                       >
                         <div className="relative">
                            <div className="absolute inset-0 w-4 h-4 bg-brand-900/20 rounded-full animate-ping" />
                            <div className="relative w-2 h-2 m-1 bg-brand-900 rounded-full" />
                         </div>
                       </motion.div>
                     ))}
                  </div>
               </div>

               {/* Overlay Info Card */}
               <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-2xl flex items-center justify-between border border-white/40">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-xl bg-brand-900 flex items-center justify-center text-white shadow-lg">
                        <Truck className="w-5 h-5" />
                     </div>
                     <div>
                        <div className="text-xs font-bold text-brand-900">Truck #2841 — En Route</div>
                        <div className="text-[10px] text-brand-500 font-medium">Current RPM: $3.85 • On Schedule</div>
                     </div>
                  </div>
                  <button className="px-4 py-2 bg-white rounded-lg text-[10px] font-bold text-brand-900 shadow-sm border border-brand-100 hover:bg-brand-50 transition-all">
                     View Telemetry
                  </button>
               </div>
            </div>
         </div>

         {/* Active Load Queue */}
         <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-white border border-brand-100 shadow-sm h-full">
               <div className="flex items-center justify-between mb-8">
                  <h3 className="text-lg font-serif font-bold text-brand-900">Active Pipeline</h3>
                  <MoreVertical className="w-4 h-4 text-brand-400 cursor-pointer" />
               </div>

               <div className="space-y-4">
                  {activeLoads.map((load, i) => (
                    <motion.div
                      key={load.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="group"
                    >
                       <div className="p-4 rounded-2xl bg-brand-50/50 border border-brand-100 hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer">
                          <div className="flex items-center justify-between mb-3">
                             <span className="text-[10px] font-bold text-brand-400 tracking-wider">{load.id}</span>
                             <span className={cn(
                               "text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter",
                               load.status === "Delivered" ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-600"
                             )}>
                                {load.status}
                             </span>
                          </div>
                          
                          <div className="flex items-center justify-between mb-4">
                             <div className="flex items-center gap-2">
                                <div className="text-xs font-bold text-brand-900">{load.origin.split(',')[0]}</div>
                                <ArrowUpRight className="w-3 h-3 text-brand-300" />
                                <div className="text-xs font-bold text-brand-900">{load.dest.split(',')[0]}</div>
                             </div>
                             <div className="text-xs font-bold text-emerald-600">{load.profit}</div>
                          </div>

                          <div className="space-y-1.5">
                             <div className="flex items-center justify-between text-[10px] font-bold text-brand-400">
                                <span>PROGRESS</span>
                                <span>{load.progress}%</span>
                             </div>
                             <div className="h-1 w-full bg-brand-100 rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: `${load.progress}%` }}
                                  transition={{ duration: 1, delay: 0.5 }}
                                  className="h-full bg-brand-900" 
                                />
                             </div>
                          </div>
                       </div>
                    </motion.div>
                  ))}
               </div>

               <button className="w-full mt-6 py-4 rounded-2xl bg-brand-50 text-brand-600 text-xs font-bold hover:bg-brand-100 transition-all">
                  View Full Schedule
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}
