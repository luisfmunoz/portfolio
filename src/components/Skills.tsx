import { motion } from 'framer-motion';

const SKILLS = [
  {
    category: "Infrastructure",
    color: "bg-[#1e3a5f]",
    barColor: "bg-[#1e3a5f]",
    trackColor: "bg-blue-100 dark:bg-blue-950",
    proficiency: 98,
    items: [
      { name: "Windows Server & Active Directory", level: 98 },
      { name: "Linux (RHEL, Ubuntu)", level: 95 },
      { name: "VMware vSphere / Hyper-V", level: 92 },
      { name: "Storage & Backup Systems", level: 90 },
    ]
  },
  {
    category: "Networking",
    color: "bg-[#312e81]",
    barColor: "bg-[#312e81]",
    trackColor: "bg-indigo-100 dark:bg-indigo-950",
    proficiency: 96,
    items: [
      { name: "Cisco Routing & Switching", level: 97 },
      { name: "BGP / OSPF", level: 94 },
      { name: "Firewalls (Palo Alto, Fortinet)", level: 93 },
      { name: "VPNs & Load Balancing", level: 91 },
    ]
  },
  {
    category: "Security",
    color: "bg-[#7f1d1d]",
    barColor: "bg-[#7f1d1d]",
    trackColor: "bg-red-100 dark:bg-red-950",
    proficiency: 93,
    items: [
      { name: "Zero Trust Architecture", level: 93 },
      { name: "Endpoint Protection", level: 95 },
      { name: "SIEM / SOC Operations", level: 88 },
      { name: "Identity & Access Management", level: 92 },
    ]
  },
  {
    category: "Cloud & DevOps",
    color: "bg-[#0369a1]",
    barColor: "bg-[#0369a1]",
    trackColor: "bg-sky-100 dark:bg-sky-950",
    proficiency: 89,
    items: [
      { name: "AWS & Azure", level: 90 },
      { name: "Terraform / IaC", level: 87 },
      { name: "Docker & Kubernetes", level: 85 },
      { name: "CI/CD Pipelines", level: 88 },
    ]
  },
  {
    category: "Leadership",
    color: "bg-[#065f46]",
    barColor: "bg-[#065f46]",
    trackColor: "bg-emerald-100 dark:bg-emerald-950",
    proficiency: 97,
    items: [
      { name: "IT Strategy & Roadmapping", level: 98 },
      { name: "Vendor & Budget Management", level: 96 },
      { name: "Team Mentorship", level: 97 },
      { name: "Agile & ITIL Frameworks", level: 94 },
    ]
  }
];

function SkillBar({ name, level, barColor, trackColor, delay }: {
  name: string;
  level: number;
  barColor: string;
  trackColor: string;
  delay: number;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground/80">{name}</span>
        <motion.span
          className="text-xs font-semibold text-foreground/60 tabular-nums"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3, duration: 0.3 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className={`h-1.5 rounded-full ${trackColor} overflow-hidden`}>
        <motion.div
          className={`h-full rounded-full ${barColor}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-serif mb-6 px-2">Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skillGroup, idx) => (
            <div
              key={skillGroup.category}
              data-testid={`card-skill-${skillGroup.category.toLowerCase().replace(/\s+/g, '-')}`}
              className={`rounded-[24px] overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-card-border ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className={`${skillGroup.color} px-8 py-5 flex items-center justify-between`}>
                <h3 className="text-xl font-serif text-white">{skillGroup.category}</h3>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-1.5 rounded-full bg-white/20 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-white"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skillGroup.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                  </div>
                  <span className="text-white/80 text-xs font-semibold tabular-nums">{skillGroup.proficiency}%</span>
                </div>
              </div>

              <div className="bg-card p-8 space-y-5">
                {skillGroup.items.map((item, itemIdx) => (
                  <SkillBar
                    key={item.name}
                    name={item.name}
                    level={item.level}
                    barColor={skillGroup.barColor}
                    trackColor={skillGroup.trackColor}
                    delay={0.1 + itemIdx * 0.08}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
