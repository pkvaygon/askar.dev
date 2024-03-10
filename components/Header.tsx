"use client";

import type { NavbarProps } from "@nextui-org/react";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
} from "@nextui-org/react";
import { LogoIcon } from "@/icons";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { navLinks } from "@/utils";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
export default function Header(props: NavbarProps) {
  const pathname = usePathname();
  return (
    <Navbar
      position="sticky"
      {...props}
      classNames={{
        base: "py-4 backdrop-filter-none bg-transparent",
        wrapper: "px-0 w-full justify-center bg-transparent",
        item: "hidden md:flex",
      }}
      height="54px">
      <NavbarContent
        className="gap-4 rounded-full border-small border-default-200/20 bg-background/60 px-2 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
        justify="center">
        <NavbarMenuToggle className="ml-2 text-default-400 md:hidden" />
        <NavbarBrand className="mr-2 w-[40vw] md:w-auto md:max-w-fit">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="rounded-full bg-foreground text-background">
            <LogoIcon size={34} width={undefined} height={undefined} />
          </motion.div>
          <span className="ml-2 font-medium md:hidden">ASKAR</span>
        </NavbarBrand>

        {navLinks.map((link) => (
          <NavbarItem key={link.id}>
            <Link
              className={`${
                pathname === link.href
                  ? "text-foreground font-semibold"
                  : "text-default-500"
              }`}
              href={link.href}
              size="sm">
              {link.label}
            </Link>
          </NavbarItem>
        ))}

        <NavbarItem className="ml-2 max-sm:hidden">
          <Button radius="full" variant="flat">
            Login
          </Button>
        </NavbarItem>
        <NavbarItem className="ml-2 !flex">
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu
        className="top-[calc(var(--navbar-height)/2)] mx-auto mt-16 max-h-[40vh] max-w-[80vw] rounded-large border-small border-default-200/20 bg-background/60 py-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
        motionProps={{
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: {
            ease: "easeInOut",
            duration: 0.2,
          },
        }}>
        {navLinks.map((link) => (
          <NavbarMenuItem key={link.id}>
            <Link
              className={`${
                pathname === link.href
                  ? "text-foreground font-semibold"
                  : "text-default-500"
              }`}
              href={link.href}
              size="sm">
              {link.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <ThemeSwitcher />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
