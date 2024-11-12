"use client";

import React, { useEffect, useState } from "react";
import { cookieToInitialState, State } from "wagmi";
import { config } from "@/config";
import Web3ModalProvider from "@/context";
import { Loader } from "lucide-react";

export function InitialStateProvider({
  cookie,
  children,
}: {
  cookie: string;
  children: React.ReactNode;
}) {
  const [initialState, setInitialState] = useState<State | undefined>(
    undefined
  );

  useEffect(() => {
    async function fetchInitialState() {
      try {
        const initialState = await cookieToInitialState(config, cookie); // Ensure the function is awaited
        setInitialState(initialState);
      } catch (error) {
        console.error("Error fetching initial state:", error);
        // Optionally handle the error state here, such as setting initialState to a default value
      }
    }
    fetchInitialState();
  }, [cookie]);

  if (!initialState)
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <Loader className="text-4xl w-16 h-16 animate-spin" />
      </div>
    );

  return (
    <Web3ModalProvider initialState={initialState}>
      {children}
    </Web3ModalProvider>
  );
}
