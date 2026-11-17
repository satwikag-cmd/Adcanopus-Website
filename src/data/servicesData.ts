export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  category: 'Performance' | 'Direct Engagement' | 'Brand & Media';
  description: string;
  highlights: string[];
  metrics: string;
  metricsLabel: string;
  iconName: string;
  href: string;
  popular?: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'mobile-marketing',
    title: 'Mobile Marketing',
    tagline: 'Connect with on-the-go customers with hyper-targeted mobile experiences',
    category: 'Performance',
    description: 'Use modern mobile technology to tailor your marketing campaigns based on individual locations, device characteristics, and user behavior. Drive high-intent installs and maximize ROI across iOS and Android ecosystems.',
    highlights: [
      'OEM & In-App direct inventory partnerships',
      'Proprietary fraud detection & attribution protection',
      'Targeting by device, OS, location, and carrier',
      'CPI, CPA, and engagement-driven optimization'
    ],
    metrics: '3.4x',
    metricsLabel: 'Avg Install-to-Action Rate',
    iconName: 'Smartphone',
    href: '/mobile-marketing',
    popular: true
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    tagline: 'Build an extensive following and loyal customer base across social ecosystems',
    category: 'Brand & Media',
    description: 'Leverage the viral power of social media marketing to increase sales, amplify brand advocacy, and drive high-intent website traffic across Meta, Instagram, LinkedIn, and YouTube.',
    highlights: [
      'High-converting creative design & video storytelling',
      'Custom audience segmentation & Lookalike modeling',
      'Community growth and active brand sentiment management',
      'Continuous A/B split-testing for optimal CAC'
    ],
    metrics: '42%',
    metricsLabel: 'Lower Cost Per Acquisition',
    iconName: 'Share2',
    href: '/social-media-marketing'
  },
  {
    id: 'search-advertising',
    title: 'Search Advertising',
    tagline: 'Appear at the exact moment prospects are searching for your solutions',
    category: 'Performance',
    description: 'With our precision search advertising service, capture high-intent demand on Google and Bing to drive qualified leads, immediate website traffic, and predictable bottom-line sales.',
    highlights: [
      'High-intent commercial keyword discovery',
      'Negative keyword sculpting to eliminate budget waste',
      'Quality Score optimization for lower CPCs',
      'Granular conversion tracking & ROAS attribution'
    ],
    metrics: '280%',
    metricsLabel: 'Avg ROAS Across Campaigns',
    iconName: 'Search',
    href: '/search-advertising',
    popular: true
  },
  {
    id: 'affiliate-marketing',
    title: 'Affiliate Marketing',
    tagline: 'Extend reach and drive sales through trusted performance partner networks',
    category: 'Performance',
    description: 'Get personalized marketing solutions meticulously designed to meet your target audience needs. Tap into an extensive vetted network of publishers, influencers, and affiliates with zero upfront risk.',
    highlights: [
      'Pure performance pay-on-results pricing model',
      'Vetted network of 5,000+ top-tier publishers',
      'Real-time automated link tracking & payout management',
      'Strict brand compliance and compliance monitoring'
    ],
    metrics: '10M+',
    metricsLabel: 'Monthly Partner Clicks',
    iconName: 'Users',
    href: '/affiliate-marketing'
  },
  {
    id: 'native-advertising',
    title: 'Native Advertising',
    tagline: 'Seamlessly blend high-converting ads into premium editorial content',
    category: 'Brand & Media',
    description: 'Capture the attention of your target audience with non-intrusive, highly engaging ads placed organically across world-class publications, achieving higher click-throughs and brand trust.',
    highlights: [
      'Contextually matched editorial integration',
      'Higher CTR than standard programmatic banners',
      'Engagement on top national and regional news portals',
      'Story-first landing page funnels that convert'
    ],
    metrics: '60%',
    metricsLabel: 'Higher Attention Duration',
    iconName: 'Newspaper',
    href: '/native-marketing'
  },
  {
    id: 'sms-marketing',
    title: 'SMS Marketing',
    tagline: 'Direct-to-consumer messaging with guaranteed 98% open rates within minutes',
    category: 'Direct Engagement',
    description: 'Create and deliver compelling brand messages directly to your customers phones within minutes with our robust SMS marketing engine and Dripeek platform integration.',
    highlights: [
      'Instant deliverability with 98% open rates',
      'Automated trigger workflows for abandoned journeys',
      'Smart link shorteners with real-time click heatmaps',
      'Full regulatory and DND compliance infrastructure'
    ],
    metrics: '98%',
    metricsLabel: 'Delivery & Open Rate',
    iconName: 'MessageSquare',
    href: '/sms-marketing',
    popular: true
  },
  {
    id: 'display-advertising',
    title: 'Display Advertising',
    tagline: 'Get noticed by relevant prospects with captivating interactive creatives',
    category: 'Brand & Media',
    description: 'Capture prospective customers attention through visually stunning display creatives, dynamic banners, and behavior-targeted programmatic placements across the web.',
    highlights: [
      'Rich media and HTML5 dynamic ad formats',
      'Cross-device behavioral retargeting campaigns',
      'Viewability optimization with premium ad exchange seats',
      'Transparent domain-level placement reporting'
    ],
    metrics: '4.8M',
    metricsLabel: 'Daily Impressions Served',
    iconName: 'LayoutGrid',
    href: '/display-advertising'
  },
  {
    id: 'video-advertising',
    title: 'Video Advertising',
    tagline: 'Raise brand awareness and cultivate trust through compelling video content',
    category: 'Brand & Media',
    description: 'Convey your brand message and reach broader audiences across YouTube, OTT platforms, and short-form video channels with measurable watch time and direct conversion tracking.',
    highlights: [
      'In-stream, out-stream, and rewarded video formats',
      'High-impact visual storytelling tailored to user intent',
      'OTT / Connected TV programmatic distribution',
      'Granular view-through conversion measurement'
    ],
    metrics: '78%',
    metricsLabel: 'Avg Video Completion Rate',
    iconName: 'PlayCircle',
    href: '/video-advertising'
  }
];
