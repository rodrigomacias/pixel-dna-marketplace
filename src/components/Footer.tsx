
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Dna, Instagram, Twitter, GitHub, Linkedin, ChevronRight } from 'lucide-react';
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="border-t border-cyber-blue/20 bg-cyber-darker relative overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and about */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 relative">
                <Dna size={32} className="text-cyber-purple" />
              </div>
              <span className="text-xl font-bold text-white">BioNFT</span>
            </Link>
            <p className="text-gray-400 mb-4">
              The premier marketplace for biotech and pharmaceutical intellectual property NFTs. 
              Securely buy, sell, and trade valuable IP assets on the blockchain.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-cyber-blue">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-cyber-blue">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-cyber-blue">
                <GitHub className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-cyber-blue">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/marketplace" className="text-gray-400 hover:text-cyber-blue transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-gray-400 hover:text-cyber-blue transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/create" className="text-gray-400 hover:text-cyber-blue transition-colors">
                  Create NFT
                </Link>
              </li>
              <li>
                <Link to="/defi" className="text-gray-400 hover:text-cyber-blue transition-colors">
                  DeFi
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-400 hover:text-cyber-blue transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-gray-400 hover:text-cyber-blue transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-cyber-blue transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-400 hover:text-cyber-blue transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and IP releases.
            </p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-cyber-dark border-cyber-blue/30 focus:border-cyber-blue/60 rounded-r-none"
              />
              <Button className="rounded-l-none bg-cyber-blue hover:bg-cyber-blue/80">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cyber-blue/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} BioNFT. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-500 hover:text-cyber-blue text-sm">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-gray-500 hover:text-cyber-blue text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
