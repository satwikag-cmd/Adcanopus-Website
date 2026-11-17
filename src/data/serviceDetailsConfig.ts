export interface ServicePillar {
  badge: string;
  badgeColor?: string;
  title: string;
  description: string;
  bullets: string[];
  iconName: string;
}

export interface ExecutionStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceDetailConfig {
  headlinePrefix: string;
  headlineHighlight: string;
  headlineSuffix?: string;
  themeColor: string; // e.g., 'primary', 'teal-600', 'purple-600', 'amber-600', etc.
  themeBg: string; // e.g., 'bg-primary/10', 'bg-teal-500/10'
  themeBorder: string;
  heroWidgetType: 'mobile' | 'social' | 'search' | 'affiliate' | 'native' | 'sms' | 'display' | 'video';
  ecosystemTitle: string;
  ecosystemSubtitle: string;
  partners: string[];
  pillarsTitle: string;
  pillarsSubtitle: string;
  pillars: ServicePillar[];
  actionMetricLabel: string;
  calculatorImpressionsMult: number;
  calculatorActionsMult: number;
  calculatorConversionsMult: number;
  projectedROAS: string;
  executionSteps: ExecutionStep[];
}

export const serviceDetailsConfig: Record<string, ServiceDetailConfig> = {
  // 1. Mobile Marketing
  'mobile-marketing': {
    headlinePrefix: 'Harness the Power of ',
    headlineHighlight: 'Mobile Marketing',
    headlineSuffix: ' to Engage & Activate Customers',
    themeColor: 'text-primary',
    themeBg: 'bg-primary/10',
    themeBorder: 'border-primary/20',
    heroWidgetType: 'mobile',
    ecosystemTitle: 'Certified Attribution Ecosystem',
    ecosystemSubtitle: 'Pre-Integrated with Top Mobile Attribution Platforms (MMPs)',
    partners: ['AppsFlyer', 'Branch.io', 'Adjust', 'Kochava', 'Singular', 'Yandex AppMetrica'],
    pillarsTitle: 'Comprehensive Mobile Growth Framework',
    pillarsSubtitle: 'Engineered for maximum reach, granular attribution, and absolute fraud protection.',
    pillars: [
      {
        badge: 'Multichannel Maverick',
        badgeColor: 'text-primary bg-primary/10',
        title: 'Maximize Reach Across Mobile Ecosystems',
        description: 'Covering mobile web, in-app advertising, media buying, OEM partnerships (Xiaomi, Samsung, Oppo, Vivo), and direct app networks across iOS and Android.',
        bullets: ['Direct OEM & Carrier Level Placement', 'Targeting by OS, Device & Telephony'],
        iconName: 'Smartphone'
      },
      {
        badge: 'Precision Tracking',
        badgeColor: 'text-amber-600 bg-amber-500/10',
        title: 'Data-Driven Attribution & Funnel Insights',
        description: 'Measure and optimize user acquisition campaigns and understand in-app events further down the conversion funnel with certified MMP integrations.',
        bullets: ['Post-Install LTV & Retention Cohorts', 'Real-time Bidder Calibrations'],
        iconName: 'BarChart3'
      },
      {
        badge: 'Shielding Investment',
        badgeColor: 'text-emerald-600 bg-emerald-500/10',
        title: 'Enterprise Anti-Fraud Protection',
        description: 'Stop fake installs, click spamming, and bot traffic with our machine learning filters, IP blocking, and continuous behavioral telemetry.',
        bullets: ['Device Fingerprinting & Spoof Detection', 'Zero Ad Budget Wastage Guarantee'],
        iconName: 'ShieldCheck'
      }
    ],
    actionMetricLabel: 'Target Installs / Clicks',
    calculatorImpressionsMult: 75,
    calculatorActionsMult: 1.65,
    calculatorConversionsMult: 0.22,
    projectedROAS: '3.8x',
    executionSteps: [
      { step: '01', title: 'Audit & Integration', description: 'Audience discovery, MMP/SDK integration, conversion event configuration, and benchmark definition.' },
      { step: '02', title: 'Creative Engineering', description: 'Production of high-converting native, playable, and video creatives tailored to target device cohorts.' },
      { step: '03', title: 'Omnichannel Launch', description: 'Precision bidder activation across direct OEM inventory, programmatic exchanges, and verified partner publishers.' },
      { step: '04', title: 'Fraud Filter & ROAS Scale', description: 'Continuous real-time anomaly detection, zero-fraud validation, and algorithmic scaling of top-performing sources.' }
    ]
  },

  // 2. Social Media Marketing
  'social-media-marketing': {
    headlinePrefix: 'Supercharge Your ',
    headlineHighlight: 'Social Media Presence',
    headlineSuffix: ' Across Top Global Networks',
    themeColor: 'text-pink-600',
    themeBg: 'bg-pink-500/10',
    themeBorder: 'border-pink-500/20',
    heroWidgetType: 'social',
    ecosystemTitle: 'Certified Social Ad Ecosystem',
    ecosystemSubtitle: 'Official Agency Ad Partnerships Across All Major Social Networks',
    partners: ['Meta Ads (FB & IG)', 'LinkedIn Ads Partner', 'TikTok For Business', 'YouTube BrandConnect', 'X (Twitter) Ads', 'Pinterest Business'],
    pillarsTitle: 'Data-Driven Social Growth Framework',
    pillarsSubtitle: 'Crafted to increase visibility, foster genuine community advocacy, and drive measurable revenue.',
    pillars: [
      {
        badge: 'In-Depth Analysis',
        badgeColor: 'text-pink-600 bg-pink-500/10',
        title: 'Comprehensive Analytics & Attribution',
        description: 'Detailed analytics dashboards that track campaign velocity, full-funnel social ROAS, and multi-touch attribution to inform forward-looking growth decisions.',
        bullets: ['Multi-Touch First-Party Tracking', 'Creative Fatigue & Burnout Monitoring'],
        iconName: 'BarChart3'
      },
      {
        badge: 'Brand Visibility',
        badgeColor: 'text-brand-orange bg-brand-orange/10',
        title: 'Viral Awareness & Influencer Syndication',
        description: 'Amplify organic footprint and paid reach through hyper-targeted paid social ads, vetted creator collaborations, and thumb-stopping visual storytelling.',
        bullets: ['High-Velocity UGC & Reel Formats', 'Creator Whitelisting & Dark Posting'],
        iconName: 'Share2'
      },
      {
        badge: 'Enhanced Interaction',
        badgeColor: 'text-brand-green bg-brand-green/10',
        title: 'Community Engagement & High-Intent Conversion',
        description: 'Deploy personalized, highly engaging ad creatives that resonate deeply with audience subcultures, sparking comments, shares, and high-margin checkouts.',
        bullets: ['Dynamic Product Catalog Feeds (DPA)', 'Lookalike Cohorts from CRM Telemetry'],
        iconName: 'Target'
      }
    ],
    actionMetricLabel: 'Social Clicks & Engagements',
    calculatorImpressionsMult: 90,
    calculatorActionsMult: 2.1,
    calculatorConversionsMult: 0.28,
    projectedROAS: '4.2x',
    executionSteps: [
      { step: '01', title: 'Audience Persona & Competitor Audit', description: 'Analyze demographics, competitor ad libraries, and high-affinity social segments to map optimal campaign hooks.' },
      { step: '02', title: 'Creative Studio & Hook Iteration', description: 'Produce high-converting short-form videos, carousels, and statics with 3-second hook testing and agile iterations.' },
      { step: '03', title: 'Omni-Platform Bid Deployment', description: 'Launch structured campaigns with automated budget optimization (CBO/ABO) across Meta, LinkedIn, and TikTok.' },
      { step: '04', title: 'Retargeting & ROAS Maximization', description: 'Scale winning creatives into broader lookalike audiences while nurturing middle-of-funnel prospects with retargeting.' }
    ]
  },

  // 3. Search Advertising
  'search-advertising': {
    headlinePrefix: 'Maximize Conversions with Precision ',
    headlineHighlight: 'Search Advertising',
    headlineSuffix: ' on Top Search Engines',
    themeColor: 'text-teal-600',
    themeBg: 'bg-teal-500/10',
    themeBorder: 'border-teal-500/20',
    heroWidgetType: 'search',
    ecosystemTitle: 'Certified Search Partner Ecosystem',
    ecosystemSubtitle: 'Official Certified Agency Partner for Google Ads & Microsoft Bing Advertising',
    partners: ['Google Ads Premier Partner', 'Microsoft Advertising Partner', 'Apple Search Ads (ASA)', 'Amazon Sponsored Ads', 'Baidu Search', 'Yahoo Japan'],
    pillarsTitle: 'High-Intent Search Growth Framework',
    pillarsSubtitle: 'Capture prospects at the exact moment of commercial search intent with optimized CPCs and zero wasted spend.',
    pillars: [
      {
        badge: 'Keyword Mastery',
        badgeColor: 'text-teal-600 bg-teal-500/10',
        title: 'Commercial Intent & Negative Keyword Sculpting',
        description: 'Identify bottom-of-funnel keywords with high purchasing propensity while relentlessly filtering out negative searches to safeguard your media budget.',
        bullets: ['High-Intent Exact & Phrase Match Clustering', 'Daily Automated Negative Keyword Scrubbing'],
        iconName: 'Search'
      },
      {
        badge: 'Quality Score 10/10',
        badgeColor: 'text-primary bg-primary/10',
        title: 'Ad Relevance & Quality Score Optimization',
        description: 'Meticulously optimize ad copy headlines, extensions, and landing page relevance to achieve maximum Quality Scores and secure top SERP positions at lower CPCs.',
        bullets: ['Dynamic Search Ads (DSA) & Responsive Search', 'Ad Extension Sitelinks, Callouts & Structured Snippets'],
        iconName: 'BarChart3'
      },
      {
        badge: 'Smart Bidding',
        badgeColor: 'text-emerald-600 bg-emerald-500/10',
        title: 'Target CPA & Value-Based Smart Bidding',
        description: 'Harness machine-learning bid strategies (tCPA, tROAS) calibrated with offline conversion imports to scale only the highest-margin transactions.',
        bullets: ['First-Party Offline Conversion Tracking (OCT)', 'Performance Max (PMax) Asset Optimization'],
        iconName: 'ShieldCheck'
      }
    ],
    actionMetricLabel: 'Qualified Search Clicks',
    calculatorImpressionsMult: 65,
    calculatorActionsMult: 1.4,
    calculatorConversionsMult: 0.35,
    projectedROAS: '4.8x',
    executionSteps: [
      { step: '01', title: 'Intent Keyword & Competitor Teardown', description: 'Comprehensive search query audit, competitor impression share analysis, and negative keyword list configuration.' },
      { step: '02', title: 'Ad Copywriting & Extension Engineering', description: 'Craft compelling RSA headlines, descriptions, callouts, and bespoke landing page match hooks.' },
      { step: '03', title: 'PMax & Search Bid Activation', description: 'Deploy structured campaigns with smart bidding rules and granular audience signal overlays.' },
      { step: '04', title: 'Search Query Mining & Scaling', description: 'Weekly query sculpting to convert top search terms into dedicated SKAGs while maintaining target ROAS.' }
    ]
  },

  // 4. Affiliate Marketing
  'affiliate-marketing': {
    headlinePrefix: 'Scale Results with Risk-Free ',
    headlineHighlight: 'Affiliate Marketing',
    headlineSuffix: ' & Trusted Partner Networks',
    themeColor: 'text-purple-600',
    themeBg: 'bg-purple-500/10',
    themeBorder: 'border-purple-500/20',
    heroWidgetType: 'affiliate',
    ecosystemTitle: 'Global Affiliate & Partner Ecosystem',
    ecosystemSubtitle: 'Connected with 5,000+ Vetted Enterprise Publishers, Creators, & Comparison Engines',
    partners: ['Impact.com', 'CJ Affiliate (Commission Junction)', 'ShareASale', 'Awin', 'Rakuten Advertising', 'Partnerize'],
    pillarsTitle: 'Pure Performance Affiliate Architecture',
    pillarsSubtitle: 'Pay strictly on verified results. Expand brand footprint across high-authority publishers with zero upfront ad waste.',
    pillars: [
      {
        badge: 'Vetted Network',
        badgeColor: 'text-purple-600 bg-purple-500/10',
        title: 'High-Volume Publisher & Creator Recruitment',
        description: 'Direct access to 5,000+ trusted content creators, comparison engines, coupon portals, and niche vertical influencers eager to syndicate your brand.',
        bullets: ['Direct VIP Publisher Outreach & Negotiations', 'Strict Quality & Content Brand Compliance'],
        iconName: 'Users'
      },
      {
        badge: 'Payout On Results',
        badgeColor: 'text-emerald-600 bg-emerald-500/10',
        title: 'Zero-Risk CPA & Revenue Share Models',
        description: 'Pay commissions exclusively on verified checkouts, leads, or sales. We manage tracking, dispute reconciliations, and automated publisher payouts.',
        bullets: ['Pure Performance CPA / CPL / RevShare', 'Automated Commission Tiering for Top Producers'],
        iconName: 'ShieldCheck'
      },
      {
        badge: 'Attribution Security',
        badgeColor: 'text-primary bg-primary/10',
        title: 'Cookie Hijacking & Adware Protection',
        description: 'Continuous monitoring against affiliate fraud, brand bidding violations, cookie stuffing, and toolbar injection to safeguard your genuine revenue.',
        bullets: ['Real-Time Click-Fraud & Cookie Hijack Defense', 'Trademark & Brand Bidding Policing'],
        iconName: 'BarChart3'
      }
    ],
    actionMetricLabel: 'Partner Driven Clicks',
    calculatorImpressionsMult: 110,
    calculatorActionsMult: 2.5,
    calculatorConversionsMult: 0.3,
    projectedROAS: '5.2x',
    executionSteps: [
      { step: '01', title: 'Network Setup & Commission Modeling', description: 'Configure tracking tags, affiliate terms, commission structures, and custom publisher portal integration.' },
      { step: '02', title: 'Publisher Onboarding & Recruitment', description: 'Recruit and activate top-tier vertical affiliates, comparison sites, and premium content creators.' },
      { step: '03', title: 'Creative & Promotional Syndication', description: 'Distribute exclusive discount codes, deep-linked banners, and promotional assets to active publishers.' },
      { step: '04', title: 'Fraud Auditing & Commission Optimization', description: 'Audit monthly conversions, enforce brand guidelines, and reward top-performing affiliates with VIP tiers.' }
    ]
  },

  // 5. Native Advertising
  'native-advertising': {
    headlinePrefix: 'Blend Seamlessly into Premium Media with ',
    headlineHighlight: 'Native Advertising',
    headlineSuffix: ' & Editorial Storytelling',
    themeColor: 'text-amber-600',
    themeBg: 'bg-amber-500/10',
    themeBorder: 'border-amber-500/20',
    heroWidgetType: 'native',
    ecosystemTitle: 'Premium Editorial Native Ecosystem',
    ecosystemSubtitle: 'Contextual In-Feed Placements Across the World’s Leading News & Media Publications',
    partners: ['Taboola Certified Partner', 'Outbrain Amplify', 'Yahoo Native Advertising', 'MSN Editorial Network', 'Revcontent', 'TripleLift'],
    pillarsTitle: 'Contextual Native Growth Framework',
    pillarsSubtitle: 'Non-intrusive, story-first advertising that overcomes banner blindness and earns genuine consumer trust.',
    pillars: [
      {
        badge: 'Contextual Match',
        badgeColor: 'text-amber-600 bg-amber-500/10',
        title: 'Editorial In-Feed Integration',
        description: 'Position your brand natively inside trusted publications like Bloomberg, MSN, Forbes, and regional news portals where users are actively reading content.',
        bullets: ['Seamless Visual Match with Host Publications', 'Zero Banner Blindness Resistance'],
        iconName: 'Newspaper'
      },
      {
        badge: 'Storytelling Funnels',
        badgeColor: 'text-primary bg-primary/10',
        title: 'Advertorial & Story-First Funnel Design',
        description: 'Convert curious readers into paying customers through educational advertorials, interactive listicles, and high-engagement landing pages.',
        bullets: ['High-Converting Advertorial Copywriting', 'Interactive Scroll & Read-Depth Telemetry'],
        iconName: 'BarChart3'
      },
      {
        badge: 'Algorithmic Scale',
        badgeColor: 'text-emerald-600 bg-emerald-500/10',
        title: 'AI SmartBid & Publisher Optimization',
        description: 'Dynamically allocate budget toward high-performing publisher domains while automatically blocking low-intent click sources.',
        bullets: ['Domain-Level Blacklisting & Whitelisting', 'SmartBid Real-Time Conversion Optimization'],
        iconName: 'ShieldCheck'
      }
    ],
    actionMetricLabel: 'Engaged Editorial Clicks',
    calculatorImpressionsMult: 85,
    calculatorActionsMult: 1.9,
    calculatorConversionsMult: 0.26,
    projectedROAS: '3.9x',
    executionSteps: [
      { step: '01', title: 'Editorial Angle & Audience Discovery', description: 'Identify compelling hooks, curiosity gaps, and customer pain points suited for long-form advertorials.' },
      { step: '02', title: 'Headline & Image Matrix Production', description: 'Produce 15+ variations of high-CTR native headlines and thumbnails tailored to publisher tone.' },
      { step: '03', title: 'Programmatic Native Launch', description: 'Deploy campaigns across Taboola, Outbrain, and Yahoo with interest-based and contextual targeting.' },
      { step: '04', title: 'Domain Pruning & Funnel Scaling', description: 'Prune underperforming publisher sites and scale top-converting editorial channels with bid multipliers.' }
    ]
  },

  // 6. SMS Marketing
  'sms-marketing': {
    headlinePrefix: 'Direct Customer Engagement with ',
    headlineHighlight: 'Intelligent Bulk SMS',
    headlineSuffix: ' & Instant 98% Open Rates',
    themeColor: 'text-emerald-600',
    themeBg: 'bg-emerald-500/10',
    themeBorder: 'border-emerald-500/20',
    heroWidgetType: 'sms',
    ecosystemTitle: 'Carrier-Grade Telecom & Messaging Ecosystem',
    ecosystemSubtitle: '100% DLT Compliant Tier-1 Telco Gateways Across APAC, EMEA & North America',
    partners: ['Twilio Enterprise', 'Route Mobile', 'Infobip Global Gateway', 'Sinch', 'Airtel Business Telecom', 'Jio DLT Network'],
    pillarsTitle: 'High-Velocity Messaging Architecture',
    pillarsSubtitle: 'Reach customers instantly on their primary screen with compliant, hyper-personalized SMS and conversational WhatsApp feeds.',
    pillars: [
      {
        badge: 'Instant Reach',
        badgeColor: 'text-emerald-600 bg-emerald-500/10',
        title: '98% Open Rate in Under 3 Minutes',
        description: 'Bypass crowded email inboxes and social algorithms. Deliver time-sensitive flash offers, transactional updates, and promotional alerts straight to SMS.',
        bullets: ['Sub-3-Second Global Message Delivery', 'Dynamic Sender ID Brand Customization'],
        iconName: 'MessageSquare'
      },
      {
        badge: 'Smart Segmentation',
        badgeColor: 'text-primary bg-primary/10',
        title: 'Behavioral Triggers & Cart Recovery',
        description: 'Automate high-converting SMS workflows triggered by user actions: abandoned carts, post-purchase onboarding, subscription renewals, and win-back offers.',
        bullets: ['Shopify & CRM API Triggered Workflows', 'Dynamic URL Shortening with Click Tracking'],
        iconName: 'Target'
      },
      {
        badge: '100% DLT Compliant',
        badgeColor: 'text-amber-600 bg-amber-500/10',
        title: 'DLT Scrubbing & Enterprise Telecom Security',
        description: 'Full regulatory compliance with DLT entity registration, template whitelisting, and telecom opt-out hygiene to ensure zero delivery blocks.',
        bullets: ['Zero Rejection DLT Template Whitelisting', 'Automated Opt-Out & TCPA / GDPR Safeguards'],
        iconName: 'ShieldCheck'
      }
    ],
    actionMetricLabel: 'Direct SMS Engagements',
    calculatorImpressionsMult: 120,
    calculatorActionsMult: 3.2,
    calculatorConversionsMult: 0.42,
    projectedROAS: '6.4x',
    executionSteps: [
      { step: '01', title: 'DLT Registration & Template Approval', description: 'Register brand Sender ID, entity headers, and message templates with regulatory telecom portals.' },
      { step: '02', title: 'CRM List Hygiene & Segmentation', description: 'Scrub contact lists against active DND registries and segment users by past purchase frequency.' },
      { step: '03', title: 'Automated Trigger Integration', description: 'Hook SMS gateway into e-commerce checkout funnels for instant abandoned cart and order notifications.' },
      { step: '04', title: 'Campaign Broadcast & Conversion Telemetry', description: 'Execute broadcast bursts with real-time delivery telemetry, link CTR tracking, and sales attribution.' }
    ]
  },

  // 7. Display Advertising
  'display-advertising': {
    headlinePrefix: 'Amplify Brand Presence with ',
    headlineHighlight: 'Programmatic Display',
    headlineSuffix: ' Across Top Global Publishers',
    themeColor: 'text-sky-600',
    themeBg: 'bg-sky-500/10',
    themeBorder: 'border-sky-500/20',
    heroWidgetType: 'display',
    ecosystemTitle: 'Global Programmatic DSP Ecosystem',
    ecosystemSubtitle: 'Connected with Leading Demand-Side Platforms (DSPs) & Real-Time Bidding Exchanges',
    partners: ['Google Display Network (GDN)', 'The Trade Desk', 'DV360 (Google Display & Video)', 'Xandr / Microsoft', 'OpenX Exchange', 'PubMatic'],
    pillarsTitle: 'Programmatic Display Precision Framework',
    pillarsSubtitle: 'Harness high-impact IAB banner formats, dynamic retargeting, and contextual AI bidding for maximum brand recall.',
    pillars: [
      {
        badge: 'Massive Footprint',
        badgeColor: 'text-sky-600 bg-sky-500/10',
        title: 'Access to 2 Million+ Publisher Sites',
        description: 'Reach 90%+ of internet users worldwide across high-traffic desktop and mobile websites with rich IAB display banner formats.',
        bullets: ['Standard & Rich Media IAB Format Support', 'Omnichannel Desktop, Tablet & Mobile Coverage'],
        iconName: 'LayoutGrid'
      },
      {
        badge: 'Dynamic Retargeting',
        badgeColor: 'text-primary bg-primary/10',
        title: 'Precision Audience Retargeting',
        description: 'Re-engage site drop-offs with personalized banners showing the exact products, services, or catalog items they previously viewed.',
        bullets: ['Dynamic Creative Optimization (DCO)', 'Cross-Device Frequency Capping Protection'],
        iconName: 'Target'
      },
      {
        badge: 'Brand Safety Guard',
        badgeColor: 'text-emerald-600 bg-emerald-500/10',
        title: '92%+ Viewability & Fraud-Free Delivery',
        description: 'Deliver ads strictly above-the-fold on verified brand-safe websites, monitored continuously by IAS (Integral Ad Science) and DoubleVerify.',
        bullets: ['IAS & DoubleVerify Pre-Bid Brand Safety', 'MRC-Accredited Above-the-Fold Viewability'],
        iconName: 'ShieldCheck'
      }
    ],
    actionMetricLabel: 'Viewable Display Clicks',
    calculatorImpressionsMult: 140,
    calculatorActionsMult: 2.2,
    calculatorConversionsMult: 0.18,
    projectedROAS: '3.4x',
    executionSteps: [
      { step: '01', title: 'Audience & Domain Whitelist Setup', description: 'Curate high-performing publisher whitelist and configure first-party retargeting audiences.' },
      { step: '02', title: 'HTML5 Responsive Banner Production', description: 'Design animated HTML5 and static creative banners across all key IAB sizes (300x250, 728x90, 160x600).' },
      { step: '03', title: 'DSP Bidder Deployment', description: 'Activate programmatic campaigns with viewability thresholds and strict brand safety filters.' },
      { step: '04', title: 'Placement Pruning & Viewability Tuning', description: 'Continuously eliminate low-viewability domains and reallocate ad dollars to top conversion placements.' }
    ]
  },

  // 8. Video Advertising
  'video-advertising': {
    headlinePrefix: 'Captivate Audiences & Accelerate Sales with ',
    headlineHighlight: 'High-Impact Video',
    headlineSuffix: ' on YouTube & Connected TV',
    themeColor: 'text-rose-600',
    themeBg: 'bg-rose-500/10',
    themeBorder: 'border-rose-500/20',
    heroWidgetType: 'video',
    ecosystemTitle: 'Connected TV & Video Streaming Ecosystem',
    ecosystemSubtitle: 'Official Agency Video Partnerships Across YouTube, OTT Streaming & CTV Networks',
    partners: ['YouTube Video Partner', 'Hulu & Disney Ad Sales', 'Roku Advertising', 'Amazon Fire TV', 'Magnite CTV', 'SpotX / Magnite'],
    pillarsTitle: 'Cinematic Video Growth Architecture',
    pillarsSubtitle: 'Engage consumers emotionally on big screens and mobile devices with skippable, non-skippable, and interactive video ad campaigns.',
    pillars: [
      {
        badge: 'High Completion',
        badgeColor: 'text-rose-600 bg-rose-500/10',
        title: '88%+ Video Completion Rate (VCR)',
        description: 'Deploy unskippable 15s pre-roll and interactive CTV video ads that command undivided user attention and drive superior message retention.',
        bullets: ['YouTube TrueView In-Stream & Shorts Ads', 'Connected TV (CTV) / OTT Living Room Domination'],
        iconName: 'Video'
      },
      {
        badge: 'Action-Oriented',
        badgeColor: 'text-primary bg-primary/10',
        title: 'Shoppable & Clickable Video Experiences',
        description: 'Transform passive viewers into immediate buyers with clickable CTA overlays, interactive product feeds, and end-screen lead forms.',
        bullets: ['Direct-Response YouTube Video Action Campaigns', 'Interactive CTV QR Code Companion Banners'],
        iconName: 'PlayCircle'
      },
      {
        badge: 'Brand Lift Insights',
        badgeColor: 'text-emerald-600 bg-emerald-500/10',
        title: 'Full-Funnel Brand Lift & Attribution',
        description: 'Measure absolute brand search lift, ad recall, and downstream website visit lift directly attributable to video ad impressions.',
        bullets: ['Google Brand Lift Study (BLS) Integration', 'Audio-On / Screen-On Verified Telemetry'],
        iconName: 'BarChart3'
      }
    ],
    actionMetricLabel: 'Engaged Video Views',
    calculatorImpressionsMult: 70,
    calculatorActionsMult: 1.8,
    calculatorConversionsMult: 0.25,
    projectedROAS: '4.0x',
    executionSteps: [
      { step: '01', title: 'Video Strategy & Storyboard Scripting', description: 'Develop 3-second attention hooks, audio cues, and action-oriented storyboards for target demographics.' },
      { step: '02', title: 'Video Production & Cutdown Formatting', description: 'Format master video into 6s bumpers, 15s non-skippable, and 30s TrueView formats with subtitles.' },
      { step: '03', title: 'YouTube & CTV Channel Deployment', description: 'Activate video campaigns with contextual topic exclusions, channel targeting, and in-market affinities.' },
      { step: '04', title: 'Completion Rate & Conversion Scale', description: 'Optimize bidding for highest quartile completions and retarget video viewers with high-converting search/social ads.' }
    ]
  }
};

export const getServiceConfig = (serviceId: string, _serviceTitle?: string): ServiceDetailConfig => {
  if (serviceDetailsConfig[serviceId]) {
    return serviceDetailsConfig[serviceId];
  }

  // Graceful fallback config
  return serviceDetailsConfig['mobile-marketing'];
};
