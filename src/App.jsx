import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white selection:bg-indigo-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />

        {/* Minimal footer inline to keep 4 imported components total */}
        <footer id="contact" className="border-t border-neutral-200/70 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-300">© {new Date().getFullYear()} FluxCRM. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#features" className="hover:underline text-neutral-700 dark:text-neutral-200">Features</a>
              <a href="#pricing" className="hover:underline text-neutral-700 dark:text-neutral-200">Pricing</a>
              <a href="mailto:hello@example.com" className="hover:underline text-neutral-700 dark:text-neutral-200">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
