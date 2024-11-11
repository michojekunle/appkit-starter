"use client";

import React, { useEffect, useState } from "react";
import { cookieToInitialState, State } from "wagmi";
import { config } from "@/config";
import Web3ModalProvider from "@/context";

export function InitialStateProvider({
  cookie,
  children,
}: {
  cookie: string
  children: React.ReactNode;
}) {
  const [initialState, setInitialState] = useState<State | undefined>(
    undefined
  );

  useEffect(() => {
    async function fetchInitialState() {      
      const initialState = cookieToInitialState(
        config,
        cookie
      );
      setInitialState(initialState);
    }
    fetchInitialState();
  }, []);

  if (!initialState) return null; // Or a loading spinner

  return (
    <Web3ModalProvider initialState={initialState}>
      {children}
    </Web3ModalProvider>
  );
}
