"use client";

import { motion } from "framer-motion";
import { 
  Truck, 
  User, 
  Settings, 
  Wrench, 
  Fuel, 
  ShieldCheck, 
  ArrowUpRight,
  MoreVertical,
  Calendar,
  AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function FleetPage() {
  const fleet = [
    { id: "TR-102", name: "Alpha One", driver: "John Doe", type: "Peterbilt 579", status: "Active", fuel: "82%", maintenance: "1,200 mi", efficiency: "7.2 mpg" },
    { id: "TR-105", name: "Bravo Zero", driver: "Sarah Smith", type: "Freightliner Cascadia", status: "Active", fuel: "45%", maintenance: "450 mi", efficiency: "6.8 mpg" },
    { id: "TR-108", name: "Charlie Nine", driver: "Mike Ross", type: "Volvo VNL 860", status: "Maintenance", fuel: "12%", maintenance: "OVERDUE", efficiency: "7.0 mpg" },
    { id: "TR-112", name: "Delta Five", driver: "Emma Wilson", type: "Kenworth T680", status: "Active", fuel: "95%", maintenance: "3,400 mi", efficiency: "7.5 mpg" },
  ];

  return (
    <div className="space-y-10 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
           <h1 className="text-3xl font-serif font-bold text-brand-900 mb-2">Fleet Management</h1>
           <p className="text-sm text-brand-500 font-medium">14 vehicles active • <span className="text-emerald-600">92% availability</span></p>
        </div>
        <div className="flex items-center gap-3">
           <button className="flex items-center gap-2 px-6 py-3 bg-white border border-brand-100 rounded-2xl text-sm font-bold text-brand-600 hover:bg-brand-50 transition-all shadow-sm">
              <Calendar className="w-4 h-4" />
              Service Schedule
           </button>
           <button className="flex items-center gap-2 px-8 py-3 bg-brand-900 text-white rounded-2xl text-sm font-bold shadow-premium hover:scale-[1.02] transition-all">
              Add Vehicle
           </button>
        </div>
      </div>

      {/* Fleet Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="p-6 rounded-3xl bg-white border border-brand-100 shadow-sm flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
               <Truck className="w-8 h-8" />
            </div>
            <div>
               <div className="text-[10px] font-bold text-brand-400 uppercase tracking-widest mb-1">Total Assets</div>
               <div className="text-2xl font-serif font-bold text-brand-900">42</div>
            </div>
         </div>
         <div className="p-6 rounded-3xl bg-white border border-brand-100 shadow-sm flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
               <Fuel className="w-8 h-8" />
            </div>
            <div>
               <div className="text-[10px] font-bold text-brand-400 uppercase tracking-widest mb-1">Fleet Efficiency</div>
               <div className="text-2xl font-serif font-bold text-brand-900">7.1 MPG</div>
            </div>
         </div>
         <div className="p-6 rounded-3xl bg-white border border-brand-100 shadow-sm flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
               <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
               <div className="text-[10px] font-bold text-brand-400 uppercase tracking-widest mb-1">Safety Rating</div>
               <div className="text-2xl font-serif font-bold text-brand-900">98.4%</div>
            </div>
         </div>
      </div>

      {/* Fleet Table */}
      <div className="bg-white border border-brand-100 rounded-3xl shadow-sm overflow-hidden">
         <div className="p-8 border-b border-brand-50 flex items-center justify-between">
            <h3 className="text-xl font-serif font-bold text-brand-900">Active Assets</h3>
            <div className="flex gap-2">
               <div className="px-3 py-1 bg-brand-50 rounded-lg text-[10px] font-bold text-brand-500 uppercase tracking-wider">ALL TRUCKS</div>
               <div className="px-3 py-1 bg-white border border-brand-100 rounded-lg text-[10px] font-bold text-brand-400 uppercase tracking-wider">DRIVERS</div>
            </div>
         </div>
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="bg-brand-50/50">
                     <th className="px-8 py-4 text-[10px] font-bold text-brand-400 uppercase tracking-widest">Truck / ID</th>
                     <th className="px-8 py-4 text-[10px] font-bold text-brand-400 uppercase tracking-widest">Driver</th>
                     <th className="px-8 py-4 text-[10px] font-bold text-brand-400 uppercase tracking-widest">Status</th>
                     <th className="px-8 py-4 text-[10px] font-bold text-brand-400 uppercase tracking-widest">Fuel / Maintenance</th>
                     <th className="px-8 py-4 text-[10px] font-bold text-brand-400 uppercase tracking-widest">Efficiency</th>
                     <th className="px-8 py-4 text-[10px] font-bold text-brand-400 uppercase tracking-widest"></th>
                  </tr>
               </thead>
               <tbody>
                  {fleet.map((item, i) => (
                    <motion.tr 
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="border-b border-brand-50 hover:bg-brand-50/30 transition-all group"
                    >
                       <td className="px-8 py-6">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center text-brand-900 group-hover:scale-110 transition-transform">
                                <Truck className="w-5 h-5" />
                             </div>
                             <div>
                                <div className="text-sm font-bold text-brand-900">{item.name}</div>
                                <div className="text-[10px] font-medium text-brand-400 uppercase">{item.id} • {item.type}</div>
                             </div>
                          </div>
                       </td>
                       <td className="px-8 py-6">
                          <div className="flex items-center gap-2">
                             <div className="w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center text-[8px] font-bold">
                                {item.driver.split(' ').map(n => n[0]).join('')}
                             </div>
                             <span className="text-sm font-medium text-brand-700">{item.driver}</span>
                          </div>
                       </td>
                       <td className="px-8 py-6">
                          <span className={cn(
                            "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                            item.status === "Active" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                          )}>
                             {item.status}
                          </span>
                       </td>
                       <td className="px-8 py-6">
                          <div className="space-y-2">
                             <div className="flex items-center justify-between text-[10px] font-bold text-brand-400">
                                <span>FUEL: {item.fuel}</span>
                                <span className={cn(item.maintenance === "OVERDUE" ? "text-red-500" : "text-brand-400")}>NEXT: {item.maintenance}</span>
                             </div>
                             <div className="h-1 w-32 bg-brand-100 rounded-full overflow-hidden">
                                <div 
                                  className={cn("h-full", parseInt(item.fuel) > 20 ? "bg-brand-900" : "bg-red-500")} 
                                  style={{ width: item.fuel }} 
                                />
                             </div>
                          </div>
                       </td>
                       <td className="px-8 py-6">
                          <div className="text-sm font-bold text-brand-900">{item.efficiency}</div>
                       </td>
                       <td className="px-8 py-6 text-right">
                          <button className="p-2 rounded-lg text-brand-300 hover:text-brand-900 transition-colors">
                             <MoreVertical className="w-5 h-5" />
                          </button>
                       </td>
                    </motion.tr>
                  ))}
               </tbody>
            </table>
         </div>
         <div className="p-6 bg-brand-50/30 flex justify-center">
            <button className="text-xs font-bold text-brand-500 hover:text-brand-900 transition-colors">
               Load More Assets
            </button>
         </div>
      </div>
    </div>
  );
}
