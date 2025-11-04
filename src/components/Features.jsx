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
    <section id="features" className="relative py-24 sm:py-28 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
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
