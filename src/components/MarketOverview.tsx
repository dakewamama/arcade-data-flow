import { TrendingUp, Activity, DollarSign, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const MarketOverview = () => {
  const stats = [
    {
      label: "Total Market Cap",
      value: "$2.1B",
      change: "+12.5%",
      icon: DollarSign,
      color: "neon-cyan",
    },
    {
      label: "24h Volume",
      value: "$420M",
      change: "+6.9%",
      icon: Activity,
      color: "neon-lime",
    },
    {
      label: "Active Tokens",
      value: "420",
      change: "+42",
      icon: TrendingUp,
      color: "neon-magenta",
    },
    {
      label: "Total Trades",
      value: "69K",
      change: "+420",
      icon: Zap,
      color: "neon-gold",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.label} className="trading-card">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Icon className={`h-8 w-8 text-${stat.color} animate-neon-pulse`} />
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                  <div className={`text-2xl font-mono font-bold text-${stat.color}`}>
                    {stat.value}
                  </div>
                </div>
              </div>
              
              {/* Holographic gauge */}
              <div className="mb-3">
                <div className={`h-2 bg-gradient-to-r from-${stat.color} to-accent rounded-full animate-holographic`} />
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-bull font-mono">{stat.change}</span>
                <span className="text-xs text-muted-foreground">24h</span>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default MarketOverview;