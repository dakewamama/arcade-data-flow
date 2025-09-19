import { useState } from "react";
import { TrendingUp, Sparkles, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import TokenCard from "./TokenCard";

const DiscoveryTabs = () => {
  const [activeTab, setActiveTab] = useState("trending");

  const tabs = [
    { id: "trending", label: "🔥 Trending", icon: TrendingUp },
    { id: "new", label: "✨ New", icon: Sparkles },
    { id: "featured", label: "👑 Featured", icon: Crown },
  ];

  const mockTokens = {
    trending: [
      {
        name: "DOGE Jr",
        symbol: "DOGEJr",
        price: "0.0042",
        change24h: 420.69,
        volume: "$1.2M",
        marketCap: "$42M",
        emoji: "🐕",
        isTrending: true,
      },
      {
        name: "Pepe Classic",
        symbol: "PEPEC",
        price: "0.0069",
        change24h: 69.42,
        volume: "$800K",
        marketCap: "$28M",
        emoji: "🐸",
        isTrending: true,
      },
      {
        name: "Moon Token",
        symbol: "MOON",
        price: "1.337",
        change24h: 100.0,
        volume: "$2.1M",
        marketCap: "$69M",
        emoji: "🌙",
        isTrending: true,
      },
    ],
    new: [
      {
        name: "Rocket Ship",
        symbol: "ROCKET",
        price: "0.0001",
        change24h: 1337.0,
        volume: "$50K",
        marketCap: "$500K",
        emoji: "🚀",
        isNew: true,
      },
      {
        name: "Diamond Hands",
        symbol: "DIAMOND",
        price: "0.0025",
        change24h: 250.5,
        volume: "$120K",
        marketCap: "$1.2M",
        emoji: "💎",
        isNew: true,
      },
    ],
    featured: [
      {
        name: "King Token",
        symbol: "KING",
        price: "4.20",
        change24h: 42.0,
        volume: "$5M",
        marketCap: "$420M",
        emoji: "👑",
      },
    ],
  };

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex items-center gap-2 p-1 bg-muted rounded-lg w-fit">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "arcade" : "ghost"}
              size="sm"
              onClick={() => setActiveTab(tab.id)}
              className="font-mono"
            >
              <Icon className="h-4 w-4 mr-2" />
              {tab.label}
            </Button>
          );
        })}
      </div>

      {/* Featured Token - King of the Hill */}
      {activeTab === "featured" && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 holographic">👑 King of the Hill</h2>
          <div className="max-w-md">
            <TokenCard token={mockTokens.featured[0]} />
          </div>
        </div>
      )}

      {/* Token Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTokens[activeTab as keyof typeof mockTokens].map((token, index) => (
          <div
            key={token.symbol}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <TokenCard token={token} />
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <Button variant="outline" className="font-mono">
          Load More Gems 💎
        </Button>
      </div>
    </div>
  );
};

export default DiscoveryTabs;