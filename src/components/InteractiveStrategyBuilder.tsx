import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Cpu,
  Clock,
  Target,
  Sliders
} from 'lucide-react';

interface StrategyOption {
  id: string;
  label: string;
  description: string;
  recommendedFormats: string[];
  attributionStack: string;
  fraudShieldLevel: string;
  launchVelocity: string;
  focusArea: string;
}

interface InteractiveStrategyBuilderProps {
  serviceId: string;
  serviceTitle: string;
  onOpenGetStarted: (blueprintSummary: string) => void;
}

const strategyDataByService: Record<string, {
  objectives: StrategyOption[];
  availableChannels: { id: string; name: string; tag: string }[];
}> = {
  // 1. Mobile Marketing
  'mobile-marketing': {
    objectives: [
      {
        id: 'scale-acquisition',
        label: 'Rapid User Acquisition',
        description: 'Maximize volume of qualified app installs across iOS & Android with optimized CPI.',
        recommendedFormats: ['Playable Interactive Ads', 'OEM App Wall Banners', 'Short-Form Native Videos'],
        attributionStack: 'MMP Certified (AppsFlyer / Adjust / Branch) with Deep Linking',
        fraudShieldLevel: 'Tier-1 Device Fingerprinting & Bot Filtering (99.8% Protected)',
        launchVelocity: 'Live in 48-72 Hours post-SDK Verification',
        focusArea: 'High-Volume Install Scaling & Initial Onboarding'
      },
      {
        id: 'ltv-retention',
        label: 'High-LTV Retention & In-App Purchases',
        description: 'Target high-propensity users likely to make recurring in-app subscriptions and transactions.',
        recommendedFormats: ['Dynamic Retargeting Carousels', 'Value-Proposition Video Teasers', 'Rich Push Notifications'],
        attributionStack: 'Post-Install Cohort Telemetry + In-App Event Postbacks',
        fraudShieldLevel: 'Zero-Click Spam Verification & Strict IP Whitelisting',
        launchVelocity: 'Real-time Event Calibration within 5 Business Days',
        focusArea: 'Post-Install LTV, Cohort Retention & ROAS Growth'
      },
      {
        id: 'oem-carrier',
        label: 'Direct OEM & Carrier Dominance',
        description: 'Leverage exclusive pre-load and store placements on Xiaomi, Samsung, Oppo, and Vivo devices.',
        recommendedFormats: ['Exclusive OEM App Discovery Tiles', 'On-Device Splash Screens', 'Carrier Push Bundles'],
        attributionStack: 'Direct Carrier Telecom Billing + Native OEM Attribution',
        fraudShieldLevel: 'Hardware-Verified Device IDs (Zero Emulation Risk)',
        launchVelocity: 'Direct OEM Partner Staging in 3-4 Days',
        focusArea: 'Pre-Installed & Native Hardware Exposure'
      }
    ],
    availableChannels: [
      { id: 'oem', name: 'OEM Store Discovery (Xiaomi/Samsung/Oppo)', tag: 'Direct Hardware' },
      { id: 'inapp', name: 'In-App Video & Playable Networks', tag: 'High Engagement' },
      { id: 'programmatic', name: 'Programmatic RTB Ad Exchanges', tag: 'Massive Reach' },
      { id: 'carrier', name: 'Direct Carrier Level Placement', tag: 'Exclusive' }
    ]
  },

  // 2. Social Media Marketing
  'social-media-marketing': {
    objectives: [
      {
        id: 'social-performance',
        label: 'Performance Conversions & Sales',
        description: 'Drive high-margin direct e-commerce sales, demo bookings, or qualified customer leads.',
        recommendedFormats: ['Dynamic Product Ads (DPA)', '3-Second Hook UGC Video Ads', 'Lead Form Instant Experiences'],
        attributionStack: 'Conversions API (CAPI) + First-Party Server-Side Tracking',
        fraudShieldLevel: 'Ad Spend Protection & Click Quality Auditing',
        launchVelocity: 'Campaign Staging & CBO Bid Activation in 48 Hours',
        focusArea: 'Direct ROAS, Lower CAC & Immediate Revenue Generation'
      },
      {
        id: 'brand-advocacy',
        label: 'Viral Reach & Brand Dominance',
        description: 'Amplify organic word-of-mouth, social proof, and dominant brand authority in your market niche.',
        recommendedFormats: ['High-Production Brand Story Reels', 'Influencer Whitelisted Content', 'Interactive Polls & Quizzes'],
        attributionStack: 'Brand Lift Studies + Multi-Touch Attribution Modeling',
        fraudShieldLevel: 'Audience Authenticity & Fake Engagement Filters',
        launchVelocity: 'Creative Asset Production & Review in 3-5 Days',
        focusArea: 'Viral Reach, Share of Voice & Long-Term Loyalty'
      },
      {
        id: 'b2b-leadgen',
        label: 'B2B Enterprise Pipeline & ABM',
        description: 'Target senior decision-makers and C-suite executives on professional social ecosystems.',
        recommendedFormats: ['Thought Leadership Carousel Documents', 'Sponsored InMail Direct Messages', 'Case Study Video Spotlights'],
        attributionStack: 'CRM Pipeline Integration (Salesforce / HubSpot) + Lead Sync',
        fraudShieldLevel: 'Verified Job Title & Firmographic Filters',
        launchVelocity: 'Audience Mapping & Account-Based List Upload in 48h',
        focusArea: 'Sales-Qualified Leads (SQLs) & High-Contract Deal Flow'
      }
    ],
    availableChannels: [
      { id: 'meta', name: 'Meta Ads (Instagram Reels & FB Feed)', tag: 'Massive Reach' },
      { id: 'linkedin', name: 'LinkedIn Marketing Solutions', tag: 'B2B Decision Makers' },
      { id: 'tiktok', name: 'TikTok for Business', tag: 'Short-Form Viral' },
      { id: 'youtube', name: 'YouTube BrandConnect & Shorts', tag: 'Long-Form Authority' }
    ]
  },

  // 3. Search Advertising
  'search-advertising': {
    objectives: [
      {
        id: 'search-conversions',
        label: 'High-Intent Commercial Conversions',
        description: 'Capture in-market searchers actively seeking your products or services with maximum conversion rates.',
        recommendedFormats: ['Responsive Search Ads (RSA)', 'Sitelink & Structured Callout Extensions', 'Call-Only Direct Ads'],
        attributionStack: 'Google Ads Enhanced Conversions + Offline Conversion Import (OCI)',
        fraudShieldLevel: 'Automated Invalid Click Filtering & Competitor Click-Blocker',
        launchVelocity: 'Live in 24-48 Hours with Keyword Clustering',
        focusArea: 'Bottom-of-Funnel Conversion Volume & Lower CPA'
      },
      {
        id: 'brand-defense',
        label: 'Brand Equity & Trademark Protection',
        description: 'Dominate brand search terms to prevent aggressive competitors from stealing high-value brand traffic.',
        recommendedFormats: ['Exact-Match Brand RSAs', 'Promotion & Loyalty Sitelinks', 'Image Asset Extensions'],
        attributionStack: 'Exact Keyword Impression Share (IS) Telemetry',
        fraudShieldLevel: 'Trademark Infringement Policing & Cease Monitoring',
        launchVelocity: 'Immediate Brand Defense Activation in 12 Hours',
        focusArea: '100% Brand Impression Share & Lowest CPC'
      },
      {
        id: 'pmax-scaling',
        label: 'Performance Max (PMax) Scale',
        description: 'Leverage Google’s full automated network: Search, Shopping, YouTube, Discover, and Maps.',
        recommendedFormats: ['High-Res Product Feed Assets', 'Dynamic Vertical Video Snippets', 'Responsive Display Banners'],
        attributionStack: 'Value-Based Smart Bidding (Target ROAS) Algorithm',
        fraudShieldLevel: 'Machine-Learning Placement Exclusions & URL Expansion Safeguards',
        launchVelocity: 'Asset Group Calibration in 3 Business Days',
        focusArea: 'Multi-Channel Omnipresence & Automated Revenue Growth'
      }
    ],
    availableChannels: [
      { id: 'google-search', name: 'Google Search Network (Exact & Phrase)', tag: 'Highest Intent' },
      { id: 'bing-ads', name: 'Microsoft Advertising (Bing / Yahoo)', tag: 'Affluent Desktop' },
      { id: 'pmax', name: 'Google Performance Max (PMax)', tag: 'All-in-One AI' },
      { id: 'apple-search', name: 'Apple Search Ads (App Store)', tag: 'iOS Exclusive' }
    ]
  },

  // 4. Affiliate Marketing
  'affiliate-marketing': {
    objectives: [
      {
        id: 'affiliate-scale',
        label: 'Pure Performance Revenue Scale',
        description: 'Scale verified revenue through vetted top-tier content creators, bloggers, and vertical portals.',
        recommendedFormats: ['Co-Branded Editorial Landing Pages', 'Deep-Linked Product Banners', 'Exclusive Promo Coupons'],
        attributionStack: 'Server-to-Server (S2S) Postback Tracking & Deduplication',
        fraudShieldLevel: 'Cookie Hijacking, Toolbar & Adware Elimination',
        launchVelocity: 'Publisher Recruitment in 5-7 Business Days',
        focusArea: 'Risk-Free CPA Growth & Incrementality'
      },
      {
        id: 'cashback-loyalty',
        label: 'Loyalty & Cashback Integration',
        description: 'Syndicate exclusive cash-back offers on leading rewards portals with high user purchase velocity.',
        recommendedFormats: ['Homepage Hero Placement Banners', 'Targeted Member Newsletters', 'Push Notifications'],
        attributionStack: 'Instant Transaction API Webhook Sync',
        fraudShieldLevel: 'Order Cancellation & Return Dispute Reconciliation',
        launchVelocity: 'Portal Onboarding in 3 Business Days',
        focusArea: 'High-Velocity Transaction Spikes & Surge Sales'
      },
      {
        id: 'influencer-affiliate',
        label: 'Influencer & Creator Syndication',
        description: 'Partner with niche vertical influencers who promote your products for direct performance commissions.',
        recommendedFormats: ['Social Bio Tracking Links', 'Dedicated Creator Discount Codes', 'Product Unboxing Shorts'],
        attributionStack: 'First-Touch & Last-Touch Attribution Reconciliation',
        fraudShieldLevel: 'Brand Safety & Content Guidelines Enforcement',
        launchVelocity: 'Creator Seed Box Delivery in 5 Days',
        focusArea: 'High Social Proof & Authentic Advocacy'
      }
    ],
    availableChannels: [
      { id: 'content-publishers', name: 'Content & Review Portals', tag: 'High Trust' },
      { id: 'cashback-sites', name: 'Cashback & Rewards Portals', tag: 'High Velocity' },
      { id: 'comparison-engines', name: 'Product Comparison Engines', tag: 'In-Market' },
      { id: 'creator-partners', name: 'Creator & Influencer Networks', tag: 'Social Proof' }
    ]
  },

  // 5. Native Advertising
  'native-advertising': {
    objectives: [
      {
        id: 'native-content',
        label: 'Advertorial Customer Acquisition',
        description: 'Educate prospects with compelling long-form story advertorials that convert curious readers into buyers.',
        recommendedFormats: ['Long-Form Listicle Advertorials', 'Contextual Content Teasers', 'Interactive Quiz Landing Pages'],
        attributionStack: 'Read-Depth & Scroll-Time Telemetry Tracking',
        fraudShieldLevel: 'Publisher Domain Blacklisting & Click-Farm Shield',
        launchVelocity: 'Advertorial Copywriting & Staging in 48 Hours',
        focusArea: 'Educational Story-First Customer Acquisition'
      },
      {
        id: 'native-leadgen',
        label: 'High-Ticket B2B & Finance Leads',
        description: 'Target professionals reading premium finance and news media with authoritative case studies and whitepapers.',
        recommendedFormats: ['Executive Research Teaser Widgets', 'Report Download In-Feed Tiles', 'Embedded Lead Capture Forms'],
        attributionStack: 'First-Party Lead Enrichment API Sync',
        fraudShieldLevel: 'Corporate IP Filtering & Bot Verification',
        launchVelocity: 'B2B Editorial Deployment in 3 Days',
        focusArea: 'High-Contract Value B2B & Wealth Inquiries'
      },
      {
        id: 'brand-authority',
        label: 'Editorial Brand Authority & Halo',
        description: 'Associate your brand with world-class editorial publishers like Bloomberg, MSN, Forbes, and Yahoo.',
        recommendedFormats: ['Brand Spotlight Content Widgets', 'Sponsored Thought Leadership Articles', 'Video In-Feed Teasers'],
        attributionStack: 'Brand Affinity & Unassisted Conversion Attribution',
        fraudShieldLevel: 'Strict Publisher Whitelist (Tier-1 News Only)',
        launchVelocity: 'Publisher Syndication in 2-3 Days',
        focusArea: 'Massive Prestige Brand Halo & Awareness'
      }
    ],
    availableChannels: [
      { id: 'taboola', name: 'Taboola Premier News Feed', tag: 'Global Scale' },
      { id: 'outbrain', name: 'Outbrain Smartfeed Publisher Network', tag: 'Premium Media' },
      { id: 'yahoo-native', name: 'Yahoo & AOL Native Editorial', tag: 'High Intent' },
      { id: 'msn-network', name: 'MSN Executive & Finance Feed', tag: 'Affluent Desktop' }
    ]
  },

  // 6. SMS Marketing
  'sms-marketing': {
    objectives: [
      {
        id: 'sms-promotions',
        label: 'Flash Sale & Promotional Revenue',
        description: 'Generate immediate revenue spikes within 15 minutes of broadcast launch for product drops and sales.',
        recommendedFormats: ['Rich SMS with Shortened Tracking URLs', 'Personalized First-Name Discount Alerts', 'MMS Image Cards'],
        attributionStack: 'Custom UTM Link Tracking + Coupon Code Attribution',
        fraudShieldLevel: 'DLT Scrubbing & Telecom DND Compliance (100% Clean)',
        launchVelocity: 'Sub-3-Minute Global Delivery Burst',
        focusArea: 'Immediate High-Margin Revenue Bursts'
      },
      {
        id: 'sms-cart-recovery',
        label: 'Automated Cart Recovery Workflows',
        description: 'Trigger instant automated SMS reminders within 15 minutes of checkout drop-off to recover lost orders.',
        recommendedFormats: ['Dynamic Cart Item Preview Links', 'One-Click Checkout Recovery Codes', 'Customer Support Query Prompts'],
        attributionStack: 'E-Commerce Webhook & Order Reconciliation',
        fraudShieldLevel: 'Frequency Capping (Max 1 SMS per Abandonment)',
        launchVelocity: 'Instant 24/7 Automated Webhook Trigger',
        focusArea: '30%+ Abandoned Cart Recovery Rate'
      },
      {
        id: 'whatsapp-conversational',
        label: 'Conversational WhatsApp Commerce',
        description: 'Engage high-intent customers with interactive WhatsApp catalog menus, automated bots, and support.',
        recommendedFormats: ['Interactive WhatsApp Catalog Cards', 'Quick-Reply Action Buttons', 'Order Tracking Alerts'],
        attributionStack: 'Official Meta WhatsApp Business API Webhooks',
        fraudShieldLevel: 'Verified Green Checkmark Business Account Safeguard',
        launchVelocity: 'Bot Template Approval in 48 Hours',
        focusArea: 'High-Retention Two-Way Conversations'
      }
    ],
    availableChannels: [
      { id: 'bulk-sms', name: 'Direct Tier-1 Telecom Gateways', tag: '98% Open Rate' },
      { id: 'whatsapp-api', name: 'WhatsApp Business API Platform', tag: 'Two-Way Chat' },
      { id: 'rcs-messaging', name: 'Rich Communication Services (RCS)', tag: 'Interactive Android' },
      { id: 'dlt-telecom', name: 'DLT Regulatory Compliant Route', tag: '100% Verified' }
    ]
  },

  // 7. Display Advertising
  'display-advertising': {
    objectives: [
      {
        id: 'display-retargeting',
        label: 'Dynamic Site Retargeting',
        description: 'Recapture lost website visitors across 2M+ websites with banners showing the exact items they browsed.',
        recommendedFormats: ['Dynamic Product HTML5 Banners', 'Custom Promotional Offer Sliders', 'Countdown Urgency Banners'],
        attributionStack: 'First-Party Audience Pixel & Server-Side CAPI Sync',
        fraudShieldLevel: 'Viewability Threshold (Strictly Above 80%)',
        launchVelocity: 'Retargeting Audience Pixel Live in 24 Hours',
        focusArea: 'Lowering Blended CAC & Re-Engaging Drop-offs'
      },
      {
        id: 'programmatic-awareness',
        label: 'Targeted Programmatic Reach',
        description: 'Deploy hyper-targeted display banners to specific in-market and demographic affinity cohorts across premium sites.',
        recommendedFormats: ['Billboard 970x250 Desktop Banners', 'Half-Page 300x600 High-Impact Units', 'Medium Rectangle 300x250'],
        attributionStack: 'Multi-Touch View-Through & Click-Through Attribution',
        fraudShieldLevel: 'IAS (Integral Ad Science) Pre-Bid Brand Safety',
        launchVelocity: 'DSP Inventory Staging in 48 Hours',
        focusArea: 'Mass Market Recall & In-Market Impression Share'
      },
      {
        id: 'contextual-display',
        label: 'Cookie-Free Contextual Targeting',
        description: 'Serve ads contextually on web pages matching your exact product niche, preparing your brand for a cookie-free world.',
        recommendedFormats: ['Contextual In-Article Banners', 'Topic-Aligned Sponsored Tiles', 'Responsive Display Units'],
        attributionStack: 'Natural Language Processing (NLP) Page Content Telemetry',
        fraudShieldLevel: 'Zero Third-Party Cookie Dependency',
        launchVelocity: 'Contextual Keyword Whitelist in 24 Hours',
        focusArea: 'Future-Proof Privacy Compliant Scaling'
      }
    ],
    availableChannels: [
      { id: 'gdn', name: 'Google Display Network (2M+ Sites)', tag: 'Massive Reach' },
      { id: 'trade-desk', name: 'The Trade Desk DSP Enterprise', tag: 'Programmatic RTB' },
      { id: 'premium-whitelist', name: 'Curated Premium Publisher Whitelist', tag: 'Top Tier Media' },
      { id: 'dynamic-retarget', name: 'Dynamic Cross-Device Retargeting', tag: 'High ROAS' }
    ]
  },

  // 8. Video Advertising
  'video-advertising': {
    objectives: [
      {
        id: 'video-conversions',
        label: 'Direct-Response Video Action',
        description: 'Drive direct website signups and e-commerce checkouts through clickable video ads with persistent product feeds.',
        recommendedFormats: ['YouTube Video Action Campaigns (VAC)', 'Vertical 9:16 Shorts Video Ads', 'Shoppable Product Feed Overlays'],
        attributionStack: 'Engaged-View Conversion (EVC) & Click Attribution',
        fraudShieldLevel: 'Sound-On & Viewable Screen-Time Verification',
        launchVelocity: 'Video Asset Encoding & Launch in 48 Hours',
        focusArea: 'Direct Sales Conversions from Video Traffic'
      },
      {
        id: 'ctv-livingroom',
        label: 'Connected TV (CTV) / OTT Domination',
        description: 'Dominate big-screen living room entertainment on smart TVs through Hulu, Roku, Amazon Fire TV, and Apple TV.',
        recommendedFormats: ['Non-Skippable 15s HD Living Room Banners', 'Interactive QR Code Companion Screens', 'OTT Mid-Roll Stream Commercials'],
        attributionStack: 'Cross-Device IP Household Matching & Foot-Traffic Tracking',
        fraudShieldLevel: '100% Unskippable Full-Screen Completion Rate (95%+ VCR)',
        launchVelocity: 'CTV Private Marketplace (PMP) Setup in 3 Days',
        focusArea: 'High Prestige Living Room Brand Primacy'
      },
      {
        id: 'brand-lift',
        label: 'Full-Funnel Brand Lift & Awareness',
        description: 'Maximize recall and consumer preference with cinematic storytelling backed by Google Brand Lift Studies.',
        recommendedFormats: ['Cinematic 30s Brand Story Master', '6-Second Bumper Frequency Anchors', 'Interactive End-Screen Cards'],
        attributionStack: 'Google Certified Brand Lift Study (BLS 2.0)',
        fraudShieldLevel: 'Negative Channel Whitelisting & Kids Content Exclusion',
        launchVelocity: 'Channel Mapping & Campaign Setup in 48 Hours',
        focusArea: 'Message Retention, Favorability & Search Lift'
      }
    ],
    availableChannels: [
      { id: 'youtube-instream', name: 'YouTube TrueView & In-Stream', tag: 'High Intent' },
      { id: 'ctv-streaming', name: 'Connected TV & OTT Networks (Roku/Fire TV)', tag: 'Living Room Big Screen' },
      { id: 'youtube-shorts', name: 'YouTube Shorts Vertical Video', tag: 'Viral Mobile' },
      { id: 'outstream-video', name: 'High-Impact Editorial Outstream Video', tag: 'In-Article Sound-On' }
    ]
  }
};

