"use client";
import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
import { Metadata } from "next";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const disableNavbar = ["/login", "/register"];

// export const metadata: Metadata = {
//   title: "NextJS App Router",
//   description: "Generate by NextJS",
// };

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <title>Belajar Next JS</title>
      <body className={inter.className}>
        {!disableNavbar.includes(pathname) && <Navbar />}

        {/* <h1>Layout Home {state}</h1>
        <button onClick={() => setState(state + 1)}>Klik</button> */}
        {children}
      </body>
    </html>
  );
}
