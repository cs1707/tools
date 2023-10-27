import { tools } from "@/constant/page-info";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-[100vh] p-[16px] max-w-screen-lg mx-auto">
      <section className="my-[32px]">
        <h1 className="font-bold text-[24px] mb-[8px] text-gray-80">
          FE Tools
        </h1>
        <p>A collection of useful tools for developers and creators.</p>
      </section>
      <section className="grid md:grid-cols-4 gap-5">
        {tools.map((tool) => {
          return (
            <Link
              to={tool.path}
              key={tool.path}
              className="p-[16px] border border-solid border-gray-10 rounded-[6px] font-semibold  hover:bg-zinc-50"
            >
              <h2>{tool.title}</h2>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
