"use client";

import { copyToClipboard, truncateAddress } from "@/utils/string";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { usePrivyWagmi } from "@privy-io/wagmi-connector";

import { Button } from "@/components/ui/button";
import { Copy, ExternalLink } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AccountInfoModal } from "@/components/modals/accountInfoModal";
import Link from "next/link";
import { toast } from "sonner";

export default function page() {
  const { login, ready, authenticated } = usePrivy();
  const { wallets } = useWallets();
  const { wallet: activeWallet, setActiveWallet } = usePrivyWagmi();

  if (!ready)
    return (
      <div className="flex h-full w-full flex-col items-center pt-40 xs:pt-48">
        <div className="flex flex-col items-center space-y-4">
          <div aria-label="cargando..." role="status">
            <svg
              className="h-12 w-12 animate-spin fill-primary"
              viewBox="3 3 18 18"
            >
              <path
                className="opacity-20"
                d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
              ></path>
              <path d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
            </svg>
          </div>
          <p>cargando...</p>
        </div>
      </div>
    );

  return (
    <div className="flex h-full w-full flex-col items-center pt-8">
      <h1 className="text-primary">mis cuentas</h1>
      <div className="pb-8 pt-12 md:w-2/3 md:pt-8 lg:w-1/2 xl:w-2/5">
        {authenticated ? (
          <div className="w-full">
            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 px-4 pb-2 pt-4 md:px-6">
                <div className="w-1/2 text-center">
                  <CardTitle>{activeWallet?.walletClientType}</CardTitle>
                  <CardDescription className="">cuenta en uso</CardDescription>
                </div>
                <div className="w-1/2 text-center">
                  <CardTitle>0.69</CardTitle>
                  <CardDescription>ETH</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="px-4 pb-4 text-center">
                <div className="flex items-center justify-around">
                  <span className="flex items-center">
                    dirección pública
                    <Link
                      href={`https://sepolia.arbiscan.io/address/${activeWallet?.address}`}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center"
                    >
                      <button>
                        <ExternalLink className="mb-0.5 ml-2 h-4 w-4" />
                      </button>
                    </Link>
                  </span>
                  <button
                    onClick={() => {
                      copyToClipboard(activeWallet?.address ?? "");
                      toast.info("dirección copiada");
                    }}
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <p className="font-mono text-2xl md:hidden">
                  {truncateAddress(activeWallet?.address, 8, 6)}
                </p>
                <p className="hidden font-mono text-xl md:block">
                  {activeWallet?.address}
                </p>
              </CardContent>
            </Card>
            <div className="py-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>alias</TableHead>
                    <TableHead>dirección</TableHead>
                    <TableHead>estatus</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {wallets.map((wallet) => (
                    <TableRow key={wallet.address}>
                      <TableCell
                        className={
                          wallet.address === activeWallet?.address
                            ? "font-semibold text-primary"
                            : ""
                        }
                      >
                        {wallet.walletClientType}
                      </TableCell>
                      <TableCell className="font-mono">
                        {truncateAddress(wallet.address)}
                      </TableCell>
                      <TableCell className="text-center">
                        {wallet.address === activeWallet?.address ? (
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full border-2 border-primary"
                            onClick={() => setActiveWallet(wallet)}
                          >
                            <span className="font-bold text-primary">
                              en uso
                            </span>
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full"
                            onClick={() => setActiveWallet(wallet)}
                          >
                            cambiar
                          </Button>
                        )}
                      </TableCell>
                      <TableCell className="px-0">
                        <AccountInfoModal wallet={wallet} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        ) : (
          <div className="flex w-full justify-center">
            <div className="flex w-2/3 flex-col items-center space-y-4">
              <h4 className="text-center">
                debes autenticarte para ver tus cuentas
              </h4>
              <Button variant="default" className="text-lg" onClick={login}>
                entrar
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
