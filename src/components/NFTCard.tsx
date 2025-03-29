
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Dna, ArrowUpRight, Sparkles } from 'lucide-react';

interface NFTCardProps {
  id: string;
  name: string;
  image: string;
  price: string;
  currency: string;
  category: 'dna' | 'molecule' | 'protein' | 'cell' | 'research';
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
  creator: string;
  liked?: boolean;
}

const rarityColors = {
  common: 'bg-slate-500',
  uncommon: 'bg-green-500',
  rare: 'bg-blue-500',
  legendary: 'bg-purple-500'
};

const categoryIcons = {
  dna: Dna,
  molecule: Sparkles,
  protein: Dna,
  cell: Dna,
  research: Dna
};

const NFTCard = ({ id, name, image, price, currency, category, rarity, creator, liked = false }: NFTCardProps) => {
  const [isLiked, setIsLiked] = useState(liked);
  const [isHovered, setIsHovered] = useState(false);
  
  const CategoryIcon = categoryIcons[category];

  return (
    <Link to={`/nft/${id}`}>
      <Card 
        className="cyber-card overflow-hidden transition-all duration-300 transform group border-cyber-blue/30 hover:border-cyber-blue/60"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden aspect-square">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-darker/80 pointer-events-none" />
          
          <div className="absolute top-2 left-2 right-2 flex justify-between items-center">
            <Badge 
              variant="secondary" 
              className={`${rarityColors[rarity]} text-white text-xs px-2 py-0.5 flex items-center gap-1`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              {rarity.charAt(0).toUpperCase() + rarity.slice(1)}
            </Badge>
            
            <Badge 
              variant="outline" 
              className="bg-cyber-dark/80 border-cyber-blue/30 text-xs text-gray-300 px-2 py-0.5 flex items-center gap-1 backdrop-blur-sm"
            >
              <CategoryIcon className="h-3 w-3 text-cyber-blue" />
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Badge>
          </div>
          
          <div 
            className={`absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-cyber-darker to-transparent transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Button 
              variant="secondary" 
              size="sm" 
              className="w-full bg-cyber-blue/20 hover:bg-cyber-blue/40 border border-cyber-blue/50 text-white backdrop-blur-sm"
            >
              View Details
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-white truncate">{name}</h3>
              <p className="text-sm text-gray-400 truncate">by {creator}</p>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsLiked(!isLiked);
              }}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <Heart className={`h-5 w-5 ${isLiked ? 'text-red-500 fill-red-500' : ''}`} />
            </button>
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <div className="text-sm text-gray-400">Price</div>
          <div className="font-bold text-cyber-green flex items-center">
            <img src={`/assets/${currency.toLowerCase()}.svg`} alt={currency} className="w-4 h-4 mr-1" />
            {price} {currency}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default NFTCard;
