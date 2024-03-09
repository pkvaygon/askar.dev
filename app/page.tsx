import Image from "next/image";
import avatar from "@/public/avatar2.png";
import Link from "next/link";
import ScrollingBanner from "@/components/ScrollingBanner";
import { itcbootcampLink } from "@/utils";
export default function Home() {
  return (
    <section className="relative container">
      <div className=" flex justify-between items-start max-sm:h-[300px] h-auto">
        <div className="w-1/2 h-full flex flex-col justify-start items-start max-sm:gap-4 gap-3">
          <h6 className=" max-sm:text-sm max-sm:text-start text-center w-full">
            HELLO THERE, WELCOME TO MY WEBSITE
          </h6>
          <div className="h-1/2 w-full flex flex-col gap-4">
            <h1 className=" max-sm:text-medium text-4xl tracking-wide font-semibold">
              I&apos;m Askar Zhaanbaev
            </h1>
            <h2 className=" max-sm:text-medium text-4xl">
              A{" "}
              <span className="text-teal-500 font-semibold">
                Front-End Developer
              </span>
            </h2>
            <div className=" flex flex-col gap-3 max-sm:text-xs leading-loose text-sm font-normal">
            <p className="leading-relaxed">
              I love create applications that are user-friendly, intuitive and
              delightly
            </p>
            <p className="leading-relaxed">
              I was student at{" "}
              <Link
                target="_blank"
                className=" tracking-wide font-semibold  underline underline-offset-1"
                href={itcbootcampLink}>
                ITCBootcamp
              </Link>{" "}
              company where I spent 3 months learning the fundamentals of
              front-end development. After graduating courses I also worked at
              ITCBootcamp where my role was participation in project development
              as a junior developer.
            </p>
            <p className="leading-relaxed">
              Through these experiences, I had the opportunity to work with
              small and large, specialized and cross-functional teams across
              different time zones and developed a working style that leans
              towards flexibility, clarity and collaboration.
            </p>
          </div>
            <div className="flex justify-start items-center gap-5 mt-5">
              <Link
                className="animate-pulse hover:bg-gray-500/50 hover:scale-110 transition-transform  border p-4"
                href={"#"}>
                View Portfolio
              </Link>
              <Link
                className=" animate-pulse hover:bg-gray-500/50 hover:scale-110 transition-transform   border p-4"
                href={"#"}>
                View GitHub
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-[529px] flex justify-center max-sm:items-center items-start">
          <div className="shadow-2xl max-sm:w-[200px] max-sm:h-[200px] w-[400px] h-full overflow-hidden rounded-[50%] relative">
            <Image
              fill
              priority
              src={avatar}
              alt="Askar Zhaanbaev"
              className="object-contain object-center"
              sizes="(max-width: 400px) 100vw, 400px"
            />
          </div>
        </div>
      </div>
      <div className="w-full mt-[100px]">
        <div className="flex flex-col gap-10 justify-start items-start">
          <ScrollingBanner />
        </div>
      </div>
    </section>
  );
}
