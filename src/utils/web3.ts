
// This file contains utility functions for web3 interactions
// In a real application, you would use libraries like ethers.js or web3.js

export interface WalletInfo {
  address: string;
  chainId: number;
  balance: string;
}

export const truncateAddress = (address: string): string => {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

// Mock function - would be replaced with actual web3 implementation
export const connectWallet = async (walletType: 'metamask' | 'coinbase'): Promise<WalletInfo> => {
  // Simulate connection delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Generate a mock address and data
  const mockAddress = `0x${Array.from({length: 40}, () => 
    Math.floor(Math.random() * 16).toString(16)).join('')}`;
  
  return {
    address: mockAddress,
    chainId: 1, // Ethereum mainnet
    balance: '0.032'
  };
};

// Mock function - would be replaced with actual web3 implementation
export const disconnectWallet = async (): Promise<void> => {
  // Simulate disconnection delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // In a real application, you would clean up web3 connections here
  return;
};

// Mock function for fetching NFT data
export const fetchNFTs = async (address: string): Promise<any[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Return mock data
  return [
    {
      id: "owned-1",
      name: "CRISPR Patent #42",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80",
      price: "3.5",
      currency: "ETH",
      category: "dna",
      rarity: "legendary",
      creator: "GeneTech Labs"
    },
    {
      id: "owned-2",
      name: "Vaccine Formula K12",
      image: "https://images.unsplash.com/photo-1579165466741-7f35e4755182?auto=format&fit=crop&w=800&q=80",
      price: "5.2",
      currency: "ETH",
      category: "molecule",
      rarity: "legendary",
      creator: "VaxInnovate"
    }
  ];
};

// Mock function for fetching NFT details
export const fetchNFTDetails = async (id: string): Promise<any> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return mock data
  return {
    id,
    name: "CRISPR Patent #42",
    description: "Exclusive rights to a novel CRISPR-Cas9 genetic modification technique specifically targeting rare genetic disorders.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80",
    price: "3.5",
    currency: "ETH",
    category: "dna",
    rarity: "legendary",
    creator: "GeneTech Labs",
    createdAt: "2023-10-15T14:30:00Z",
    tokenId: "42",
    contractAddress: "0x1234567890abcdef1234567890abcdef12345678",
    blockchain: "Ethereum",
    metadata: {
      technique: "CRISPR-Cas9",
      target: "Rare genetic disorders",
      efficacy: "87%",
      patentNumber: "US10123456",
      status: "Active"
    }
  };
};

// Mock function for DEX integration
export const swapTokens = async (
  fromToken: string,
  toToken: string,
  amount: string,
  dex: string
): Promise<{success: boolean, txHash: string}> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Generate a mock transaction hash
  const mockTxHash = `0x${Array.from({length: 64}, () => 
    Math.floor(Math.random() * 16).toString(16)).join('')}`;
  
  return {
    success: true,
    txHash: mockTxHash
  };
};
