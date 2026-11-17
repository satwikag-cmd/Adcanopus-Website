export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  badge: string;
  description: string;
  highlights: string[];
  logoSrc: string;
  bannerSrc?: string;
  externalUrl: string;
  accentColor: string;
}

export const productsData: ProductItem[] = [
  {
    id: 'dripeek',
    name: 'Dripeek',
    tagline: 'Your Ultimate Messaging & Real-Time Analytics Solution',
    category: 'SaaS / Marketing Automation',
    badge: 'Marketing Tech',
    description: 'Track the performance of SMS marketing campaigns with real-time analytics, automated sender routing, and campaign optimization reports to make result-driven decisions effortlessly.',
    highlights: [
      'Comprehensive SMS marketing list management',
      'Real-time conversion tracking & delivery analytics',
      'Smart URL shortening with custom domain branding',
      'High-throughput enterprise API integration'
    ],
    logoSrc: '/assets/images/dripeek-logo-home.svg',
    externalUrl: 'https://dripeek.com',
    accentColor: '#0371d0'
  },
  {
    id: 'knowastro',
    name: 'Knowastro',
    tagline: 'Your Personal Modern Guide to Astrology & Growth',
    category: 'Consumer Digital Platform',
    badge: 'Lifestyle & Guidance',
    description: 'Get personalized insights and unlock your potential with our powerful digital astrology platform, offering accurate horoscopes, birth chart calculations, and consultation services.',
    highlights: [
      'Personalized birth chart & Kundli analysis',
      'Daily, weekly, and monthly predictive insights',
      'One-on-one certified astrologer consultations',
      'Modern, intuitive user interface with privacy protection'
    ],
    logoSrc: '/assets/images/knowastro-logo-nav.svg',
    externalUrl: 'https://www.knowastro.com',
    accentColor: '#7952B3'
  },
  {
    id: 'paisafatafat',
    name: 'Paisafatafat',
    tagline: 'Fast Track to Financial Freedom & Instant Loans',
    category: 'Fintech Platform',
    badge: 'Fintech Solution',
    description: 'The quickest way to access short-term personal credit. Get instant digital approval, minimal documentation, and fast bank disbursal through our powerful financial aggregation platform.',
    highlights: [
      '100% paperless digital loan application',
      'Fast approval with multi-bank lending partners',
      'Transparent interest rates with zero hidden charges',
      'Strict bank-grade data security protocols'
    ],
    logoSrc: '/assets/images/paisa-fatafat-nav.svg',
    externalUrl: 'https://paisafatafat.com',
    accentColor: '#16a34a'
  }
];
