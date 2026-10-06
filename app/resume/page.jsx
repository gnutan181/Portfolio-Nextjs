"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const experience = [
  { company: "Waplia Digital Solutions", position: "Senior Node.js Developer", duration: "December 2025 – May 2026", description: "Built Node.js and TypeScript microservices for a multi-tenant mobility platform, including geospatial driver matching, real-time Socket.IO workflows, Redis caching and Firebase integrations. Improved driver-matching latency by approximately 30%." },
  { company: "Corhaven Technologies", position: "Full-Stack Developer", duration: "June 2024 – November 2025", description: "Developed fintech workflows covering lending, insurance, payments, document processing and administration using React, Node.js, Express, MongoDB, Redis, AWS and Nginx. Improved API response time by approximately 40%." },
];
const skills = [
  { title: "GenAI", description: "Python, FastAPI, LangChain, LangGraph, RAG, MCP, tool calling, multi-agent systems, prompt engineering, structured outputs and Pydantic." },
  { title: "Retrieval and Evaluation", description: "Pinecone, Qdrant, FAISS, Chroma, BM25, RRF, Jina reranking, RAGAS, DeepEval, LangSmith and Guardrails AI." },
  { title: "Backend", description: "Node.js, TypeScript, Express.js, REST APIs, WebSockets, Redis, PostgreSQL, MongoDB and Supabase." },
  { title: "Frontend and Cloud", description: "React, Next.js, Tailwind CSS, Docker, AWS, Git, CI/CD and Nginx." },
];
const education = [
  { institution: "Croma Campus Pvt. Ltd.", degree: "MERN Stack Development", duration: "2023" },
  { institution: "Jaipur Engineering College and Research Centre", degree: "B.Tech in Electrical Engineering", duration: "2021" },
];
export default function Resume() {
  return (
    <section className="min-h-[80vh] px-4 py-12">
      <div className="container mx-auto max-w-[1200px]">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-10 xl:gap-[60px]">
          <TabsList className="flex flex-col w-full xl:w-[280px] shrink-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="flex-1 min-w-0">
            <TabsContent value="experience" className="space-y-8">
              <h2 className="text-4xl font-bold">Experience</h2>
              {experience.map((item) => (
                <article key={item.company} className="bg-[#232329] p-6 md:p-8 rounded-xl space-y-3">
                  <p className="text-accent">{item.duration}</p>
                  <h3 className="text-xl font-semibold">{item.position} | {item.company}</h3>
                  <p className="text-white/70">{item.description}</p>
                </article>
              ))}
            </TabsContent>
            <TabsContent value="education" className="space-y-8">
              <h2 className="text-4xl font-bold">Education</h2>
              {education.map((item) => (
                <article key={item.institution} className="bg-[#232329] p-6 md:p-8 rounded-xl space-y-3">
                  <p className="text-accent">{item.duration}</p>
                  <h3 className="text-xl font-semibold">{item.degree}</h3>
                  <p className="text-white/70">{item.institution}</p>
                </article>
              ))}
            </TabsContent>
            <TabsContent value="skills" className="space-y-8">
              <h2 className="text-4xl font-bold">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((category) => (
                  <article key={category.title} className="bg-[#232329] p-6 rounded-xl space-y-3">
                    <h3 className="text-accent text-xl font-semibold">{category.title}</h3>
                    <p className="text-white/70">{category.description}</p>
                  </article>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="about" className="space-y-6">
              <h2 className="text-4xl font-bold">About Me</h2>
              <p className="text-white/70">I’m a software engineer focused on building practical GenAI and agentic applications. My backend experience helps me treat retrieval quality, orchestration, validation, security and observability as core engineering requirements.</p>
              <p className="text-white/70">I’m currently open to GenAI Engineer, Agentic AI Engineer, Applied AI Engineer, LLM Engineer and AI Backend Engineer opportunities.</p>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {[["Name", "Nutan Gupta"], ["Phone", "+91-8107748701"], ["Email", "gnutan181@gmail.com"], ["Experience", "2+ Years"], ["Freelance", "Available"], ["Languages", "English, Hindi"]].map(([label, value]) => (
                  <div key={label}><dt className="text-white/60">{label}</dt><dd className="text-lg break-words">{value}</dd></div>
                ))}
              </dl>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
