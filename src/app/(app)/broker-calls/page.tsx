"use client";

import { motion } from "framer-motion";
import { 
  Phone, 
  Mic2, 
  Pause, 
  Play, 
  ChevronRight, 
  FileText, 
  History,
  MoreHorizontal,
  PhoneOff,
  Activity,
  User,
  Bot
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export default function BrokerCallsPage() {
  const [activeCall, setActiveCall] = useState<any>(null);
  const [transcript, setTranscript] = useState<any[]>([]);

  const callQueue = [
    { id: "C-9912", broker: "CH Robinson", load: "LD-4421", status: "In Queue", type: "Negotiation" },
    { id: "C-9913", broker: "TQL Logistics", load: "LD-4422", status: "Active", type: "Confirmation" },
    { id: "C-9914", broker: "Uber Freight", load: "LD-4423", status: "Pending", type: "Dispatch" },
  ];

  const recentCalls = [
    { id: "C-9910", broker: "J.B. Hunt", date: "Today, 10:45 AM", duration: "3m 12s", status: "Successful", transcription: "Rate increased to $4,500..." },
    { id: "C-9909", broker: "Convoy", date: "Today, 09:15 AM", duration: "1m 45s", status: "Successful", transcription: "Load confirmed for driver Emma." },
  ];

  useEffect(() => {
    if (activeCall) {
       const lines = [
          { role: "bot", text: "Hello, this is AI Dispatch calling regarding Load #LD-4422." },
          { role: "user", text: "Hey there. Yeah, I've got that one. It's paying $2,200." },
          { role: "bot", text: "My carrier is currently in the area and ready to pick up. Can we do $2,400 based on the current market rates?" },
          { role: "user", text: "Hmm, let me check... I can probably come up to $2,300." },
          { role: "bot", text: "I'll take $2,300 if we can get the rate con sent over within the next 10 minutes." },
       ];
       
       let i = 0;
       const interval = setInterval(() => {
          if (i < lines.length) {
             setTranscript(prev => [...prev, lines[i]]);
             i++;
          } else {
             clearInterval(interval);
          }
       }, 2000);
       return () => clearInterval(interval);
    }
  }, [activeCall]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10">
      
      {/* Left Column: Call Queue & History */}
      <div className="lg:col-span-4 space-y-6">
         {/* Active Queue */}
         <div className="p-6 rounded-3xl bg-white border border-brand-100 shadow-sm">
            <h3 className="text-lg font-serif font-bold text-brand-900 mb-6">Call Queue</h3>
            <div className="space-y-3">
               {callQueue.map((call, i) => (
                 <div 
                   key={call.id} 
                   onClick={() => {
                     setActiveCall(call);
                     setTranscript([]);
                   }}
                   className={cn(
                     "p-4 rounded-2xl border transition-all cursor-pointer group",
                     activeCall?.id === call.id ? "bg-brand-900 border-brand-900 text-white shadow-lg" : "bg-brand-50/50 border-brand-100 hover:bg-white hover:border-brand-200"
                   )}
                 >
                    <div className="flex items-center justify-between mb-2">
                       <span className={cn("text-[10px] font-bold tracking-wider", activeCall?.id === call.id ? "text-white/60" : "text-brand-400")}>{call.id}</span>
                       <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded-full uppercase", 
                         call.status === "Active" ? "bg-emerald-500 text-white" : "bg-white/20 text-current")}>
                          {call.status}
                       </span>
                    </div>
                    <div className="text-sm font-bold">{call.broker}</div>
                    <div className={cn("text-[10px] font-medium mt-1", activeCall?.id === call.id ? "text-white/60" : "text-brand-500")}>
                       {call.type} • {call.load}
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* Call History */}
         <div className="p-6 rounded-3xl bg-white border border-brand-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
               <h3 className="text-lg font-serif font-bold text-brand-900">Recent Logs</h3>
               <History className="w-4 h-4 text-brand-400" />
            </div>
            <div className="space-y-4">
               {recentCalls.map((log) => (
                 <div key={log.id} className="group cursor-pointer">
                    <div className="flex items-center justify-between mb-1">
                       <span className="text-xs font-bold text-brand-900">{log.broker}</span>
                       <span className="text-[10px] text-brand-400 font-medium">{log.date}</span>
                    </div>
                    <p className="text-[10px] text-brand-500 line-clamp-1">{log.transcription}</p>
                 </div>
               ))}
            </div>
            <button className="w-full mt-6 py-3 rounded-xl bg-brand-50 text-brand-600 text-xs font-bold hover:bg-brand-100 transition-all">
               View Full History
            </button>
         </div>
      </div>

      {/* Right Column: Call Interface */}
      <div className="lg:col-span-8">
         <div className="h-full min-h-[600px] rounded-3xl bg-white border border-brand-100 shadow-sm flex flex-col overflow-hidden">
            {!activeCall ? (
               <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
                  <div className="w-20 h-20 rounded-3xl bg-brand-50 flex items-center justify-center text-brand-400 mb-6">
                     <Phone className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-brand-900 mb-2">No Active Conversation</h3>
                  <p className="text-sm text-brand-500 max-w-xs mx-auto">
                     Select a broker from the queue to initiate an autonomous AI negotiation call.
                  </p>
               </div>
            ) : (
               <>
                  {/* Active Call Header */}
                  <div className="p-8 border-b border-brand-50 bg-brand-900 text-white">
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                           <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center relative">
                              <Bot className="w-8 h-8" />
                              <motion.div 
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-4 border-brand-900 rounded-full" 
                              />
                           </div>
                           <div>
                              <div className="flex items-center gap-3 mb-1">
                                 <h3 className="text-xl font-serif font-bold">{activeCall.broker}</h3>
                                 <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-bold uppercase tracking-wider">SECURE LINK</span>
                              </div>
                              <div className="flex items-center gap-2 text-white/60 text-xs font-medium">
                                 <Phone className="w-3.5 h-3.5" />
                                 <span>(312) 555-0192 • Negotiation Phase</span>
                              </div>
                           </div>
                        </div>
                        <div className="flex items-center gap-3">
                           <div className="text-right mr-4">
                              <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">CALL DURATION</div>
                              <div className="text-xl font-serif font-bold tabular-nums">02:41</div>
                           </div>
                           <button onClick={() => setActiveCall(null)} className="w-14 h-14 rounded-2xl bg-red-500 flex items-center justify-center hover:bg-red-600 transition-all shadow-lg">
                              <PhoneOff className="w-6 h-6" />
                           </button>
                        </div>
                     </div>

                     {/* Waveform Visualization */}
                     <div className="mt-8 flex items-end gap-1 h-12">
                        {[...Array(40)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ height: [10, 20 + Math.random() * 30, 10] }}
                            transition={{ duration: 0.5 + Math.random(), repeat: Infinity }}
                            className="flex-1 bg-white/20 rounded-full"
                          />
                        ))}
                     </div>
                  </div>

                  {/* Transcript Area */}
                  <div className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar bg-brand-50/20">
                     {transcript.map((line, i) => (
                       <motion.div
                         key={i}
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         className={cn(
                           "flex gap-4 max-w-2xl",
                           line.role === "bot" ? "" : "ml-auto flex-row-reverse"
                         )}
                       >
                          <div className={cn(
                             "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",
                             line.role === "bot" ? "bg-brand-900 text-white" : "bg-white border border-brand-100 text-brand-900"
                          )}>
                             {line.role === "bot" ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
                          </div>
                          <div className={cn(
                             "p-4 rounded-2xl text-sm font-medium leading-relaxed shadow-sm",
                             line.role === "bot" ? "bg-white text-brand-900 rounded-tl-none" : "bg-brand-900 text-white rounded-tr-none"
                          )}>
                             {line.text}
                          </div>
                       </motion.div>
                     ))}
                  </div>

                  {/* Call Controls */}
                  <div className="p-6 border-t border-brand-50 flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 bg-brand-50 text-brand-600 rounded-xl text-xs font-bold hover:bg-brand-100 transition-all">
                           <Pause className="w-4 h-4" />
                           Mute Bot
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-brand-50 text-brand-600 rounded-xl text-xs font-bold hover:bg-brand-100 transition-all">
                           <Mic2 className="w-4 h-4" />
                           Take Over Call
                        </button>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-emerald-600">
                           <Activity className="w-4 h-4" />
                           <span className="text-[10px] font-bold uppercase tracking-wider">AI Analysis Active</span>
                        </div>
                        <button className="flex items-center gap-2 px-6 py-2 bg-brand-900 text-white rounded-xl text-xs font-bold hover:bg-brand-800 transition-all">
                           View Script Options
                        </button>
                     </div>
                  </div>
               </>
            )}
         </div>
      </div>
    </div>
  );
}
