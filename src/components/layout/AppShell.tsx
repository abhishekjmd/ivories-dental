"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const routesWithoutGlobalChrome = new Set<string>();

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideGlobalChrome = pathname
    ? routesWithoutGlobalChrome.has(pathname)
    : false;

  return (
    <>
      {!hideGlobalChrome && <Header />}
      {children}
      {!hideGlobalChrome && <Footer />}
    </>
  );
}
