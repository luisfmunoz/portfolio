import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    company: "Cain Watters and Associates",
    subtitle: "Financial Planning Firm — Frisco, TX",
    dates: "Apr 2005 – Nov 2025",
    accent: "border-l-[#0369a1]",
    badge: "bg-[#0369a1]",
    roles: [
      {
        role: "IT Director",
        period: "2024 – 2025",
        highlights: [
          "Migrated 20+ years of records from CCH Axcess to SharePoint for 350 staff; delivered 2,500+ annual efficiency hours.",
          "Migrated 350 users to RingCentral + Teams telephony; delivered 1,000+ annual efficiency hours.",
          "Standardized Windows endpoints with Intune + Autopilot; enforced Conditional Access and deployed Defender for Endpoint.",
          "Managed vendors, contracts, and budget; drove infrastructure roadmap and IT Steering Committee prioritization."
        ]
      },
      {
        role: "IT Manager",
        period: "2020 – 2024",
        highlights: [
          "Ran service desk operations and ticket workflow; ensured consistent triage and user updates.",
          "Delegated support and project work; coached staff on troubleshooting and secure configuration.",
          "Built a knowledge base and self-service guides to improve consistency and adoption."
        ]
      },
      {
        role: "Network, Systems & Security Administrator",
        period: "2005 – 2020",
        highlights: [
          "Administered Microsoft 365 and Entra ID for 300+ users including MFA and Conditional Access.",
          "Delivered Exchange migration and supporting infrastructure upgrades to improve reliability.",
          "Trained staff on Microsoft 365 and security practices to improve adoption and reduce incidents."
        ]
      }
    ]
  },
  {
    company: "Radio Advertising Bureau",
    subtitle: "Media Industry",
    dates: "1998 – 2005",
    accent: "border-l-[#065f46]",
    badge: "bg-[#065f46]",
    roles: [
      {
        role: "Director of IT",
        period: "1998 – 2005",
        highlights: [
          "Migrated all systems from Novell to Microsoft platform.",
          "Led infrastructure modernization across the organization."
        ]
      }
    ]
  },
  {
    company: "Special Computer Services",
    subtitle: "IT Consulting",
    dates: "1994 – 1998",
    accent: "border-l-[#7c3aed]",
    badge: "bg-[#7c3aed]",
    roles: [
      {
        role: "Network Engineer / Consultant",
        period: "1994 – 1998",
        highlights: [
          "Installed and supported small business networks across dental, CPA, construction, and financial services sectors.",
          "Provided hands-on network design, deployment, and ongoing support for diverse client base."
        ]
      }
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-serif mb-6 px-2">Work Experience</h2>
        <div className="grid grid-cols-1 gap-6">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className={`bento-card p-8 border-l-4 ${exp.accent}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground">{exp.company}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{exp.subtitle}</p>
                </div>
                <span className={`inline-block self-start px-3 py-1 rounded-full text-xs font-semibold text-white whitespace-nowrap ${exp.badge}`}>
                  {exp.dates}
                </span>
              </div>

              <div className="space-y-6">
                {exp.roles.map((r, rIdx) => (
                  <div key={rIdx}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-base font-semibold text-foreground/90">{r.role}</span>
                      <span className="text-xs text-muted-foreground border border-border px-2 py-0.5 rounded-full">{r.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {r.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-3">
                          <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${exp.badge}`}></span>
                          <span className="text-foreground/80 leading-relaxed text-sm">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
