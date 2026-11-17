import React from "react";
import { MobileOemEngine } from "./MobileOemEngine";
import { SocialCreativeLab } from "./SocialCreativeLab";
import { SearchAuctionStudio } from "./SearchAuctionStudio";
import { SmsBroadcastConsole } from "./SmsBroadcastConsole";
import { AffiliateNetworkMatrix } from "./AffiliateNetworkMatrix";
import { NativeEditorialStudio } from "./NativeEditorialStudio";
import { DisplayProgrammaticWorkbench } from "./DisplayProgrammaticWorkbench";
import { VideoCtvStudio } from "./VideoCtvStudio";

interface BespokeServiceEngineProps {
  serviceId: string;
  onOpenGetStarted?: (summary?: string) => void;
}

export const BespokeServiceEngine: React.FC<BespokeServiceEngineProps> = ({ serviceId, onOpenGetStarted }) => {
  switch (serviceId) {
    case "mobile-marketing":
      return <MobileOemEngine onOpenGetStarted={onOpenGetStarted} />;
    case "social-media-marketing":
      return <SocialCreativeLab onOpenGetStarted={onOpenGetStarted} />;
    case "search-advertising":
      return <SearchAuctionStudio onOpenGetStarted={onOpenGetStarted} />;
    case "sms-marketing":
      return <SmsBroadcastConsole onOpenGetStarted={onOpenGetStarted} />;
    case "affiliate-marketing":
      return <AffiliateNetworkMatrix onOpenGetStarted={onOpenGetStarted} />;
    case "native-advertising":
      return <NativeEditorialStudio onOpenGetStarted={onOpenGetStarted} />;
    case "display-advertising":
      return <DisplayProgrammaticWorkbench onOpenGetStarted={onOpenGetStarted} />;
    case "video-advertising":
      return <VideoCtvStudio onOpenGetStarted={onOpenGetStarted} />;
    default:
      return <MobileOemEngine onOpenGetStarted={onOpenGetStarted} />;
  }
};
