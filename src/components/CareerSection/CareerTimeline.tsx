import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Briefcase, Award, Layers, Globe } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "2022 – 2026",
      title: "B.E. — Computer Science and Engineering",
      subtitle: "Nelliandavar Institute of Technology",
      description:
        "Pursuing Bachelor of Engineering with comprehensive grounding in computer science principles, machine learning, deep learning with TensorFlow, and predictive modeling.",
      icon: <Briefcase className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "September 2026",
      title: "Generative AI Certification",
      subtitle: "Tech Panda — T Nagar, Chennai",
      description:
        "Completed an intensive 4-month program mastering NLP, Transformers, generative AI, large language models (LLMs), prompt engineering, RAG (FAISS), and fine-tuning.",
      icon: <Award className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2024 – Present",
      title: "Generative AI Project Development",
      subtitle: "Self-Initiated AI Implementations",
      description:
        "Engineered AI-driven applications including a RAG document Q&A chatbot with FAISS, an LLM resume screener & job-matcher, and multi-step LangChain autonomous agents with Streamlit interfaces.",
      icon: <Globe className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2022 – 2024",
      title: "Programming & Data Analysis Foundations",
      subtitle: "Technical Skill Building",
      description:
        "Built strong foundations in Python programming, data preprocessing, NumPy, and Pandas through hands-on practice in Jupyter Notebook, Google Colab, and VS Code.",
      icon: <Layers className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Career Journey"
        subtitle="Academic milestones, generative AI certifications, and hands-on project development"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
