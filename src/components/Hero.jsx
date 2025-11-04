import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[120vh] pt-16 flex items-center">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white dark:from-neutral-950/70 dark:via-neutral-950/40 dark:to-neutral-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/50 px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-300 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Next-gen CRM for modern teams
            </span>
            <h1 className="font-semibold text-4xl sm:text-5xl lg:text-6xl leading-tight text-neutral-900 dark:text-white">
              Close more deals with a glass‑morphic, 3D‑powered CRM
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-xl">
              Visual pipelines, real‑time insights, and delightful interactions. Built for speed, designed for focus.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#pricing"
                className="inline-flex justify-center items-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-6 py-3 font-semibold shadow-lg shadow-neutral-900/10 hover:shadow-neutral-900/20 transition-transform hover:-translate-y-0.5"
              >
                Get started — it’s free
              </a>
              <a
                href="#features"
                className="inline-flex justify-center items-center rounded-full border border-neutral-300/70 dark:border-white/20 bg-white/70 dark:bg-neutral-900/50 backdrop-blur px-6 py-3 font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-white/90 dark:hover:bg-neutral-900"
              >
                Explore features
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="text-sm text-neutral-600 dark:text-neutral-300">
                <span className="font-semibold">4,000+ teams</span> ship faster with FluxCRM
              </div>
              <div className="flex -space-x-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="h-8 w-8 rounded-full border-2 border-white dark:border-neutral-900 bg-gradient-to-br from-indigo-500 to-purple-500" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating stat cards */}
        <div className="md:col-span-6 relative h-[420px]">
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -2 }}
            animate={{ opacity: 1, y: [0, -12, 0], rotate: -2 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-6 top-10 w-64 rounded-2xl border border-white/30 bg-white/60 dark:bg-neutral-900/60 backdrop-blur shadow-xl p-5"
          >
            <p className="text-xs uppercase tracking-wide text-neutral-600 dark:text-neutral-300">Pipeline value</p>
            <p className="mt-1 text-3xl font-semibold">$248,900</p>
            <div className="mt-4 h-2 w-full rounded-full bg-neutral-200/70 dark:bg-neutral-800">
              <motion.div
                initial={{ width: '20%' }}
                animate={{ width: ['20%', '78%', '62%', '85%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, rotate: 3 }}
            animate={{ opacity: 1, y: [-6, 10, -6], rotate: 3 }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-6 bottom-6 w-72 rounded-2xl border border-white/30 bg-white/60 dark:bg-neutral-900/60 backdrop-blur shadow-xl p-5"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-wide text-neutral-600 dark:text-neutral-300">Win rate</p>
              <span className="text-xs text-emerald-600 dark:text-emerald-400">+12%</span>
            </div>
            <p className="mt-1 text-3xl font-semibold">58%</p>
            <div className="mt-3 grid grid-cols-5 gap-1">
              {Array.from({ length: 15 }).map((_, i) => (
                <motion.span
                  key={i}
                  className={`h-8 rounded-md ${i % 5 === 0 ? 'col-span-2' : ''} bg-gradient-to-b from-indigo-500/70 to-purple-500/70`}
                  initial={{ scaleY: 0.6, opacity: 0.5 }}
                  animate={{ scaleY: [0.6, 1, 0.7, 0.9, 0.6], opacity: [0.5, 1, 0.7, 0.9, 0.5] }}
                  transition={{ duration: 3 + (i % 5) * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Logo marquee */}
      <div className="relative z-10 mt-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">Trusted by modern teams</p>
          <div className="mt-6 overflow-hidden">
            <motion.div
              className="flex gap-12 whitespace-nowrap"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
            >
              {['NovaBank', 'PixelOps', 'Astra Labs', 'Loopify', 'Brightspace', 'Helio', 'CloudBit', 'Northwind'].map((b, i) => (
                <span key={b + i} className="text-neutral-700 dark:text-neutral-200/90 text-sm sm:text-base font-medium opacity-70">{b}</span>
              ))}
              {['NovaBank', 'PixelOps', 'Astra Labs', 'Loopify', 'Brightspace', 'Helio', 'CloudBit', 'Northwind'].map((b, i) => (
                <span key={b + 'dup' + i} className="text-neutral-700 dark:text-neutral-200/90 text-sm sm:text-base font-medium opacity-70">{b}</span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
