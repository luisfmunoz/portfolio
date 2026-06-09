import { motion } from 'framer-motion';

const PROJECTS = [
  {
    name: "SharePoint Document Migration",
    description: "Migrated 20+ years of records from CCH Axcess to SharePoint for 350 staff at Cain Watters and Associates, reducing RDP dependency and transforming document access and collaboration.",
    tags: ["SharePoint", "Microsoft 365", "Entra ID", "Change Management"],
    metric: "2,500+ Efficiency Hrs/yr",
    accentBg: "bg-[#0369a1]",
    tagColor: "bg-sky-100 text-sky-900 dark:bg-sky-900 dark:text-sky-100"
  },
  {
    name: "Unified Communications Rollout",
    description: "Led the migration of 350 users from legacy telephony to RingCentral + Microsoft Teams, delivering a fully integrated unified communications platform with minimal disruption.",
    tags: ["Teams", "RingCentral", "Project Management", "Training"],
    metric: "1,000+ Efficiency Hrs/yr",
    accentBg: "bg-[#065f46]",
    tagColor: "bg-emerald-100 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-100"
  },
  {
    name: "Modern Endpoint Management",
    description: "Standardized Windows endpoints enterprise-wide using Microsoft Intune and Autopilot. Enforced Conditional Access policies and deployed Defender for Endpoint across all devices.",
    tags: ["Intune", "Autopilot", "Defender", "Conditional Access"],
    metric: "Zero-Touch Provisioning",
    accentBg: "bg-[#312e81]",
    tagColor: "bg-indigo-100 text-indigo-900 dark:bg-indigo-900 dark:text-indigo-100"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-serif mb-6 px-2">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="rounded-[24px] overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-card-border flex flex-col">
              <div className={`${project.accentBg} px-8 py-5`}>
                <h3 className="text-xl font-serif font-semibold text-white">{project.name}</h3>
              </div>
              <div className="bg-card p-8 flex flex-col flex-1">
                <p className="text-foreground/80 text-sm leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className={`text-xs font-medium px-2 py-1 rounded-md ${project.tagColor}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-6 border-t border-border mt-auto">
                  <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Outcome</span>
                  <p className="text-2xl font-serif mt-1 text-foreground">{project.metric}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
