import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { productsData } from '../data/productsData';
import { 
  Linkedin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  MapPin, 
  Phone, 
  ArrowRight, 
  ArrowUpRight 
} from 'lucide-react';

interface FooterProps {
  onSelectService?: (serviceId: string) => void;
  onOpenGetStarted: () => void;
  onSelectProduct?: (productId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService, onOpenGetStarted, onSelectProduct }) => {
  const currentYear = new Date().getFullYear();

  const handleProductClick = (productId: string) => {
    if (onSelectProduct) {
      onSelectProduct(productId);
    }
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#090D16] text-slate-300 pt-14 pb-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid - Balanced 12 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/60">
          
          {/* Column 1: Brand & Trust Badges (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link 
              to="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="inline-block"
            >
              <img
                src="/assets/images/dark_logo.png"
                alt="Adcanopus"
                className="h-10 w-auto object-contain"
              />
            </Link>
            
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Enterprise digital performance marketing agency delivering measurable ROI, global client acquisition, and proprietary ad-tech ecosystems.
            </p>

            {/* Official Partner Recognition Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-900 border border-slate-800 text-slate-300">
                <span>Google Partner</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-900 border border-slate-800 text-slate-300">
                <span>Microsoft Advertising</span>
              </div>
            </div>

            {/* Direct Consultation / Quick Contact Row */}
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenGetStarted}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-primary hover:bg-primary-hover text-white transition-all shadow-sm group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href="mailto:info@adcanopus.com"
                className="text-xs text-slate-400 hover:text-white transition-colors"
              >
                info@adcanopus.com
              </a>
            </div>
          </div>

          {/* Column 2: All 8 Services with Smooth Hover Indicator (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 flex items-center gap-2">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <Link
                    to={`/services/${svc.id}`}
                    onClick={() => {
                      if (onSelectService) onSelectService(svc.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group flex items-center text-slate-400 hover:text-white transition-colors py-0.5"
                  >
                    <span className="w-1.5 h-px bg-slate-600 mr-2 opacity-0 group-hover:opacity-100 group-hover:w-2.5 group-hover:bg-primary transition-all duration-150"></span>
                    <span>{svc.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products Ecosystem & Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 flex items-center gap-2">
              Products
            </h4>
            <div className="space-y-3.5 text-xs">
              {productsData.map((prod) => (
                <Link
                  key={prod.id}
                  to="/#products"
                  onClick={() => handleProductClick(prod.id)}
                  className="block group"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-white group-hover:text-primary transition-colors">
                      {prod.name}
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                    {prod.tagline}
                  </p>
                </Link>
              ))}

              <div className="pt-2 border-t border-slate-800/80 space-y-2">
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="block text-slate-400 hover:text-white transition-colors text-[11px]"
                >
                  Advertiser Platform &rarr;
                </Link>
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="block text-slate-400 hover:text-white transition-colors text-[11px]"
                >
                  Publisher Network &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Column 4: Global Hubs (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 flex items-center gap-2">
              Global Hubs
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex items-center gap-1.5 text-white font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Bengaluru, India (HQ)</span>
                </div>
                <p className="text-[11px] text-slate-400 pl-5 mt-0.5 leading-snug">
                  Flex Coworks, 71, 15th Cross Rd, Dollar Layout, 3rd Phase, J.P. Nagar
                </p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-white font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Gurugram, India</span>
                </div>
                <p className="text-[11px] text-slate-400 pl-5 mt-0.5 leading-snug">
                  Palm Spring Plaza, Golf Course Rd, DLF Phase 5
                </p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-white font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>New York, USA</span>
                </div>
                <p className="text-[11px] text-slate-400 pl-5 mt-0.5 leading-snug">
                  80 Broad Street, 5th Floor, New York, NY 10004
                </p>
              </div>

              <div className="pt-2 pl-5 flex items-center gap-4 text-[11px]">
                <a
                  href="tel:+918045340300"
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                >
                  <Phone className="w-3 h-3 text-primary" />
                  <span>+91-8045340300</span>
                </a>
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-primary hover:text-white transition-colors font-medium"
                >
                  Directions &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal Links & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {currentYear} Adcanopus Digital Media Pvt. Ltd. All rights reserved.</p>

          {/* Legal / Policy Quick Links */}
          <div className="flex items-center gap-4 text-[11px]">
            <Link 
              to="/contact" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-700">•</span>
            <Link 
              to="/contact" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-white transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <span className="text-slate-700">•</span>
            <Link 
              to="/contact" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-white transition-colors"
            >
              Grievance Redressal
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-2">
            <a
              href="https://in.linkedin.com/company/adcanopus-digital-media-pvt.-ltd."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Adcanopus on LinkedIn"
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-primary hover:border-primary flex items-center justify-center transition-all duration-200"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/Adcanopus-Digital-Media-Pvt-Ltd-876471889078232/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Adcanopus on Facebook"
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-primary hover:border-primary flex items-center justify-center transition-all duration-200"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com/AdCanopus"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Adcanopus on Twitter"
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-primary hover:border-primary flex items-center justify-center transition-all duration-200"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/adcanopusdigital/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Adcanopus on Instagram"
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-primary hover:border-primary flex items-center justify-center transition-all duration-200"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCvgF-qG0MXzRPFpAb1luOxg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Adcanopus on YouTube"
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-primary hover:border-primary flex items-center justify-center transition-all duration-200"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
