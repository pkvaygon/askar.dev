import { GmailIcon, LogoIcon, PhoneIcon, TelegramIcon } from "@/icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex flex-col items-center justify-center gap-2 md:order-2 md:items-start">
          <Link
            className="flex gap-2 justify-center items-center underline underline-offset-1"
            href="tel:+18478468245">
            <PhoneIcon /> +18478468245
          </Link>
          <Link
            className="flex gap-2 justify-center items-center underline underline-offset-1"
            href="mailto:joelfrontend@gmail.com?subject=Front End Developer&body=Hi Askar!">
            <GmailIcon className={""} />
            joelfrontend@gmail.com
          </Link>
          <Link
            className="flex gap-2 justify-center items-center underline underline-offset-1"
            href="https://t.me/joelmiller1643">
            <TelegramIcon />
            Telegram
          </Link>
        </div>
        <div className="mt-4 md:order-1 md:mt-0">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <div className="flex items-center justify-start gap-1">
              <LogoIcon width={24} height={24} />
              <span className="text-small font-medium">Askar</span>
            </div>
            <span className="border-none px-0 text-default-500" color="success">
              All systems operational
            </span>
          </div>
          <p className="text-center text-tiny text-default-400 md:text-start">
            &copy; 2024 Askar Dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
