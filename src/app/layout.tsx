import "@/styles/globals.css";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "@/trpc/react";

import { Toaster } from "@/components/ui/sonner";

import WalletProvider from "@/providers/WalletProvider";
import Navbar from "@/components/layout/navbar";

import { globalFont, museoModernoFont } from "@/lib/fonts";

export const metadata = {
  title: "tucan",
  description: "plataforma para builders que construyen el futuro",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const NAVBAR_HEIGHT = "64px"; // ~4rem or h-16 (tailwind)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${globalFont.variable} ${museoModernoFont.variable} h-screen`}
      >
        <WalletProvider>
          <TRPCReactProvider cookies={cookies().toString()}>
            <Navbar />
            <main
              className={`min-h-[calc(100svh-${NAVBAR_HEIGHT})] overflow-x-hidden t-[${NAVBAR_HEIGHT}]`}
            >
              {children}
            </main>
            <Toaster position="bottom-center" />
          </TRPCReactProvider>
        </WalletProvider>
      </body>
    </html>
  );
}
