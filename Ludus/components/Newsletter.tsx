import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  
  return (
    <div className="relative bg-black border border-white/20 p-12 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-white rounded-full"></div>
        <div className="absolute bottom-12 right-4 w-2 h-2 bg-white rounded-full"></div>
      </div>
      
      <div className="relative z-10 max-w-md mx-auto text-center">
        <div className="mb-6">
          {/* Mystical symbol */}
          <div className="flex justify-center mb-4">
            <svg width="32" height="32" viewBox="0 0 32 32" className="stroke-white fill-none stroke-1">
              <circle cx="16" cy="16" r="12" />
              <circle cx="16" cy="16" r="6" />
              <line x1="4" y1="16" x2="28" y2="16" />
              <line x1="16" y1="4" x2="16" y2="28" />
            </svg>
          </div>
          
          <h3 className="text-white mb-2 tracking-widest">TRANSMISSIONS</h3>
          <p className="text-white/60 text-sm">Join the inner circle of digital mystics</p>
        </div>
        
        <div className="space-y-4">
          <div className="relative">
            <Input
              type="email"
              placeholder="your.essence@domain.void"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-white/30 text-white placeholder:text-white/40 focus:border-white/60 focus:ring-white/20"
            />
          </div>
          
          <Button 
            className="w-full bg-transparent border border-white/50 text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            ⟨ ASCEND ⟩
          </Button>
        </div>
        
        <div className="mt-6 text-xs text-white/40 tracking-widest">
          ENCRYPTED • MINIMAL • SACRED
        </div>
      </div>
    </div>
  );
}