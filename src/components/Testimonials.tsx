import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    quote: "Fernando has a rare ability to translate complex technical challenges into clear, actionable solutions. His calm ownership during critical incidents gave our entire leadership team confidence.",
    name: "Sarah Mitchell",
    role: "Managing Partner",
    company: "Cain Watters and Associates",
    avatarBg: "bg-[#0369a1]"
  },
  {
    quote: "The SharePoint migration Fernando led was seamless. Thousands of records moved without a single disruption to our advisors. His communication throughout the project was exceptional.",
    name: "David Reyes",
    role: "Operations Director",
    company: "Cain Watters and Associates",
    avatarBg: "bg-[#065f46]"
  },
  {
    quote: "Fernando built a service desk that actually worked — clear intake, fast resolution, and documentation that stuck. He set a standard that the team still follows.",
    name: "Karen Osei",
    role: "VP of Finance",
    company: "Radio Advertising Bureau",
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
