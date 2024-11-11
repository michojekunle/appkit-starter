// RootLayout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { InitialStateProvider } from "@/app/_components/initial-state-provider";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextjs AppKit Starter",
  description: "AppKit by reown",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookies = await headers();
  const cookie = cookies.get("cookie") ?? "";
  return (
    <html lang="en">
      <body className={inter.className}>
        <InitialStateProvider cookie={cookie}>{children}</InitialStateProvider>
      </body>
    </html>
  );
}