export const InteractiveStrategyBuilder: React.FC<InteractiveStrategyBuilderProps> = ({
  serviceId,
  serviceTitle,
  onOpenGetStarted
}) => {
  const serviceData = strategyDataByService[serviceId] || strategyDataByService['mobile-marketing'];

  const [selectedObjectiveId, setSelectedObjectiveId] = useState<string>(serviceData.objectives[0].id);
  const [selectedChannels, setSelectedChannels] = useState<string[]>([
    serviceData.availableChannels[0].id,
    serviceData.availableChannels[1].id
  ]);

  // Keep state in sync whenever serviceId changes
  useEffect(() => {
    const currentData = strategyDataByService[serviceId] || strategyDataByService['mobile-marketing'];
    setSelectedObjectiveId(currentData.objectives[0].id);
    setSelectedChannels([
      currentData.availableChannels[0].id,
      currentData.availableChannels[1].id
    ]);
  }, [serviceId]);

  const activeObjective = serviceData.objectives.find((o) => o.id === selectedObjectiveId) || serviceData.objectives[0];

  const toggleChannel = (channelId: string) => {
    if (selectedChannels.includes(channelId)) {
      if (selectedChannels.length > 1) {
        setSelectedChannels(selectedChannels.filter((c) => c !== channelId));
      }
    } else {
      setSelectedChannels([...selectedChannels, channelId]);
    }
  };

  const handleBookBlueprint = () => {
    const channelNames = selectedChannels
      .map((cId) => serviceData.availableChannels.find((ch) => ch.id === cId)?.name)
      .filter(Boolean)
      .join(', ');

    const summary = `${serviceTitle} Plan: [${activeObjective.label}] across [${channelNames}]`;
    onOpenGetStarted(summary);
  };

  return (
    <section className="py-20 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Strategy Studio</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Build Your Custom {serviceTitle} Campaign Blueprint
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Select your core growth objective and target channels below to simulate your deployment architecture with Adcanopus.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-6 space-y-8">
            {/* Step 1: Select Objective */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Step 1: Choose Primary Growth Objective
                </span>
                <span className="text-xs font-semibold text-primary">Click to select</span>
              </div>

              <div className="space-y-3">
                {serviceData.objectives.map((obj) => {
                  const isSelected = obj.id === selectedObjectiveId;
                  return (
                    <motion.button
                      key={obj.id}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => setSelectedObjectiveId(obj.id)}
                      className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all ${
                        isSelected
                          ? 'bg-white border-primary shadow-clean ring-2 ring-primary/20'
                          : 'bg-white/60 hover:bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                              isSelected ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'
                            }`}
                          >
                            {isSelected ? <CheckCircle2 className="w-4 h-4" /> : '•'}
                          </div>
                          <span className={`text-sm sm:text-base font-bold ${isSelected ? 'text-primary' : 'text-slate-900'}`}>
                            {obj.label}
                          </span>
                        </div>
                        {isSelected && (
                          <span className="text-[10px] uppercase tracking-wider font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                            Active
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mt-2 pl-9 leading-relaxed">
                        {obj.description}
                      </p>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Channels */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Step 2: Priority Activation Channels (Multi-Select)
                </span>
                <span className="text-xs font-semibold text-slate-400">{selectedChannels.length} Selected</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceData.availableChannels.map((ch) => {
                  const isChannelSelected = selectedChannels.includes(ch.id);
                  return (
                    <button
                      key={ch.id}
                      onClick={() => toggleChannel(ch.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between space-y-2 ${
                        isChannelSelected
                          ? 'bg-primary/5 border-primary text-slate-900 shadow-2xs'
                          : 'bg-white border-slate-200/80 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold leading-tight">{ch.name}</span>
                        <div
                          className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ml-2 ${
                            isChannelSelected ? 'bg-primary border-primary text-white' : 'border-slate-300'
                          }`}
                        >
                          {isChannelSelected && <CheckCircle2 className="w-3 h-3" />}
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md self-start">
                        {ch.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Live Blueprint Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-clean space-y-6 sticky top-28">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center space-x-2.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">Live Campaign Architecture</h3>
                    <p className="text-xs text-slate-500 font-medium">Assembled in real-time for your selection</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Verified Blueprint
                </span>
              </div>

              {/* Dynamic Strategy Blueprint Details */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedObjectiveId + selectedChannels.join('-')}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5"
                >
                  {/* Selected Focus */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Primary Strategic Focus
                    </span>
                    <p className="text-sm font-extrabold text-slate-900 flex items-center">
                      <Target className="w-4 h-4 text-primary mr-1.5 shrink-0" />
                      {activeObjective.focusArea}
                    </p>
                  </div>

                  {/* Recommended Creative Formats */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center">
                      <Layers className="w-3.5 h-3.5 mr-1.5 text-primary" />
                      Recommended Creative Assets
                    </span>
                    <div className="grid grid-cols-1 gap-2">
                      {activeObjective.recommendedFormats.map((fmt, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 text-xs font-semibold text-slate-700 bg-slate-50/80 px-3 py-2 rounded-xl border border-slate-200/60"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{fmt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Two-Column Telemetry Specs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                    <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/60 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center">
                        <Cpu className="w-3 h-3 mr-1 text-primary" />
                        Attribution Protocol
                      </span>
                      <p className="text-xs font-bold text-slate-800 leading-snug">
                        {activeObjective.attributionStack}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/60 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center">
                        <ShieldCheck className="w-3 h-3 mr-1 text-emerald-600" />
                        Anti-Fraud & Safety
                      </span>
                      <p className="text-xs font-bold text-slate-800 leading-snug">
                        {activeObjective.fraudShieldLevel}
                      </p>
                    </div>
                  </div>

                  {/* Go-Live Velocity */}
                  <div className="flex items-center space-x-2.5 text-xs text-slate-600 bg-primary/5 border border-primary/20 p-3 rounded-xl">
                    <Clock className="w-4 h-4 text-primary shrink-0" />
                    <span>
                      <strong>Deployment Velocity:</strong> {activeObjective.launchVelocity}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Call to action */}
              <div className="pt-2">
                <button
                  onClick={handleBookBlueprint}
                  className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-primary hover:bg-primary-hover transition-all flex items-center justify-center space-x-2 shadow-clean group"
                >
                  <span>Request Custom Strategy & Media Plan</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2.5">
                  Includes full audience teardown, competitor analysis & bespoke budget recommendation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
