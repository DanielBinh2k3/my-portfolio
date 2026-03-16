export const links = {
  contactEmail: "truongnguyengiabinh@gmail.com",
  sourceCode: "https://github.com/truongnguyengiabinh",
};

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
] as const;

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "/assets/review1.png",
    review:
      "Working with Gia Binh was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any AI & web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "/assets/review2.png",
    review:
      "Gia Binh's expertise in AI engineering is truly impressive. He delivered a robust and scalable solution for our platform, and our automation capabilities have significantly improved since the launch. He's a true professional!",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech",
    img: "/assets/review3.png",
    review:
      "I can't say enough good things about Gia Binh. He was able to take our complex AI project requirements and turn them into a seamless, functional system. His problem-solving abilities and research mindset are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "/assets/review4.png",
    review:
      "Gia Binh was a pleasure to work with. He understood our requirements perfectly and delivered an AI solution that exceeded our expectations. His skills in both LLM engineering and full-stack dev are top-notch.",
  },
] as const;

export const myProjects = [
  {
    title: "Vietnamese Legal Assistant Chatbot (Capstone)",
    desc: "An AI-powered legal chatbot for Vietnamese law, featuring a custom Legal Benchmark based on Bloom's taxonomy, instruction-based fine-tuning with LoRA on Qwen-7B-Instruct, and a multi-agent consultation framework for structured legal reasoning.",
    subdesc:
      "Built with a RAG framework, LoRA fine-tuning, and a multi-agent system (legal researcher + legal editor roles). Featured on FPT Education News.",
    href: "https://www.danieltruong-ai.com",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/python_new.svg",
      },
      {
        id: 2,
        name: "LLM / LoRA",
        path: "/assets/huggingface.svg",
      },
      {
        id: 3,
        name: "RAG",
        path: "/assets/langchain_new.svg",
      },
      {
        id: 4,
        name: "Multi-Agent",
        path: "/assets/streamlit.svg",
      },
    ],
  },
  {
    title: "AI Text Detection via MambaFormer & Adversarial Learning",
    desc: "Research project presented at Asia-Pacific Workshop on Intelligent Engineering (APWIE). Enhanced AI-generated text detection by fusing the Mamba model with Attention mechanisms and integrating adversarial learning to improve cross-domain accuracy.",
    subdesc:
      "Compared MambaFormer with RADAR, DetectGPT, and Fast-DetectGPT. Received Excellent Presentation Award at APWIE.",
    href: "https://www.danieltruong-ai.com",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/python_new.svg",
      },
      {
        id: 2,
        name: "MambaFormer",
        path: "/assets/pytorch.svg",
      },
      {
        id: 3,
        name: "Adversarial Learning",
        path: "/assets/huggingface.svg",
      },
      {
        id: 4,
        name: "NLP",
        path: "/assets/openai.png",
      },
    ],
  },
  {
    title: "Web Auto Grading - IELTS Essay Scoring",
    desc: "A web-based platform for automatic IELTS essay scoring leveraging AI. Deployed ML models (LightGBM, XGBoost) with embedding models for contextual understanding, and a Self-RAG approach with Llama 3 to generate detailed writing feedback.",
    subdesc:
      "Presented at FPTU RiseUP Student Showcase Summer 2024. Built with FastAPI, React.js, and deployed on Google Cloud Service.",
    href: "https://www.danieltruong-ai.com",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "FastAPI",
        path: "/assets/fastapi_new.svg",
      },
      {
        id: 2,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 3,
        name: "LightGBM / Llama 3",
        path: "/assets/meta.svg",
      },
      {
        id: 4,
        name: "Google Cloud",
        path: "/assets/googlecloud.svg",
      },
    ],
  },
  {
    title: "Sales Bot Agent for Social Platforms",
    desc: "Led the development of an AI Sales Bot Agent for Facebook and Instagram at Pervasel. Designed the end-to-end sales workflow, optimized LLM system prompts, and integrated product search and ordering tools for automated customer interactions.",
    subdesc:
      "Built with LLM-based agents, integrating product catalog APIs and social platform webhooks for real-time automated sales conversations.",
    href: "https://www.danieltruong-ai.com",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/python_new.svg",
      },
      {
        id: 2,
        name: "LLM Agents",
        path: "/assets/openai.png",
      },
      {
        id: 3,
        name: "Facebook API",
        path: "/assets/meta.svg",
      },
      {
        id: 4,
        name: "Instagram API",
        path: "/assets/instagram_new.svg",
      },
    ],
  },
  {
    title: "TikTok Policy Chatbot",
    desc: "Developed a TikTok Policy Chatbot at Pervasel leveraging LLMs and Qdrant vector database to automate policy compliance checks, enabling fast and accurate answers to policy-related queries for content creators and operations teams.",
    subdesc:
      "Built with LLMs and Qdrant for semantic search over TikTok policy documents, with a RAG pipeline for context-aware compliance responses.",
    href: "https://www.danieltruong-ai.com",
    texture: "/textures/project/project5.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/python_new.svg",
      },
      {
        id: 2,
        name: "LLM",
        path: "/assets/openai.png",
      },
      {
        id: 3,
        name: "Qdrant",
        path: "/assets/langchain_new.svg",
      },
      {
        id: 4,
        name: "RAG",
        path: "/assets/docker.png",
      },
    ],
  },
  {
    title: "Real Estate Appraisal Data Pipeline",
    desc: "Contributed to the Real Estate Appraisal project at Pervasel by significantly enhancing data processing capabilities. Designed data extraction and refinement models crucial for feeding real estate valuation systems.",
    subdesc:
      "An intelligent pipeline engineered to elevate the scale and accuracy of data processing structures used in real-world ML property appraisal systems.",
    href: "https://www.danieltruong-ai.com",
    texture: "/textures/project/project6.mp4",
    logo: "/assets/project-logo6.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/python_new.svg",
      },
      {
        id: 2,
        name: "Data Processing",
        path: "/assets/docker.png",
      },
      {
        id: 3,
        name: "Machine Learning",
        path: "/assets/openai.png",
      },
      {
        id: 4,
        name: "Machine Learning",
        path: "/assets/fastapi_new.svg",
      }
    ],
  },
] as const;

