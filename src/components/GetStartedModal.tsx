import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Sparkles, Shield, Send, ArrowRight, ArrowLeft } from 'lucide-react';
import { servicesData } from '../data/servicesData';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({
  isOpen,
  onClose,
  initialService
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [budgetTier, setBudgetTier] = useState('$5k - $15k / month');

  useEffect(() => {
    if (initialService) {
      setSelectedServices([initialService]);
      setStep(1);
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleService = (title: string) => {
    if (selectedServices.includes(title)) {
      setSelectedServices(selectedServices.filter(s => s !== title));
    } else {
      setSelectedServices([...selectedServices, title]);
    }
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (selectedServices.length === 0) {
        // Default to mobile marketing if none picked
        setSelectedServices(['Mobile Marketing']);
      }
      setStep(2);
    } else if (step === 2) {
      setStep(3); // Frontend-only confirmation state
    }
  };

  const handleReset = () => {
    setStep(1);
    setSelectedServices([]);
    setFullName('');
    setWorkEmail('');
    setCompanyName('');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-brand-navy/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 12 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-xl bg-white rounded-3xl shadow-premium border border-gray-100 p-6 sm:p-8 z-10 max-h-[92vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full text-gray-400 hover:text-brand-charcoal hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Step Indicator */}
          {step !== 3 && (
            <div className="flex items-center space-x-2 mb-6">
              <div className={`h-1.5 rounded-full flex-1 transition-all duration-300 ${step >= 1 ? 'bg-primary' : 'bg-gray-200'}`} />
              <div className={`h-1.5 rounded-full flex-1 transition-all duration-300 ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`} />
              <span className="text-[11px] font-bold text-gray-400 pl-2">Step {step} of 2</span>
            </div>
          )}

          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-6">
                <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Choose Services</span>
                </div>
                <h3 className="text-2xl font-extrabold text-brand-charcoal">
                  Which services do you want to scale?
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted mt-1">
                  Select one or more of our 8 core disciplines to include in your strategy proposal.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2.5 mb-6">
                {servicesData.map((svc) => {
                  const isChecked = selectedServices.includes(svc.title);
                  return (
                    <motion.button
                      type="button"
                      key={svc.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleService(svc.title)}
                      className={`text-left p-3 rounded-2xl border text-xs font-semibold transition-all flex items-center justify-between ${
                        isChecked
                          ? 'bg-primary/10 border-primary text-primary font-bold shadow-sm'
                          : 'bg-brand-light border-gray-200/80 text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <span className="truncate">{svc.title}</span>
                      {isChecked && <CheckCircle2 className="w-4 h-4 text-primary shrink-0 ml-1.5" />}
                    </motion.button>
                  );
                })}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleNextStep}
                className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-primary hover:bg-primary-hover shadow-clean transition-colors flex items-center justify-center space-x-2"
              >
                <span>Continue to Details ({selectedServices.length || 1} Selected)</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-6">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center space-x-1 text-xs font-bold text-gray-500 hover:text-primary mb-2 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Change Services</span>
                </button>
                <h3 className="text-2xl font-extrabold text-brand-charcoal">
                  Your Brand & Contact Info
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted mt-1">
                  We will tailor our performance plan specifically to your targets.
                </p>
              </div>

              <form onSubmit={handleNextStep} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-charcoal mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-charcoal mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-charcoal mb-1">Company / Brand Name</label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Acme Growth Inc."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-charcoal mb-1">Estimated Monthly Ad Spend</label>
                    <select
                      value={budgetTier}
                      onChange={(e) => setBudgetTier(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white"
                    >
                      <option>$2,000 - $5,000 / month</option>
                      <option>$5,000 - $15,000 / month</option>
                      <option>$15,000 - $50,000 / month</option>
                      <option>$50,000+ / month (Enterprise Tier)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-primary hover:bg-primary-hover shadow-clean transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Campaign Request</span>
                  </motion.button>
                </div>

                <p className="text-center text-[11px] text-brand-muted flex items-center justify-center">
                  <Shield className="w-3.5 h-3.5 text-brand-green mr-1" />
                  Frontend-Only Preview. Zero spam, zero backend exposure.
                </p>
              </form>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center py-6 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-brand-green/10 text-brand-green mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-brand-charcoal">
                Inquiry Confirmed, {fullName || 'Partner'}!
              </h3>
              <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
                Your request for{' '}
                <span className="font-bold text-brand-charcoal">
                  {selectedServices.join(', ')}
                </span>{' '}
                has been recorded in this frontend session.
              </p>
              <div className="p-4 rounded-2xl bg-brand-light text-left text-xs space-y-1.5 border border-gray-200/80 max-w-sm mx-auto">
                <p><span className="font-bold text-gray-500">Contact:</span> {fullName} ({workEmail || 'alex@company.com'})</p>
                <p><span className="font-bold text-gray-500">Company:</span> {companyName || 'Not specified'}</p>
                <p><span className="font-bold text-gray-500">Ad Budget Tier:</span> {budgetTier}</p>
              </div>
              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl font-bold text-sm bg-primary text-white hover:bg-primary-hover transition-colors"
                >
                  Close & Continue Browsing
                </motion.button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
