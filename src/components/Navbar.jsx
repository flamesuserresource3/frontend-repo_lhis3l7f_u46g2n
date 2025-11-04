import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/60 dark:bg-neutral-900/60 border-b border-white/20 dark:border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <a href="#" className="inline-flex items-center gap-2">
          <Rocket className="h-6 w-6 text-indigo-600" />
          <span className="font-semibold text-neutral-900 dark:text-white">FluxCRM</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#pricing"
            className="inline-flex items-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-semibold shadow-lg shadow-neutral-900/10 hover:shadow-neutral-900/20 transition-colors"
          >
            Start free
          </a>
        </div>
        <button
          aria-label="Open menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-white/20 dark:border-white/10"
          >
            <div className="px-4 sm:px-6 lg:px-8 py-4 space-y-2 bg-white/80 dark:bg-neutral-900/80 backdrop-blur">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="block text-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 font-semibold shadow"
              >
                Start free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
