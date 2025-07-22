import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export function PricingCard({ title, price, features, isPopular }: PricingCardProps) {
  return (
    <Card className={`relative bg-black border-white/20 p-8 transition-all duration-500 hover:border-white/50 hover:shadow-2xl hover:shadow-white/10 ${isPopular ? 'border-white/50 scale-105' : ''}`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-white text-black px-4 py-1 rounded-full text-sm">∞ CHOSEN ∞</div>
        </div>
      )}
      
      <div className="text-center mb-8">
        <div className="text-white/60 mb-2 tracking-widest uppercase text-sm">{title}</div>
        <div className="text-white mb-6">
          <span className="text-4xl">${price}</span>
          <span className="text-white/60">/ritual</span>
        </div>
        
        {/* Mystical divider */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-8 h-px bg-white/30"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full mx-3"></div>
          <div className="w-8 h-px bg-white/30"></div>
        </div>
      </div>
      
      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center text-white/80">
            <div className="w-4 h-4 border border-white/40 rounded-sm mr-3 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
            </div>
            <span className="text-sm tracking-wide">{feature}</span>
          </div>
        ))}
      </div>
      
      <Button 
        className={`w-full bg-transparent border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 ${isPopular ? 'border-white/60' : ''}`}
      >
        INITIATE
      </Button>
    </Card>
  );
}