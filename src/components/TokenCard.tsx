import { TrendingUp, TrendingDown, Zap, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TokenCardProps {
  token: {
    name: string;
    symbol: string;
    price: string;
    change24h: number;
    volume: string;
    marketCap: string;
    emoji: string;
    isNew?: boolean;
    isTrending?: boolean;
  };
}

const TokenCard = ({ token }: TokenCardProps) => {
  const isPositive = token.change24h > 0;
  const glowClass = isPositive ? "neon-glow-lime" : "neon-glow-magenta";
  
  return (
    <Card className={`trading-card group relative overflow-hidden ${token.isTrending ? glowClass : ""}`}>
      {/* Trending Badge */}
      {token.isTrending && (
        <div className="absolute top-2 right-2 bg-neon-lime text-background px-2 py-1 rounded text-xs font-bold animate-neon-pulse">
          🔥 TRENDING
        </div>
      )}
      
      {/* New Badge */}
      {token.isNew && (
        <div className="absolute top-2 right-2 bg-neon-cyan text-background px-2 py-1 rounded text-xs font-bold animate-neon-pulse">
          ✨ NEW
        </div>
      )}

      <div className="p-6">
        {/* Token Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-3xl animate-neon-pulse">{token.emoji}</div>
            <div>
              <h3 className="font-bold text-lg">{token.name}</h3>
              <p className="text-sm text-muted-foreground font-mono">${token.symbol}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-mono font-bold">${token.price}</div>
            <div className={`flex items-center gap-1 text-sm font-mono ${isPositive ? 'text-bull' : 'text-bear'}`}>
              {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
              {isPositive ? '+' : ''}{token.change24h.toFixed(2)}%
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-xs text-muted-foreground">Volume 24h</div>
            <div className="font-mono text-sm">{token.volume}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Market Cap</div>
            <div className="font-mono text-sm">{token.marketCap}</div>
          </div>
        </div>

        {/* Bonding Curve Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-muted-foreground mb-1">
            <span>Bonding Curve</span>
            <span>69% Complete</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-neon-cyan to-neon-lime h-2 rounded-full transition-all duration-500 animate-data-flow"
              style={{ width: "69%" }}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="bullish" size="sm" className="font-mono">
            BUY 🚀
          </Button>
          <Button variant="bearish" size="sm" className="font-mono">
            SELL 📉
          </Button>
        </div>

        {/* Holders */}
        <div className="flex items-center justify-center mt-3 pt-3 border-t border-border">
          <Users className="h-4 w-4 text-muted-foreground mr-2" />
          <span className="text-sm text-muted-foreground font-mono">420 holders</span>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-neon-magenta/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </Card>
  );
};

export default TokenCard;