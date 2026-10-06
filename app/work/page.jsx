import { BsArrowUpRight, BsGithub } from "react-icons/bs";
const projects = [
  {
    title: "Career Atlas | AI Career Intelligence Platform",
    description: "An AI career assistant that extracts structured profiles from resumes and GitHub evidence, identifies role-specific skill gaps, generates learning roadmaps and ranks relevant jobs. It uses Pinecone, BM25, RRF and Jina reranking, with confirmation of inferred skills, PII redaction, structured validation and a reproducible 120-case retrieval benchmark.",
    stack: ["React", "FastAPI", "LangChain", "Pinecone", "BM25", "Jina", "Supabase", "AWS Lambda"],
    live: "https://career-atlas.gnutan181.workers.dev/",
    github: "https://github.com/gnutan181/career-atlas",
  },
  {
    title: "PAPEER | Agentic Research Assistant",
    description: "A session-isolated research assistant for PDFs, ArXiv papers, webpages and text sources. It combines dense and BM25 retrieval, RRF fusion, cross-encoder reranking, parent-page context and citations with corrective routing, query rewriting, Tavily fallback and evidence-based abstention.",
    stack: ["Python", "LangGraph", "Qdrant", "BM25", "RRF", "Docling", "Portkey", "DeepEval"],
    live: "https://papeer.streamlit.app",
    github: "https://github.com/gnutan181/Papeer-Ai-Research-Paper-Assistant",
  },
  {
    title: "TripMate AI | Multi-Agent Travel Planner",
    description: "A LangGraph-based travel planner coordinating specialized flight, hotel, weather and itinerary workflows. It integrates external tools through MCP-style interfaces and includes structured outputs, PostgreSQL state, bounded retries and graceful provider fallbacks.",
    stack: ["Python", "FastAPI", "LangGraph", "MCP", "PostgreSQL", "Groq", "Tavily", "AviationStack"],
    live: "https://tripmate-ai-a-multi-agent-travel-planner-91vr.onrender.com/",
    github: "https://github.com/gnutan181/TripMate-AI---A-Multi-Agent-Travel-Planner-with-LangGraph",
  },
  {
    title: "RuPay Lender | Fintech Platform",
    description: "A production fintech platform supporting loans, insurance, payments, document workflows and role-based administration. Built secure REST APIs, Redis caching and scalable backend services using the MERN stack, AWS and Nginx.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Redis", "AWS", "Nginx"],
    live: "https://www.rupaylender.com/",
  },
];
export default function Work() {
  return (
    <section className="min-h-[80vh] py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-10">Featured projects</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article key={project.title} className="bg-[#232329] rounded-xl p-6 md:p-8 flex flex-col gap-6 border border-white/10 hover:border-accent/50 transition-colors">
              <span className="text-5xl font-extrabold text-outline text-transparent" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="text-2xl font-semibold leading-snug">{project.title}</h2>
              <p className="text-white/70">{project.description}</p>
              <ul aria-label="Technology stack" className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map((technology) => <li key={technology} className="text-sm text-accent bg-white/5 px-3 py-1 rounded-full">{technology}</li>)}
              </ul>
              {(project.live || project.github) && (
                <div className="flex flex-wrap gap-6 border-t border-white/10 pt-5">
                  {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent hover:underline">Live Application <BsArrowUpRight aria-hidden="true" /></a>}
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent hover:underline">GitHub <BsGithub aria-hidden="true" /></a>}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
