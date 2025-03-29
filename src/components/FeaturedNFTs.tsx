
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NFTCard from './NFTCard';
import { ArrowRight } from 'lucide-react';

// Mock data for demonstration
const featuredNFTs = [
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
  }
];

const trendingNFTs = [
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

const FeaturedNFTs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold neon-text-purple mb-2">Featured BioNFTs</h2>
            <p className="text-gray-400">Discover the most valuable intellectual property</p>
          </div>
          <Button variant="link" className="text-cyber-blue hover:text-cyber-purple">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
        
        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="mb-8 bg-cyber-dark/50 border border-cyber-blue/30 p-1 rounded-lg w-fit">
            <TabsTrigger value="featured" className="data-[state=active]:bg-cyber-blue/20 data-[state=active]:text-cyber-blue">
              Featured
            </TabsTrigger>
            <TabsTrigger value="trending" className="data-[state=active]:bg-cyber-blue/20 data-[state=active]:text-cyber-blue">
              Trending
            </TabsTrigger>
            <TabsTrigger value="recent" className="data-[state=active]:bg-cyber-blue/20 data-[state=active]:text-cyber-blue">
              Recent
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="featured" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredNFTs.map((nft) => (
                <NFTCard key={nft.id} {...nft} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="trending" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingNFTs.map((nft) => (
                <NFTCard key={nft.id} {...nft} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="recent" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...featuredNFTs, ...trendingNFTs].slice(0, 4).map((nft) => (
                <NFTCard key={nft.id} {...nft} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturedNFTs;
