import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-16 flex items-center">
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
        <div className="md:col-span-6" />
      </div>
    </section>
  );
}
