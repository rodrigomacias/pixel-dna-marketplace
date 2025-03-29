
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NFTCard from './NFTCard';
import { ArrowRight } from 'lucide-react';

// Empty arrays for demonstration, to be filled with actual data later
const featuredNFTs: any[] = [];
const trendingNFTs: any[] = [];

const FeaturedNFTs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold neon-text-purple mb-2">Featured IPNFTs</h2>
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
            {featuredNFTs.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredNFTs.map((nft) => (
                  <NFTCard key={nft.id} {...nft} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, index) => (
                  <NFTCard key={`placeholder-${index}`} id={`placeholder-${index}`} />
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="trending" className="mt-0">
            {trendingNFTs.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {trendingNFTs.map((nft) => (
                  <NFTCard key={nft.id} {...nft} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, index) => (
                  <NFTCard key={`placeholder-${index}`} id={`placeholder-${index}`} />
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="recent" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <NFTCard key={`placeholder-${index}`} id={`placeholder-${index}`} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturedNFTs;
