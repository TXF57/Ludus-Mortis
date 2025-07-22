import { GeometricSymbol } from "./components/GeometricSymbol";
import { PricingCard } from "./components/PricingCard";
import { Newsletter } from "./components/Newsletter";

export default function App() {
  const categories = [
    {
      symbol: 'square' as const,
      title: 'INTERFACE',
      description: 'The portal through which mortals commune with the digital realm',
      features: ['Ritualistic Design', 'Sacred Geometry', 'Minimalist Doctrine']
    },
    {
      symbol: 'circle' as const,
      title: 'PROJECTS',
      description: 'Manifestations of code and consciousness intertwined',
      features: ['Eternal Cycles', 'Infinite Iterations', 'Temporal Mastery']
    },
    {
      symbol: 'triangle' as const,
      title: 'BUDGET',
      description: 'The trinity of value, investment, and transcendence',
      features: ['Sacred Economy', 'Divine Proportions', 'Alchemical ROI']
    }
  ];

  const pricingPlans = [
    {
      title: 'BASIC',
      price: '9',
      features: [
        'Essential Elements',
        'Minimal Mysticism',
        'Basic Transmutation',
        'Single Portal Access',
        'Fundamental Rituals'
      ]
    },
    {
      title: 'PRO',
      price: '19',
      features: [
        'Advanced Geometries',
        'Enhanced Symbolism',
        'Multi-Dimensional Access',
        'Sacred Algorithms',
        'Priority Transmissions',
        'Cryptic Analytics'
      ],
      isPopular: true
    },
    {
      title: 'PREMIUM',
      price: '29',
      features: [
        'Transcendent Architecture',
        'Infinite Customization',
        'Dimensional Mastery',
        'Temporal Manipulation',
        'Direct Channel Access',
        'Reality Distortion Field',
        'Consciousness Integration'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900 opacity-90"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-block mb-4">
              <div className="flex items-center space-x-8 mb-6">
                <div className="w-px h-8 bg-white/30"></div>
                <span className="tracking-[0.5em] text-white/60 text-sm">DIGITAL RITUALS</span>
                <div className="w-px h-8 bg-white/30"></div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl tracking-wider mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              ＡＳＣＥＮＤ
            </h1>
            
            <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Where startup clarity meets digital mysticism. 
              Transcend the ordinary through sacred geometries and ritualistic code.
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-12 mb-16">
            <div className="w-16 h-px bg-white/30"></div>
            <div className="w-4 h-4 border border-white/50 rotate-45"></div>
            <div className="w-16 h-px bg-white/30"></div>
          </div>
        </div>
      </section>

      {/* Sacred Geometry Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl mb-6 tracking-wider">THE TRINITY</h2>
            <div className="w-24 h-px bg-white/50 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-16">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="text-center group cursor-pointer transition-all duration-700 hover:transform hover:scale-105"
              >
                <div className="mb-8 flex justify-center">
                  <GeometricSymbol type={category.symbol} size={100} />
                </div>
                
                <h3 className="text-2xl mb-4 tracking-widest">{category.title}</h3>
                <p className="text-white/60 mb-8 leading-relaxed">{category.description}</p>
                
                <div className="space-y-3">
                  {category.features.map((feature, i) => (
                    <div key={i} className="flex items-center justify-center text-white/70">
                      <div className="w-2 h-2 bg-white/40 rounded-full mr-3"></div>
                      <span className="text-sm tracking-wide">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Mystical underline */}
                <div className="mt-8 flex justify-center">
                  <div className="w-12 h-px bg-white/30 group-hover:w-20 group-hover:bg-white/60 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 px-4 relative bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="mb-6">
              <div className="flex justify-center mb-4">
                <svg width="40" height="40" viewBox="0 0 40 40" className="stroke-white fill-none stroke-1">
                  <polygon points="20,5 35,30 5,30" />
                  <circle cx="20" cy="22" r="6" />
                </svg>
              </div>
              <h2 className="text-4xl mb-4 tracking-wider">SACRED INVESTMENT</h2>
              <p className="text-white/60">Choose your path to digital enlightenment</p>
            </div>
            <div className="w-32 h-px bg-white/50 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 px-4">
        <div className="max-w-2xl mx-auto">
          <Newsletter />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="flex space-x-8 items-center">
              <GeometricSymbol type="square" size={24} />
              <GeometricSymbol type="circle" size={24} />
              <GeometricSymbol type="triangle" size={24} />
            </div>
          </div>
          
          <div className="text-white/40 text-sm tracking-widest mb-4">
            ∞ WHERE CODE BECOMES CONSCIOUSNESS ∞
          </div>
          
          <div className="text-white/30 text-xs">
            2025 • DIGITAL MYSTICISM • TRANSCENDENT TECHNOLOGY
          </div>
        </div>
      </footer>
    </div>
  );
}