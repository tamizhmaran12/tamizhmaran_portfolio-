import { motion } from "framer-motion";
import { Code2, Sparkles, GraduationCap, Brain } from "lucide-react";

const stats = [
  { icon: <GraduationCap className="w-6 h-6" />, label: "Academic Journey", value: "2022-26" },
  { icon: <Code2 className="w-6 h-6" />, label: "Core AI Projects", value: "3+" },
  { icon: <Sparkles className="w-6 h-6" />, label: "GenAI Certification", value: "Tech Panda" },
  { icon: <Brain className="w-6 h-6" />, label: "Primary Focus", value: "LLMs & RAG" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        className="flex flex-col md:flex-row gap-16 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Passionate about <span className="text-gradient-primary">Generative AI</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Aspiring Generative AI Engineer with a strong foundation in NLP, large language models (LLMs), 
              retrieval-augmented generation, and prompt engineering. Skilled in Python, TensorFlow, and 
              LangChain, with hands-on exposure to building AI-driven applications through self-initiated 
              projects. Seeking an entry-level opportunity to apply and grow these skills in a real-world 
              generative AI environment while continuously learning emerging tools and techniques.
            </p>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-4 w-full">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="glass-panel p-6 rounded-2xl border border-foreground/10 hover:border-primary/50 transition-colors group relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
              <div className="text-primary mb-4 p-3 bg-primary/10 w-max rounded-xl">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-1">{stat.value}</h3>
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

