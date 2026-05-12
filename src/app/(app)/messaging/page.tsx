"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  MoreVertical, 
  Send, 
  Plus, 
  User, 
  Bot, 
  Paperclip, 
  Smile,
  CheckCheck,
  Zap,
  Truck
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function MessagingPage() {
  const [selectedChat, setSelectedChat] = useState<any>(null);

  const chats = [
    { id: 1, name: "CH Robinson Broker", lastMsg: "Please send the insurance cert.", time: "2m ago", unread: 2, online: true, type: "Broker" },
    { id: 2, name: "Driver: John Doe", lastMsg: "Just arrived at Chicago receiver.", time: "15m ago", unread: 0, online: true, type: "Driver" },
    { id: 3, name: "TQL - Mike Ross", lastMsg: "Rate con confirmed for tomorrow.", time: "1h ago", unread: 0, online: false, type: "Broker" },
    { id: 4, name: "Driver: Emma Wilson", lastMsg: "Fuel stop in 50 miles.", time: "2h ago", unread: 0, online: true, type: "Driver" },
  ];

  return (
    <div className="h-[calc(100vh-160px)] bg-white border border-brand-100 rounded-[32px] shadow-sm flex overflow-hidden">
      
      {/* Sidebar: Chat List */}
      <div className="w-96 border-r border-brand-50 flex flex-col bg-brand-50/10">
         <div className="p-6 border-b border-brand-50">
            <h3 className="text-xl font-serif font-bold text-brand-900 mb-6">Messages</h3>
            <div className="relative">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-400" />
               <input 
                 type="text" 
                 placeholder="Search conversations..." 
                 className="w-full pl-10 pr-4 py-2.5 bg-white border border-brand-100 rounded-xl text-xs font-medium focus:outline-hidden"
               />
            </div>
         </div>
         <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-1">
            {chats.map((chat) => (
              <button 
                key={chat.id}
                onClick={() => setSelectedChat(chat)}
                className={cn(
                  "w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300",
                  selectedChat?.id === chat.id ? "bg-white shadow-md" : "hover:bg-white/60"
                )}
              >
                 <div className="relative">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center text-brand-900 border border-brand-100",
                      chat.type === "Driver" ? "bg-blue-50" : "bg-emerald-50"
                    )}>
                       {chat.type === "Driver" ? <Truck className="w-6 h-6" /> : <User className="w-6 h-6" />}
                    </div>
                    {chat.online && (
                      <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-4 border-white rounded-full" />
                    )}
                 </div>
                 <div className="flex-1 text-left min-w-0">
                    <div className="flex justify-between items-center mb-1">
                       <span className="text-sm font-bold text-brand-900 truncate">{chat.name}</span>
                       <span className="text-[10px] text-brand-400 font-medium">{chat.time}</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <p className="text-xs text-brand-500 truncate">{chat.lastMsg}</p>
                       {chat.unread > 0 && (
                         <span className="w-5 h-5 rounded-full bg-brand-900 text-white text-[10px] font-bold flex items-center justify-center">
                            {chat.unread}
                         </span>
                       )}
                    </div>
                 </div>
              </button>
            ))}
         </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
         {!selectedChat ? (
            <div className="flex-1 flex flex-col items-center justify-center p-12 text-center opacity-40">
               <div className="w-20 h-20 rounded-full bg-brand-50 flex items-center justify-center mb-6">
                  <Bot className="w-10 h-10" />
               </div>
               <h3 className="text-xl font-serif font-bold text-brand-900">Select a Conversation</h3>
               <p className="text-sm max-w-xs mx-auto mt-2">All communications with drivers and brokers are recorded and AI-analyzed for your records.</p>
            </div>
         ) : (
            <>
               {/* Chat Header */}
               <div className="p-6 border-b border-brand-50 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-900 border border-brand-100">
                        {selectedChat.type === "Driver" ? <Truck className="w-6 h-6" /> : <User className="w-6 h-6" />}
                     </div>
                     <div>
                        <h4 className="text-lg font-serif font-bold text-brand-900">{selectedChat.name}</h4>
                        <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">{selectedChat.type} • ACTIVE LOAD #LD-4421</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-3">
                     <button className="p-2.5 rounded-xl bg-brand-50 text-brand-500 hover:text-brand-900 transition-all">
                        <MoreVertical className="w-5 h-5" />
                     </button>
                  </div>
               </div>

               {/* Messages Area */}
               <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
                  <div className="flex flex-col gap-6">
                     <div className="flex gap-4 max-w-xl">
                        <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-900 flex-shrink-0">
                           <User className="w-5 h-5" />
                        </div>
                        <div className="p-4 rounded-2xl bg-brand-50 text-brand-900 text-sm font-medium shadow-sm rounded-tl-none">
                           Hello, can you send over the updated insurance certificate for this carrier? We need it before we can send the rate con.
                        </div>
                     </div>

                     <div className="flex gap-4 max-w-xl ml-auto flex-row-reverse text-right">
                        <div className="w-10 h-10 rounded-xl bg-brand-900 text-white flex items-center justify-center flex-shrink-0">
                           <Bot className="w-5 h-5" />
                        </div>
                        <div className="space-y-2">
                           <div className="p-4 rounded-2xl bg-brand-900 text-white text-sm font-medium shadow-lg rounded-tr-none">
                              Sure, our AI assistant has already pulled that from our vault. Sending it over now.
                           </div>
                           <div className="flex items-center justify-end gap-1 text-[10px] text-brand-400 font-bold uppercase">
                              <CheckCheck className="w-3 h-3 text-emerald-500" />
                              DELIVERED
                           </div>
                        </div>
                     </div>
                     
                     <div className="flex justify-center">
                        <span className="px-4 py-1.5 rounded-full bg-brand-50 text-[10px] font-bold text-brand-400 uppercase tracking-widest">Insurance_Cert_TR102.pdf attached</span>
                     </div>
                  </div>
               </div>

               {/* AI Assisted Reply Layer */}
               <div className="px-8 py-4 bg-brand-900/5 border-t border-brand-50">
                  <div className="flex items-center gap-4 mb-3">
                     <Zap className="w-4 h-4 text-brand-900" />
                     <span className="text-[10px] font-bold text-brand-900 uppercase tracking-widest">AI Assisted Replies</span>
                  </div>
                  <div className="flex gap-3">
                     <button className="px-4 py-2 bg-white border border-brand-100 rounded-xl text-xs font-bold text-brand-600 hover:shadow-md transition-all">
                        "Certificate sent, please confirm receipt."
                     </button>
                     <button className="px-4 py-2 bg-white border border-brand-100 rounded-xl text-xs font-bold text-brand-600 hover:shadow-md transition-all">
                        "Wait, let me check the file version first."
                     </button>
                  </div>
               </div>

               {/* Input Area */}
               <div className="p-8 pt-4">
                  <div className="relative">
                     <textarea 
                       placeholder="Type your message..." 
                       rows={1}
                       className="w-full pl-6 pr-24 py-4 bg-white border border-brand-200 rounded-2xl text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-brand-900/5 transition-all resize-none shadow-sm"
                     />
                     <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                        <button className="p-2 text-brand-400 hover:text-brand-900 transition-colors">
                           <Smile className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-brand-400 hover:text-brand-900 transition-colors">
                           <Paperclip className="w-5 h-5" />
                        </button>
                        <button className="p-3 bg-brand-900 text-white rounded-xl shadow-md hover:scale-105 transition-all">
                           <Send className="w-5 h-5" />
                        </button>
                     </div>
                  </div>
               </div>
            </>
         )}
      </div>
    </div>
  );
}