export const workExperiences = [
  {
    id: 1,
    name: "Pervasel – Karve Meilleur",
    pos: "AI Engineer",
    duration: "Dec 2024 - Present",
    title:
      "Led development of a Sales Bot Agent for Facebook & Instagram — designed the full sales workflow, optimized LLM system prompts, and integrated product search & ordering tools. Also built a TikTok Policy Chatbot using LLMs + Qdrant vector database to automate compliance checks.",
    icon: "/assets/docker.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "National Chung Cheng University",
    pos: "Research Assistant · TEEP Program",
    duration: "Jun 2024 - Dec 2024",
    title:
      "Conducted research on AI-generated text detection by fusing the MambaFormer model with adversarial learning. Received the Excellent Presentation Award at the Asia-Pacific Workshop on Intelligent Engineering (APWIE).",
    icon: "/assets/research.png",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Techcombank",
    pos: "Data Governance Intern",
    duration: "Jul 2023 - Dec 2023",
    title:
      "Collaborated with the Metadata Team to label internal banking rules on the Collibra platform. Automated the data-labeling workflow with custom scripts, significantly reducing manual effort and improving team efficiency.",
    icon: "/assets/notion.svg",
    animation: "salute",
  },
  {
    id: 4,
    name: "Zinza Company",
    pos: "Python Developer Intern",
    duration: "Mar 2023 - Jul 2023",
    title:
      "Contributed to a house-management web platform using React.js and Django. Streamlined the development pipeline by working with Docker and GitLab CI/CD, gaining hands-on experience in full-stack delivery.",
    icon: "/assets/react.svg",
    animation: "idle",
  },
] as const;

export const socialLinks = [
  {
    name: "GitHub",
    icon: "/assets/github.svg",
    url: "https://github.com/truongnguyengiabinh",
  },
  {
    name: "LinkedIn",
    icon: "/assets/twitter.svg",
    url: "https://www.linkedin.com/in/truongnguyengiabinh/",
  },
  {
    name: "Instagram",
    icon: "/assets/instagram.svg",
    url: "https://instagram.com",
  },
] as const;
