
import { Button } from "@/components/ui/button";
import { Dna, ChevronRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Animated DNA Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute left-1/4 top-1/4 animate-float">
          <Dna size={300} className="text-cyber-purple animate-dna-rotate opacity-20" />
        </div>
        <div className="absolute right-1/4 bottom-1/4 animate-float">
          <Dna size={300} className="text-cyber-blue animate-dna-rotate opacity-20" />
        </div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple to-cyber-blue opacity-30 blur-xl animate-pulse-neon rounded-full"></div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyber-dark/80 border border-cyber-blue/30 backdrop-blur-sm relative">
              <Sparkles className="w-4 h-4 mr-2 text-cyber-blue" />
              <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
                Revolutionary NFT Platform for Biotech IP
              </span>
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 neon-text tracking-tight">
            Tokenize Biotech <br />
            <span className="bg-gradient-to-r from-cyber-green to-cyber-blue bg-clip-text text-transparent">
              Intellectual Property
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The first NFT marketplace specifically designed for biotech and pharma IP. Secure, transparent, and built for scientists and innovators.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="pixel-btn text-lg px-8 py-6">
              Explore Marketplace
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" className="text-lg px-8 py-6 border-cyber-purple/50 hover:bg-cyber-purple/20">
              Create an NFT
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cyber-purple/10 to-transparent"></div>
    </div>
  );
};

export default Hero;
