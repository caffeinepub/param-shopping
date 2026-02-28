import Text "mo:core/Text";

actor {
  type MarketingContent = {
    appName : Text;
    tagline : Text;
    features : [Text];
    ctaText : Text;
  };

  let marketingContent : MarketingContent = {
    appName = "Noxium AI";
    tagline = "AI-powered productivity suite for businesses";
    features = [
      "Automated document processing",
      "Smart scheduling",
      "Data analysis tools",
    ];
    ctaText = "Get started now!";
  };

  public query ({ caller }) func getMarketingContent() : async MarketingContent {
    marketingContent;
  };
};
