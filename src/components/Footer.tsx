import React from 'react';
import { servicesData } from '../data/servicesData';
import { productsData } from '../data/productsData';
import { officeLocations } from '../data/companyData';
import { Linkedin, Facebook, Twitter, Instagram, Youtube, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onSelectService?: (serviceId: string) => void;
  onOpenGetStarted: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService, onOpenGetStarted }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-gray-300 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-gray-800">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#" className="inline-block">
              <img
                src="/assets/images/dark_logo.png"
                alt="Adcanopus"
                className="h-12 w-auto object-contain"
                height={64}
              />
            </a>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Adcanopus is a dynamic digital performance marketing agency committed to delivering top-notch solutions that drive tangible results for enterprises worldwide.
            </p>

            <div className="flex items-center space-x-3 text-xs text-gray-400 pt-2">
              <div className="flex items-center space-x-1.5 bg-gray-800/80 px-3 py-1.5 rounded-lg border border-gray-700">
                <ShieldCheck className="w-4 h-4 text-brand-green" />
                <span>Google Partner Certified</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-gray-800/80 px-3 py-1.5 rounded-lg border border-gray-700">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Microsoft Advertising Partner</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenGetStarted}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-primary hover:bg-primary-hover text-white transition-colors"
              >
                Schedule Campaign Consultation
              </button>
            </div>
          </div>

          {/* Column 2: All 8 Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              All 8 Services
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <button
                    onClick={() => {
                      if (onSelectService) onSelectService(svc.id);
                      const el = document.getElementById('services');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-primary transition-colors text-left"
                  >
                    {svc.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: In-House Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Products Ecosystem
            </h4>
            <ul className="space-y-3 text-xs">
              {productsData.map((prod) => (
                <li key={prod.id}>
                  <a
                    href={`#product-${prod.id}`}
                    className="hover:text-primary transition-colors block"
                  >
                    <span className="font-bold text-white block">{prod.name}</span>
                    <span className="text-gray-400 text-[11px]">{prod.tagline}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Locations & Direct Inquiries */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Global Operating Hubs
            </h4>
            <div className="space-y-4 text-xs">
              {officeLocations.map((loc) => (
                <div key={loc.city}>
                  <span className="font-bold text-white block">{loc.city.toUpperCase()}</span>
                  <p className="text-gray-400 text-[11px] mt-0.5 line-clamp-2">{loc.address}</p>
                  <p className="text-primary text-[11px] font-semibold mt-0.5">{loc.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {currentYear} adcanopus.com All Rights Reserved.</p>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a
              href="https://in.linkedin.com/company/adcanopus-digital-media-pvt.-ltd."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Adcanopus on LinkedIn"
              className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/Adcanopus-Digital-Media-Pvt-Ltd-876471889078232/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Adcanopus on Facebook"
              className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com/AdCanopus"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Adcanopus on Twitter"
              className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/adcanopusdigital/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Adcanopus on Instagram"
              className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCvgF-qG0MXzRPFpAb1luOxg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Adcanopus on YouTube"
              className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
