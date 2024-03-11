import Image from "next/image";
import avatar from "@/public/avatar2.png";
import Link from "next/link";
// import ScrollingBanner from "@/components/ScrollingBanner";
import { Montserrat } from "next/font/google";
import {
  backendSkills,
  emplHistory,
  frontendSkills,
  otherSkills,
  portfolio,
} from "@/utils";
import { AnchorIcon } from "@/icons";
import { onContactMeFormSubmit } from "@/lib/actions";
import { cookies } from "next/headers";
import contactme from "@/public/creationofadam.png";
import dynamic from "next/dynamic";
import Loading from "@/components/Loading";
const montserrat = Montserrat({
  weight: "500",
  style: ["normal"],
  subsets: ["latin"],
});
const ScrollingBanner = dynamic(() => import("@/components/ScrollingBanner"), {
  loading: () => <Loading/>,
});
export default function Home() {
  const cookieStore = cookies();
  const sent = cookieStore.get("sent");
  return (
    <section className="relative container flex flex-col gap-[100px]">
      {/* Hero Section */}
      <div className="flex max-sm:flex-col justify-between items-start h-auto">
        <div className="w-1/2 max-sm:w-full h-full flex flex-col justify-start items-start max-sm:gap-4 gap-3">
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
                I love creating applications that are user-friendly, intuitive
                and delightful
              </p>
              <p className="leading-relaxed">
                I was a student at{" "}
                <Link
                  target="_blank"
                  className=" tracking-wide font-semibold  underline underline-offset-1"
                  href="https://www.google.com/search?q=https://itcbootcamp.com">
                  ITCBootcamp
                </Link>{" "}
                company where I spent 3 months learning the fundamentals of
                front-end development. After completing the courses, I also
                worked at ITCBootcamp where my role was participation in project
                development as a junior developer.
              </p>
              <p className="leading-relaxed">
                Through these experiences, I had the opportunity to work with
                small and large, specialized and cross-functional teams across
                different time zones and developed a working style that leans
                towards flexibility, clarity and collaboration.
              </p>
            </div>
            <div className="flex justify-start max-sm:justify-center items-center gap-5 mt-5">
              <Link
                className=" flex animate-pulse hover:bg-gray-500/50 hover:scale-110 transition-transform  border p-4"
                href={"/portfolio"}>
                View Portfolio
                <AnchorIcon />
              </Link>
              <Link
                className=" flex animate-pulse hover:bg-gray-500/50 hover:scale-110 transition-transform   border p-4"
                target="_blank"
                href={"https://github.com/pkvaygon"}>
                View GitHub
                <AnchorIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/2 max-sm:w-full max-sm:h-[265px] h-[529px] flex justify-center max-sm:items-center items-start">
          <div className="shadow-2xl max-sm:mt-[40px] max-sm:w-full max-sm:h-[300px] w-[400px] h-full overflow-hidden rounded-[50%] relative">
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
      {/* ScrollingBar */}
      <div className="w-full ">
        <div className="flex flex-col gap-10 justify-start items-start">
          <ScrollingBanner />
        </div>
      </div>
      {/* skills */}
      <div className=" flex flex-col justify-start items-start gap-3">
        <div>
          <h3 className="max-sm:text-base text-3xl">
            My evolving skillset<span className="text-red-500">*</span>
          </h3>
        </div>
        <div className="w-full flex  flex-col gap-10 bg-gradient-to-r from-transparent via-transparent to-teal-400 dark:to-teal-100/5">
          <div className="w-full max-sm:gap-2 max-sm:flex-col flex justify-between items-start">
            <h4
              className={`text-6xl ${montserrat.className} max-sm:w-full max-sm:text-3xl w-1/2`}>
              01 - frontend
            </h4>
            <div className="w-1/2 max-sm:w-full">
              <ul className="grid grid-cols-2 gap-2 grid-flow-row">
                {frontendSkills.map((skill) => (
                  <li className="text-pretty list-disc list-inside" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full max-sm:gap-2 max-sm:flex-col  flex justify-between items-start">
            <h4
              className={`text-6xl ${montserrat.className} max-sm:w-full max-sm:text-3xl w-1/2`}>
              02 - backend
            </h4>
            <div className="w-1/2 max-sm:w-full">
              <ul className="grid grid-cols-2 gap-2 grid-flow-row">
                {backendSkills.map((skill) => (
                  <li className="text-pretty list-disc list-inside" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full max-sm:gap-2 max-sm:flex-col  flex justify-between items-start">
            <h4
              className={`text-6xl ${montserrat.className} max-sm:w-full max-sm:text-3xl w-1/2`}>
              03 - other
            </h4>
            <div className="w-1/2 max-sm:w-full">
              <ul className="grid grid-cols-2 gap-2 grid-flow-row">
                {otherSkills.map((skill) => (
                  <li
                    className="text-ellipsis truncate list-disc list-inside"
                    key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Languages */}
      <div className="flex max-sm:flex-col max-sm:justify-start max-sm:items-start justify-between items-center border-b max-sm:gap-2 gap-5">
        <h3 className="text-3xl">
          Languages<span className="text-red-500">*</span>
        </h3>
        <ul className="flex max-sm:gap-4 justify-start list-disc list-inside gap-8">
          <li>English</li>
          <li>Russian</li>
          <li>Kyrgyz</li>
          <li>Turkish</li>
        </ul>
      </div>
      {/* Education */}
      <div className="flex max-sm:flex-col justify-between border-b items-start gap-2">
        <h3 className="text-3xl">
          Education<span className="text-red-500">*</span>
        </h3>
        <div className="flex flex-col gap-2">
          <Link
            className=" underline flex"
            target="_blank"
            href="https://www.google.com/maps/place/Hainan+College+of+Economics+and+Business/@19.981363,110.51936,15z/data=!4m6!3m5!1s0x3153d09e6f680263:0x564efa34f09cef09!8m2!3d19.981363!4d110.51936!16s%2Fg%2F11cm1hf8_b?entry=ttu">
            Hainan College of Economics and Business <AnchorIcon />
          </Link>
          <p>Bachelor&apos;s degree</p>
          <p>
            <em>Haikou, China</em>
          </p>
        </div>
      </div>
      {/* Portfolio */}
      <div className="flex flex-col gap-5">
        <h3 className="text-3xl">
          Portfolio<span className="text-red-500">*</span>
        </h3>
        <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-3">
          {portfolio.slice(0, 2).map((project) => (
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
                <h4>
                  <Link
                    target="_blank"
                    className="underline underline-offset-4"
                    href={project.href}>
                    {project.label}
                  </Link>
                </h4>
                <p className="text-foreground-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Link
            className="border-3 border-teal-500 dark:border-2 animate-pulse py-2 px-10 text-center"
            href="/portfolio">
            View More
          </Link>
        </div>
      </div>
      {/* Employment History */}
      <div className="flex flex-col gap-5">
        <h3 className="text-3xl">Employment History(as developer)</h3>
        <div className="flex flex-col gap-2">
          {emplHistory.map((empl) => (
            <div
              className="flex dark:border-1 border-4 p-4 flex-col justify-start items-start gap-4"
              key={empl.id}>
              <div>
                <h4>
                  <strong>{empl.label}</strong>
                </h4>
                <h5>{empl.date}</h5>
              </div>
              <div className="flex flex-col gap-3">
                <span>
                  <em>{empl.location}</em>
                </span>
                <p className="text-sm">{empl.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Download CV */}
      <Link
        className=" font-medium flex border-1 justify-center items-center py-4 bg-teal-500/40"
        target="_blank"
        href={
          "https://res.cloudinary.com/dxvf93ovn/image/upload/v1710045880/cv/Askar_Zhaanbaev_-_Frontend_Developer_zqovfg.pdf"
        }>
        DownLoad CV <AnchorIcon />
      </Link>
      {/* contact form */}
      <div
        id="contactme"
        className="scroll-mt-[100px] max-sm:w-full flex max-sm:flex-col gap-4 w-full p-4 bg-slate-500/10 dark:bg-gray-500/10">
        <div className=" max-sm:w-full w-1/2">
          <h3 className="text-2xl">Contact me</h3>
          {sent ? (
            <div className="w-full h-[400px] flex justify-center items-center">
              <h5 className="text-green-500 p-3">
                Your Message has been sent!
              </h5>
            </div>
          ) : (
            <form
              action={onContactMeFormSubmit}
              className="flex flex-col gap-3 w-full">
              <input
                name="from_name"
                className="px-2 py-3 text-sm"
                type="text"
                placeholder="your name"
              />
              <input
                name="email"
                className="px-2 py-3 text-sm"
                type="email"
                placeholder="your email address"
              />
              <input
                name="phone"
                className="px-2 py-3 text-sm"
                type="tel"
                placeholder="phone number"
              />
              <textarea
                name="message"
                className="resize-none min-h-[100px] max-h-max w-full h-auto p-2 min-w-full text-sm"
                placeholder="your message"></textarea>
              <button
                disabled={sent ? true : false}
                className={` py-3 dark:text-white/80 font-medium  ${
                  sent
                    ? "bg-neutral-500 text-lime-500"
                    : "bg-teal-500 text-white"
                }`}
                type="submit">
                {sent ? "Completed!" : "Send Message"}
              </button>
            </form>
          )}
        </div>
        <div className=" max-sm:w-full w-1/2 h-[400px] relative">
          <Image
            className="object-contain"
            fill
            src={contactme}
            alt="contact me"
          />
        </div>
      </div>
    </section>
  );
}
