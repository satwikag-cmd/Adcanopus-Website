export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  phone: string;
  type: string;
  image?: string;
  flag?: string;
  timezone?: string;
  tags?: string[];
  mapUrl?: string;
}

export const officeLocations: OfficeLocation[] = [
  {
    city: 'Bengaluru',
    country: 'India',
    flag: '🇮🇳',
    type: 'Global HQ & Delivery Center',
    timezone: 'IST (UTC+5:30)',
    address: '2nd Floor, Flex Coworks, 71, 15th Cross Rd, Dollar Layout, 3rd Phase, J. P. Nagar, Bengaluru, Karnataka 560078',
    phone: '+91-8045340300',
    image: '/assets/images/company/bengaluru.jpg',
    tags: ['Ad-Tech R&D', 'HQ Operations', 'Growth Engineering'],
    mapUrl: 'https://maps.google.com/?q=Flex+Coworks+71+15th+Cross+Rd+Dollar+Layout+J+P+Nagar+Bengaluru'
  },
  {
    city: 'Gurugram',
    country: 'India',
    flag: '🇮🇳',
    type: 'North India Growth Hub',
    timezone: 'IST (UTC+5:30)',
    address: 'Emaar The Palm Spring Plaza, 16th Floor, Golf Course Rd, DLF Phase 5, Sector 54, Gurugram, Haryana 122003',
    phone: '+91-8045340300',
    image: '/assets/images/company/gurugram.png',
    tags: ['OEM Partnerships', 'Programmatic DSP', 'Enterprise Sales'],
    mapUrl: 'https://maps.google.com/?q=Emaar+The+Palm+Spring+Plaza+Golf+Course+Rd+Gurugram'
  },
  {
    city: 'New York',
    country: 'United States',
    flag: '🇺🇸',
    type: 'Global Client Partnerships',
    timezone: 'EST (UTC-5)',
    address: '80 Broad Street, 5th Floor, New York, NY 10004',
    phone: '+1 (725) 270-4766',
    image: '/assets/images/company/new-york.jpg',
    tags: ['North America Media', 'Brand Strategy', 'Cross-Border Ingest'],
    mapUrl: 'https://maps.google.com/?q=80+Broad+Street+New+York+NY+10004'
  }
];

export const clientLogos = [
  { name: 'Bajaj Finserv', src: '/assets/images/home/bajaj-finserv.png' },
  { name: 'Paisabazaar', src: '/assets/images/home/paisabazaar.png' },
  { name: 'IDFC First Bank', src: '/assets/images/home/idfc.png' },
  { name: 'Policybazaar', src: '/assets/images/home/policy-bazaar.png' },
  { name: 'Amazon', src: '/assets/images/home/amazon.png' },
  { name: 'Spinny', src: '/assets/images/home/spinny.png' },
];

export const caseStudies = [
  {
    title: 'Abhi Bus',
    category: 'Travel & Mobility',
    badgeColor: 'bg-blue-100 text-blue-700',
    description: 'Scaled pan-India bus ticket booking acquisitions with geo-targeted search and programmatic mobile campaigns.',
    metric: '320%',
    metricLabel: 'Booking Growth',
    image: 'https://adcanopus-websites.s3.us-east-1.amazonaws.com/assets/images/abhi-bus-cs1.jpg'
  },
  {
    title: 'Oyo Hotels',
    category: 'Hospitality',
    badgeColor: 'bg-orange-100 text-orange-700',
    description: 'Reduced cost-per-app-install through optimized OEM placements and dynamic display retargeting.',
    metric: '44%',
    metricLabel: 'Lower CPI',
    image: 'https://adcanopus-websites.s3.us-east-1.amazonaws.com/assets/images/oyo-cs.jpg'
  },
  {
    title: 'Boddess Beauty',
    category: 'E-commerce & Retail',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    description: 'Drove profitable customer acquisition and repeat purchase cycles through multi-channel video and affiliate marketing.',
    metric: '4.8x',
    metricLabel: 'Return on Ad Spend',
    image: 'https://adcanopus-websites.s3.us-east-1.amazonaws.com/assets/images/boddess-cs-1.jpg'
  }
];

export const companyMetrics = [
  { value: '8+', label: 'Years Experience', desc: 'Continuous market leadership in digital marketing' },
  { value: '500M+', label: 'Monthly Reach', desc: 'Impressions delivered across programmatic channels' },
  { value: '98%', label: 'Delivery Rate', desc: 'Guaranteed engagement across messaging channels' },
  { value: '3', label: 'Global Hubs', desc: 'Bengaluru, Gurugram, and New York' }
];

export const socialLinks = [
  { name: 'LinkedIn', href: 'https://in.linkedin.com/company/adcanopus-digital-media-pvt.-ltd.', icon: 'Linkedin' },
  { name: 'Facebook', href: 'https://www.facebook.com/Adcanopus-Digital-Media-Pvt-Ltd-876471889078232/', icon: 'Facebook' },
  { name: 'Twitter', href: 'https://twitter.com/AdCanopus', icon: 'Twitter' },
  { name: 'Instagram', href: 'https://www.instagram.com/adcanopusdigital/', icon: 'Instagram' },
  { name: 'YouTube', href: 'https://www.youtube.com/channel/UCvgF-qG0MXzRPFpAb1luOxg', icon: 'Youtube' }
];
