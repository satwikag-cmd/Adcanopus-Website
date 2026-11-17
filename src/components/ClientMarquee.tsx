import React from 'react';
import { motion } from 'framer-motion';
import { clientLogos } from '../data/companyData';

export const ClientMarquee: React.FC = () => {
  return (
    <section className="py-14 bg-brand-light border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-bold uppercase tracking-wider text-brand-muted mb-8"
        >
          Trusted by Industry Leaders & Enterprise Brands
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 }
            }
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
        >
          {clientLogos.map((client) => (
            <motion.div
              key={client.name}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
              }}
              whileHover={{ scale: 1.08 }}
              className="w-full flex items-center justify-center p-3 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={client.src}
                alt={client.name}
                className="max-h-10 max-w-[130px] w-auto h-auto object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
