import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ui/theme-provider";
import NavBar from "@/components/NavBar";
import { lazy } from "react";
const LazyRadialGradient = lazy(() => import("@/components/CursorRadialEffect"));

 

export const metadata: Metadata = {
  title: "Portfolio", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased"
        )}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <main>
            {children}
          </main>
          <LazyRadialGradient
            opacity="opacity-50"
            scale="scale-y-150"
            position="-inset-0"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
