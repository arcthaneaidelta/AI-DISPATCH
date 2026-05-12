"use client";

import { motion } from "framer-motion";
import { 
  BarChart3, 
  TrendingUp, 
  Calendar, 
  ArrowUpRight, 
  ArrowDownRight,
  Download,
  Filter,
  PieChart,
  LineChart,
  Cpu
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function AnalyticsPage() {
  return (
    <div className="space-y-10 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
           <h1 className="text-3xl font-serif font-bold text-brand-900 mb-2">Performance Analytics</h1>
           <p className="text-sm text-brand-500 font-medium">Data updated 4m ago • <span className="text-emerald-600">Enterprise AI Active</span></p>
        </div>
        <div className="flex items-center gap-3">
           <button className="flex items-center gap-2 px-6 py-3 bg-white border border-brand-100 rounded-2xl text-sm font-bold text-brand-600 hover:bg-brand-50 transition-all shadow-sm">
              <Download className="w-4 h-4" />
              Export PDF
           </button>
           <button className="flex items-center gap-2 px-8 py-3 bg-brand-900 text-white rounded-2xl text-sm font-bold shadow-premium hover:scale-[1.02] transition-all">
              Schedule Report
           </button>
        </div>
      </div>

      {/* High Level Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {[
           { label: "Total Revenue", value: "$4.2M", change: "+12.4%", up: true, desc: "vs previous 30 days" },
           { label: "Broker Conversion", value: "84.2%", change: "+5.1%", up: true, desc: "AI optimization active" },
           { label: "Operating Cost", value: "$1.8M", change: "-2.5%", up: false, desc: "Fuel efficiency improved" },
         ].map((stat, i) => (
           <motion.div
             key={i}
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: i * 0.1 }}
             className="p-8 rounded-3xl bg-white border border-brand-100 shadow-sm"
           >
              <div className="flex items-center justify-between mb-4">
                 <span className="text-[10px] font-bold text-brand-400 uppercase tracking-widest">{stat.label}</span>
                 <div className={cn("flex items-center gap-1 text-xs font-bold", stat.up ? "text-emerald-600" : "text-blue-600")}>
                    {stat.up ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                    {stat.change}
                 </div>
              </div>
              <h3 className="text-4xl font-serif font-bold text-brand-900 mb-2">{stat.value}</h3>
              <p className="text-xs font-medium text-brand-500">{stat.desc}</p>
           </motion.div>
         ))}
      </div>

      {/* AI Insights Panel */}
      <div className="p-8 rounded-3xl bg-brand-900 text-white shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 right-0 p-8 opacity-10">
            <Cpu className="w-40 h-40" />
         </div>
         <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-emerald-400" />
               </div>
               <h3 className="text-xl font-serif font-bold">AI Strategic Insights</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-4">
                  <p className="text-white/60 text-sm leading-relaxed">
                     Based on current market trends and fuel fluctuations, we recommend shifting focus to the **Midwest-South** corridor for the next 72 hours.
                  </p>
                  <div className="flex items-center gap-4">
                     <div className="px-3 py-1 rounded-lg bg-white/10 text-[10px] font-bold uppercase">Confidence: 94%</div>
                     <div className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase">Action Required</div>
                  </div>
               </div>
               <div className="space-y-3">
                  {[
                    "Driver availability in Dallas is reaching peak capacity.",
                    "Reefer rates on DAT are trending 8% higher today.",
                    "Weather alert: Heavy snow on I-80 starting tomorrow AM."
                  ].map((insight, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-medium">
                       <div className="w-2 h-2 rounded-full bg-blue-400" />
                       {insight}
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      {/* Main Charts Simulation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {/* Revenue Chart Box */}
         <div className="p-8 rounded-3xl bg-white border border-brand-100 shadow-sm">
            <div className="flex items-center justify-between mb-10">
               <h3 className="text-xl font-serif font-bold text-brand-900">Revenue Growth</h3>
               <select className="bg-brand-50 border-none text-[10px] font-bold uppercase tracking-wider rounded-lg px-3 py-1 focus:ring-0">
                  <option>Last 6 Months</option>
                  <option>Last Year</option>
               </select>
            </div>
            
            {/* Simulated Chart Bars */}
            <div className="flex items-end justify-between h-64 gap-2">
               {[40, 60, 45, 80, 70, 100].map((height, i) => (
                 <div key={i} className="flex-1 group">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={cn(
                        "w-full rounded-t-xl transition-all duration-300 relative",
                        i === 5 ? "bg-brand-900" : "bg-brand-100 group-hover:bg-brand-200"
                      )}
                    >
                       <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-brand-900 text-white text-[10px] font-bold px-2 py-1 rounded">
                          ${(height * 1.5).toFixed(1)}k
                       </div>
                    </motion.div>
                    <div className="mt-4 text-[10px] font-bold text-brand-400 text-center uppercase">
                       {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i]}
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* Distribution Chart Box */}
         <div className="p-8 rounded-3xl bg-white border border-brand-100 shadow-sm">
            <div className="flex items-center justify-between mb-10">
               <h3 className="text-xl font-serif font-bold text-brand-900">Load Distribution</h3>
               <PieChart className="w-5 h-5 text-brand-400" />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12">
               {/* Simulated Donut Chart */}
               <div className="relative w-48 h-48 flex-shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                     <circle cx="96" cy="96" r="80" fill="none" stroke="#f1f5f9" strokeWidth="24" />
                     <circle cx="96" cy="96" r="80" fill="none" stroke="#0f172a" strokeWidth="24" strokeDasharray="502.4" strokeDashoffset="150" />
                     <circle cx="96" cy="96" r="80" fill="none" stroke="#3b82f6" strokeWidth="24" strokeDasharray="502.4" strokeDashoffset="400" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                     <div className="text-2xl font-serif font-bold text-brand-900">2,412</div>
                     <div className="text-[10px] font-bold text-brand-400 uppercase">TOTAL LOADS</div>
                  </div>
               </div>

               <div className="flex-1 space-y-4">
                  {[
                    { label: "Dry Van", value: "62%", color: "bg-brand-900" },
                    { label: "Reefer", value: "24%", color: "bg-blue-500" },
                    { label: "Flatbed", value: "14%", color: "bg-brand-100" }
                  ].map((item, i) => (
                    <div key={i} className="space-y-1.5">
                       <div className="flex items-center justify-between text-xs font-bold">
                          <div className="flex items-center gap-2">
                             <div className={cn("w-2 h-2 rounded-full", item.color)} />
                             <span className="text-brand-900">{item.label}</span>
                          </div>
                          <span className="text-brand-500">{item.value}</span>
                       </div>
                       <div className="h-1.5 w-full bg-brand-50 rounded-full">
                          <div className={cn("h-full rounded-full", item.color)} style={{ width: item.value }} />
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
