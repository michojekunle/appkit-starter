"use client";

import React, { ReactNode } from "react";
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { arbitrum, mainnet, sepolia } from '@reown/appkit/networks'
import { createAppKit } from '@reown/appkit/react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { State, WagmiProvider } from "wagmi";

const queryClient = new QueryClient();

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "AppKit Starter",
  description: "AppKit Starter",
  url: "",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const wagmiAdapter = new WagmiAdapter({
  networks: [mainnet, arbitrum, sepolia],
  projectId,
});

createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, arbitrum, sepolia],
  metadata: metadata,
  projectId,
  features: {
    analytics: true,
  },
  themeMode: "dark",
  themeVariables: {
    "--w3m-accent": "#22c55e",
    // "--w3m-border-radius-master": "20px",
  },
 })

export default function ReownProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
