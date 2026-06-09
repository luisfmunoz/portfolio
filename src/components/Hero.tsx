import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="scroll-mt-32 pt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-[24px] p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center gap-10 bg-[#0B1B32] shadow-lg"
      >
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-medium border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Available for new opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-serif text-white tracking-tight leading-tight">
            Fernando Muñoz
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light">
            Infrastructure & Modern Workplace Leader.<br className="hidden md:block" />
            25+ years simplifying technology, improving security, and delivering reliable operations.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              className="rounded-full px-8 font-medium bg-white text-[#0B1B32] hover:bg-slate-100"
              onClick={() => scrollTo('contact')}
              data-testid="button-get-in-touch"
            >
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 font-medium border-white/30 text-white hover:bg-white/10 hover:text-white"
              data-testid="button-download-cv"
            >
              Download CV
            </Button>
          </div>
        </div>

        <div className="hidden md:flex w-48 h-48 lg:w-64 lg:h-64 rounded-full flex-shrink-0 bg-[#1a3054] border-4 border-white/10 shadow-lg items-center justify-center text-white/20 text-6xl font-serif">
          FM
        </div>
      </motion.div>
    </section>
  );
}
