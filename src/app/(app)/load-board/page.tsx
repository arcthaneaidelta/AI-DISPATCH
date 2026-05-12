"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Filter, 
  ArrowUpRight, 
  Star, 
  MapPin, 
  Calendar, 
  Weight, 
  Maximize2,
  Cpu,
  Zap,
  MoreVertical
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function LoadBoardPage() {
  const loads = [
    { id: "L-4421", broker: "CH Robinson", origin: "Chicago, IL", dest: "Los Angeles, CA", payout: "$4,850", rpm: "$2.41", weight: "42k lbs", equipment: "Dry Van", score: 98, urgency: "High" },
    { id: "L-4422", broker: "TQL Logistics", origin: "Atlanta, GA", dest: "Miami, FL", payout: "$2,200", rpm: "$3.12", weight: "38k lbs", equipment: "Reefer", score: 92, urgency: "Medium" },
    { id: "L-4423", broker: "Uber Freight", origin: "Seattle, WA", dest: "Denver, CO", payout: "$3,600", rpm: "$2.85", weight: "44k lbs", equipment: "Dry Van", score: 85, urgency: "Low" },
    { id: "L-4424", broker: "J.B. Hunt", origin: "Houston, TX", dest: "Phoenix, AZ", payout: "$2,450", rpm: "$2.15", weight: "40k lbs", equipment: "Flatbed", score: 78, urgency: "Medium" },
    { id: "L-4425", broker: "Convoy", origin: "Newark, NJ", dest: "Columbus, OH", payout: "$1,850", rpm: "$3.55", weight: "32k lbs", equipment: "Dry Van", score: 95, urgency: "High" },
  ];

  return (
    <div className="space-y-10 pb-10">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
           <h1 className="text-3xl font-serif font-bold text-brand-900 mb-2">Load Hunting Engine</h1>
           <p className="text-sm text-brand-500 font-medium">Scanning 52 load boards • <span className="text-blue-600">421 relevant results</span></p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
           <div className="relative w-full sm:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-400" />
              <input 
                type="text" 
                placeholder="Origin, destination, or broker..." 
                className="w-full pl-11 pr-4 py-3 bg-white border border-brand-100 rounded-2xl text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-brand-900/5 transition-all shadow-sm"
              />
           </div>
           <button className="flex items-center gap-2 px-6 py-3 bg-brand-900 text-white rounded-2xl text-sm font-bold shadow-premium hover:scale-[1.02] transition-all whitespace-nowrap">
              Run AI Analysis
           </button>
        </div>
      </div>

      {/* Filters & Quick Stats */}
      <div className="flex items-center gap-4 overflow-x-auto pb-2 no-scrollbar">
         <button className="px-5 py-2.5 bg-brand-900 text-white rounded-full text-xs font-bold whitespace-nowrap">All Loads</button>
         <button className="px-5 py-2.5 bg-white border border-brand-100 text-brand-500 hover:text-brand-900 rounded-full text-xs font-bold whitespace-nowrap transition-all">High Score (90+)</button>
         <button className="px-5 py-2.5 bg-white border border-brand-100 text-brand-500 hover:text-brand-900 rounded-full text-xs font-bold whitespace-nowrap transition-all">Reefer Only</button>
         <button className="px-5 py-2.5 bg-white border border-brand-100 text-brand-500 hover:text-brand-900 rounded-full text-xs font-bold whitespace-nowrap transition-all">Under 40k lbs</button>
         <div className="h-6 w-[1px] bg-brand-100 mx-2" />
         <button className="flex items-center gap-2 px-5 py-2.5 bg-brand-50 text-brand-600 rounded-full text-xs font-bold whitespace-nowrap transition-all">
            <Filter className="w-3.5 h-3.5" />
            More Filters
         </button>
      </div>

      {/* Load List */}
      <div className="space-y-4">
         {loads.map((load, i) => (
           <motion.div
             key={load.id}
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: i * 0.1 }}
             className="group relative"
           >
              <div className="p-6 rounded-3xl bg-white border border-brand-100 shadow-sm hover:shadow-premium transition-all duration-500 group-hover:border-brand-200">
                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* AI Score & Broker */}
                    <div className="lg:col-span-3 flex items-center gap-4">
                       <div className="relative w-16 h-16 flex-shrink-0">
                          <svg className="w-full h-full transform -rotate-90">
                             <circle cx="32" cy="32" r="28" fill="none" stroke="#f1f5f9" strokeWidth="4" />
                             <motion.circle 
                                cx="32" cy="32" r="28" fill="none" 
                                stroke={load.score > 90 ? "#10b981" : load.score > 80 ? "#3b82f6" : "#f59e0b"} 
                                strokeWidth="4" 
                                strokeDasharray="175.9"
                                initial={{ strokeDashoffset: 175.9 }}
                                animate={{ strokeDashoffset: 175.9 - (175.9 * load.score) / 100 }}
                                transition={{ duration: 1, delay: i * 0.2 }}
                             />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-brand-900">
                             {load.score}
                          </div>
                       </div>
                       <div>
                          <h4 className="text-sm font-bold text-brand-900">{load.broker}</h4>
                          <p className="text-[10px] text-brand-400 font-bold tracking-widest uppercase">{load.id}</p>
                       </div>
                    </div>

                    {/* Route Details */}
                    <div className="lg:col-span-4">
                       <div className="flex items-center gap-4">
                          <div className="flex flex-col items-center gap-1">
                             <div className="w-2 h-2 rounded-full bg-brand-300" />
                             <div className="w-[1px] h-4 bg-brand-100" />
                             <MapPin className="w-3 h-3 text-brand-900" />
                          </div>
                          <div className="space-y-1">
                             <div className="text-xs font-bold text-brand-900">{load.origin}</div>
                             <div className="text-xs font-bold text-brand-900">{load.dest}</div>
                          </div>
                          <div className="ml-auto text-right">
                             <div className="text-[10px] font-bold text-brand-400 uppercase mb-1">Equipment</div>
                             <div className="text-xs font-bold text-brand-700">{load.equipment}</div>
                          </div>
                       </div>
                    </div>

                    {/* Payload & Dates */}
                    <div className="lg:col-span-2 flex flex-col gap-3">
                       <div className="flex items-center gap-2 text-brand-500">
                          <Weight className="w-4 h-4" />
                          <span className="text-xs font-bold">{load.weight}</span>
                       </div>
                       <div className="flex items-center gap-2 text-brand-500">
                          <Calendar className="w-4 h-4" />
                          <span className="text-xs font-bold">Pick: Today</span>
                       </div>
                    </div>

                    {/* Pricing & Actions */}
                    <div className="lg:col-span-3 flex items-center justify-between lg:justify-end gap-8">
                       <div className="text-right">
                          <div className="text-xl font-serif font-bold text-brand-900">{load.payout}</div>
                          <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-tighter">{load.rpm} / MILE</div>
                       </div>
                       <div className="flex items-center gap-2">
                          <button className="p-3 rounded-2xl bg-brand-50 text-brand-500 hover:bg-brand-100 hover:text-brand-900 transition-all">
                             <Maximize2 className="w-5 h-5" />
                          </button>
                          <button className="px-6 py-3 bg-brand-900 text-white rounded-2xl text-xs font-bold shadow-md hover:shadow-lg transition-all">
                             Book Now
                          </button>
                       </div>
                    </div>
                 </div>

                 {/* AI Insights Tag */}
                 <div className="mt-4 pt-4 border-t border-brand-50 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-emerald-50 text-[10px] font-bold text-emerald-700">
                          <Cpu className="w-3 h-3" />
                          REVENUE OPTIMIZED
                       </div>
                       <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-blue-50 text-[10px] font-bold text-blue-700">
                          <Zap className="w-3 h-3" />
                          HIGH MATCH
                       </div>
                    </div>
                    <div className="text-[10px] font-bold text-brand-400">
                       Last updated 2m ago via DAT.com
                    </div>
                 </div>
              </div>
           </motion.div>
         ))}
      </div>
    </div>
  );
}
