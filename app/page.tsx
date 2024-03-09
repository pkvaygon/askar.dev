import Image from "next/image";
import avatar from "@/public/avatar2.png";
import Link from "next/link";
import ScrollingBanner from "@/components/ScrollingBanner";
export default function Home() {
  return (
    <section className="relative container">
      <div className="mt-[40px] flex justify-between items-start max-sm:h-[300px] h-[400px]">
        <div className="w-1/2 h-full flex flex-col justify-start items-start max-sm:gap-4 gap-10">
          <h6 className=" max-sm:text-sm max-sm:text-start text-center w-full">
            HELLO THERE, WELCOME TO MY WEBSITE
          </h6>
          <div className="h-1/2 w-full flex flex-col gap-4">
            <h1 className=" max-sm:text-medium text-5xl tracking-wide font-semibold">
              I&apos;m Askar Zhaanbaev
            </h1>
            <h2 className=" max-sm:text-medium text-5xl">
              A{" "}
              <span className="text-teal-500 font-semibold">
                Front-End Developer
              </span>
            </h2>
            <div className="flex justify-start items-center gap-5 mt-5">
              <Link
                className="animate-pulse hover:bg-gray-500/50 hover:scale-110 transition-transform  border p-4"
                href={"#"}>
                See Portfolio
              </Link>
              <Link
                className=" animate-pulse hover:bg-gray-500/50 hover:scale-110 transition-transform   border p-4"
                href={"#"}>
                Contact Me
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-center max-sm:items-center items-start">
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

      <div>
        
      </div>
    </section>
  );
}
