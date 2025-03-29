
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedNFTs from "@/components/FeaturedNFTs";
import Categories from "@/components/Categories";
import DeFiFeatures from "@/components/DeFiFeatures";
import DEXConnection from "@/components/DEXConnection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedNFTs />
        <Categories />
        <div className="py-20 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold neon-text mb-3">Connect to DEX</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Swap tokens and provide liquidity directly through our integrated DEX connections
            </p>
          </div>
          <DEXConnection />
        </div>
        <DeFiFeatures />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
