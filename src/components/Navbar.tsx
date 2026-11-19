import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight, Sparkles, Smartphone, Share2, Search, Users, Newspaper, MessageSquare, LayoutGrid, PlayCircle } from 'lucide-react';
import { servicesData, ServiceItem } from '../data/servicesData';
import { productsData } from '../data/productsData';

interface NavbarProps {
  onOpenGetStarted: () => void;
  onSelectServiceModal?: (service: ServiceItem) => void;
  onSelectProduct: (productId: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone className="w-5 h-5" />,
  Share2: <Share2 className="w-5 h-5" />,
  Search: <Search className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Newspaper: <Newspaper className="w-5 h-5" />,
  MessageSquare: <MessageSquare className="w-5 h-5" />,
  LayoutGrid: <LayoutGrid className="w-5 h-5" />,
  PlayCircle: <PlayCircle className="w-5 h-5" />
};

export const Navbar: React.FC<NavbarProps> = ({
  onOpenGetStarted,
  onSelectServiceModal,
  onSelectProduct
}) => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'products' | 'company' | null>(null);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownEnter = (type: 'services' | 'products' | 'company') => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setHoveredNav(type);
    setActiveDropdown(type);
  };

  const handleDropdownLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setHoveredNav(null);
      setActiveDropdown(null);
    }, 180);
  };

  const handleServiceClick = (service: ServiceItem) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (onSelectServiceModal) onSelectServiceModal(service);
    navigate(`/services/${service.id}`);
  };

  const handleProductClick = (productId: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onSelectProduct(productId);
    navigate('/#products');
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-clean border-b border-gray-100 py-2.5'
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo container - strictly preserving exact height 64px desktop / 40px mobile */}
          <Link to="/" className="flex items-center group" aria-label="Adcanopus Home">
            <motion.img
              whileHover={{ scale: 1.02 }}
              src="/assets/images/logo.png"
              alt="Adcanopus"
              className="h-10 sm:h-16 w-auto object-contain transition-transform"
              height={64}
            />
          </Link>

          {/* Desktop Navigation with Animated Floating Pill */}
          <nav
            className="hidden lg:flex items-center space-x-1 font-semibold text-sm text-brand-charcoal"
            onMouseLeave={handleDropdownLeave}
          >
            {/* Home Tab */}
            <Link
              to="/#hero"
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                setHoveredNav('home');
                setActiveDropdown(null);
              }}
              className="relative px-4 py-2 rounded-xl transition-colors hover:text-primary z-10"
            >
              {hoveredNav === 'home' && (
                <motion.span
                  layoutId="nav-hover-pill"
                  className="absolute inset-0 bg-primary/10 rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                />
              )}
              <span>Home</span>
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('services')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                className={`relative flex items-center space-x-1.5 px-4 py-2 rounded-xl transition-colors z-10 ${
                  activeDropdown === 'services' ? 'text-primary font-bold' : 'hover:text-primary'
                }`}
              >
                {hoveredNav === 'services' && (
                  <motion.span
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 bg-primary/10 rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  />
                )}
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === 'services' ? 'rotate-180 text-primary' : 'text-gray-400'
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-2.5 z-50 pointer-events-auto"
                    onMouseEnter={() => handleDropdownEnter('services')}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 400, damping: 28 }}
                      className="w-[720px] max-w-[92vw] bg-white rounded-3xl shadow-2xl shadow-slate-900/12 border border-slate-200/90 p-6 overflow-hidden"
                    >
                      <div className="pb-3 mb-2 border-b border-gray-100 flex items-center justify-between">
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-primary">Comprehensive Marketing Suite</h4>
                          </div>
                          <p className="text-xs text-brand-muted mt-0.5">Click any service to launch instant interactive analytics & ROI forecast</p>
                        </div>
                        <span className="text-[11px] font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">
                          All 8 Disciplines
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        {servicesData.map((service, idx) => (
                          <motion.button
                            key={service.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.03 }}
                            whileHover={{ scale: 1.02, x: 2 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleServiceClick(service)}
                            className="flex items-start text-left p-3 rounded-2xl hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent border border-transparent hover:border-primary/20 transition-all group"
                          >
                            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mr-3.5 group-hover:bg-primary group-hover:text-white group-hover:shadow-md transition-all">
                              {iconMap[service.iconName] || <Sparkles className="w-5 h-5" />}
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-bold text-brand-charcoal group-hover:text-primary transition-colors truncate">
                                  {service.title}
                                </span>
                                {service.popular && (
                                  <span className="text-[10px] bg-brand-orange/15 text-brand-orange font-bold px-1.5 py-0.5 rounded">
                                    Top ROI
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-brand-muted line-clamp-1 mt-0.5">
                                {service.tagline}
                              </p>
                              <span className="text-[10px] text-primary font-bold mt-1 inline-flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                Open Interactive Specs <ArrowRight className="w-3 h-3 ml-1" />
                              </span>
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('products')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'products' ? null : 'products')}
                className={`relative flex items-center space-x-1.5 px-4 py-2 rounded-xl transition-colors z-10 ${
                  activeDropdown === 'products' ? 'text-primary font-bold' : 'hover:text-primary'
                }`}
              >
                {hoveredNav === 'products' && (
                  <motion.span
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 bg-primary/10 rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  />
                )}
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === 'products' ? 'rotate-180 text-primary' : 'text-gray-400'
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === 'products' && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-2.5 z-50 pointer-events-auto"
                    onMouseEnter={() => handleDropdownEnter('products')}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 400, damping: 28 }}
                      className="w-[500px] max-w-[90vw] bg-white rounded-3xl shadow-2xl shadow-slate-900/12 border border-slate-200/90 p-5 space-y-2 overflow-hidden"
                    >
                      <div className="pb-2.5 border-b border-gray-100 flex items-center justify-between">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-primary">In-House Platforms</h4>
                          <p className="text-xs text-brand-muted">Proprietary platforms powered by Adcanopus engineering</p>
                        </div>
                        <span className="text-[11px] font-semibold text-brand-green bg-brand-green/10 px-2.5 py-0.5 rounded-full">
                          3 Products
                        </span>
                      </div>

                      {productsData.map((prod, idx) => (
                        <motion.button
                          key={prod.id}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.01, x: 3 }}
                          whileTap={{ scale: 0.99 }}
                          onClick={() => handleProductClick(prod.id)}
                          className="w-full flex items-center justify-between p-3.5 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all text-left group"
                        >
                          <div className="flex items-center space-x-3.5">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm p-2 border border-gray-100 flex items-center justify-center shrink-0">
                              <img src={prod.logoSrc} alt={prod.name} className="max-h-7 max-w-full object-contain" />
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-bold text-brand-charcoal group-hover:text-primary transition-colors">{prod.name}</span>
                                <span className="text-[10px] font-semibold bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">{prod.badge}</span>
                              </div>
                              <p className="text-xs text-brand-muted mt-0.5">{prod.tagline}</p>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </motion.button>
                      ))}
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('company')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'company' ? null : 'company')}
                className={`relative flex items-center space-x-1.5 px-4 py-2 rounded-xl transition-colors z-10 ${
                  activeDropdown === 'company' ? 'text-primary font-bold' : 'hover:text-primary'
                }`}
              >
                {hoveredNav === 'company' && (
                  <motion.span
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 bg-primary/10 rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  />
                )}
                <span>Company</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === 'company' ? 'rotate-180 text-primary' : 'text-gray-400'
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === 'company' && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-2.5 z-50 pointer-events-auto"
                    onMouseEnter={() => handleDropdownEnter('company')}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 400, damping: 28 }}
                      className="w-72 bg-white rounded-3xl shadow-2xl shadow-slate-900/12 border border-slate-200/90 p-3 space-y-1 overflow-hidden"
                    >
                      {[
                        { to: '/#about', label: 'About Adcanopus', desc: 'Agency story & track record' },
                        { to: '/#process', label: 'Our Growth Process', desc: '3-stage data framework' },
                        { to: '/#case-studies', label: 'Client Case Studies', desc: 'Abhi Bus, Oyo, Boddess' },
                        { to: '/#locations', label: 'Global Hubs', desc: 'Bengaluru, Gurugram, NY' },
                      ].map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-3.5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group"
                        >
                          <span className="text-xs font-bold text-brand-charcoal group-hover:text-primary block">{item.label}</span>
                          <span className="text-[11px] text-brand-muted">{item.desc}</span>
                        </Link>
                      ))}
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Us Tab */}
            <Link
              to="/contact"
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                setHoveredNav('contact');
                setActiveDropdown(null);
              }}
              className="relative px-4 py-2 rounded-xl transition-colors hover:text-primary z-10"
            >
              {hoveredNav === 'contact' && (
                <motion.span
                  layoutId="nav-hover-pill"
                  className="absolute inset-0 bg-primary/10 rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                />
              )}
              <span>Contact Us</span>
            </Link>
          </nav>

          {/* Right Action: Contact + Refined Minimalist CTA */}
          <div className="hidden lg:flex items-center space-x-4 shrink-0">
            {/* <a
              href="mailto:info@adcanopus.com"
              className="text-xs font-semibold text-brand-muted hover:text-brand-charcoal transition-colors whitespace-nowrap"
            >
              info@adcanopus.com
            </a> */}

            <button
              onClick={onOpenGetStarted}
              className="inline-flex items-center space-x-2 px-5 py-2 text-xs font-bold text-brand-charcoal hover:text-primary bg-slate-50 hover:bg-primary/5 border border-slate-200 hover:border-primary/40 rounded-full transition-all duration-200 whitespace-nowrap shrink-0 shadow-2xs group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden space-x-2">
            <button
              onClick={onOpenGetStarted}
              className="px-3 py-1.5 text-xs font-bold text-brand-charcoal bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              Get Started
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-charcoal hover:text-primary focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md px-5 pt-4 pb-8 space-y-4 max-h-[85vh] overflow-y-auto"
          >
            <div className="space-y-1">
              <Link
                to="/#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 font-bold text-brand-charcoal hover:bg-gray-50 rounded-xl"
              >
                Home
              </Link>

              <div className="pt-2">
                <span className="block px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">All 8 Services</span>
                <div className="grid grid-cols-1 gap-1 pl-2 pt-1">
                  {servicesData.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceClick(service)}
                      className="flex items-center justify-between w-full text-left px-3 py-2.5 text-xs font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 rounded-xl"
                    >
                      <span>{service.title}</span>
                      <span className="text-[10px] text-primary font-bold">Inspect Specs</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <span className="block px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">Products</span>
                <div className="grid grid-cols-1 gap-1 pl-2 pt-1">
                  {productsData.map((prod) => (
                    <button
                      key={prod.id}
                      onClick={() => handleProductClick(prod.id)}
                      className="flex items-center space-x-2.5 w-full text-left px-3 py-2 text-xs font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 rounded-xl"
                    >
                      <span>{prod.name} ({prod.badge})</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <span className="block px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">Company</span>
                <div className="grid grid-cols-1 gap-1 pl-2 pt-1">
                  <Link
                    to="/#about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-xs font-semibold text-gray-700 hover:text-primary rounded-xl"
                  >
                    About Adcanopus
                  </Link>
                  <Link
                    to="/#process"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-xs font-semibold text-gray-700 hover:text-primary rounded-xl"
                  >
                    Work Process
                  </Link>
                  <Link
                    to="/#case-studies"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-xs font-semibold text-gray-700 hover:text-primary rounded-xl"
                  >
                    Case Studies
                  </Link>
                  <Link
                    to="/#locations"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-xs font-semibold text-gray-700 hover:text-primary rounded-xl"
                  >
                    Offices (Bengaluru, Gurugram, NY)
                  </Link>
                </div>
              </div>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 font-bold text-primary hover:bg-primary/5 rounded-xl text-sm"
              >
                Contact Us
              </Link>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGetStarted();
                }}
                className="w-full py-3.5 text-center text-sm font-bold text-white bg-primary rounded-xl shadow-clean"
              >
                Get Started with Adcanopus
              </button>
              <a
                href="mailto:info@adcanopus.com"
                className="text-center text-xs text-brand-muted hover:text-primary py-1 font-semibold"
              >
                info@adcanopus.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
