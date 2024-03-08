"use client";
import * as React from "react";

import { NextUIProvider } from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { useRouter } from "next/navigation";

type ProviderProps = {
children: React.ReactNode
}
export default function Providers({ children }: ProviderProps) {
    const router = useRouter()
    return (
      <NextUIProvider navigate={router.push}>
        <NextThemesProvider  enableColorScheme enableSystem attribute="class" defaultTheme="dark">
            {children}
        </NextThemesProvider>
    </NextUIProvider>
  );
}