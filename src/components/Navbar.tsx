
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Wallet, Dna, Flask, Menu, X, Search } from 'lucide-react';
import WalletConnectButton from './WalletConnectButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-cyber-darker/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 relative animate-float">
              <Dna size={32} className="text-cyber-purple absolute animate-dna-rotate" />
              <Flask size={32} className="text-cyber-blue absolute animate-pulse opacity-70" />
            </div>
            <span className="text-xl font-bold neon-text">BioNFT</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/marketplace" className="text-gray-300 hover:text-cyber-blue transition-colors">
              Marketplace
            </Link>
            <Link to="/collections" className="text-gray-300 hover:text-cyber-blue transition-colors">
              Collections
            </Link>
            <Link to="/defi" className="text-gray-300 hover:text-cyber-blue transition-colors">
              DeFi
            </Link>
            <Link to="/create" className="text-gray-300 hover:text-cyber-blue transition-colors">
              Create
            </Link>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="relative">
              <Search className="h-5 w-5 text-gray-300" />
            </Button>
            
            <WalletConnectButton />
            
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-300" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-300" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cyber-dark/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link 
              to="/marketplace" 
              className="block text-gray-300 hover:text-cyber-blue py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Marketplace
            </Link>
            <Link 
              to="/collections" 
              className="block text-gray-300 hover:text-cyber-blue py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Collections
            </Link>
            <Link 
              to="/defi" 
              className="block text-gray-300 hover:text-cyber-blue py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              DeFi
            </Link>
            <Link 
              to="/create" 
              className="block text-gray-300 hover:text-cyber-blue py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Create
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
