import { portfolio } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
    return (
        <>
            <h1 className="text-5xl font-bold drop-shadow-2xl text-center mb-10">My Portfolio</h1>
        <section className="container gap-3 max-sm:grid-cols-1 grid grid-cols-3 grid-flow-row">
      {portfolio.map((project) => (
            <div
              className="w-full flex flex-col shadow-slate-500 shadow-2xl overflow-hidden"
              key={project.id}>
              <div className="w-full h-[300px] relative">
                <Image
                  className="object-cover object-top"
                  src={project.image}
                  fill
                  loading="lazy"
                  alt={project.label}
                />
              </div>
              <div className="h-auto flex flex-col gap-2 p-2">
                  <div className="flex justify-between items-center">
                <h4>
                  <Link
                    target="_blank"
                    className="underline underline-offset-4"
                    href={project.href}>
                    {project.label}
                  </Link>
                </h4>
                      <span className={`${project.status === "live" ? "bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" : "animate-pulse  bg-teal-400/35"} rounded-3xl px-4 py-2 text-sm`}>{project.status}</span>
                  </div>
                <p className="text-foreground-400">{project.description}</p>
              </div>
            </div>
          ))}
            </section>
            </>
            )
}
