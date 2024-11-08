import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const interFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loom Clone",
  description: "Loom Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={interFont.className}
      >
        {children}
      </body>
    </html>
  );
}
