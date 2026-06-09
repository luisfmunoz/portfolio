import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-serif mb-6 px-2">About</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bento-card p-8 md:col-span-2 flex flex-col justify-center">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Operations-minded infrastructure & Modern Workplace leader with 25+ years across financial services, small business, and non-profit IT. Based in the DFW area, I am known for calm ownership, clear communication, and simplifying technology while improving security, reliability, and service performance. I translate complex technical challenges into practical solutions that align with business objectives.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
            <div className="rounded-[24px] p-6 flex flex-col items-center justify-center text-center shadow-sm bg-[#1e3a5f]">
              <span className="text-4xl font-serif text-white mb-2">25+</span>
              <span className="text-sm font-medium text-blue-200 uppercase tracking-wider">Years Experience</span>
            </div>
            <div className="rounded-[24px] p-6 flex flex-col items-center justify-center text-center shadow-sm bg-[#065f46]">
              <span className="text-4xl font-serif text-white mb-2">350+</span>
              <span className="text-sm font-medium text-emerald-200 uppercase tracking-wider">Users Supported</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
