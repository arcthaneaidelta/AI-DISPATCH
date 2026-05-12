"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const phases = [
    "INITIALIZING CORE SYSTEM",
    "CONNECTING TO AI NODES",
    "OPTIMIZING LOGISTICS ENGINE",
    "CALIBRATING DISPATCH MATRICES",
    "SYSTEM READY",
  ];

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            document.body.style.overflow = "auto";
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (progress > 80) setPhase(4);
    else if (progress > 60) setPhase(3);
    else if (progress > 40) setPhase(2);
    else if (progress > 20) setPhase(1);
  }, [progress]);

  useEffect(() => {
    if (isDone && onComplete) {
      setTimeout(onComplete, 800);
    }
  }, [isDone, onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background p-6"
        >
          {/* Background Ambient Particles (Simplified) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
             <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-200 blur-[120px] rounded-full animate-pulse" />
             <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-100 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative w-full max-w-md flex flex-col items-center">
            {/* Logo Placeholder Animation */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-12 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-900 flex items-center justify-center shadow-premium">
                <div className="w-6 h-6 border-2 border-white rounded-md animate-spin-slow" />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight text-brand-900">AI DISPATCH</span>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-full h-[1px] bg-brand-100 relative overflow-hidden mb-6">
              <motion.div
                className="absolute inset-y-0 left-0 bg-brand-900"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Status Text */}
            <div className="flex flex-col items-center gap-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={phase}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-[10px] font-bold tracking-[0.2em] text-brand-500 uppercase"
                >
                  {phases[phase]}
                </motion.span>
              </AnimatePresence>
              
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-serif font-medium text-brand-900 tabular-nums">
                  {progress}
                </span>
                <span className="text-xs font-bold text-brand-400">%</span>
              </div>
            </div>

            {/* Simulated System Lines */}
            <div className="mt-12 w-full space-y-2 opacity-30">
               {[...Array(3)].map((_, i) => (
                 <motion.div 
                    key={i}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                    className="h-[1px] bg-linear-to-r from-transparent via-brand-200 to-transparent"
                 />
               ))}
            </div>
          </div>

          <style jsx>{`
            .animate-spin-slow {
              animation: spin 3s linear infinite;
            }
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
