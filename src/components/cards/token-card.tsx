import React from 'react';
import { Shield, Star, Coins, Lock } from 'lucide-react';

interface TokenCardProps {
  token: {
    id: number;
    symbol: string;
    name: string;
    type: string;
    tvl: string;
    apy: string;
    price: string;
    change24h: string;
    marketCap: string;
    liquidity: string;
    chain: string;
    verified: boolean;
    yieldType: string;
    nextReward: string;
    holders: number;
  };
}

export const TokenCard = ({ token }: TokenCardProps) => (
  <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300">
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
          {token.symbol.slice(0, 3)}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-gray-900 dark:text-white">{token.symbol}</h3>
            {token.verified && <Shield className="w-4 h-4 text-green-500" />}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{token.name}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-green-800 dark:text-green-100">
          {token.type}
        </span>
        <button className="text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-300" aria-label="Favorite">
          <Star className="w-4 h-4" />
        </button>
      </div>
    </div>
    
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Price</p>
        <div className="flex items-center gap-2">
          <p className="font-semibold text-lg">{token.price}</p>
          <span className={`text-xs ${
            token.change24h.startsWith('+') 
              ? 'text-green-600 dark:text-green-400' 
              : 'text-red-600 dark:text-red-400'
          }`}>
            {token.change24h}
          </span>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">APY</p>
        <p className="font-semibold text-lg text-green-600 dark:text-green-400">{token.apy}%</p>
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">TVL</p>
        <p className="font-semibold">{token.tvl}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Liquidity</p>
        <p className="font-semibold">{token.liquidity}</p>
      </div>
    </div>
    
    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
      <div className="flex items-center gap-1">
        <div className={`w-3 h-3 rounded-full ${
          token.chain === 'ethereum' ? 'bg-blue-500' : 
          token.chain === 'polygon' ? 'bg-purple-500' : 
          token.chain === 'arbitrum' ? 'bg-blue-400' : 'bg-indigo-500'
        }`}></div>
        <span className="capitalize">{token.chain}</span>
      </div>
      <span>{token.holders} holders</span>
    </div>
    
    <div className="flex items-center justify-between text-sm mb-4">
      <div>
        <p className="text-gray-500 dark:text-gray-400">Yield Type</p>
        <p className="font-medium">{token.yieldType}</p>
      </div>
      <div className="text-right">
        <p className="text-gray-500 dark:text-gray-400">Next Reward</p>
        <p className="font-medium">{token.nextReward}</p>
      </div>
    </div>
    
    <div className="flex gap-2">
      <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2">
        <Coins className="w-4 h-4" />
        Trade
      </button>
      <button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center gap-2">
        <Lock className="w-4 h-4" />
        Stake
      </button>
    </div>
  </article>
);