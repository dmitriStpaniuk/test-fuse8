import type { Metadata } from "next";
import { Montserrat, Fira_Sans } from "next/font/google";
import "./globals.css";

const firaSans = Fira_Sans({
  weight: ['400', '700'],
  variable: "--font-fira-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DemoFuse8",
  description: "DemoFuse8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${firaSans.variable} mx-auto w-full min-w-[320px] max-w-[1920px] px-4 antialiased md:px-6 xl:px-8`}
      >
        {children}
      </body>
    </html>
  );
}
