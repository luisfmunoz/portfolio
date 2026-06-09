import { motion } from 'framer-motion';

const CERTIFICATIONS = [
  { name: "Cisco Certified Network Associate (CCNA)", color: "bg-[#0369a1]" },
  { name: "Microsoft Certified Solutions Expert (MCSE)", color: "bg-[#1e3a5f]" },
  { name: "CompTIA Security+", color: "bg-[#7f1d1d]" },
  { name: "ITIL v4 Foundation", color: "bg-[#065f46]" },
  { name: "AWS Certified Solutions Architect – Professional", color: "bg-[#7c3aed]" },
];

const ACHIEVEMENTS = [
  { text: "Led $2M infrastructure overhaul on time and under budget.", color: "bg-[#0369a1]" },
  { text: "Built and maintained 99.99% uptime SLA across 5 global data centers.", color: "bg-[#065f46]" },
  { text: "Mentored 12 junior engineers into senior roles.", color: "bg-[#7c3aed]" },
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
        <h2 className="text-3xl font-serif mb-6 px-2">Achievements & Certifications</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bento-card overflow-hidden lg:col-span-2">
            <div className="bg-[#0B1B32] px-8 py-5">
              <h3 className="text-xl font-serif text-white">Key Milestones</h3>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ACHIEVEMENTS.map((achievement, idx) => (
                  <div key={idx} className={`${achievement.color} rounded-xl p-5`}>
                    <p className="text-sm font-medium text-white leading-relaxed">{achievement.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bento-card p-8">
            <h3 className="text-xl font-serif mb-6 text-foreground">Certifications</h3>
            <ul className="space-y-3">
              {CERTIFICATIONS.map((cert, idx) => (
                <li key={idx} className="flex items-center gap-3 group">
                  <div className={`w-8 h-8 rounded-lg ${cert.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-foreground/90">{cert.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
