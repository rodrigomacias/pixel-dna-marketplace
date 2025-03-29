
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Wallet, LogOut, AlertCircle, Database, ChevronRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

type WalletStatus = 'disconnected' | 'connecting' | 'connected';

const WalletConnectButton = () => {
  const [walletStatus, setWalletStatus] = useState<WalletStatus>('disconnected');
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const { toast } = useToast();

  const connectWallet = async (walletType: 'metamask' | 'coinbase') => {
    try {
      setWalletStatus('connecting');
      
      // This is a placeholder for actual wallet connection logic
      // In a real app, you would use ethers.js or web3.js to connect to the wallet
      setTimeout(() => {
        // Mock successful connection
        const mockAddress = `0x${Array.from({length: 40}, () => 
          Math.floor(Math.random() * 16).toString(16)).join('')}`;
        setWalletAddress(mockAddress);
        setBalance('0.032 ETH');
        setWalletStatus('connected');
        
        toast({
          title: "Wallet Connected",
          description: `Connected to ${walletType.charAt(0).toUpperCase() + walletType.slice(1)} wallet`,
          variant: "default",
        });
      }, 1000);
      
    } catch (error) {
      console.error('Error connecting wallet:', error);
      setWalletStatus('disconnected');
      
      toast({
        title: "Connection Failed",
        description: "Failed to connect wallet. Please try again.",
        variant: "destructive",
      });
    }
  };

  const disconnectWallet = () => {
    setWalletStatus('disconnected');
    setWalletAddress(null);
    setBalance(null);
    
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected",
      variant: "default",
    });
  };

  const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  if (walletStatus === 'connected' && walletAddress) {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="border-cyber-blue text-cyber-blue hover:text-white hover:bg-cyber-blue/20">
            <span className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              {formatAddress(walletAddress)}
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72 cyber-card border-cyber-blue/30 p-0 backdrop-blur-lg">
          <div className="p-4 border-b border-cyber-blue/20">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-sm text-gray-300">Connected Wallet</h4>
              <Button variant="ghost" size="icon" onClick={disconnectWallet} className="h-8 w-8 text-gray-400 hover:text-white">
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-cyber-blue font-mono text-sm mt-1">{walletAddress}</p>
          </div>
          
          <div className="p-4 border-b border-cyber-blue/20">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-sm text-gray-300">Balance</h4>
              <span className="text-cyber-green font-medium">{balance}</span>
            </div>
          </div>
          
          <div className="p-2">
            <Button variant="ghost" className="w-full justify-between text-gray-300 hover:text-cyber-blue" asChild>
              <a href="/profile">
                My Profile <ChevronRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" className="w-full justify-between text-gray-300 hover:text-cyber-blue" asChild>
              <a href="/my-nfts">
                My NFTs <ChevronRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          className={`border-cyber-blue hover:bg-cyber-blue/20 ${walletStatus === 'connecting' ? 'opacity-70 cursor-not-allowed' : ''}`}
          disabled={walletStatus === 'connecting'}
        >
          <Wallet className="mr-2 h-4 w-4 text-cyber-blue" />
          {walletStatus === 'connecting' ? 'Connecting...' : 'Connect Wallet'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-0 cyber-card border-cyber-blue/30 backdrop-blur-lg">
        <div className="p-2">
          <h4 className="font-medium text-sm p-2 text-white">Connect Wallet</h4>
          <Button 
            variant="ghost" 
            className="w-full justify-start text-gray-300 hover:text-cyber-blue space-x-2"
            onClick={() => connectWallet('metamask')}
            disabled={walletStatus === 'connecting'}
          >
            <img src="/assets/metamask.png" alt="MetaMask" className="h-5 w-5" />
            <span>MetaMask</span>
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start text-gray-300 hover:text-cyber-blue space-x-2"
            onClick={() => connectWallet('coinbase')}
            disabled={walletStatus === 'connecting'}
          >
            <img src="/assets/coinbase.png" alt="Coinbase" className="h-5 w-5" />
            <span>Coinbase Wallet</span>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default WalletConnectButton;
