"use client";
import "./globals.css";
import { ReactNode, useState } from "react";
import { Inter } from "next/font/google";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js 13.4.19 App Router TS",
  description: "Belajar Next.js App Router + TypeScript + ESLint + Prettier",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  const [state, setState] = useState(0);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        <div>Layout {state}</div>
        <button onClick={() => setState(state + 1)}>Klik</button>
        {children}
      </body>
    </html>
  );
}
