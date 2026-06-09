import { motion } from 'framer-motion';

const ACHIEVEMENTS = [
  { text: "Delivered 2,500+ annual efficiency hours via SharePoint modernization for 350 staff.", color: "bg-[#0369a1]" },
  { text: "Delivered 1,000+ annual efficiency hours through unified communications migration.", color: "bg-[#065f46]" },
  { text: "20+ years of records migrated to SharePoint with zero data loss.", color: "bg-[#7c3aed]" },
  { text: "Built a knowledge base and self-service guides adopted by 350+ staff.", color: "bg-[#1e3a5f]" },
  { text: "Standardized zero-touch endpoint provisioning across the entire organization.", color: "bg-[#7f1d1d]" },
  { text: "30 years of IT career spanning financial services, media, and consulting sectors.", color: "bg-[#312e81]" },
];

export default function Achievements() {
  return (
    <section className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-serif mb-6 px-2">Key Achievements</h2>
        <div className="rounded-[24px] overflow-hidden shadow-sm border border-card-border">
          <div className="bg-[#0B1B32] px-8 py-5">
            <h3 className="text-xl font-serif text-white">Career Milestones</h3>
          </div>
          <div className="bg-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ACHIEVEMENTS.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07, duration: 0.4 }}
                  className={`${achievement.color} rounded-xl p-5 hover:-translate-y-1 hover:shadow-md transition-all duration-300`}
                >
                  <p className="text-sm font-medium text-white leading-relaxed">{achievement.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
