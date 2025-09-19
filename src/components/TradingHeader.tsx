import { Search, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const TradingHeader = () => {
  return (
    <>
      {/* Ticker Bar */}
      <div className="border-b border-border bg-card overflow-hidden">
        <div className="flex items-center h-8">
          <div className="animate-ticker-scroll flex items-center gap-8 whitespace-nowrap text-sm">
            <span className="text-neon-cyan">🚀 DOGE Jr +420.69%</span>
            <span className="text-neon-lime">⚡ PEPE Classic +69.42%</span>
            <span className="text-neon-magenta">🔥 Moon Token +100.00%</span>
            <span className="text-neon-gold">💎 Diamond Hands +50.25%</span>
            <span className="text-neon-cyan">🎮 GameFi Token +75.80%</span>
            <span className="text-bear">📉 Rekt Coin -99.99%</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-magenta flex items-center justify-center">
                <Zap className="h-6 w-6 text-background" />
              </div>
              <div>
                <h1 className="text-2xl font-bold holographic">TRIGGER</h1>
                <p className="text-xs text-muted-foreground">Arcade Trading Terminal</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="⌘K Search tokens..."
                  className="w-full pl-10 pr-4 py-2 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-sm font-mono text-neon-cyan animate-neon-pulse">$2.1B</div>
                <div className="text-xs text-muted-foreground">Total Cap</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-mono text-neon-lime animate-neon-pulse">420</div>
                <div className="text-xs text-muted-foreground">Active Tokens</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-mono text-neon-magenta animate-neon-pulse">69K</div>
                <div className="text-xs text-muted-foreground">Traders</div>
              </div>
            </div>

            {/* Connect Wallet */}
            <Button variant="arcade" className="ml-6">
              Connect Phantom
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default TradingHeader;