import TradingHeader from "@/components/TradingHeader";
import MarketOverview from "@/components/MarketOverview";
import DiscoveryTabs from "@/components/DiscoveryTabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TradingHeader />
      
      <main className="container mx-auto px-6 py-8">
        {/* Market Overview */}
        <MarketOverview />
        
        {/* Discovery Section */}
        <section>
          <div className="mb-6">
            <h2 className="text-3xl font-bold holographic mb-2">
              🎮 Discover Meme Coins
            </h2>
            <p className="text-muted-foreground">
              Find the next 100x gem in the arcade trading terminal
            </p>
          </div>
          
          <DiscoveryTabs />
        </section>
      </main>
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl animate-neon-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-magenta/10 rounded-full blur-3xl animate-neon-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-neon-lime/10 rounded-full blur-3xl animate-neon-pulse" style={{ animationDelay: "2s" }} />
      </div>
    </div>
  );
};

export default Index;
