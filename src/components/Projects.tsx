import { motion } from 'framer-motion';

const PROJECTS = [
  {
    name: "Global Cloud Migration",
    description: "Architected and led the migration of 500+ legacy VMs to AWS and Azure, employing a hybrid-cloud strategy that minimized downtime and enhanced disaster recovery capabilities.",
    tags: ["AWS", "Azure", "Terraform", "VMware"],
    metric: "40% Cost Reduction",
    accentBg: "bg-[#0369a1]",
    tagColor: "bg-sky-100 text-sky-900 dark:bg-sky-900 dark:text-sky-100"
  },
  {
    name: "Zero Trust Security Implementation",
    description: "Re-engineered the enterprise security posture from perimeter-based to zero-trust. Deployed advanced IAM, MFA, and continuous monitoring across all endpoints globally.",
    tags: ["Okta", "CrowdStrike", "Palo Alto"],
    metric: "Zero Breaches in 3 Yrs",
    accentBg: "bg-[#7f1d1d]",
    tagColor: "bg-red-100 text-red-900 dark:bg-red-900 dark:text-red-100"
  },
  {
    name: "Automated Provisioning Pipeline",
    description: "Developed a comprehensive CI/CD pipeline for infrastructure using infrastructure-as-code principles, allowing the DevOps team to deploy environments in minutes instead of days.",
    tags: ["Ansible", "Jenkins", "Docker"],
    metric: "95% Faster Deployments",
    accentBg: "bg-[#065f46]",
    tagColor: "bg-emerald-100 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-100"
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
