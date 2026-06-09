import { motion } from 'framer-motion';

const BLOG_POSTS = [
  {
    title: "The Reality of Zero-Trust Security in Legacy Networks",
    date: "Oct 15, 2023",
    readTime: "8 min read",
    tag: "Security",
    tagColor: "bg-[#7f1d1d] text-white"
  },
  {
    title: "Infrastructure as Code: Moving Past the Hype",
    date: "Aug 02, 2023",
    readTime: "5 min read",
    tag: "DevOps",
    tagColor: "bg-[#065f46] text-white"
  },
  {
    title: "Why Cloud Repatriation is Becoming a Boardroom Discussion",
    date: "Jun 20, 2023",
    readTime: "6 min read",
    tag: "Cloud",
    tagColor: "bg-[#0369a1] text-white"
  }
];

export default function Blog() {
  return (
    <section className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-serif mb-6 px-2">Writing & Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, idx) => (
            <div key={idx} className="bento-card p-8 flex flex-col group cursor-pointer">
              <div className="flex items-center gap-3 mb-5">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${post.tagColor}`}>
                  {post.tag}
                </span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
                <span className="text-xs text-muted-foreground">· {post.readTime}</span>
              </div>
              <h3 className="text-lg font-serif font-medium text-foreground group-hover:text-primary transition-colors mb-6 flex-1">
                {post.title}
              </h3>
              <div className="pt-4 border-t border-border flex items-center text-sm font-semibold text-primary">
                Read Article
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
