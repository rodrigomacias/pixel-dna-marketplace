
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, TrendingUp, BarChart3, Layers, RefreshCw } from 'lucide-react';

const defiFeatures = [
  {
    id: 'yield',
    name: 'Yield Farming',
    icon: TrendingUp,
    description: 'Stake your NFTs to earn passive income through yield farming'
  },
  {
    id: 'liquidity',
    name: 'Liquidity Pools',
    icon: Layers,
    description: 'Provide liquidity to pools and earn fees from IP trading'
  },
  {
    id: 'lending',
    name: 'NFT Collateralized Lending',
    icon: RefreshCw,
    description: 'Use your biotech NFTs as collateral for loans'
  },
  {
    id: 'analytics',
    name: 'Market Analytics',
    icon: BarChart3,
    description: 'Comprehensive analytics for biotech IP market trends'
  }
];

const DeFiFeatures = () => {
  return (
    <section className="py-20 relative dna-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold neon-text-purple mb-3">DeFi Integration</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Leverage decentralized finance protocols to maximize the value of your biotech IP assets
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {defiFeatures.map((feature) => (
            <Card key={feature.id} className="cyber-card h-full bg-gradient-to-b from-cyber-dark to-cyber-dark/80 overflow-hidden group">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-cyber-blue/20 group-hover:bg-cyber-blue/30 transition-colors">
                    <feature.icon className="h-6 w-6 text-cyber-blue" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-gray-500 group-hover:text-cyber-blue transition-colors" />
                </div>
                
                <h3 className="font-bold text-lg mb-2 text-white group-hover:text-cyber-blue transition-colors">
                  {feature.name}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeFiFeatures;
