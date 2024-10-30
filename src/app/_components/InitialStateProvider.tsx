"use client";
import React, { useEffect, useState } from "react";
import { cookieToInitialState } from "wagmi";
import { config } from "@/config";
import Web3ModalProvider from "@/context";
import { headers } from "next/headers";

export function InitialStateProvider({ children }: { children: React.ReactNode }) {
  const [initialState, setInitialState] = useState<any | null | undefined>(null);

  useEffect(() => {
    async function fetchInitialState() {
      const cookies = await headers();
      const initialState = cookieToInitialState(config, cookies.get("cookie") ?? "");
      setInitialState(initialState);
    }
    fetchInitialState();
  }, []);

  if (!initialState) return null; // Or a loading spinner

  return <Web3ModalProvider initialState={initialState}>{children}</Web3ModalProvider>;
}
