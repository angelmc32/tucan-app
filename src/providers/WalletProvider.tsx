"use client";

import React from "react";
import { PrivyProvider } from "@privy-io/react-auth";
import { PrivyWagmiConnector } from "@privy-io/wagmi-connector";
import { wagmiChainsConfig } from "@/config/wagmiConfig";

const PRIVY_APP_ID = process.env.NEXT_PUBLIC_PRIVY_APP_ID!;

export default function WalletProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrivyProvider
      appId={PRIVY_APP_ID}
      config={{
        loginMethods: ["google", "github", "farcaster", "wallet", "email"],
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
          logo: "https://i.ibb.co/gPVq7Sv/kukulcan-auth.png",
        },
      }}
    >
      <PrivyWagmiConnector wagmiChainsConfig={wagmiChainsConfig}>
        {children}
      </PrivyWagmiConnector>
    </PrivyProvider>
  );
}
