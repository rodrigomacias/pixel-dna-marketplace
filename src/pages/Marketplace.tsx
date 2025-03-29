
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NFTCard from "@/components/NFTCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

// Empty array to be filled with actual data later
const allNFTs: any[] = [];

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRarity, setSelectedRarity] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  
  // We'll use this filtered array for demonstration
  const filteredNFTs = allNFTs;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl font-bold neon-text mb-4">IPNFT Marketplace</h1>
            <p className="text-gray-400 max-w-2xl">
              Discover and collect rare biotech and pharmaceutical intellectual property assets
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            {/* Search */}
            <div className="flex-grow">
              <div className="relative">
                <Input 
                  type="text"
                  placeholder="Search by name or creator..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-cyber-dark border-cyber-blue/30 focus:border-cyber-blue"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              </div>
            </div>
            
            {/* Category filter - always visible */}
            <div className="w-full lg:w-48">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-cyber-dark border-cyber-blue/30">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-cyber-dark border-cyber-blue/30">
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="dna">DNA Patents</SelectItem>
                  <SelectItem value="molecule">Molecules</SelectItem>
                  <SelectItem value="protein">Proteins</SelectItem>
                  <SelectItem value="cell">Cell Lines</SelectItem>
                  <SelectItem value="research">Research Methods</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Toggle filters button */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:w-auto w-full border-cyber-blue/30 hover:bg-cyber-blue/20"
            >
              <Filter className="mr-2 h-4 w-4" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>
          
          {/* Additional filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-4 bg-cyber-dark/50 border border-cyber-blue/20 rounded-md">
              <div>
                <h3 className="text-sm font-medium mb-2 text-gray-300">Rarity</h3>
                <Select value={selectedRarity} onValueChange={setSelectedRarity}>
                  <SelectTrigger className="bg-cyber-dark border-cyber-blue/30">
                    <SelectValue placeholder="Rarity" />
                  </SelectTrigger>
                  <SelectContent className="bg-cyber-dark border-cyber-blue/30">
                    <SelectItem value="all">All Rarities</SelectItem>
                    <SelectItem value="common">Common</SelectItem>
                    <SelectItem value="uncommon">Uncommon</SelectItem>
                    <SelectItem value="rare">Rare</SelectItem>
                    <SelectItem value="legendary">Legendary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2 text-gray-300">Price Range</h3>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="bg-cyber-dark border-cyber-blue/30">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent className="bg-cyber-dark border-cyber-blue/30">
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="under1">Under 1 ETH</SelectItem>
                    <SelectItem value="1to5">1 - 5 ETH</SelectItem>
                    <SelectItem value="over5">Over 5 ETH</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2 text-gray-300">Status</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox id="buy-now" className="border-cyber-blue/50 data-[state=checked]:bg-cyber-blue" />
                    <label htmlFor="buy-now" className="ml-2 text-sm text-gray-300">Buy Now</label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="auction" className="border-cyber-blue/50 data-[state=checked]:bg-cyber-blue" />
                    <label htmlFor="auction" className="ml-2 text-sm text-gray-300">On Auction</label>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Results */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-400">Connect wallet to view items</p>
              <div className="flex items-center">
                <span className="text-gray-400 mr-2">Sort by:</span>
                <Select defaultValue="latest">
                  <SelectTrigger className="w-[140px] bg-cyber-dark border-cyber-blue/30">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="bg-cyber-dark border-cyber-blue/30">
                    <SelectItem value="latest">Latest</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {filteredNFTs.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredNFTs.map((nft) => (
                  <NFTCard key={nft.id} {...nft} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, index) => (
                  <NFTCard key={`placeholder-${index}`} id={`placeholder-${index}`} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
