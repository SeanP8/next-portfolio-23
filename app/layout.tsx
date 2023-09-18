// "use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sean | Personal Portfolio",
  description: "I am a full-stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <div className="bg-[#283558c7] -z-[11] absolute top-[-1rem] md:top-[30rem]  md:left-[16rem] left-[21rem] h-[22rem] md:w-[62rem] w-[60rem] rounded-b-[50rem] blur-md"></div> */}
          <div className="bg-[#4e65a49c] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
          <div className="bg-[#d7e0fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
          {/* <div className="bg-transparent border-solid border-2 border-[#d7f154] -z-10 absolute top-[-1rem] left-[19rem] h-[35rem] w-[80rem] rounded-b-[50rem]"></div> */}

          <ActiveSectionContextProvider>
            <Header />
            {children}
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
