"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Search, 
  PhoneCall, 
  Truck, 
  BarChart3, 
  Zap, 
  MessageSquare, 
  Settings, 
  Bell, 
  LogOut,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { label: "Overview", icon: LayoutDashboard, href: "/dashboard" },
    { label: "Load Board", icon: Search, href: "/load-board" },
    { label: "AI Broker Calls", icon: PhoneCall, href: "/broker-calls" },
    { label: "Fleet Mgmt", icon: Truck, href: "/fleet" },
    { label: "Automation", icon: Zap, href: "/automation" },
    { label: "Analytics", icon: BarChart3, href: "/analytics" },
    { label: "Messaging", icon: MessageSquare, href: "/messaging" },
  ];

  return (
    <div className="flex h-screen bg-[#F8F9FA] overflow-hidden font-sans">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="relative z-50 flex flex-col bg-white border-r border-brand-100 shadow-sm transition-all duration-500 ease-in-out"
      >
        {/* Sidebar Header */}
        <div className="h-20 flex items-center px-6 gap-3 border-b border-brand-50">
          <div className="w-8 h-8 rounded-lg bg-brand-900 flex-shrink-0 flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rounded-sm" />
          </div>
          {isSidebarOpen && (
            <motion.span 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-lg font-serif font-bold text-brand-900 truncate"
            >
              AI DISPATCH
            </motion.span>
          )}
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300",
                  isActive 
                    ? "bg-brand-900 text-white shadow-md" 
                    : "text-brand-500 hover:bg-brand-50 hover:text-brand-900"
                )}
              >
                <item.icon className={cn("w-5 h-5 flex-shrink-0", isActive ? "text-white" : "group-hover:scale-110 transition-transform")} />
                {isSidebarOpen && (
                  <motion.span 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    className="text-sm font-bold"
                  >
                    {item.label}
                  </motion.span>
                )}
                {isActive && isSidebarOpen && (
                   <motion.div layoutId="active-pill" className="ml-auto">
                      <ChevronRight className="w-4 h-4 opacity-50" />
                   </motion.div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-brand-50">
          <Link
            href="/settings"
            className={cn(
              "flex items-center gap-3 px-3 py-3 rounded-xl text-brand-500 hover:bg-brand-50 hover:text-brand-900 transition-all",
              pathname === "/settings" && "bg-brand-50 text-brand-900"
            )}
          >
            <Settings className="w-5 h-5" />
            {isSidebarOpen && <span className="text-sm font-bold">Settings</span>}
          </Link>
          <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all mt-1">
            <LogOut className="w-5 h-5" />
            {isSidebarOpen && <span className="text-sm font-bold">Log Out</span>}
          </button>
        </div>
        
        {/* Toggle Button */}
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute -right-3 top-24 w-6 h-6 rounded-full bg-white border border-brand-100 flex items-center justify-center shadow-sm hover:shadow-md transition-all z-50"
        >
          <div className={cn("w-1.5 h-1.5 rounded-full bg-brand-400 transition-all", isSidebarOpen ? "scale-100" : "scale-125 bg-brand-900")} />
        </button>
      </motion.aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-brand-100 flex items-center justify-between px-8 z-40">
           <div className="flex items-center gap-4">
              <h2 className="text-xl font-serif font-bold text-brand-900">
                {menuItems.find(i => i.href === pathname)?.label || "Dashboard"}
              </h2>
           </div>

           <div className="flex items-center gap-6">
              <div className="relative group hidden sm:block">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-400 group-focus-within:text-brand-900 transition-colors" />
                 <input 
                   type="text" 
                   placeholder="Search nodes..." 
                   className="pl-10 pr-4 py-2 bg-brand-50 border border-brand-100 rounded-full text-xs font-medium focus:outline-hidden focus:ring-2 focus:ring-brand-900/10 focus:bg-white transition-all w-64"
                 />
              </div>

              <div className="flex items-center gap-2">
                 <button className="relative p-2.5 rounded-xl bg-brand-50 text-brand-500 hover:bg-brand-100 hover:text-brand-900 transition-all">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 border-2 border-white" />
                 </button>
                 <div className="h-10 w-[1px] bg-brand-100 mx-2" />
                 <button className="flex items-center gap-3 p-1.5 pr-4 rounded-xl hover:bg-brand-50 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center text-[10px] font-bold text-brand-900 border border-brand-200">
                       AD
                    </div>
                    <div className="text-left hidden lg:block">
                       <div className="text-xs font-bold text-brand-900">Alex Dispatcher</div>
                       <div className="text-[10px] font-medium text-emerald-600 uppercase">Premium Carrier</div>
                    </div>
                 </button>
              </div>
           </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar relative" data-lenis-prevent>
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
