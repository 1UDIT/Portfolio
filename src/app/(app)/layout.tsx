import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"; 
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/NavBar";
import CursorRadialEffect from "@/components/CursorRadialEffect";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative snap-y snap-mandatory">
            <NavBar />
            {children}
          </main>
          <CursorRadialEffect />
        </ThemeProvider>
      </body>
    </html>
  );
}
