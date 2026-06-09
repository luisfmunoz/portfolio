import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    quote: "Alex is the rare IT leader who understands that technology exists to serve the business, not the other way around. He transformed our operations completely.",
    name: "Sarah Jenkins",
    role: "CEO",
    company: "TechCorp Industries",
    avatarBg: "bg-[#0369a1]"
  },
  {
    quote: "I've worked with many infrastructure architects, but none with Alex's level of precision. When he says a system is robust, you can bet the company on it.",
    name: "Michael Chen",
    role: "VP of Engineering",
    company: "Global Networks Inc",
    avatarBg: "bg-[#065f46]"
  },
  {
    quote: "During our critical security overhaul, Alex brought a calm, authoritative presence. He led the team through complex migrations without a single major outage.",
    name: "Elena Rodriguez",
    role: "Chief Information Security Officer",
    company: "DataSystems LLC",
    avatarBg: "bg-[#7c3aed]"
  }
];

export default function Testimonials() {
  return (
    <section className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-serif mb-6 px-2">Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div key={idx} className="bento-card p-8 flex flex-col">
              <p className="text-foreground/80 italic leading-relaxed mb-8 flex-1">
                "{testimonial.quote}"
              </p>
              <div className="mt-auto flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${testimonial.avatarBg} flex items-center justify-center text-white font-serif font-bold text-lg`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
