"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LoadingScreen } from "@/components/shared/loading-screen";
import { ArrowRight, Zap, Shield, BarChart3, Truck, Globe, Cpu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative min-h-screen">
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <div className="relative">
          {/* Navigation */}
          <nav className="fixed top-0 inset-x-0 z-50 h-20 px-6 flex items-center justify-between glass">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-900 flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rounded-sm" />
              </div>
              <span className="text-xl font-serif font-bold tracking-tight text-brand-900">AI DISPATCH</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-500">
              <a href="#features" className="hover:text-brand-900 transition-colors">Platform</a>
              <a href="#solutions" className="hover:text-brand-900 transition-colors">Solutions</a>
              <a href="#pricing" className="hover:text-brand-900 transition-colors">Pricing</a>
              <a href="#about" className="hover:text-brand-900 transition-colors">Resources</a>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/login" className="text-sm font-medium text-brand-600 hover:text-brand-900 px-4 py-2">
                Sign In
              </Link>
              <Link href="/dashboard" className="text-sm font-medium bg-brand-900 text-white px-5 py-2.5 rounded-full hover:bg-brand-800 transition-all shadow-premium hover:shadow-premium-hover">
                Enter App
              </Link>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="relative pt-40 pb-20 px-6 overflow-hidden">
            {/* Ambient background elements */}
            <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-brand-100/50 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-brand-200/30 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold tracking-wider mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                  </span>
                  NEXT-GEN LOGISTICS OS
                </div>
                
                <h1 className="text-6xl md:text-8xl font-serif font-bold text-brand-900 leading-[1.05] mb-8 tracking-tighter">
                  Intelligent <br />
                  <span className="text-gradient">Dispatching.</span>
                </h1>
                
                <p className="text-xl text-brand-500 max-w-xl mb-10 leading-relaxed">
                  The first enterprise-grade AI operating system for trucking. 
                  Automate load hunting, broker calls, and fleet orchestration with cinematic precision.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/dashboard" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-900 text-white rounded-2xl font-bold shadow-premium hover:shadow-premium-hover hover:scale-[1.02] transition-all group">
                    Launch Command Center
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-brand-200 text-brand-900 rounded-2xl font-bold hover:bg-brand-50 transition-all">
                    Watch Demo Film
                  </button>
                </div>

                <div className="mt-12 flex items-center gap-6 opacity-60">
                   <div className="flex -space-x-3">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-brand-100 flex items-center justify-center text-[10px] font-bold">
                           JD
                        </div>
                      ))}
                   </div>
                   <p className="text-sm font-medium text-brand-500">Trusted by 2,500+ carriers worldwide</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Floating UI Elements */}
                <div className="relative z-10 glass rounded-3xl p-6 shadow-2xl border border-white/40 overflow-hidden">
                  <div className="flex items-center justify-between mb-8">
                     <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400/20" />
                        <div className="w-3 h-3 rounded-full bg-amber-400/20" />
                        <div className="w-3 h-3 rounded-full bg-emerald-400/20" />
                     </div>
                     <div className="text-[10px] font-bold tracking-widest text-brand-400 uppercase">LIVE DISPATCH ENGINE</div>
                  </div>

                  <div className="space-y-4">
                     {[1,2,3].map(i => (
                       <div key={i} className="p-4 rounded-2xl bg-brand-50/50 border border-brand-100 flex items-center justify-between group hover:bg-white hover:shadow-sm transition-all duration-500">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-xl bg-white border border-brand-100 flex items-center justify-center text-brand-600">
                                <Truck className="w-5 h-5" />
                             </div>
                             <div>
                                <div className="text-xs font-bold text-brand-900">CARRIER_{i*100} — ATLANTA, GA</div>
                                <div className="text-[10px] text-brand-400 font-medium uppercase mt-0.5">Route Optimized • 12.4m remaining</div>
                             </div>
                          </div>
                          <div className="text-right">
                             <div className="text-xs font-bold text-emerald-600">+$2,450</div>
                             <div className="text-[10px] text-brand-400 font-medium uppercase mt-0.5">EST. PROFIT</div>
                          </div>
                       </div>
                     ))}
                  </div>

                  {/* Animated Visualization Layer */}
                  <div className="mt-8 h-40 relative rounded-2xl bg-brand-900 overflow-hidden group">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]" />
                     <div className="absolute inset-0 p-4 flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                           <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                              <span className="text-[10px] font-bold text-white/60 tracking-wider">NETWORK STATUS: OPTIMAL</span>
                           </div>
                           <Globe className="w-4 h-4 text-white/20" />
                        </div>
                        <div className="space-y-1">
                           <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                              <motion.div 
                                animate={{ x: ["-100%", "100%"] }} 
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="h-full w-20 bg-linear-to-r from-transparent via-emerald-400 to-transparent" 
                              />
                           </div>
                           <div className="h-1 w-2/3 bg-white/5 rounded-full overflow-hidden">
                               <motion.div 
                                animate={{ x: ["-100%", "100%"] }} 
                                transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "linear" }}
                                className="h-full w-10 bg-linear-to-r from-transparent via-blue-400 to-transparent" 
                              />
                           </div>
                        </div>
                     </div>
                  </div>
                </div>

                {/* Decorative floating badges */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 z-20 glass p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white/50"
                >
                  <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                    <Zap className="w-5 h-5 fill-amber-600" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-brand-400 uppercase">AI REASONING</div>
                    <div className="text-xs font-bold text-brand-900">Score: 98/100</div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-10 -left-10 z-20 glass p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white/50"
                >
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    <Shield className="w-5 h-5 fill-blue-600" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-brand-400 uppercase">AUTO DISPATCH</div>
                    <div className="text-xs font-bold text-brand-900">Enabled</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Feature Grid */}
          <section id="features" className="py-32 px-6 bg-white relative">
            <div className="max-w-7xl mx-auto">
               <div className="text-center mb-20">
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-6 tracking-tight">Built for the future of freight.</h2>
                  <p className="text-lg text-brand-500 max-w-2xl mx-auto">
                    We've replaced manual spreadsheets and frantic phone calls with an autonomous, high-intelligence orchestration layer.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { title: "AI Load Hunting", desc: "Our agents scan 50+ load boards simultaneously, analyzing thousands of data points in milliseconds.", icon: Cpu, color: "bg-blue-50 text-blue-600" },
                    { title: "Voice Broker Calls", desc: "Autonomous AI agents handle the negotiation, documentation, and confirmation calls with natural speech.", icon: Globe, color: "bg-emerald-50 text-emerald-600" },
                    { title: "Smart Route Analytics", desc: "Predictive weather, traffic, and fuel optimization to maximize RPM on every single haul.", icon: BarChart3, color: "bg-purple-50 text-purple-600" },
                  ].map((feat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -10 }}
                      className="p-8 rounded-3xl bg-brand-50/30 border border-brand-100 hover:bg-white hover:shadow-premium transition-all duration-500"
                    >
                       <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm", feat.color)}>
                          <feat.icon className="w-7 h-7" />
                       </div>
                       <h3 className="text-xl font-bold text-brand-900 mb-3">{feat.title}</h3>
                       <p className="text-brand-500 leading-relaxed text-sm">
                          {feat.desc}
                       </p>
                    </motion.div>
                  ))}
               </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-20 px-6 border-t border-brand-100 bg-brand-50/50">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
               <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-900 flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white rounded-sm" />
                  </div>
                  <span className="text-xl font-serif font-bold tracking-tight text-brand-900">AI DISPATCH</span>
               </div>
               <div className="flex gap-8 text-sm font-medium text-brand-400">
                  <a href="#" className="hover:text-brand-900 transition-colors">Privacy</a>
                  <a href="#" className="hover:text-brand-900 transition-colors">Terms</a>
                  <a href="#" className="hover:text-brand-900 transition-colors">Twitter</a>
                  <a href="#" className="hover:text-brand-900 transition-colors">LinkedIn</a>
               </div>
               <p className="text-sm text-brand-400">© 2026 AI Dispatch Inc. All rights reserved.</p>
            </div>
          </footer>
        </div>
      )}
    </main>
  );
}
