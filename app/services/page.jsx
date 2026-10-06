import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
const services = [
  { title: "RAG & Knowledge Systems", description: "Build grounded AI applications using hybrid retrieval, dense and BM25 search, RRF fusion, metadata filtering, reranking, citations and corrective retrieval workflows." },
  { title: "Agentic AI & Multi-Agent Workflows", description: "Design LangGraph workflows with specialized agents, tool calling, MCP integrations, typed state, structured outputs, human approval and failure recovery." },
  { title: "LLM Evaluation & Guardrails", description: "Evaluate retrieval and generation quality using reproducible datasets, RAGAS, DeepEval and custom metrics. Add prompt-injection boundaries, schema validation, tracing and safety controls." },
  { title: "AI Backend & Product Engineering", description: "Develop scalable AI APIs and full-stack applications using Python, FastAPI, Node.js, TypeScript, React, PostgreSQL, Redis, Docker and AWS." },
];
export default function Services() {
  return (
    <section className="min-h-[80vh] py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[60px]">
        {services.map((service, index) => (
          <article key={service.title} className="flex flex-col gap-6 group border-b border-white/20 pb-8">
            <div className="flex justify-between items-center">
              <span className="text-5xl font-extrabold text-outline text-transparent">{String(index + 1).padStart(2, "0")}</span>
              <Link href="/work" aria-label={`View projects for ${service.title}`} className="w-16 h-16 rounded-full bg-white group-hover:bg-accent transition-all flex justify-center items-center hover:-rotate-45"><BsArrowDownRight className="text-primary text-3xl" /></Link>
            </div>
            <h2 className="text-3xl lg:text-[40px] font-bold leading-tight group-hover:text-accent transition-colors">{service.title}</h2>
            <p className="text-white/60">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
