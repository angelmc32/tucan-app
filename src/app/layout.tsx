import "@/styles/globals.css";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "@/trpc/react";

import { globalFont } from "@/lib/fonts";

import Navbar from "@/components/layout/navbar";

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
      <body className={`font-sans ${globalFont.variable} h-screen`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <Navbar />
          <main
            className={`min-h-[calc(100vh-${NAVBAR_HEIGHT})] overflow-x-hidden overflow-y-scroll`}
          >
            {children}
          </main>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
