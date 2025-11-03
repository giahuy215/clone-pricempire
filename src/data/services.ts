import type { Service } from "@/constants/services";

export const services: Service[] = [
  {
    color: "sky",
    icon: "tabler:brand-google-analytics",
    service: "Live Price Tracking",
    description:
      "Monitor real-time price movements for CS2 items with instant updates from Buff and other major platforms.",
  },
  {
    color: "purple",
    icon: "lucide:scale",
    service: "Market Cap Comparison",
    description:
      "Compare CS2 market cap with Bitcoin and S&P 500 on interactive charts to understand market dynamics.",
  },
  {
    color: "emerald",
    icon: "lucide:trending-up",
    service: "Price Change Analysis",
    description:
      "Track price changes over 24h, 7d, and 30d periods with detailed percentage movements and trends.",
  },
  {
    color: "amber",
    icon: "tabler:presentation-analytics",
    service: "Volume Tracking",
    description:
      "Monitor trading volume and liquidity across different items to identify market momentum.",
  },
  {
    color: "rose",
    icon: "tabler:adjustments-horizontal",
    service: "Filter & Sort",
    description:
      "Advanced filtering and sorting options by price change, volume, market cap, and other metrics.",
  },
  {
    color: "lime",
    icon: "tabler:sparkles",
    service: "Spark Charts",
    description:
      "Visual representation of price trends with interactive spark charts for quick analysis.",
  },
];
