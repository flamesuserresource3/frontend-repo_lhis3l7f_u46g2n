import { motion } from 'framer-motion';
import { Users, BarChart3, Calendar, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Unified Contacts',
    desc: 'All your leads, customers, and activity in one clean, blazing-fast view.',
  },
  {
    icon: BarChart3,
    title: 'Pipeline Intelligence',
    desc: 'Forecast with confidence using ML‑assisted win probabilities and trends.',
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    desc: 'Auto‑prioritized follow‑ups, calendar sync, and time‑zone awareness.',
  },
  {
    icon: Shield,
    title: 'Enterprise‑grade Security',
    desc: 'SSO, audit logs, and granular roles baked in from day one.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-28 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-semibold text-neutral-900 dark:text-white"
          >
            Everything you need to move deals forward
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-neutral-600 dark:text-neutral-300"
          >
            Designed to be minimal, fast, and delightful — with power when you need it.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/50 backdrop-blur p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-2xl" />
              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-md">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-neutral-900 dark:text-white text-lg">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated showcase panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mt-16 relative overflow-hidden rounded-3xl border border-neutral-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/50 backdrop-blur p-6 sm:p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-purple-500/10" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">Visual pipeline, at a glance</h3>
              <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-prose">
                Drag‑and‑drop deals across stages, spotlight priority accounts, and forecast revenue with
                confidence. Built for clarity and focus.
              </p>
              <div className="mt-6 space-y-3">
                {[60, 78, 42].map((pct, i) => (
                  <div key={i} className="">
                    <div className="flex items-center justify-between text-xs text-neutral-600 dark:text-neutral-400 mb-1">
                      <span>{['Qualification', 'Proposal', 'Negotiation'][i]}</span>
                      <span>{pct}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-neutral-200/70 dark:bg-neutral-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: pct + '%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.15 }}
                        className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                className="rounded-2xl border border-white/20 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-4 shadow-2xl"
              >
                <div className="grid grid-cols-3 gap-3">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-24 rounded-xl border border-neutral-200/70 dark:border-white/10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.05 * i }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 flex items-center justify-center gap-3"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-black text-white px-3 py-1 text-xs font-medium shadow">
            <Zap className="h-4 w-4" /> Lightning‑fast, privacy‑first
          </div>
        </motion.div>
      </div>
    </section>
  );
}
