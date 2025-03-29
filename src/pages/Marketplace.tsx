
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NFTCard from "@/components/NFTCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

// Mock data for demonstration
const allNFTs = [
  {
    id: "1",
    name: "CRISPR Patent #42",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80",
    price: "3.5",
    currency: "ETH",
    category: "dna" as const,
    rarity: "legendary" as const,
    creator: "GeneTech Labs"
  },
  {
    id: "2",
    name: "Antibody Structure R12",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    price: "1.2",
    currency: "ETH",
    category: "protein" as const,
    rarity: "rare" as const,
    creator: "BioMind Institute"
  },
  {
    id: "3",
    name: "Novel Enzyme Patent",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    price: "0.8",
    currency: "ETH",
    category: "molecule" as const,
    rarity: "uncommon" as const,
    creator: "SynBio Corp"
  },
  {
    id: "4",
    name: "Cell Line JT-238",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    price: "2.4",
    currency: "ETH",
    category: "cell" as const,
    rarity: "rare" as const,
    creator: "CellGenix"
  },
  {
    id: "5",
    name: "PCR Method X29",
    image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&w=800&q=80",
    price: "1.8",
    currency: "ETH",
    category: "research" as const,
    rarity: "rare" as const,
    creator: "BioResearch Co"
  },
  {
    id: "6",
    name: "Vaccine Formula K12",
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755182?auto=format&fit=crop&w=800&q=80",
    price: "5.2",
    currency: "ETH",
    category: "molecule" as const,
    rarity: "legendary" as const,
    creator: "VaxInnovate"
  },
  {
    id: "7",
    name: "RNA Sequence Alpha",
    image: "https://images.unsplash.com/photo-1584942368913-b98dd9983c7e?auto=format&fit=crop&w=800&q=80",
    price: "0.9",
    currency: "ETH",
    category: "dna" as const,
    rarity: "uncommon" as const,
    creator: "GeneSynthesis"
  },
  {
    id: "8",
    name: "Peptide Structure P7",
    image: "https://images.unsplash.com/photo-1564325724739-bae0bd08762c?auto=format&fit=crop&w=800&q=80",
    price: "1.5",
    currency: "ETH",
    category: "protein" as const,
    rarity: "rare" as const,
    creator: "PeptideLabs"
  }
];

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRarity, setSelectedRarity] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  
  const filteredNFTs = allNFTs.filter(nft => {
    const matchesSearch = nft.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          nft.creator.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || nft.category === selectedCategory;
    
    const matchesRarity = selectedRarity === 'all' || nft.rarity === selectedRarity;
    
    let matchesPrice = true;
    if (priceRange === 'under1') {
      matchesPrice = parseFloat(nft.price) < 1;
    } else if (priceRange === '1to5') {
      matchesPrice = parseFloat(nft.price) >= 1 && parseFloat(nft.price) <= 5;
    } else if (priceRange === 'over5') {
      matchesPrice = parseFloat(nft.price) > 5;
    }
    
    return matchesSearch && matchesCategory && matchesRarity && matchesPrice;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl font-bold neon-text mb-4">NFT Marketplace</h1>
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
              <p className="text-gray-400">{filteredNFTs.length} items</p>
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
              <div className="text-center py-20">
                <SlidersHorizontal className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-xl font-medium text-white mb-2">No results found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
          
          {filteredNFTs.length > 0 && (
            <div className="flex justify-center">
              <Button variant="outline" className="border-cyber-blue/30 hover:bg-cyber-blue/20">
                Load More
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
