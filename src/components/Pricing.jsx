import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    highlight: 'Perfect for solo founders',
    features: [
      'Up to 1,000 contacts',
      '1 pipeline & 3 stages',
      'Calendar & email sync',
      'Basic analytics',
    ],
    cta: 'Start free',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per user / month',
    highlight: 'Everything teams need',
    features: [
      'Unlimited contacts',
      'Multiple pipelines',
      'Advanced permissions',
      'Forecasting & insights',
      'Priority support',
    ],
    cta: 'Upgrade to Pro',
    featured: true,
  },
];

const faqs = [
  {
    q: 'Can I use FluxCRM for free?',
    a: 'Yes. Our Starter plan is free forever and includes generous limits to get you going.',
  },
  {
    q: 'Do you offer discounts?',
    a: 'Annual billing includes 2 months free. We also offer startup and nonprofit discounts on request.',
  },
  {
    q: 'How easy is migration?',
    a: 'Import CSVs from your current tool in minutes. Our team is happy to help with guided onboarding.',
  },
  {
    q: 'Is my data secure?',
    a: 'We use encryption in transit and at rest, SSO, role-based access, and regular audits.',
  },
];

export default function Pricing() {
  const [open, setOpen] = useState(0);

  return (
    <section id="pricing" className="relative py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-semibold text-neutral-900 dark:text-white"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-neutral-600 dark:text-neutral-300"
          >
            Start free. Upgrade when you’re growing — no contracts, cancel anytime.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className={`relative rounded-2xl border p-6 sm:p-8 backdrop-blur shadow-sm ${
                t.featured
                  ? 'border-indigo-400/40 bg-gradient-to-br from-indigo-500/10 to-purple-500/10'
                  : 'border-neutral-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/50'
              }`}
            >
              {t.featured && (
                <div className="absolute right-4 top-4 rounded-full bg-indigo-600 text-white text-xs font-semibold px-2 py-1 shadow">
                  Popular
                </div>
              )}
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{t.name}</h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{t.highlight}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-semibold text-neutral-900 dark:text-white">{t.price}</div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-300">{t.period}</div>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-200">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="#contact"
                  className={`inline-flex w-full justify-center items-center rounded-full px-5 py-3 font-semibold shadow ${
                    t.featured
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90'
                      : 'bg-white text-neutral-900 dark:bg-neutral-800 dark:text-white border border-neutral-200/70 dark:border-white/10 hover:bg-neutral-50 dark:hover:bg-neutral-800/80'
                  }`}
                >
                  {t.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-3xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold text-center text-neutral-900 dark:text-white"
          >
            Frequently asked questions
          </motion.h3>
          <div className="mt-8 divide-y divide-neutral-200/70 dark:divide-white/10 rounded-2xl border border-neutral-200/70 dark:border-white/10 overflow-hidden">
            {faqs.map((item, i) => (
              <div key={item.q} className="bg-white/70 dark:bg-neutral-900/50 backdrop-blur">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full text-left px-5 py-4 hover:bg-white/80 dark:hover:bg-neutral-900/60 transition flex items-center justify-between"
                >
                  <span className="font-medium text-neutral-900 dark:text-white">{item.q}</span>
                  <span className="ml-4 text-xl leading-none text-neutral-500">{open === i ? '−' : '+'}</span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 text-neutral-600 dark:text-neutral-300">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-20 relative overflow-hidden rounded-3xl border border-neutral-200/70 dark:border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white p-8 sm:p-12"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="text-2xl font-semibold">Ready to elevate your revenue ops?</h4>
              <p className="mt-2 text-white/80">Start free today and invite your team in minutes. No credit card required.</p>
            </div>
            <div className="flex md:justify-end">
              <a href="#" className="inline-flex items-center rounded-full bg-white text-neutral-900 px-6 py-3 font-semibold shadow hover:opacity-90">Create your workspace</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
