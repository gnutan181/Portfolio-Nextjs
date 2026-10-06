import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:pb-20">
          <div className="text-center xl:text-left order-2 xl:order-none max-w-[650px]">
            <span className="text-sm md:text-base tracking-widest text-accent">GENAI &amp; AGENTIC AI ENGINEER</span>
            <h1 className="text-[44px] md:text-[64px] leading-[1.1] font-semibold mt-4 mb-6">Hello, I’m <br /><span className="text-accent">Nutan Gupta</span></h1>
            <h2 className="text-xl md:text-2xl font-semibold leading-snug mb-5">I build reliable RAG systems and multi-agent AI applications.</h2>
            <p className="mb-8 text-white/80">Software engineer with 2+ years of production experience across Node.js, TypeScript, backend and full-stack development, combined with hands-on Python GenAI engineering. I build retrieval pipelines, tool-using agents and evaluation-driven AI products using FastAPI, LangChain, LangGraph, MCP, vector databases, guardrails and observability.</p>
            <div className="flex flex-wrap justify-center xl:justify-start gap-4 mb-8">
              <Button asChild size="lg"><Link href="/work">View AI Projects</Link></Button>
              <Button asChild variant="outline" size="lg" className="gap-2"><a href="https://drive.google.com/file/d/1OQlJsjfIyG1f2vZ3AoTPEooGln-6qStE/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Download Resume <FiDownload className="text-xl" /></a></Button>
            </div>
            <Socials containerStyles="flex justify-center xl:justify-start gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500" />
          </div>
          <div className="order-1 xl:order-none shrink-0"><Photo /></div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
