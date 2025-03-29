
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ArrowUpDown, RefreshCw, ExternalLink } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const dexes = [
  { id: 'uniswap', name: 'Uniswap' },
  { id: 'sushiswap', name: 'SushiSwap' },
  { id: '1inch', name: '1inch' },
  { id: 'balancer', name: 'Balancer' }
];

const tokens = [
  { id: 'eth', name: 'Ethereum', symbol: 'ETH' },
  { id: 'bnft', name: 'BioNFT', symbol: 'BNFT' },
  { id: 'usdc', name: 'USD Coin', symbol: 'USDC' },
  { id: 'dai', name: 'Dai', symbol: 'DAI' },
  { id: 'wbtc', name: 'Wrapped Bitcoin', symbol: 'WBTC' }
];

const DEXConnection = () => {
  const [selectedDex, setSelectedDex] = useState('uniswap');
  const [fromToken, setFromToken] = useState('eth');
  const [toToken, setToToken] = useState('bnft');
  const [amount, setAmount] = useState('1.0');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSwap = () => {
    setLoading(true);
    
    // Simulate API call to DEX
    setTimeout(() => {
      setLoading(false);
      
      toast({
        title: "Swap Initiated",
        description: `Swapping ${amount} ${tokens.find(t => t.id === fromToken)?.symbol} to ${tokens.find(t => t.id === toToken)?.symbol} via ${dexes.find(d => d.id === selectedDex)?.name}`,
        variant: "default",
      });
    }, 1500);
  };

  const handleFlipTokens = () => {
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
  };

  return (
    <Card className="cyber-card border-cyber-blue/30 max-w-lg mx-auto">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl text-center font-bold">Connect to DEX</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Select DEX</label>
            <Select value={selectedDex} onValueChange={setSelectedDex}>
              <SelectTrigger className="bg-cyber-dark border-cyber-blue/30">
                <SelectValue placeholder="Select DEX" />
              </SelectTrigger>
              <SelectContent className="bg-cyber-dark border-cyber-blue/30">
                {dexes.map((dex) => (
                  <SelectItem key={dex.id} value={dex.id} className="hover:bg-cyber-blue/20">
                    {dex.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-3">
            <div className="space-y-2">
              <label className="text-sm text-gray-400">From</label>
              <div className="flex space-x-2">
                <Input 
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-cyber-dark border-cyber-blue/30"
                />
                <Select value={fromToken} onValueChange={setFromToken}>
                  <SelectTrigger className="w-[180px] bg-cyber-dark border-cyber-blue/30">
                    <SelectValue placeholder="Select token" />
                  </SelectTrigger>
                  <SelectContent className="bg-cyber-dark border-cyber-blue/30">
                    {tokens.map((token) => (
                      <SelectItem key={token.id} value={token.id} className="hover:bg-cyber-blue/20">
                        {token.name} ({token.symbol})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex justify-center my-2">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleFlipTokens}
                className="rounded-full bg-cyber-dark/80 hover:bg-cyber-blue/20 border border-cyber-blue/30"
              >
                <ArrowUpDown className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-gray-400">To (Estimated)</label>
              <div className="flex space-x-2">
                <Input 
                  type="number"
                  value={(parseFloat(amount) * 42.5).toFixed(2)}
                  readOnly
                  className="bg-cyber-dark border-cyber-blue/30"
                />
                <Select value={toToken} onValueChange={setToToken}>
                  <SelectTrigger className="w-[180px] bg-cyber-dark border-cyber-blue/30">
                    <SelectValue placeholder="Select token" />
                  </SelectTrigger>
                  <SelectContent className="bg-cyber-dark border-cyber-blue/30">
                    {tokens.map((token) => (
                      <SelectItem key={token.id} value={token.id} className="hover:bg-cyber-blue/20">
                        {token.name} ({token.symbol})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <div className="pt-2">
            <Button 
              className="w-full bg-cyber-blue hover:bg-cyber-blue/80 text-white"
              onClick={handleSwap}
              disabled={loading}
            >
              {loading ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Swapping...
                </>
              ) : (
                "Swap Tokens"
              )}
            </Button>
          </div>
          
          <div className="flex justify-between items-center pt-3 text-xs text-gray-400">
            <span>Slippage: 0.5%</span>
            <a href="#" className="flex items-center text-cyber-blue hover:underline">
              View on DEX <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DEXConnection;
