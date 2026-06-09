import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    company: "TechCorp Industries",
    role: "IT Director",
    dates: "2018 – Present",
    accent: "border-l-[#0369a1]",
    badge: "bg-[#0369a1]",
    highlights: [
      "Directed global IT operations across 12 offices supporting 4,500+ employees.",
      "Led a $5M cloud migration initiative, reducing on-prem data center footprint by 80%.",
      "Established a robust zero-trust security framework and achieved ISO 27001 compliance."
    ]
  },
  {
    company: "Global Networks Inc",
    role: "IT Manager",
    dates: "2012 – 2018",
    accent: "border-l-[#065f46]",
    badge: "bg-[#065f46]",
    highlights: [
      "Managed a team of 15 system administrators and helpdesk technicians.",
      "Overhauled legacy network infrastructure resulting in 99.99% uptime.",
      "Implemented automated deployment pipelines for internal enterprise applications."
    ]
  },
  {
    company: "DataSystems LLC",
    role: "Senior Network Admin",
    dates: "2006 – 2012",
    accent: "border-l-[#7c3aed]",
    badge: "bg-[#7c3aed]",
    highlights: [
      "Designed and maintained complex BGP/OSPF routing across multiple global sites.",
      "Deployed comprehensive network monitoring solutions that reduced time-to-resolution by 40%."
    ]
  },
  {
    company: "NetFirst Solutions",
    role: "Network Admin",
    dates: "1999 – 2006",
    accent: "border-l-[#1e3a5f]",
    badge: "bg-[#1e3a5f]",
    highlights: [
      "Managed Cisco routers, switches, and firewalls for local business clients.",
      "Provided 3rd level support for critical system outages."
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
              className={`bento-card p-8 flex flex-col md:flex-row gap-6 md:gap-12 border-l-4 ${exp.accent}`}
            >
              <div className="md:w-1/3 flex flex-col gap-3">
                <h3 className="text-xl font-serif font-semibold text-foreground">{exp.company}</h3>
                <p className="text-lg text-foreground/90 font-medium">{exp.role}</p>
                <span className={`inline-block self-start px-3 py-1 rounded-full text-xs font-semibold text-white ${exp.badge}`}>
                  {exp.dates}
                </span>
              </div>
              <div className="md:w-2/3">
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3">
                      <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${exp.badge}`}></span>
                      <span className="text-foreground/80 leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
