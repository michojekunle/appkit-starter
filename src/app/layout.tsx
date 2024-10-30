// RootLayout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { InitialStateProvider } from "@/app/_components/InitialStateProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AppKit Starter",
  description: "AppKit by reown",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <InitialStateProvider>{children}</InitialStateProvider>
      </body>
    </html>
  );
}
