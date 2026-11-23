import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Send,
  AlertCircle,
  RotateCw,
  Building2,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { countriesList } from '../data/countries';

export const ContactUsPage: React.FC = () => {
  const location = useLocation();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    city: '',
    company: '',
    mobile: '',
    message: '',
    authorize: false,
  });

  // Verification & Submission States
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Pre-fill message if navigated with service inquiry parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    const stateService = (location.state as { service?: string })?.service;
    const initialService = serviceParam || stateService;

    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        message: `Hello Adcanopus team,\n\nI would like to explore growth opportunities and discuss campaign deployment for: [${initialService}]. Please connect with me to schedule a strategic consultation.`,
      }));
    }
  }, [location]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errorMessage) setErrorMessage(null);
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
    if (token && errorMessage) {
      setErrorMessage(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation Checks
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.country) {
      setErrorMessage('Please select your country.');
      return;
    }
    if (!formData.city.trim()) {
      setErrorMessage('Please enter your city.');
      return;
    }
    if (!formData.company.trim()) {
      setErrorMessage('Please enter your company name.');
      return;
    }
    if (!formData.mobile.trim() || formData.mobile.length < 6) {
      setErrorMessage('Please enter a valid mobile number.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please write a brief message about your inquiry.');
      return;
    }
    if (!formData.authorize) {
      setErrorMessage(
        'Please check the authorization box to allow Adcanopus to send notifications.'
      );
      return;
    }

    const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
    if (recaptchaSiteKey && !recaptchaToken) {
      setErrorMessage('Please complete the reCAPTCHA verification.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        setIsSubmitting(false);
        setErrorMessage(
          'Email dispatch service is not configured (Missing VITE_WEB3FORMS_ACCESS_KEY in environment variables).'
        );
        return;
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Adcanopus Inquiry: ${formData.name} - ${formData.company}`,
          from_name: 'Adcanopus Website Lead Desk',
          replyto: formData.email,
          'Full Name': formData.name,
          'Work Email': formData.email,
          'Company': formData.company,
          'Country': formData.country,
          'City': formData.city,
          'Mobile Phone': formData.mobile,
          'Inquiry Details / Message': formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);
      } else {
        setIsSubmitting(false);
        setErrorMessage(data.message || 'Unable to deliver message at this time.');
      }
    } catch (err: any) {
      console.error('Contact submit error:', err);
      setIsSubmitting(false);
      setErrorMessage(
        'Unable to reach email service. Please check your internet connection and try again.'
      );
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* 1. Breadcrumbs Ribbon */}
      <div className="bg-slate-50/80 border-b border-slate-200/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs font-semibold text-slate-500">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-primary font-bold">Contact Us</span>
          </nav>
        </div>
      </div>

      {/* 2. Main Contact Layout with Perfectly Balanced Column Heights */}
      <section className="py-8 sm:py-12 lg:py-14 bg-gradient-to-b from-slate-50/40 via-white to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: Headline, Illustration & Structured Touchpoints (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="lg:col-span-5 flex flex-col justify-between space-y-5"
            >
              {/* Header Headline & Caption */}
              <div className="space-y-2.5">
                <span className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-3.5 py-1 rounded-full">
                  Connect With Us
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Let’s Build High-Velocity Acquisition Together
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Ready to engineer measurable ROI across global digital channels? Tell us about your growth goals, and our digital marketing architects will prepare a custom blueprint.
                </p>
              </div>

              {/* Clean Vector Illustration */}
              <div className="py-2 flex items-center justify-center">
                <img
                  src="/assets/images/contact.svg"
                  alt="Contact Adcanopus"
                  className="w-full max-w-[280px] h-36 sm:h-44 object-contain select-none drop-shadow-xs"
                />
              </div>

              {/* Direct Outreach Structured Hub */}
              <div className="space-y-2.5">
                {/* 2-Column Touchpoint Strip */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {/* Phone */}
                  <a
                    href="tel:+918045340300"
                    className="flex items-center space-x-3 p-3 rounded-2xl bg-white border border-slate-200/90 hover:border-primary/50 shadow-2xs hover:shadow-xs transition-all group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block truncate">
                        Priority Desk
                      </span>
                      <span className="text-xs font-bold text-slate-900 group-hover:text-primary transition-colors truncate block">
                        +91-8045340300
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:info@adcanopus.com"
                    className="flex items-center space-x-3 p-3 rounded-2xl bg-white border border-slate-200/90 hover:border-primary/50 shadow-2xs hover:shadow-xs transition-all group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block truncate">
                        Client Inquiries
                      </span>
                      <span className="text-xs font-bold text-slate-900 group-hover:text-primary transition-colors truncate block">
                        info@adcanopus.com
                      </span>
                    </div>
                  </a>
                </div>

                {/* HQ Address Strip */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Global Headquarters
                      </span>
                      <span className="text-xs font-bold text-slate-800">
                        100ft Road, Indiranagar, Bengaluru, India
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Adcanopus+Digital+Media+Bangalore"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1 text-[11px] font-bold text-primary hover:underline shrink-0 pl-2"
                  >
                    <span>Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Response SLA Note */}
                <div className="p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200/80 flex items-center space-x-2 text-[11px] text-emerald-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    <strong>2-Hour Response SLA:</strong> All inquiries reviewed promptly under mutual non-disclosure.
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Interactive Contact Us Form (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.08 }}
              className="lg:col-span-7 flex flex-col"
            >
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl shadow-slate-900/5 h-full flex flex-col justify-between">
                
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    /* Success / Submission Confirmation Screen */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-10 text-center space-y-5 my-auto"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-sm">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>

                      <div className="space-y-1.5 max-w-md mx-auto">
                        <h3 className="text-2xl font-extrabold text-slate-900">
                          Thank You, {formData.name.split(' ')[0]}!
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Your message has been successfully received. Our strategic account architects will review your requirements and reach out to you at{' '}
                          <strong className="text-slate-900">{formData.email}</strong> shortly.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-sm mx-auto text-left space-y-1 font-mono">
                        <div><span className="text-slate-400">Company:</span> {formData.company}</div>
                        <div><span className="text-slate-400">Location:</span> {formData.city}, {formData.country}</div>
                        <div><span className="text-slate-400">Mobile:</span> {formData.mobile}</div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                        <Link
                          to="/"
                          className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-primary text-white font-bold text-xs shadow hover:bg-primary-hover transition-colors text-center"
                        >
                          Return to Home
                        </Link>
                        <button
                          onClick={() => {
                            setIsSubmitted(false);
                            setRecaptchaToken(null);
                            recaptchaRef.current?.reset();
                            setFormData({
                              name: '',
                              email: '',
                              country: '',
                              city: '',
                              company: '',
                              mobile: '',
                              message: '',
                              authorize: false,
                            });
                          }}
                          className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-colors"
                        >
                          Send Another Message
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    /* The Clean Contact Form matching screenshot */
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      {/* Form Header */}
                      <div className="border-b border-slate-100 pb-3 mb-1">
                        <h2 className="text-xl font-bold text-slate-900">Send Us a Message</h2>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Fill out the details below and an Adcanopus growth specialist will connect with you.
                        </p>
                      </div>

                      {/* Validation Error Banner */}
                      {errorMessage && (
                        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center space-x-2">
                          <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                          <span>{errorMessage}</span>
                        </div>
                      )}

                      {/* Row 1: Your Name & Your Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name :"
                            className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-xs text-slate-800 transition-all bg-white"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Your Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email :"
                            className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-xs text-slate-800 transition-all bg-white"
                          />
                        </div>
                      </div>

                      {/* Row 2: Select Your Country & City */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Select Your Country <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="country"
                            required
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-xs text-slate-800 transition-all bg-white cursor-pointer"
                          >
                            <option value="">SELECT COUNTRY</option>
                            {countriesList.map((country) => (
                              <option key={country} value={country}>
                                {country}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            City <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="city"
                            required
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="City :"
                            className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-xs text-slate-800 transition-all bg-white"
                          />
                        </div>
                      </div>

                      {/* Row 3: Company Name & Mobile No */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Company Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company Name :"
                            className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-xs text-slate-800 transition-all bg-white"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Mobile No <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="mobile"
                            required
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="Mobile no :"
                            className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-xs text-slate-800 transition-all bg-white"
                          />
                        </div>
                      </div>

                      {/* Row 4: Message */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={3}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Message :"
                          className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-xs text-slate-800 transition-all resize-y bg-white"
                        />
                      </div>

                      {/* Row 5: Mandatory Notification Authorization Checkbox */}
                      <div className="pt-1">
                        <label className="flex items-start space-x-2.5 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            name="authorize"
                            required
                            checked={formData.authorize}
                            onChange={handleChange}
                            className="mt-0.5 w-4 h-4 text-primary rounded border-slate-300 focus:ring-primary/20 accent-primary cursor-pointer shrink-0"
                          />
                          <span className="text-[11px] sm:text-xs text-slate-600 leading-snug">
                            I Authorize Adcanopus to send notifications via SMS/RCS/Call/Email/Whatsapp.
                          </span>
                        </label>
                      </div>

                      {/* Row 6: Official Google reCAPTCHA v2 Component */}
                      {import.meta.env.VITE_RECAPTCHA_SITE_KEY ? (
                        <div className="pt-1">
                          <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                            onChange={handleRecaptchaChange}
                          />
                        </div>
                      ) : null}

                      {/* Row 7: Send Message Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto px-8 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-xs shadow-md shadow-primary/20 transition-all flex items-center justify-center space-x-2 disabled:opacity-60 cursor-pointer"
                        >
                          {isSubmitting ? (
                            <>
                              <RotateCw className="w-4 h-4 animate-spin" />
                              <span>Sending Message...</span>
                            </>
                          ) : (
                            <>
                              <span>Send Message</span>
                              <Send className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
                      </div>

                    </motion.form>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Global Locations Grid - Premium Redesigned Hub Cards */}
      <section className="py-14 sm:py-18 bg-slate-50/80 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-3.5 py-1 rounded-full">
              Worldwide Presence
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Strategic Operational Hubs
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Serving high-growth enterprises and partner networks across primary digital commerce corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                city: 'Bengaluru',
                badge: 'Global HQ',
                country: 'India',
                type: 'Corporate & Engineering HQ',
                address: '100ft Road, Indiranagar, Bengaluru, Karnataka 560038',
                phone: '+91-8045340300',
                email: 'bangalore@adcanopus.com',
                mapQuery: 'Adcanopus+Digital+Media+Bangalore',
              },
              {
                city: 'Gurugram',
                badge: 'Media Ops',
                country: 'India',
                type: 'Enterprise Media Operations Hub',
                address: 'DLF Cyber City, Phase 2, Sector 24, Gurugram, Haryana 122002',
                phone: '+91-8045340300',
                email: 'gurugram@adcanopus.com',
                mapQuery: 'DLF+Cyber+City+Phase+2+Gurugram',
              },
              {
                city: 'New York',
                badge: 'Client Desk',
                country: 'United States',
                type: 'International Client Desk',
                address: '5th Avenue, Midtown Manhattan, New York, NY 10018',
                phone: '+1 (212) 555-0199',
                email: 'usa@adcanopus.com',
                mapQuery: '5th+Avenue+Midtown+Manhattan+New+York',
              },
            ].map((hub, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-primary/50 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Animated Accent Strip */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hub Header */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <span className="text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                        {hub.badge}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        {hub.country}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {hub.city}
                    </h4>
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                      {hub.type}
                    </p>
                  </div>

                  {/* Address Container */}
                  <div className="flex items-start space-x-2.5 text-xs text-slate-600 bg-slate-50/80 p-3 rounded-2xl border border-slate-100 mt-2">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{hub.address}</span>
                  </div>
                </div>

                {/* Hub Footer Contacts */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <a
                    href={`tel:${hub.phone}`}
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-700 hover:text-primary transition-colors py-1.5 px-3 rounded-xl bg-slate-50 hover:bg-primary/10"
                  >
                    <Phone className="w-3.5 h-3.5 text-primary" />
                    <span>{hub.phone}</span>
                  </a>

                  <a
                    href={`https://maps.google.com/?q=${hub.mapQuery}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1 text-xs font-bold text-primary hover:text-primary-hover transition-colors py-1.5 px-3 rounded-xl hover:bg-primary/5"
                  >
                    <span>Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
