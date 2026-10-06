"use client";
import CountUp from "react-countup";
const stats = [
  { num: 2, suffix: "+", text: "Years of Software Engineering" },
  { num: 3, text: "Flagship GenAI Projects" },
  { num: 120, text: "Retrieval Benchmark Cases" },
  { num: 2, text: "Production Engineering Roles" },
];
export default function Stats() {
  return (
    <section className="pt-12 pb-12 xl:pt-0">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {stats.map((item) => (
          <div key={item.text} className="flex gap-4 items-center justify-center xl:justify-start">
            <CountUp end={item.num} suffix={item.suffix || ""} duration={2} className="text-4xl xl:text-5xl font-extrabold" />
            <p className="max-w-[160px] leading-snug text-white/80">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
